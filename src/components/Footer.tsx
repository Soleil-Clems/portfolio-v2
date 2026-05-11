import { Linkedin, Github, Mail } from 'lucide-react';
import useLanguageStore from "@/store/translation.store";
import resume from "@/assets/resume.pdf"

const translations = {
    en: {
        home: "Home",
        projects: "Projects",
        about: "About",
        workTogether: "Interested in working together",
        fullstack: "Fullstack developer",
        curriculum: "Curriculum",
        copyright: "©2025 Soleil OUISOL"
    },
    fr: {
        home: "Accueil",
        projects: "Projets",
        about: "À propos",
        workTogether: "Intéressé par une collaboration",
        fullstack: "Développeur Fullstack",
        curriculum: "CV",
        copyright: "©2025 Soleil OUISOL"
    }
};

export default function Footer() {
    const { lang } = useLanguageStore();
    const t = translations[lang as keyof typeof translations] || translations.en;

    const currentYear = new Date().getFullYear();
    const copyrightYear = currentYear === 2025 ? "2025" : `2025-${currentYear}`;


    return (
        <footer className="flex flex-col w-full p-6 dark:bg-gradient-to-b dark:from-black dark:to-gray-900">
            <div className="flex w-full justify-around space-x-6">
                <ul className="flex space-x-8">
                    <li><a href="#home" className="text-lg text-own-dark hover:text-own-purple font-bold">{t.home}</a></li>
                    <li><a href="#projects" className="text-lg text-own-dark hover:text-own-purple font-bold">{t.projects}</a></li>
                    <li><a href="#about" className="text-lg text-own-dark hover:text-own-purple font-bold">{t.about}</a></li>
                </ul>

                <ul className="flex space-x-8">
                    <li><a href="https://github.com/Soleil-Clems" target="_blank" className="text-lg text-own-dark hover:text-own-purple font-bold"><Github /></a></li>
                    <li><a href="https://www.linkedin.com/in/soleil-ouisol" target="_blank" className="text-lg text-own-dark hover:text-own-purple font-bold"><Linkedin /></a></li>
                </ul>
            </div>

            <div className="flex flex-col w-full mt-6 space-y-6">
                <div className="flex w-full justify-around">
                    <p className="text-center">{t.workTogether}<span className="text-own-purple">?</span></p>
                    <p className="text-center">{t.fullstack}</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-around items-center">

                    <div className="space-x-6">
                        <a
                            target='_blank'
                            href={resume} className="px-3 py-1.5  rounded-md bg-own-purple dark:hover:text-black dark:hover:bg-white text-white">
                            {t.curriculum}
                        </a>
                        <a

                            href="#projects" className="px-3 py-1.5 rounded-md bg-white dark:bg-own-dark-deep dark:hover:bg-own-dark text-own-dark border border-own-dark hover:bg-black dark:text-white hover:text-white">
                            {t.projects}

                        </a>
                    </div>
                    <div className="flex items-center gap-2 sm:flex">

                        <span className='hidden md:flex'>©{copyrightYear} Soleil OUISOL</span> <span className="text-own-purple hidden md:flex"> |

                        </span> <span className="flex gap-2 items-center my-4"><Mail size={20} /> adonai-clems-soleil.ouisol@epitech.eu</span></div>
                </div>
            </div>
        </footer>
    );
}