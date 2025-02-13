
import { toast } from "sonner"

interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        to: "josh@echoflowlabs.com"
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.message || "Failed to send email")
    }

    toast.success("Message sent successfully! We'll get back to you soon.")
    return true
  } catch (error) {
    console.error("Email Error:", error)
    toast.error(error instanceof Error ? error.message : "Failed to send message. Please try again.")
    return false
  }
}
