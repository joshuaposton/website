
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  businessName: string;
  message: string;
};

type ResponseData = {
  success: boolean;
  message: string;
};

// Create a transporter using privateemail.com SMTP settings
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "josh@echoflowlabs.com", // Your privateemail.com email
    pass: process.env.EMAIL_PASSWORD, // Your email password stored in .env.local
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ 
      success: false, 
      message: "Method not allowed" 
    });
  }

  try {
    const { name, email, businessName, message } = req.body as ContactFormData;

    // Basic validation
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
        message: "Email configuration error. Please contact the administrator."
      });
    }

    // Format the email content
    const emailContent = `
Name: ${name}
Email: ${email}
Business: ${businessName || "Not provided"}

Message:
${message}
    `;

    // Send email using nodemailer
    const mailOptions = {
      from: `"EchoFlow Labs Website" <josh@echoflowlabs.com>`,
      to: "josh@echoflowlabs.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      html: `
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
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: "Message sent successfully" 
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Failed to send message. Please try again later." 
    });
  }
}
