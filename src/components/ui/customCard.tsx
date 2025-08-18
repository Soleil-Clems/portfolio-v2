import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { CheckCircle2, Github } from "lucide-react";
import useLanguageStore from "@/store/translation.store";

interface CustomCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  techno: string[];
  skills?: {
    fr: string[];
    en: string[];
  };
}

export const CustomCard = ({ 
  title, 
  description, 
  imageUrl, 
  githubUrl, 
  techno,
  skills
}: CustomCardProps) => {
  const { lang } = useLanguageStore();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card 
        onClick={() => setOpen(true)} 
        className="cursor-pointer flex flex-col h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" 
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-own-dark-deep dark:text-white mb-2">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {techno.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-2 py-1 text-xs font-medium bg-own-purple/10 text-own-purple rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-own-dark-deep dark:text-white">
              {title}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
              {lang === "en" ? "Project details" : "Détails du projet"}
            </DialogDescription>
          </DialogHeader>

          <div className="w-full h-56 rounded-lg overflow-hidden mb-4">
            <img 
              src={imageUrl} 
              alt={title} 
              className="object-cover w-full h-full" 
            />
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

          <div className="mb-4">
            <h4 className="text-base font-semibold mb-2 text-own-dark-deep dark:text-gray-200">
              {lang === "en" ? "Technologies used" : "Technologies utilisées"} :
            </h4>
            <div className="flex flex-wrap gap-2">
              {techno.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-1 text-xs font-medium bg-own-purple/10 text-own-purple rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {skills && skills[lang] && (
            <div className="mb-4">
              <h4 className="text-base font-semibold mb-2 text-own-dark-deep dark:text-gray-200">
                {lang === "en" ? "Acquired skills" : "Compétences acquises"} :
              </h4>
              <ul className="space-y-2">
                {skills[lang].map((skill, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-own-purple mr-2 mt-0.5" />
                    <span>{skill.replace(/^- /, "")}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-own-purple hover:underline text-sm font-medium"
            >
              <Github className="h-4 w-4" />
              {lang === "en" ? "View on GitHub" : "Voir sur GitHub"}
            </a>
          )}

        
        
        </DialogContent>
      </Dialog>
    </>
  );
};
