
import type { NextApiRequest, NextApiResponse } from "next";

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

    // In a real implementation, you would use a service like SendGrid, Mailgun, etc.
    // For now, we'll just log the message and return success
    console.log("Contact form submission:");
    console.log(`To: josh@echoflowlabs.com`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Business: ${businessName}`);
    console.log(`Message: ${message}`);

    // Here you would add code to send an email to josh@echoflowlabs.com
    // Example with a service like SendGrid:
    // await sendgrid.send({
    //   to: "josh@echoflowlabs.com",
    //   from: "contact-form@echoflowlabs.com",
    //   subject: `New contact form submission from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nBusiness: ${businessName}\nMessage: ${message}`,
    // });

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
