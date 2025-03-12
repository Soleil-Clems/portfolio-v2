import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { MessageCircleDashed, Menu, X, Languages } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { translations } from "@/constants/translations"
import useLanguageStore from "@/store/translation.store"


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, toggleLang } = useLanguageStore();

  const t = translations.header[lang]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="text-black dark:text-white text-xl font-bold flex items-baseline">
            SoleilDEV <span className="text-own-purple text-2xl bold">.</span>
          </Link>
        </div>

        <div className="lg:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-own-dark dark:text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-1">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#home"
                className="text-base text-own-dark dark:text-gray-200 hover:text-own-purple dark:hover:text-own-purple font-medium transition-colors"
              >
                {t.home}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-base text-own-dark dark:text-gray-200 hover:text-own-purple dark:hover:text-own-purple font-medium transition-colors"
              >
                {t.projects}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-base text-own-dark dark:text-gray-200 hover:text-own-purple dark:hover:text-own-purple font-medium transition-colors"
              >
                {t.about}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-base text-own-dark dark:text-gray-200 hover:text-own-purple dark:hover:text-own-purple font-medium transition-colors"
              >
                {t.skills}
              </a>
            </li>
            <li>
              <a
                href="#evaluation"
                className="text-base text-own-dark dark:text-gray-200 hover:text-own-purple dark:hover:text-own-purple font-medium transition-colors"
              >
                {t.evaluation}
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center justify-center w-10 h-10 text-white bg-black dark:bg-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <MessageCircleDashed size={20} className="dark:text-black" />
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full border-none bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                <Languages size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setLang("fr")}
                className={lang === "fr" ? "bg-gray-100 dark:bg-gray-800" : ""}
              >
                Français
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLang("en")}
                className={lang === "en" ? "bg-gray-100 dark:bg-gray-800" : ""}
              >
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-x-0 top-[80px] bg-white dark:bg-gray-950 shadow-lg z-40 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6">
                <ul className="flex flex-col space-y-4">
                  <li>
                    <a
                      href="#home"
                      className="block py-2 text-lg text-own-dark dark:text-white hover:text-own-purple dark:hover:text-own-purple font-medium"
                      onClick={handleLinkClick}
                    >
                      {t.home}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="block py-2 text-lg text-own-dark dark:text-white hover:text-own-purple dark:hover:text-own-purple font-medium"
                      onClick={handleLinkClick}
                    >
                      {t.projects}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block py-2 text-lg text-own-dark dark:text-white hover:text-own-purple dark:hover:text-own-purple font-medium"
                      onClick={handleLinkClick}
                    >
                      {t.about}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="block py-2 text-lg text-own-dark dark:text-white hover:text-own-purple dark:hover:text-own-purple font-medium"
                      onClick={handleLinkClick}
                    >
                      {t.skills}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#evaluation"
                      className="block py-2 text-lg text-own-dark dark:text-white hover:text-own-purple dark:hover:text-own-purple font-medium"
                      onClick={handleLinkClick}
                    >
                      {t.evaluation}
                    </a>
                  </li>

                  <li className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <a
                        href="#contact"
                        className="flex items-center gap-2 py-2 text-lg text-own-dark dark:text-white hover:text-own-purple dark:hover:text-own-purple font-medium"
                        onClick={handleLinkClick}
                      >
                        <MessageCircleDashed size={20} />
                        {t.contact}
                      </a>

                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={toggleLang}
                          className="flex items-center gap-1"
                        >
                          <Languages size={16} />
                          {lang === "fr" ? "FR" : "EN"}
                        </Button>

                        <ModeToggle />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}