
import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"
import useLanguageStore from "@/store/translation.store"
import { translations } from "@/constants/translations"

interface FormData {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const { toast } = useToast()
  const { lang } = useLanguageStore();
  const t = translations.contact[lang]

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please fill in all fields.",
      })
      setIsSubmitting(false)
      return
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY,
      )

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        variant: "destructive",
        title: "Message failed to send",
        description: "Please try again later or contact me directly via email.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="flex w-full py-16 px-4 dark:bg-gradient-to-b  dark:from-gray-900 dark:to-black">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <div>
           <div className="inline-flex items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-own-purple to-transparent"></div>
            <span className="text-xs font-semibold tracking-widest text-own-purple/80 uppercase">
              {lang === "en" ? "Contact me" : 'Me joindre'}
            </span>
          </div>
          <h1 className="font-bold text-5xl sm:text-6xl text-primary">
            Contact<span className="text-purple-600">.</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            {t.description}
          </p>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">{t.description1}</CardTitle>
            <CardDescription className="text-center">
            {t.description2}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                {t.name}
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.placeholderName}
                  className="w-full"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                {t.email}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.placeholderEmail}
                  className="w-full"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                {t.message}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.placeholderMessage}
                  className="w-full min-h-[150px]"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : 
                  //@ts-ignore
                  t.send
                }
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Contact
