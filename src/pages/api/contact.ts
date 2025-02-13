
import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { name, email, subject, message, to } = req.body

    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      const missingVars = {
        SMTP_HOST: !process.env.SMTP_HOST,
        SMTP_PORT: !process.env.SMTP_PORT,
        SMTP_USER: !process.env.SMTP_USER,
        SMTP_PASS: !process.env.SMTP_PASS
      }
      console.error("Missing SMTP configuration:", missingVars)
      return res.status(500).json({ 
        message: "Server configuration error - Missing SMTP settings",
        missing: Object.keys(missingVars).filter(key => missingVars[key as keyof typeof missingVars])
      })
    }

    const transportConfig = {
      host: "mail.privateemail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    }

    console.log("Attempting to create transport with:", {
      host: transportConfig.host,
      port: transportConfig.port,
      secure: transportConfig.secure,
      user: process.env.SMTP_USER ? "Present" : "Missing"
    })

    const transporter = nodemailer.createTransport(transportConfig)

    try {
      console.log("Verifying SMTP connection...")
      await transporter.verify()
      console.log("SMTP connection verified successfully")
    } catch (verifyError) {
      console.error("SMTP Connection Error:", verifyError)
      return res.status(500).json({ 
        message: "Failed to connect to email server", 
        error: verifyError instanceof Error ? verifyError.message : "Unknown error",
        tip: "Please check your SMTP credentials and ensure they are correctly set in .env.local"
      })
    }

    const mailOptions = {
      from: {
        name: "EchoFlow Labs",
        address: process.env.SMTP_USER
      },
      replyTo: email,
      to: to,
      subject: `New Contact Form: ${subject}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a56db;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      `
    }

    try {
      console.log("Attempting to send email...")
      await transporter.sendMail(mailOptions)
      console.log("Email sent successfully")
      return res.status(200).json({ message: "Email sent successfully" })
    } catch (sendError) {
      console.error("Email Send Error:", sendError)
      return res.status(500).json({ 
        message: "Failed to send email",
        error: sendError instanceof Error ? sendError.message : "Unknown error",
        tip: "This might be due to incorrect SMTP settings or network issues"
      })
    }
  } catch (error) {
    console.error("General Error:", error)
    return res.status(500).json({ 
      message: "Server error",
      error: error instanceof Error ? error.message : "Unknown error"
    })
  }
}
