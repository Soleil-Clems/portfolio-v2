import tweeter from "@/assets/tweeter.jpg";
import previouslyOn from "@/assets/previously-on.jpg";
import archideco from "@/assets/e-commerce.jpg";
import datingApp from "@/assets/mymeetic.jpg";
import goEvent from "@/assets/my-event.jpg";
import freeAds from "@/assets/free-ads.jpg";
import gameAlter from "@/assets/game_alter.jpg";
import hackathon from "@/assets/hackathon ia 4 good.png";
import lezom0 from "@/assets/lezom-0.png";
import lezom1 from "@/assets/lezom-1.png";
import lezom2 from "@/assets/lezom-2.png";
import lezom3 from "@/assets/lezom-3.png";
import lezom4 from "@/assets/lezom-4.png";
import alloBoulot0 from "@/assets/AlloBoulot-0.png";
import alloBoulot1 from "@/assets/AlloBoulot-1.png";
import alloBoulot3 from "@/assets/AlloBoulot-3.png";
import alloBoulot4 from "@/assets/AlloBoulot-4.png";
import alloBoulot5 from "@/assets/AlloBoulot-5.png";
import alloBoulot6 from "@/assets/AlloBoulot-6.png";
import marvinCIForge from "@/assets/Marvin_CI_Forge.png";
import n8nImg from "@/assets/n8n.png";
import gptDemo from "@/assets/gpt-history-cleaner-demo.mp4";
import gpt1 from "@/assets/gpt-history-cleaner-1.jpg";
import gpt2 from "@/assets/gpt-history-cleaner-2.jpg";
import socadminVisuel1 from "@/assets/socadmin-visuel-1.jpg";
import socadminVisuel2 from "@/assets/socadmin-visuel-2.jpg";
import socadminVisuel3 from "@/assets/socadmin-visuel-3.jpg";
import yazoum1 from "@/assets/yazoum-1.jpg";
import yazoum2 from "@/assets/yazoum-2.jpg";
import socadmin1 from "@/assets/socadmin-1.png";
import socadmin3 from "@/assets/socadmin-3.png";
import socadmin4 from "@/assets/socadmin-4.png";
import vaultbornGif from "@/assets/VaultBorn.gif";
import yazoumImg from "@/assets/yazoum.png";
import impactManager1 from "@/assets/impact-manager-1.jpg";
import impactManager2 from "@/assets/impact-manager-2.jpg";
import impactManager3 from "@/assets/impact-manager-3.jpg";
import impactManager4 from "@/assets/impact-manager-4.jpg";
import impactManager5 from "@/assets/impact-manager-5.jpg";
import impactManager6 from "@/assets/impact-manager-6.jpg";
import dynamia1 from "@/assets/dynamia-1.jpg";
import dynamia2 from "@/assets/dynamia-2.jpg";
import dynamia3 from "@/assets/dynamia-3.jpg";

type ProjectStatus = "live" | "in-progress" | "github";

type Project = {
    name: string;
    img?: string[];
    github?: string;
    liveUrl?: string;
    status?: ProjectStatus;
    client?: boolean;
    other?: boolean;
    tagline?: { en: string; fr: string };
    techno: string[];
    description: { en: string; fr: string };
    skills: { fr: string[]; en: string[] };
};

