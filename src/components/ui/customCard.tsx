import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Code2 } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

interface CustomCardProps {
  title?: string
  description?: string
  longDescription?: string
  imageUrl?: string
  githubUrl?: string
  demoUrl?: string
  techno?: string[]
  featured?: boolean
}

// Helper function to conditionally join class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

export const CustomCard = ({
  title = "Mon Projet Incroyable",
  description = "Ceci est une description de mon projet incroyable. Il fait des choses vraiment cool et résout des problèmes importants.",
  longDescription,
  imageUrl = "/placeholder.svg?height=400&width=600",
  githubUrl = "https://github.com",
  demoUrl,
  techno = ["php", "js", "css", "html"],
  featured = false,
}: CustomCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const fullDescription = longDescription || description

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="h-full"
      >
        <Card
          className={cn(
            "w-full h-full overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl shadow-md transition-all duration-300",
            featured ? "ring-2 ring-purple-500 ring-offset-2 dark:ring-offset-gray-950" : "",
            isHovered ? "shadow-xl" : "",
          )}
        >

          <div className="relative w-full h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out"
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />

            {featured && (
              <div className="absolute top-3 right-3 z-20">
                <Badge className="bg-purple-600 hover:bg-purple-700">Featured</Badge>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
          </div>

          <CardContent className="p-5">
            <p className="text-gray-600 dark:text-gray-300 line-clamp-3 text-sm">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {techno.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="p-5 pt-0 flex justify-between items-center">
            <div className="flex gap-2">
              {githubUrl && (
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View GitHub repository">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}

              {demoUrl && (
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>

            <Button variant="default" size="sm" onClick={() => setIsOpen(true)} className="gap-2">
              <Code2 className="h-4 w-4" />
              Details
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-gray-500 dark:text-gray-400 flex flex-wrap gap-2 mt-2">
              {techno.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs font-medium">
                  {tech}
                </Badge>
              ))}
            </DialogDescription>
          </DialogHeader>

          <div className="relative w-full h-64 my-4 rounded-lg overflow-hidden">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">{fullDescription}</p>
          </div>

          <DialogFooter className="flex sm:justify-between items-center mt-6 gap-4">
            <div className="flex gap-2">
              {githubUrl && (
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code Source
                  </a>
                </Button>
              )}

              {demoUrl && (
                <Button variant="default" size="sm" className="gap-2" asChild>
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>

            <DialogClose asChild>
              <Button variant="ghost" size="sm">
                Fermer
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

