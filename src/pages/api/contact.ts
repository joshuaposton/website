
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

type ContactFormData = {
  name: string;
  email: string;
  businessName: string;
  message: string;
};

type ResponseData = {
  success: boolean;
  message: string;
  error?: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "josh@echoflowlabs.com",
    pass: process.env.EMAIL_PASSWORD,
  },
  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 5000,
});

async function verifyTransporter() {
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    console.error("Failed to verify email transporter:", error);
    return false;
  }
}

async function saveEmailLocally(mailOptions: any) {
  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `contact-form-${timestamp}.json`;
    const filePath = path.join(process.cwd(), "logs", fileName);
    
    const logsDir = path.join(process.cwd(), "logs");
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.writeFileSync(
      filePath,
      JSON.stringify(mailOptions, null, 2)
    );
    
    console.log(`Email saved locally to ${filePath}`);
    return true;
  } catch (error) {
    console.error("Failed to save email locally:", error);
    return false;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ 
      success: false, 
      message: "Method not allowed" 
    });
  }

  try {
    const { name, email, businessName, message } = req.body as ContactFormData;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Name, email, and message are required" 
      });
    }

    if (!process.env.EMAIL_PASSWORD) {
      console.error("EMAIL_PASSWORD environment variable is not set");
      return res.status(500).json({
        success: false,
        message: "Email configuration error. Please contact the administrator.",
        error: "Missing email password configuration"
      });
    }

    const emailContent = `
Name: ${name}
Email: ${email}
Business: ${businessName || "Not provided"}

Message:
${message}
    `;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${businessName || "Not provided"}</p>
        <div style="margin-top: 20px;">
          <h3 style="color: #3b82f6;">Message:</h3>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"EchoFlow Labs Website" <josh@echoflowlabs.com>`,
      to: "josh@echoflowlabs.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      html: htmlContent
    };

    console.log("Attempting to send email...");
    
    const isTransporterValid = await verifyTransporter();
    let emailSent = false;
    
    if (isTransporterValid) {
      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
        console.log("Message ID:", info.messageId);
        emailSent = true;
      } catch (error) {
        console.error("Failed to send email via SMTP:", error);
      }
    }
    
    if (!emailSent) {
      console.log("SMTP email sending failed. Saving email locally for development...");
      await saveEmailLocally(mailOptions);
      
      if (process.env.NODE_ENV === "development") {
        return res.status(200).json({
          success: true,
          message: "Message saved locally for development. SMTP connection failed.",
          error: "Email not sent via SMTP due to connection issues. This is normal in local development."
        });
      } else {
        throw new Error("Failed to send email via SMTP");
      }
    }

    return res.status(200).json({ 
      success: true, 
      message: "Message sent successfully" 
    });
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    
    if (error.code) console.error("Error code:", error.code);
    if (error.command) console.error("Failed command:", error.command);
    if (error.response) console.error("Server response:", error.response);
    
    let errorMessage = "Failed to send message. Please try again later.";
    let errorDetail = error.message || "Unknown error";
    
    if (error.code === "ETIMEDOUT" || error.message?.includes("timed out")) {
      errorMessage = "Connection to email server timed out. Please try again.";
      errorDetail = "The server took too long to respond.";
    } else if (error.code === "EAUTH") {
      errorMessage = "Email authentication failed.";
      errorDetail = "Please check your email credentials.";
    } else if (error.code === "ESOCKET") {
      errorMessage = "Network connection issue when contacting email server.";
      errorDetail = "Please check your internet connection and try again.";
    }
    
    return res.status(500).json({ 
      success: false, 
      message: errorMessage,
      error: errorDetail
    });
  }
}