export const projects: Project[] = [
    // ── Nouveaux projets ──────────────────────────────────────────
    {
        "name": "Impact Manager",
        "tagline": { "fr": "Suivi des membres de l'église ICC Marseille, en production.", "en": "Member follow-up for the ICC Marseille church, in production." },
        "status": "live",
        "client": true,
        "img": [impactManager1, impactManager2, impactManager3, impactManager4, impactManager5, impactManager6],
        "techno": ["Symfony", "Next.js", "React", "TypeScript", "MySQL", "Docker", "GitHub Actions"],
        "description": {
            "en": "Member follow-up platform built for ICC Marseille (Impact Centre Chrétien), a church: newcomers and members, impact families and groups, service planning, reports written by advisors, trainings and an audit log. Installable PWA, role-based access and email two-factor authentication. Client project, deployed in production.",
            "fr": "Plateforme de suivi des membres réalisée pour l'église ICC Marseille (Impact Centre Chrétien) : nouveaux arrivants et membres, familles d'impact et groupes, planning des cultes, rapports des conseillers, formations et journal d'audit. PWA installable, droits par rôle et double authentification par e-mail. Projet client, en production."
        },
        "skills": {
            "fr": [
                "- API Symfony 7 (PHP 8.4, Doctrine, MySQL) et front Next.js 16 / React 19",
                "- Droits par rôle appliqués côté API (voters), journal d'audit de chaque action",
                "- Double authentification par e-mail, appareils de confiance, mots de passe choisis par lien",
                "- Tableaux avec recherche, filtres et pagination, calendrier du planning",
                "- PWA installable, pensée pour le mobile",
                "- Déploiement Docker sécurisé, sauvegardes chiffrées, CI GitHub Actions",
            ],
            "en": [
                "- Symfony 7 API (PHP 8.4, Doctrine, MySQL) and Next.js 16 / React 19 front end",
                "- Role-based access enforced by the API (voters), audit log of every action",
                "- Email two-factor authentication, trusted devices, passwords set through one-time links",
                "- Tables with search, filters and pagination, service planning calendar",
                "- Installable, mobile-first PWA",
                "- Hardened Docker deployment, encrypted backups, GitHub Actions CI",
            ]
        }
    },
    {
        "name": "Dynamia",
        "tagline": { "fr": "Suivi de la nutrition et du poids sur iPhone, disponible sur l'App Store.", "en": "Nutrition and weight tracking on iPhone, available on the App Store." },
        "status": "live",
        "liveUrl": "https://dynamia.dev/",
        "img": [dynamia1, dynamia2, dynamia3],
        "techno": ["Swift", "SwiftUI", "NestJS", "Next.js", "PostgreSQL", "Docker", "GitHub Actions"],
        "description": {
            "en": "iPhone app for tracking nutrition and weight, built for people who train: meals from an offline food database or barcode scanning, active energy read from Apple Health, water, weigh-ins and sleep, daily balance and weight trend. Weekly leagues between players, an admin dashboard (users, retention, crash reports, email campaigns) and a showcase website. Personal project, API and dashboard in production, app available on the App Store.",
            "fr": "App iPhone de suivi de la nutrition et du poids, pensée pour les sportifs : repas depuis une base d'aliments hors ligne ou par scan de code-barres, énergie active lue dans Apple Santé, eau, pesées et sommeil, bilan du jour et tendance du poids. Ligues hebdomadaires entre joueurs, dashboard d'administration (comptes, rétention, plantages, campagnes e-mail) et site vitrine. Projet personnel, API et dashboard en production, app disponible sur l'App Store."
        },
        "skills": {
            "fr": [
                "- App iPhone Swift / SwiftUI (SwiftData, Swift Charts, HealthKit, iOS 17+), en français et en anglais",
                "- API NestJS 11 (TypeScript, Prisma, PostgreSQL 17) et dashboard Next.js 16 / React 19",
                "- Connexion avec Apple vérifiée côté API, suppression de compte avec révocation de l'accès",
                "- Ligues hebdomadaires avec montées, descentes et contrôle anti-triche côté serveur",
                "- Statistiques d'usage anonymes, rapports de plantage MetricKit, courbe de rétention par cohortes",
                "- Campagnes e-mail Mailjet avec double consentement et désinscription (RGPD)",
                "- Tests unitaires et d'interface, déploiement Docker derrière Caddy, sauvegardes chiffrées, CI GitHub Actions",
            ],
            "en": [
                "- Swift / SwiftUI iPhone app (SwiftData, Swift Charts, HealthKit, iOS 17+), in French and English",
                "- NestJS 11 API (TypeScript, Prisma, PostgreSQL 17) and Next.js 16 / React 19 dashboard",
                "- Sign in with Apple verified by the API, account deletion with access revocation",
                "- Weekly leagues with promotion, relegation and server-side anti-cheat checks",
                "- Anonymous usage analytics, MetricKit crash reports, cohort retention curve",
                "- Mailjet email campaigns with double opt-in and unsubscribe (GDPR)",
                "- Unit and UI tests, Docker deployment behind Caddy, encrypted backups, GitHub Actions CI",
            ]
        }
    },
    {
        "name": "Yazoum",
        "tagline": { "fr": "Accompagner les étudiants internationaux vers leurs études en France.", "en": "Guiding international students towards studying in France." },
        "status": "live",
        "client": true,
        "liveUrl": "https://yazoum.vercel.app/",
        "img": [yazoum1, yazoum2, yazoumImg],
        "github": "",
        "techno": ["Next.js", "TypeScript", "Vercel", "GitHub Actions"],
        "description": {
            "en": "Professional orientation platform for international students applying to study in France via Campus France. Offers personalized academic guidance, application file preparation, interview coaching, and visa/relocation support.",
            "fr": "Plateforme d'orientation professionnelle pour les étudiants internationaux souhaitant étudier en France via Campus France. Accompagnement personnalisé : choix de formation, constitution du dossier, coaching entretien et conseils visa/installation."
        },
        "skills": {
            "fr": [
                "- Développement d'une application web avec Next.js",
                "- Déploiement sur Vercel",
                "- Conception d'une interface orientée conversion",
                "- Intégration du contenu et des parcours utilisateurs",
                "- Optimisation SEO et performance",
            ],
            "en": [
                "- Web application development with Next.js",
                "- Deployment on Vercel",
                "- Conversion-oriented UI design",
                "- Content and user journey integration",
                "- SEO and performance optimization",
            ]
        }
    },
    {
        "name": "socAdmin",
        "tagline": { "fr": "MySQL, PostgreSQL et MongoDB dans une seule interface, en web ou en desktop.", "en": "MySQL, PostgreSQL and MongoDB in one interface, on the web or desktop." },
        "status": "live",
        "liveUrl": "https://socadmin.dev/",
        "img": [socadminVisuel1, socadminVisuel2, socadminVisuel3, socadmin1, socadmin3, socadmin4],
        "github": "https://github.com/Soleil-Clems/socadmin",
        "techno": ["Go", "React", "TypeScript", "Docker", "MySQL", "PostgreSQL", "MongoDB", "GitHub Actions"],
        "description": {
            "en": "A modern self-hosted database administration tool supporting MySQL, PostgreSQL, and MongoDB through a unified interface — a contemporary alternative to phpMyAdmin with AES-256 encryption and JWT session management.",
            "fr": "Outil d'administration de bases de données auto-hébergé supportant MySQL, PostgreSQL et MongoDB via une interface unifiée — alternative moderne à phpMyAdmin avec chiffrement AES-256 et sessions JWT."
        },
        "skills": {
            "fr": [
                "- Conception d'une architecture fullstack Go + React/TypeScript",
                "- Développement d'un éditeur SQL et MongoDB",
                "- Implémentation du chiffrement AES-256-GCM des credentials",
                "- Authentification JWT avec bcrypt",
                "- Déploiement Docker multi-services",
                "- Développement d'une application desktop native avec Wails",
                "- Gestion des opérations CRUD multi-bases"
            ],
            "en": [
                "- Fullstack Go + React/TypeScript architecture design",
                "- SQL and MongoDB query editor development",
                "- AES-256-GCM credential encryption",
                "- JWT authentication with bcrypt",
                "- Multi-service Docker deployment",
                "- Native desktop app development with Wails",
                "- Multi-database CRUD operations management"
            ]
        }
    },
    {
        "name": "Lezom",
        "other": true,
        "status": "github",
        "img": [lezom0, lezom1, lezom2, lezom3, lezom4],
        "github": "https://github.com/Soleil-Clems/lezom-front",
        "techno": ["Nextjs", "TypeScript", "Tailwind CSS", "Nestjs", "Websocket"],
        "description": {
            "en": "Frontend application developed as part of the Lezom project.",
            "fr": "Application frontend développée dans le cadre du projet Lezom."
        },
        "skills": {
            "fr": [
                "- Développement de l'interface utilisateur",
                "- Intégration des maquettes",
                "- Respect des normes du développement front-end"
            ],
            "en": [
                "- User interface development",
                "- Mockup integration",
                "- Front-end development standards compliance"
            ]
        }
    },
    {
        "name": "VaultBorn",
        "tagline": { "fr": "RPG d'action 2D en Java : sept classes, mondes reliés, sauvegarde auto.", "en": "2D action RPG in Java: seven classes, linked worlds, autosave." },
        "status": "github",
        "img": [vaultbornGif],
        "github": "https://github.com/Soleil-Clems/vaultborn",
        "techno": ["Java", "LibGDX", "Gradle"],
        "description": {
            "en": "2D action-RPG built with LibGDX featuring seven playable character classes, interconnected worlds (Forest and Hell), a complete combat system, inventory management, and an autosave system.",
            "fr": "RPG d'action 2D développé avec LibGDX proposant sept classes de personnages, des mondes interconnectés (Forêt et Enfer), un système de combat complet, une gestion d'inventaire et une sauvegarde automatique."
        },
        "skills": {
            "fr": [
                "- Développement d'un jeu 2D avec LibGDX",
                "- Conception de l'architecture modulaire (design patterns)",
                "- Implémentation d'un système de progression et d'inventaire",
                "- Gestion des cartes avec Tiled map editor",
                "- Système de sauvegarde/chargement JSON",
                "- Build cross-platform (Linux, macOS, Windows)"
            ],
            "en": [
                "- 2D game development with LibGDX",
                "- Modular architecture design (design patterns)",
                "- Progression and inventory system implementation",
                "- Map management with Tiled map editor",
                "- JSON save/load system",
                "- Cross-platform build (Linux, macOS, Windows)"
            ]
        }
    },
    {
        "name": "AlloBoulot",
        "tagline": { "fr": "Plateforme de recrutement : recherche, candidatures, tableau de bord employeur.", "en": "Recruitment platform: search, applications, employer dashboard." },
        "status": "github",
        "img": [alloBoulot0, alloBoulot1, alloBoulot3, alloBoulot4, alloBoulot5, alloBoulot6],
        "github": "https://github.com/Soleil-Clems/AlloBoulot",
        "techno": ["Laravel", "React", "TypeScript", "MySQL", "Docker", "JWT", "Tailwind CSS"],
        "description": {
            "en": "Full-stack job recruitment platform connecting job seekers and employers. Features advanced search, application tracking, employer dashboard, and a fully documented REST API with Swagger.",
            "fr": "Plateforme de recrutement fullstack mettant en relation candidats et employeurs. Recherche avancée, suivi des candidatures, tableau de bord employeur et API REST documentée avec Swagger."
        },
        "skills": {
            "fr": [
                "- Développement backend avec Laravel et MySQL",
                "- Développement frontend React/TypeScript avec Vite",
                "- Authentification JWT",
                "- Documentation API avec L5-Swagger",
                "- Gestion d'état avec Zustand et TanStack Query",
                "- Interface responsive avec ShadCn et Tailwind CSS",
                "- Déploiement Docker"
            ],
            "en": [
                "- Backend development with Laravel and MySQL",
                "- React/TypeScript frontend with Vite",
                "- JWT authentication",
                "- API documentation with L5-Swagger",
                "- State management with Zustand and TanStack Query",
                "- Responsive UI with ShadCn and Tailwind CSS",
                "- Docker deployment"
            ]
        }
    },
    {
        "name": "n8n Anti Mail Spam",
        "other": true,
        "status": "github",
        "img": [n8nImg],
        "github": "https://github.com/Soleil-Clems/n8n_anti_mail_spam",
        "techno": ["n8n", "Docker", "Makefile"],
        "description": {
            "en": "Automated email spam filtering workflow built with n8n and containerized with Docker. Leverages n8n's visual workflow builder to orchestrate spam detection and handling pipelines.",
            "fr": "Workflow automatisé de filtrage des spams e-mail construit avec n8n et conteneurisé sous Docker. Utilise le builder visuel de n8n pour orchestrer les pipelines de détection et de traitement des spams."
        },
        "skills": {
            "fr": [
                "- Conception et configuration de workflows n8n",
                "- Automatisation du traitement des e-mails",
                "- Déploiement et orchestration Docker",
                "- Paramétrage des règles de filtrage anti-spam"
            ],
            "en": [
                "- n8n workflow design and configuration",
                "- Email processing automation",
                "- Docker deployment and orchestration",
                "- Anti-spam filtering rules setup"
            ]
        }
    },
    {
        "name": "Marvin CI Forge",
        "tagline": { "fr": "Jenkins entièrement configuré par le code, prêt à lancer en un conteneur.", "en": "Jenkins fully configured as code, ready to run in one container." },
        "status": "github",
        "img": [marvinCIForge],
        "github": "https://github.com/Soleil-Clems/Marvin_CI_Forge",
        "techno": ["Jenkins", "Groovy", "Docker", "CI/CD", "DevOps"],
        "description": {
            "en": "DevOps automation project that fully configures a Jenkins instance using Configuration as Code (CasC) and Job DSL — containerized for reproducible, zero-manual-setup CI/CD deployments.",
            "fr": "Projet d'automatisation DevOps qui configure intégralement une instance Jenkins via Configuration as Code (CasC) et Job DSL — conteneurisé pour des déploiements CI/CD reproductibles sans configuration manuelle."
        },
        "skills": {
            "fr": [
                "- Configuration de Jenkins as Code (CasC)",
                "- Rédaction de pipelines CI/CD en Groovy/Job DSL",
                "- Conteneurisation Jenkins avec Docker",
                "- Infrastructure as Code",
                "- Automatisation des configurations et définitions de jobs"
            ],
            "en": [
                "- Jenkins Configuration as Code (CasC)",
                "- CI/CD pipeline writing in Groovy/Job DSL",
                "- Jenkins containerization with Docker",
                "- Infrastructure as Code",
                "- Automated configuration and job definition"
            ]
        }
    },
    {
        "name": "GPT History Cleaner",
        "tagline": { "fr": "Extension Chrome publiée : trier et supprimer ses conversations ChatGPT en masse.", "en": "Published Chrome extension: bulk-delete or archive ChatGPT conversations." },
        "status": "live",
        "liveUrl": "https://chromewebstore.google.com/detail/gpt-history-cleaner/glolmnpaakefigbbmokcfjbmnjgacghe",
        "img": [gpt1, gpt2, gptDemo],
        "github": "https://github.com/Soleil-Clems/gpt-history-cleaner",
        "techno": ["Chrome Extension", "React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Actions"],
        "description": {
            "en": "Chrome extension for bulk deleting or archiving ChatGPT conversations directly from the sidebar. Zero tracking, fully local — built with Manifest V3, React and Tailwind CSS.",
            "fr": "Extension Chrome pour supprimer ou archiver en masse les conversations ChatGPT directement depuis la barre latérale. Zéro tracking, 100% local — construite avec Manifest V3, React et Tailwind CSS."
        },
        "skills": {
            "fr": [
                "- Développement d'une extension Chrome (Manifest V3)",
                "- Intégration dans l'interface ChatGPT via le DOM",
                "- Opérations de suppression/archivage en masse",
                "- Interface utilisateur avec React et Tailwind CSS",
                "- Build avec Vite",
                "- Respect de la vie privée (zéro tracking)"
            ],
            "en": [
                "- Chrome extension development (Manifest V3)",
                "- ChatGPT UI integration via DOM",
                "- Bulk delete/archive operations",
                "- React and Tailwind CSS UI",
                "- Vite build setup",
                "- Privacy-first design (zero tracking)"
            ]
        }
    },
    // ── Anciens projets ───────────────────────────────────────────
    {
        "name": "Tweeter Clone",
        "other": true,
        "status": "github",
        "img": [tweeter],
        "github": "https://github.com/Soleil-Clems/Tweeter_Clone",
        "techno": ["php", "js", "css", "html", "sql", "jquery", "mvc"],
        "description": {
            "en": "This project involves replicating the functionality of Twitter in a custom application. Users can post messages, follow others, and interact with posts.",
            "fr": "Ce projet consiste à reproduire les fonctionnalités de Twitter. Les utilisateurs peuvent publier des messages, suivre d'autres utilisateurs et interagir avec les publications."
        },
        "skills": {
            "fr": [
                "- Modélisation des fonctionnalités à développer",
                "- Développement du prototype",
                "- Respect des normes du développement front-end",
                "- Implémentation du back-end",
                "- Implémentation du système d'authentification",
                "- Implémentation du plan de tests",
            ],
            "en": [
                "- Modeling of functionalities to develop",
                "- Prototype development",
                "- Front-end development standards compliance",
                "- Back-end implementation",
                "- Authentication system implementation",
                "- Test plan implementation",
            ]
        }
    },
    {
        "name": "Previously On",
        "other": true,
        "status": "github",
        "img": [previouslyOn],
        "github": "https://github.com/Soleil-Clems/File_Explorer",
        "techno": ["React native", "API"],
        "description": {
            "en": "Mobile app to discover and watch movies and series, based on API integration.",
            "fr": "Application mobile pour découvrir et regarder des films et séries, développée à partir d'une intégration API."
        },
        "skills": {
            "fr": [
                "- Modélisation des fonctionnalités à développer",
                "- Développement du prototype",
                "- Respect des normes du développement front-end",
                "- Implémentation du back-end",
                "- Implémentation du système d'authentification",
                "- Implémentation du plan de tests",
            ],
            "en": [
                "- Modeling of functionalities to develop",
                "- Prototype development",
                "- Front-end development standards compliance",
                "- Back-end implementation",
                "- Authentication system implementation",
                "- Test plan implementation",
            ]
        }
    },
    {
        "name": "Archideco - E-commerce",
        "client": true,
        "tagline": { "fr": "Site e-commerce réalisé en équipe pour un franchisé Mobalpa.", "en": "E-commerce site built as a team for a Mobalpa franchisee." },
        "status": "github",
        "img": [archideco],
        "github": "https://github.com/Soleil-Clems/Archideco-Ecommerce",
        "techno": ["Symfony", "React", "API Rest", "Figma", "Docker", "Agile"],
        "description": {
            "en": "E-commerce platform developed with Archideco, including admin dashboard, product management, and client interaction. Developed in a group with Agile methodology and a real client.",
            "fr": "Plateforme e-commerce développée avec Archideco, incluant tableau de bord administrateur, gestion des produits et interaction client. Projet réalisé en groupe avec un vrai client, méthode Agile."
        },
        "skills": {
            "fr": [
                "- Rédaction du cahier des charges (CDC) avec le client",
                "- Rédaction des spécifications techniques",
                "- Déploiement de l'environnement de travail",
                "- Réalisation des maquettes avec Figma",
                "- Modélisation des fonctionnalités à développer",
                "- Développement du prototype (React + Symfony)",
                "- Respect des normes d'accessibilité, d'ergonomie et de référencement",
                "- Respect des normes du développement front-end",
                "- Implémentation du back-end",
                "- Implémentation du système d'authentification",
                "- Implémentation du plan de tests",
                "- Déploiement de l'application avec Docker",
                "- Rédaction d'une documentation technique",
                "- Rédaction d'une documentation utilisateur",
                "- Monitoring des retours utilisateurs",
                "- Identification des améliorations de la solution",
                "- Analyse de la performance",
                "- Préconisation de correctifs"
            ],
            "en": [
                "- Requirements document (CDC) with client",
                "- Technical specifications writing",
                "- Setup of the development environment",
                "- Mockup design with Figma",
                "- Modeling of functionalities to develop",
                "- Prototype development (React + Symfony)",
                "- Accessibility, ergonomics, SEO standards compliance",
                "- Front-end development standards compliance",
                "- Back-end implementation",
                "- Authentication system implementation",
                "- Test plan implementation",
                "- Application deployment with Docker",
                "- Technical documentation writing",
                "- User documentation writing",
                "- User feedback monitoring",
                "- Identifying solution improvements",
                "- Performance analysis",
                "- Corrective recommendations"
            ]
        }
    },
    {
        "name": "Dating App",
        "other": true,
        "status": "github",
        "img": [datingApp],
        "github": "https://github.com/Soleil-Clems/My_meetic",
        "techno": ["php", "js", "css", "html", "sql", "mvc"],
        "description": {
            "en": "Dating application with profile creation, match search, and internal messaging.",
            "fr": "Application de rencontre avec création de profils, recherche de correspondances et messagerie interne."
        },
        "skills": {
            "fr": [
                "- Modélisation des fonctionnalités à développer",
                "- Développement du prototype",
                "- Respect des normes du développement front-end",
                "- Implémentation du back-end",
                "- Implémentation du système d'authentification",
                "- Implémentation du plan de tests",
            ],
            "en": [
                "- Modeling of functionalities to develop",
                "- Prototype development",
                "- Front-end development standards compliance",
                "- Back-end implementation",
                "- Authentication system implementation",
                "- Test plan implementation",
            ]
        }
    },
    {
        "name": "Go Event",
        "other": true,
        "status": "github",
        "img": [goEvent],
        "github": "https://github.com/Soleil-Clems/My-event",
        "techno": ["React", "API Rest", "CSS", "Electron"],
        "description": {
            "en": "Event management application with calendar, creation, and event listing.",
            "fr": "Application de gestion d'événements avec calendrier, création et listing d'événements."
        },
        "skills": {
            "fr": [
                "- Déploiement de l'environnement de travail",
                "- Modélisation des fonctionnalités à développer",
                "- Développement du prototype",
                "- Respect des normes du développement front-end",
                "- Implémentation du back-end",
            ],
            "en": [
                "- Setup of the development environment",
                "- Modeling of functionalities to develop",
                "- Prototype development",
                "- Front-end development standards compliance",
                "- Back-end implementation",
            ]
        }
    },
    {
        "name": "Free Ads",
        "other": true,
        "status": "github",
        "img": [freeAds],
        "github": "https://github.com/Soleil-Clems/Free-Ads",
        "techno": ["PHP", "SQL", "JS", "HTML", "CSS"],
        "description": {
            "en": "Small project to manage classified ads online.",
            "fr": "Petit projet de gestion d'annonces en ligne."
        },
        "skills": {
            "fr": [
                "- Déploiement de l'environnement de travail",
                "- Développement du prototype",
                "- Respect des normes du développement front-end",
                "- Implémentation du back-end",
            ],
            "en": [
                "- Setup of the development environment",
                "- Prototype development",
                "- Front-end development standards compliance",
                "- Back-end implementation",
            ]
        }
    },
    {
        "name": "Game Alter",
        "other": true,
        "status": "github",
        "img": [gameAlter],
        "github": "https://github.com/Soleil-Clems/Game_Alter",
        "techno": ["React", "API Rest"],
        "description": {
            "en": "Game review and event platform for gaming community.",
            "fr": "Plateforme de revue de jeux et d'événements pour la communauté gaming."
        },
        "skills": {
            "fr": [
                "- Déploiement de l'environnement de travail",
                "- Développement du prototype",
                "- Respect des normes du développement front-end",
            ],
            "en": [
                "- Setup of the development environment",
                "- Prototype development",
                "- Front-end development standards compliance",
            ]
        }
    },
    {
        "name": "Hackathon IA 4 Good",
        "tagline": { "fr": "1re place au hackathon IA 4 Good organisé par Onepoint.", "en": "1st place at the IA 4 Good hackathon run by Onepoint." },
        "status": "github",
        "img": [hackathon],
        "github": "https://github.com/Soleil-Clems/Hackathon-IA-4-Good",
        "techno": ["Python", "IA", "Docker", "Agile", "API Rest"],
        "description": {
            "en": "AI project built at the Onepoint IA 4 Good hackathon, ranked 1st, with real problem-solving objectives. Full agile workflow with Docker deployment.",
            "fr": "Projet IA réalisé au hackathon IA 4 Good de Onepoint, classé 1er, avec des objectifs réels de résolution de problèmes. Méthode Agile complète avec déploiement Docker."
        },
        "skills": {
            "fr": [
                "- Rédaction du cahier des charges (CDC)",
                "- Rédaction des spécifications techniques",
                "- Déploiement de l'environnement de travail",
                "- Modélisation des fonctionnalités à développer",
                "- Développement du prototype",
                "- Respect des normes d'accessibilité et d'ergonomie",
                "- Identification des améliorations de la solution",
                "- Analyse de la performance",
                "- Préconisation de correctifs"
            ],
            "en": [
                "- Requirements document (CDC) writing",
                "- Technical specifications writing",
                "- Setup of the development environment",
                "- Modeling of functionalities to develop",
                "- Prototype development",
                "- Accessibility and ergonomics standards compliance",
                "- Identifying solution improvements",
                "- Performance analysis",
                "- Corrective recommendations"
            ]
        }
    },
];

export const featuredOrder = ["Impact Manager", "Dynamia", "socAdmin", "Yazoum", "GPT History Cleaner", "Archideco - E-commerce", "Hackathon IA 4 Good", "AlloBoulot", "VaultBorn", "Marvin CI Forge"];
