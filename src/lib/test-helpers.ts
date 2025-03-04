
import { ContactForm } from "@/components/sections/ContactForm";

export async function testContactForm() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    businessName: "Test Business",
    message: "This is a test message to verify the contact form functionality."
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    console.log("Contact form test result:", result);
    
    return {
      success: result.success,
      message: result.message,
      error: result.error
    };
  } catch (error: any) {
    console.error("Contact form test error:", error);
    return {
      success: false,
      message: "Test failed",
      error: error.message
    };
  }
}
