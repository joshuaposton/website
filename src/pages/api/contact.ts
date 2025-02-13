
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
      console.error("Missing SMTP configuration")
      return res.status(500).json({ message: "Server configuration error" })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error("SMTP Connection Error:", verifyError)
      return res.status(500).json({ message: "Failed to connect to email server" })
    }

    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        replyTo: `${name} <${email}>`,
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
        `,
      })
      res.status(200).json({ message: "Email sent successfully" })
    } catch (sendError) {
      console.error("Email Send Error:", sendError)
      return res.status(500).json({ message: "Failed to send email" })
    }
  } catch (error) {
    console.error("General Error:", error)
    res.status(500).json({ message: "Server error" })
  }
}
