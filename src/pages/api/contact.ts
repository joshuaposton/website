
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
  error?: string;
};

// Create a transporter using privateemail.com SMTP settings
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465, // Changed from 587 to 465 which is the SSL port
  secure: true, // Changed from false to true for SSL
  auth: {
    user: "josh@echoflowlabs.com",
    pass: process.env.EMAIL_PASSWORD,
  },
  connectionTimeout: 10000, // 10 seconds timeout
  greetingTimeout: 10000,
  socketTimeout: 15000,
  debug: true, // Enable debug logging
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

    console.log("Attempting to send email with the following configuration:");
    console.log(`- Host: mail.privateemail.com`);
    console.log(`- Port: 465`);
    console.log(`- Secure: true`);
    console.log(`- Username: josh@echoflowlabs.com`);
    console.log(`- Password length: ${process.env.EMAIL_PASSWORD?.length || 0} characters`);

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

    console.log("Sending email with the following options:", JSON.stringify(mailOptions, null, 2));
    
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    console.log("Message ID:", info.messageId);

    return res.status(200).json({ 
      success: true, 
      message: "Message sent successfully" 
    });
  } catch (error: any) {
    console.error("Error processing contact form:");
    console.error(error);
    
    // Log detailed error information
    if (error.code) console.error("Error code:", error.code);
    if (error.command) console.error("Failed command:", error.command);
    if (error.response) console.error("Server response:", error.response);
    
    return res.status(500).json({ 
      success: false, 
      message: "Failed to send message. Please try again later.",
      error: error.message || "Unknown error"
    });
  }
}
