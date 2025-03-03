
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

// Create a transporter using privateemail.com SMTP settings with improved configuration
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: "josh@echoflowlabs.com",
    pass: process.env.EMAIL_PASSWORD,
  },
  connectionTimeout: 5000, // Reduced timeout for faster failure detection
  greetingTimeout: 5000,
  socketTimeout: 5000,
  debug: true,
  tls: {
    rejectUnauthorized: false // This helps with some SSL certificate issues
  }
});

// Verify the transporter connection before using it
async function verifyTransporter() {
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    console.error("Failed to verify email transporter:", error);
    return false;
  }
}

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
        message: "Email configuration error. Please contact the administrator.",
        error: "Missing email password configuration"
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

    // HTML version of the email
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

    // Mail options
    const mailOptions = {
      from: `"EchoFlow Labs Website" <josh@echoflowlabs.com>`,
      to: "josh@echoflowlabs.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      html: htmlContent
    };

    console.log("Attempting to send email...");
    
    // First verify the transporter
    const isTransporterValid = await verifyTransporter();
    
    if (!isTransporterValid) {
      throw new Error("Email service connection failed during verification");
    }
    
    // Send the email with a timeout
    const emailSendPromise = transporter.sendMail(mailOptions);
    
    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Email sending timed out after 10 seconds"));
      }, 10000);
    });
    
    // Race the email sending against the timeout
    const info = await Promise.race([emailSendPromise, timeoutPromise]) as nodemailer.SentMessageInfo;
    
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
    
    // Provide a more specific error message based on the error type
    let errorMessage = "Failed to send message. Please try again later.";
    let errorDetail = error.message || "Unknown error";
    
    if (error.code === "ETIMEDOUT" || error.message?.includes("timed out")) {
      errorMessage = "Connection to email server timed out. This is likely due to network restrictions.";
      errorDetail = "Consider using a different email service provider or contact the site administrator.";
    } else if (error.code === "EAUTH") {
      errorMessage = "Email authentication failed.";
      errorDetail = "Please check your email credentials.";
    } else if (error.code === "ESOCKET") {
      errorMessage = "Network connection issue when contacting email server.";
      errorDetail = "This may be due to firewall or network restrictions.";
    }
    
    return res.status(500).json({ 
      success: false, 
      message: errorMessage,
      error: errorDetail
    });
  }
}
