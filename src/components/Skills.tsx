import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import useLanguageStore from "@/store/translation.store"
import dockerIcon from "../../public/docker.svg"
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
import javaIcon from "../../public/java.svg"
import nextIcon from "../../public/nextjs_icon_dark.svg"
import springbootIcon from "../../public/spring.svg"
import goIcon from "../../public/go.svg"
import scssIcon from "../../public/file-type-scss.svg"
import nodeIcon from "../../public/file-type-node.svg"
import nestjsIcon from "../../public/nestjs.svg"
import electronIcon from "../../public/electron.svg"
import gitlabIcon from "../../public/gitlab.svg"
import n8nIcon from "../../public/n8n.svg"
import viteIcon from "../../public/vite.svg"

const translations = {
  en: {
    skills: "Skills",
    overview: "A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.",
    toolsEnvironments: "Tools",
    languages: "Languages",
    frameworksLibraries: "Frameworks",
    expert: "Expert",
    advanced: "Advanced",
    proficient: "Proficient",
    intermediate: "Intermediate",
    beginner: "Beginner",
    highlyProficient: "Highly proficient",
    continuouslyImproving: "Continuously improving",
    vsCodeDesc: "Powerful and extensible code editor",
    gitDesc: "Version control for code management and collaboration",
    gitlabDesc: "Git platform with CI/CD and project management capabilities",
    postmanDesc: "API testing and development",
    figmaDesc: "UI/UX design and prototyping",
    dockerDesc: "Containerization for deployment and development",
    n8nDesc: "Visual workflow automation platform",
    viteDesc: "Next-generation frontend build tool",
    javascriptDesc: "Web development language",
    typescriptDesc: "JavaScript superset with static typing",
    phpDesc: "Backend for robust web projects",
    html5Desc: "Structure and content of web pages",
    css3Desc: "Modern styling and formatting",
    scssDesc: "CSS preprocessor with variables and nesting",
    sqlDesc: "Database management and querying",
    pythonDesc: "Scripting, automation, and general development",
    goDesc: "System and backend programming language by Google",
    nodeDesc: "JavaScript runtime for server-side development",
    javaDesc: "Object-oriented programming for backend applications",
    reactDesc: "Library for dynamic interfaces",
    laravelDesc: "PHP framework for robust backend applications",
    tailwindDesc: "Utility-first CSS framework for rapid design",
    symfonyDesc: "PHP framework for complex applications",
    bootstrapDesc: "CSS framework for responsive designs",
    nestjsDesc: "Progressive Node.js framework for scalable backend apps",
    electronDesc: "Cross-platform desktop application framework",
    nextDesc: "React-based framework for server-side rendered and static web apps",
    springBootDesc: "Opinionated framework for building Spring-based microservices",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    development: "Development",
    devOps: "DevOps",
    testing: "Testing",
    design: "Design",
    automation: "Automation",
    desktop: "Desktop",
  },
  fr: {
    skills: "Compétences",
    overview: "Un aperçu complet de mon expertise technique et de mes niveaux de compétence dans diverses technologies et outils.",
    toolsEnvironments: "Outils",
    languages: "Langages",
    frameworksLibraries: "Frameworks",
    expert: "Expert",
    advanced: "Avancé",
    proficient: "Compétent",
    intermediate: "Intermédiaire",
    beginner: "Débutant",
    highlyProficient: "Très compétent",
    continuouslyImproving: "En amélioration continue",
    vsCodeDesc: "Éditeur de code puissant et extensible",
    gitDesc: "Contrôle de version pour la gestion et la collaboration de code",
    gitlabDesc: "Plateforme Git avec CI/CD et gestion de projet intégrée",
    postmanDesc: "Test et développement d'API",
    figmaDesc: "Conception UI/UX et prototypage",
    dockerDesc: "Conteneurisation pour le déploiement et le développement",
    n8nDesc: "Plateforme d'automatisation de workflows visuels",
    viteDesc: "Outil de build frontend nouvelle génération",
    javascriptDesc: "Langage de développement web",
    typescriptDesc: "Surensemble de JavaScript avec typage statique",
    phpDesc: "Backend pour des projets web robustes",
    html5Desc: "Structure et contenu des pages web",
    css3Desc: "Stylisation et formatage modernes",
    scssDesc: "Préprocesseur CSS avec variables et imbrication",
    sqlDesc: "Gestion et requêtes de bases de données",
    pythonDesc: "Scripting, automatisation et développement général",
    goDesc: "Langage de programmation système et backend par Google",
    nodeDesc: "Runtime JavaScript pour le développement côté serveur",
    javaDesc: "Programmation orientée objet pour les applications backend",
    reactDesc: "Bibliothèque pour interfaces dynamiques",
    laravelDesc: "Framework PHP pour applications backend robustes",
    tailwindDesc: "Framework CSS utilitaire pour conception rapide",
    symfonyDesc: "Framework PHP pour applications complexes",
    bootstrapDesc: "Framework CSS pour designs responsifs",
    nestjsDesc: "Framework Node.js progressif pour applications backend évolutives",
    electronDesc: "Framework d'applications desktop cross-platform",
    nextDesc: "Framework basé sur React pour des applications web SSR et statiques",
    springBootDesc: "Framework Spring pour créer des microservices",
    frontend: "Frontend",
    backend: "Backend",
    database: "Base de données",
    development: "Développement",
    devOps: "DevOps",
    testing: "Test",
    design: "Design",
    automation: "Automation",
    desktop: "Desktop",
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
      icon: undefined,
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
      title: "GitLab",
      descriptionKey: "gitlabDesc",
      icon: gitlabIcon,
      progress: 65,
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
      categoryKey: "design",
    },
    {
      title: "Docker",
      descriptionKey: "dockerDesc",
      icon: dockerIcon,
      progress: 50,
      categoryKey: "devOps",
    },
    {
      title: "n8n",
      descriptionKey: "n8nDesc",
      icon: n8nIcon,
      progress: 60,
      categoryKey: "automation",
    },
    {
      title: "Vite",
      descriptionKey: "viteDesc",
      icon: viteIcon,
      progress: 75,
      categoryKey: "development",
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
      categoryKey: "frontend",
    },
    {
      title: "SCSS",
      descriptionKey: "scssDesc",
      icon: scssIcon,
      progress: 75,
      categoryKey: "frontend",
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
    {
      title: "Go",
      descriptionKey: "goDesc",
      icon: goIcon,
      progress: 65,
      categoryKey: "backend",
    },
    {
      title: "Node.js",
      descriptionKey: "nodeDesc",
      icon: nodeIcon,
      progress: 75,
      categoryKey: "backend",
    },
    {
      title: "Java",
      descriptionKey: "javaDesc",
      icon: javaIcon,
      progress: 80,
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
      title: "Next.js",
      descriptionKey: "nextDesc",
      icon: nextIcon,
      progress: 80,
      categoryKey: "frontend",
    },
    {
      title: "Tailwind CSS",
      descriptionKey: "tailwindDesc",
      icon: tailwindIcon,
      progress: 70,
      categoryKey: "frontend",
    },
    {
      title: "Bootstrap",
      descriptionKey: "bootstrapDesc",
      icon: bootstrapIcon,
      progress: 80,
      categoryKey: "frontend",
    },
    {
      title: "NestJS",
      descriptionKey: "nestjsDesc",
      icon: nestjsIcon,
      progress: 65,
      categoryKey: "backend",
    },
    {
      title: "Laravel",
      descriptionKey: "laravelDesc",
      icon: laravelIcon,
      progress: 50,
      categoryKey: "backend",
    },
    {
      title: "Symfony",
      descriptionKey: "symfonyDesc",
      icon: symfonyIcon,
      progress: 65,
      categoryKey: "backend",
    },
    {
      title: "Spring Boot",
      descriptionKey: "springBootDesc",
      icon: springbootIcon,
      progress: 50,
      categoryKey: "backend",
    },
    {
      title: "Electron",
      descriptionKey: "electronDesc",
      icon: electronIcon,
      progress: 55,
      categoryKey: "desktop",
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
                      src={item.icon}
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
    <section id='skills' className="w-full flex justify-center py-16 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="w-[90%] max-w-7xl flex flex-col gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="relative">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-own-purple to-transparent"></div>
              <span className="text-xs font-semibold tracking-widest text-own-purple/80 uppercase">
                {lang === "en" ? "See my skills" : 'Découvrez mes compétences'}
              </span>
            </div>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-own-dark-deep dark:text-white py-4">
              {t.skills}<span className="text-own-purple">.</span>
            </h1>
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
                  bg-transparent text-gray-600 hover:text-gray-900
                  dark:text-gray-300 dark:hover:text-white
                  data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm
                  dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white
                "
              >
                {t.toolsEnvironments}
              </TabsTrigger>
              <TabsTrigger
                value="language"
                className="
                  w-1/3 text-sm md:text-base rounded-md transition-colors
                  bg-transparent text-gray-600 hover:text-gray-900
                  dark:text-gray-300 dark:hover:text-white
                  data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm
                  dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white
                "
              >
                {t.languages}
              </TabsTrigger>
              <TabsTrigger
                value="framework"
                className="
                  w-1/3 text-sm md:text-base rounded-md transition-colors
                  bg-transparent text-gray-600 hover:text-gray-900
                  dark:text-gray-300 dark:hover:text-white
                  data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm
                  dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white
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
