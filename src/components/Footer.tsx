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
        curriculum: "Resume",
        contact: "Contact",
        copyright: "©2025 Soleil OUISOL"
    },
    fr: {
        home: "Accueil",
        projects: "Projets",
        about: "À propos",
        workTogether: "Intéressé par une collaboration",
        fullstack: "Développeur Fullstack",
        curriculum: "CV",
        contact: "Me contacter",
        copyright: "©2025 Soleil OUISOL"
    }
};

export default function Footer() {
    const { lang } = useLanguageStore();
    const t = translations[lang as keyof typeof translations] || translations.en;

    const currentYear = new Date().getFullYear();
    const copyrightYear = currentYear === 2025 ? "2025" : `2025-${currentYear}`;


    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 px-6 py-10 dark:bg-gradient-to-b dark:from-black dark:to-gray-900">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-col gap-2">
                        <span className="text-xl font-bold text-own-dark-deep dark:text-white">Soleil OUISOL<span className="text-own-purple">.</span></span>
                        <p className="text-gray-600 dark:text-gray-400">{t.fullstack} · {t.workTogether}<span className="text-own-purple">?</span></p>
                    </div>
                    <div className="flex items-center gap-3">
                        <a target="_blank" rel="noopener noreferrer" href={resume} className="rounded-md bg-own-purple px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
                            {t.curriculum}
                        </a>
                        <a href="#contact" className="rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-own-dark dark:text-white hover:border-own-purple hover:text-own-purple">
                            {t.contact}
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-gray-200 dark:border-gray-800 pt-6 md:flex-row md:items-center md:justify-between">
                    <ul className="flex gap-6 text-sm font-medium">
                        <li><a href="#home" className="text-own-dark dark:text-gray-300 hover:text-own-purple">{t.home}</a></li>
                        <li><a href="#about" className="text-own-dark dark:text-gray-300 hover:text-own-purple">{t.about}</a></li>
                        <li><a href="#projects" className="text-own-dark dark:text-gray-300 hover:text-own-purple">{t.projects}</a></li>
                    </ul>
                    <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400 md:flex-row md:items-center md:gap-6">
                        <a href="mailto:ouisolclems@gmail.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-own-purple"><Mail size={16} /> ouisolclems@gmail.com</a>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/Soleil-Clems" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-own-purple"><Github size={18} /></a>
                            <a href="https://www.linkedin.com/in/soleil-ouisol" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-own-purple"><Linkedin size={18} /></a>
                            <span>©{copyrightYear} Soleil OUISOL</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
