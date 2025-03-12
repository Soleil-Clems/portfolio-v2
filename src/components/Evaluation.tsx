import { CheckCircle, BookOpen, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import useLanguageStore from "@/store/translation.store";

export function Evaluation() {
  const { lang } = useLanguageStore();

  const icons = {
    BookOpen,
    CheckCircle,
    Briefcase
  };

  const evaluationData = {
    en: {
      title: "Self-Evaluation",
      description: "My journey through the web development program",
      timeline: [
        {
          title: "Semester 1",
          icon: "BookOpen",
          iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
          iconColor: "text-indigo-600",
          content: `The first semester began with an intensive immersion in PHP, 
                    accompanied by the creation of Bash scripts and the use of GitHub for code versioning. 
                    This phase was followed by concrete projects, during which I developed my skills in 
                    object-oriented programming (OOP), PHP, JavaScript, MySQL, jQuery, and Ajax. 
                    I also learned to collaborate effectively in a team, manage a group, and integrate the ideas 
                    and visions of each member. Additionally, I enhanced my language skills in English and 
                    French through the Altissia platform, which allowed me to better understand technical documentation.`,
        },
        {
          title: "Semester 2",
          icon: "CheckCircle",
          iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
          iconColor: "text-indigo-600",
          content: `This semester was marked by learning frameworks and CMS. 
                    I deepened my knowledge of React.js and Node.js with Express to develop 
                    fast, smooth, and dynamic web applications. I also learned to work with 
                    NoSQL databases like MongoDB and created a mobile application using React Native and Expo.`,
        },
        {
          title: "Semester 3",
          icon: "Briefcase",
          iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
          iconColor: "text-indigo-600",
          content: `The third semester marked the start of my work-study contract, 
                    where I learned to work in a demanding and structured professional environment. 
                    I also participated in a year-end project, which allowed me to apply my 
                    technical and organizational skills. Additionally, I gained knowledge in 
                    continuous integration and deployment, further strengthening my skills in DevOps methodologies.`,
        },
      ],
    },
    fr: {
      title: "Auto-Évaluation",
      description: "Mon parcours dans le programme de développement web",
      timeline: [
        {
          title: "Semestre 1",
          icon: "BookOpen",
          iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
          iconColor: "text-indigo-600",
          content: `Le premier semestre a débuté par une immersion intensive en PHP, 
                    accompagnée de la création de scripts Bash et de l'utilisation de GitHub pour le versioning du code. 
                    Cette phase a été suivie de projets concrets, au cours desquels j'ai développé mes compétences 
                    en programmation orientée objet (POO), PHP, JavaScript, MySQL, jQuery et Ajax.`,
        },
        {
          title: "Semestre 2",
          icon: "CheckCircle",
          iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
          iconColor: "text-indigo-600",
          content: `Ce semestre a été marqué par l'apprentissage des frameworks et CMS. 
                    J'ai approfondi mes connaissances en React.js et Node.js avec Express pour 
                    développer des applications web rapides et dynamiques. J'ai également appris 
                    à travailler avec des bases de données NoSQL comme MongoDB et j'ai créé une 
                    application mobile en utilisant React Native et Expo.`,
        },
        {
          title: "Semestre 3",
          icon: "Briefcase",
          iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
          iconColor: "text-indigo-600",
          content: `Le troisième semestre a marqué le début de mon contrat en alternance, 
                    où j'ai appris à travailler dans un environnement professionnel exigeant et structuré. 
                    J'ai également participé à un projet de fin d'année, qui m'a permis d'appliquer mes 
                    compétences techniques et organisationnelles.`,
        },
      ],
    }
  };

  const currentData = evaluationData[lang];

  return (
    <section id="evaluation" className="flex w-full justify-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="flex flex-col w-[90%] md:w-[80%] max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent mb-4">
            {currentData.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
            {currentData.description}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-9 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-600 via-indigo-400 to-indigo-200 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {currentData.timeline.map((item, index) => {
              //@ts-ignore
              const IconComponent = icons[item.icon];
              
              return (
                <div
                  key={index}
                  className={cn(
                    "relative flex flex-col md:flex-row gap-8",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                  )}
                >
                  <div className="absolute left-9 md:left-1/2 w-[70px] h-[70px] rounded-full bg-white dark:bg-gray-800 shadow-lg backdrop-blur-md transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={cn("w-14 h-14 rounded-full flex items-center justify-center", item.iconBg)}>
                      <IconComponent className={cn("w-7 h-7", item.iconColor)} />
                    </div>
                  </div>

                  <div className={cn(
                    "md:w-1/2 pl-24 md:pl-0", 
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  )}>
                    <div className="bg-white dark:bg-gray-800/80 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                      <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-all duration-300 opacity-90 hover:opacity-100 line-clamp-4 hover:line-clamp-none">
                        {item.content}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}