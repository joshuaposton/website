
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

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    toast.success("Message sent successfully!")
    return true
  } catch (error) {
    toast.error("Failed to send message. Please try again.")
    return false
  }
}
