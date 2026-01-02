import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import useLanguageStore from "@/store/translation.store"
import dockerIcon from "../../public/docker.svg"
import reactIcon from "../../public/file-type-reactts.svg"
import symfonyIcon from "../../public/symfony.svg"
import tailwindIcon from "../../public/tailwindcss-icon.svg"
import reactnvIcon from "../../public/react.svg"
import phpIcon from "../../public/phpIcon.svg"
import laravelIcon from "../../public/laravel.svg"
import gitIcon from "../../public/git.svg"
import htmlIcon from "../../public/html5.svg"
import mysqlIcon from "../../public/mysql.svg"
import postmanIcon from "../../public/postman.svg"
import pythonIcon from "../../public/python.svg"
import javascriptIcon from "../../public/javascript.svg"
import typescriptIcon from "../../public/typescript.svg"
import figmaIcon from "../../public/figma.svg"
import bootstrapIcon from "../../public/bootstrap.svg"
import cssIcon from "../../public/css.svg"

const translations = {
  en: {
    skills: "Skills",
    overview: "A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.",
    toolsEnvironments: "Tools & Environments",
    languages: "Languages",
    frameworksLibraries: "Frameworks & Libraries",
    expert: "Expert",
    advanced: "Advanced",
    proficient: "Proficient",
    intermediate: "Intermediate",
    beginner: "Beginner",
    highlyProficient: "Highly proficient",
    continuouslyImproving: "Continuously improving",
    // Tools descriptions
    vsCodeDesc: "Powerful and extensible code editor",
    gitDesc: "Version control for code management and collaboration",
    postmanDesc: "API testing and development",
    figmaDesc: "UI/UX design and prototyping",
    dockerDesc: "Containerization for deployment and development",
    // Languages descriptions
    javascriptDesc: "Web development language",
    typescriptDesc: "JavaScript superset with static typing",
    phpDesc: "Backend for robust web projects",
    html5Desc: "Structure and content of web pages",
    css3Desc: "Modern styling and formatting",
    sqlDesc: "Database management and querying",
    pythonDesc: "Scripting, automation, and general development",
    // Frameworks descriptions
    reactDesc: "Library for dynamic interfaces",
    laravelDesc: "PHP framework for robust backend applications",
    tailwindDesc: "Utility-first CSS framework for rapid design",
    symfonyDesc: "PHP framework for complex applications",
    bootstrapDesc: "CSS framework for responsive designs",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    development: "Development",
    devOps: "DevOps",
    testing: "Testing",
    design: "Design"
  },
  fr: {
    skills: "Compétences",
    overview: "Un aperçu complet de mon expertise technique et de mes niveaux de compétence dans diverses technologies et outils.",
    toolsEnvironments: "Outils & Environnements",
    languages: "Langages",
    frameworksLibraries: "Frameworks & Bibliothèques",
    expert: "Expert",
    advanced: "Avancé",
    proficient: "Compétent",
    intermediate: "Intermédiaire",
    beginner: "Débutant",
    highlyProficient: "Très compétent",
    continuouslyImproving: "En amélioration continue",
    vsCodeDesc: "Éditeur de code puissant et extensible",
    gitDesc: "Contrôle de version pour la gestion et la collaboration de code",
    postmanDesc: "Test et développement d'API",
    figmaDesc: "Conception UI/UX et prototypage",
    dockerDesc: "Conteneurisation pour le déploiement et le développement",
    javascriptDesc: "Langage de développement web",
    typescriptDesc: "Surensemble de JavaScript avec typage statique",
    phpDesc: "Backend pour des projets web robustes",
    html5Desc: "Structure et contenu des pages web",
    css3Desc: "Stylisation et formatage modernes",
    sqlDesc: "Gestion et requêtes de bases de données",
    pythonDesc: "Scripting, automatisation et développement général",
    reactDesc: "Bibliothèque pour interfaces dynamiques",
    laravelDesc: "Framework PHP pour applications backend robustes",
    tailwindDesc: "Framework CSS utilitaire pour conception rapide",
    symfonyDesc: "Framework PHP pour applications complexes",
    bootstrapDesc: "Framework CSS pour designs responsifs",
    frontend: "Frontend",
    backend: "Backend",
    database: "Base de données",
    development: "Développement",
    devOps: "DevOps",
    testing: "Test",
    design: "Design"
  }
}

type Item = {
  title: string
  descriptionKey: string
  icon?: string
  progress: number
  categoryKey?: string
}

type RenderCardsProps = {
  items: Item[]
  t: any
}

const getProgressColor = (progress: number) => {
  if (progress >= 90) return "bg-green-500"
  if (progress >= 80) return "bg-blue-500"
  if (progress >= 70) return "bg-purple-500"
  if (progress >= 60) return "bg-yellow-500"
  return "bg-gray-500"
}

const getProgressLabel = (progress: number, t: any) => {
  if (progress >= 90) return t.expert
  if (progress >= 80) return t.advanced
  if (progress >= 70) return t.proficient
  if (progress >= 60) return t.intermediate
  return t.beginner
}

export const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const { lang } = useLanguageStore()
  const t = translations[lang as keyof typeof translations] || translations.en

  const outils: Item[] = [
    {
      title: "VS Code",
      descriptionKey: "vsCodeDesc",
      icon: reactIcon,
      progress: 85,
      categoryKey: "development",
    },
    {
      title: "Git",
      descriptionKey: "gitDesc",
      icon: gitIcon,
      progress: 60,
      categoryKey: "devOps",
    },
    {
      title: "Postman",
      descriptionKey: "postmanDesc",
      icon: postmanIcon,
      progress: 80,
      categoryKey: "testing",
    },
    {
      title: "Figma",
      descriptionKey: "figmaDesc",
      icon: figmaIcon,
      progress: 50,
      categoryKey: "design"
    },
    {
      title: "Docker",
      descriptionKey: "dockerDesc",
      icon: dockerIcon,
      progress: 50,
      categoryKey: "devOps",
    },
  ]

  const languages: Item[] = [
    {
      title: "JavaScript",
      descriptionKey: "javascriptDesc",
      icon: javascriptIcon,
      progress: 90,
      categoryKey: "frontend",
    },
    {
      title: "TypeScript",
      descriptionKey: "typescriptDesc",
      icon: typescriptIcon,
      progress: 80,
      categoryKey: "frontend",
    },
    {
      title: "PHP",
      descriptionKey: "phpDesc",
      icon: phpIcon,
      progress: 85,
      categoryKey: "backend",
    },
    {
      title: "HTML5",
      descriptionKey: "html5Desc",
      icon: htmlIcon,
      progress: 95,
      categoryKey: "frontend",
    },
    {
      title: "CSS3",
      descriptionKey: "css3Desc",
      icon: cssIcon,
      progress: 90,
      categoryKey: "frontend"
    },
    {
      title: "SQL",
      descriptionKey: "sqlDesc",
      icon: mysqlIcon,
      progress: 75,
      categoryKey: "database",
    },
    {
      title: "Python",
      descriptionKey: "pythonDesc",
      icon: pythonIcon,
      progress: 60,
      categoryKey: "backend",
    },
  ]

  const frameworks: Item[] = [
    {
      title: "React.js",
      descriptionKey: "reactDesc",
      icon: reactnvIcon,
      progress: 75,
      categoryKey: "frontend",
    },
    {
      title: "Laravel",
      descriptionKey: "laravelDesc",
      icon: laravelIcon,
      progress: 50,
      categoryKey: "backend",
    },
    {
      title: "Tailwind CSS",
      descriptionKey: "tailwindDesc",
      icon: tailwindIcon,
      progress: 70,
      categoryKey: "frontend",
    },
    {
      title: "Symfony",
      descriptionKey: "symfonyDesc",
      icon: symfonyIcon,
      progress: 65,
      categoryKey: "backend",
    },
    {
      title: "Bootstrap",
      descriptionKey: "bootstrapDesc",
      icon: bootstrapIcon,
      progress: 80,
      categoryKey: "frontend",
    },
  ]

  const renderCards = ({ items, t }: RenderCardsProps) => {
    return items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.2 },
        }}
        onHoverStart={() => setHoveredCard(index)}
        onHoverEnd={() => setHoveredCard(null)}
      >
        <Card className="w-full h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {item.icon && (
                  <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <img
                      src={item.icon || "/placeholder.svg"}
                      alt={`${item.title} Icon`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                )}
                <div>
                  <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                  <CardDescription className="text-xs mt-1">
                    {t[item.descriptionKey]}
                  </CardDescription>
                </div>
              </div>
              {item.categoryKey && (
                <Badge variant="outline" className="text-xs font-medium">
                  {t[item.categoryKey]}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-1">
                <div className="text-xs font-semibold inline-block text-gray-500 dark:text-gray-400">
                  {getProgressLabel(item.progress, t)}
                </div>
                <div className="text-xs font-semibold inline-block text-gray-500 dark:text-gray-400">
                  {item.progress}%
                </div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-200 dark:bg-gray-700">
                <motion.div
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getProgressColor(item.progress)}`}
                  initial={{ width: "0%" }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-2">
            <div className="w-full flex justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredCard === index ? 1 : 0,
                  y: hoveredCard === index ? 0 : 10,
                }}
                transition={{ duration: 0.2 }}
                className="text-xs text-gray-500 dark:text-gray-400 italic"
              >
                {item.progress >= 80 ? t.highlyProficient : t.continuouslyImproving}
              </motion.div>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    ))
  }

  return (
    <section id='skills' className="w-full flex justify-center py-16 bg-gradient-to-b from-white to-gray-50@   dark:from-gray-950 dark:to-gray-900">
      <div className="w-[90%] max-w-7xl flex flex-col gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="relative">
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-own-dark-deep dark:text-white py-4">
              {t.skills}<span className="text-own-purple">.</span>
            </h1>
            <div className="absolute bottom-0 left-0 h-1 w-16 bg-own-purple"></div>
          </div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            {t.overview}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="skills-container w-full"
        >
          <Tabs defaultValue="outils" className="w-full">
            <TabsList className="flex gap-2 w-full mb-8 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <TabsTrigger
                value="outils"
                className="
                  w-1/3 text-sm md:text-base rounded-md transition-colors

                  bg-transparent
                  text-gray-600
                  hover:text-gray-900

                  dark:text-gray-300
                  dark:hover:text-white

                  data-[state=active]:bg-white
                  data-[state=active]:text-gray-900
                  data-[state=active]:shadow-sm

                  dark:data-[state=active]:bg-gray-700
                  dark:data-[state=active]:text-white
                "
              >

                {t.toolsEnvironments}
              </TabsTrigger>
              <TabsTrigger
                value="language"
                className="
                  w-1/3 text-sm md:text-base rounded-md transition-colors

                  bg-transparent
                  text-gray-600
                  hover:text-gray-900

                  dark:text-gray-300
                  dark:hover:text-white

                  data-[state=active]:bg-white
                  data-[state=active]:text-gray-900
                  data-[state=active]:shadow-sm

                  dark:data-[state=active]:bg-gray-700
                  dark:data-[state=active]:text-white
                "
              >
                {t.languages}
              </TabsTrigger>
              <TabsTrigger
                value="framework"
                className="
                  w-1/3 text-sm md:text-base rounded-md transition-colors

                  bg-transparent
                  text-gray-600
                  hover:text-gray-900

                  dark:text-gray-300
                  dark:hover:text-white

                  data-[state=active]:bg-white
                  data-[state=active]:text-gray-900
                  data-[state=active]:shadow-sm

                  dark:data-[state=active]:bg-gray-700
                  dark:data-[state=active]:text-white
                "
              >
                {t.frameworksLibraries}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="outils" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderCards({ items: outils, t })}
              </div>
            </TabsContent>

            <TabsContent value="language" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderCards({ items: languages, t })}
              </div>
            </TabsContent>

            <TabsContent value="framework" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderCards({ items: frameworks, t })}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}