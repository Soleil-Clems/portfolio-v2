import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { CheckCircle2, Github, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import useLanguageStore from "@/store/translation.store";

type ProjectStatus = "live" | "in-progress" | "github";

const statusConfig: Record<ProjectStatus, { label: { fr: string; en: string }; classes: string; dot?: string }> = {
  live: {
    label: { fr: "Live", en: "Live" },
    classes: "bg-white/95 text-green-700 border border-green-500/40 shadow-sm dark:bg-gray-900/90 dark:text-green-400",
    dot: "bg-green-500",
  },
  "in-progress": {
    label: { fr: "En cours", en: "In progress" },
    classes: "bg-white/95 text-yellow-700 border border-yellow-500/40 shadow-sm dark:bg-gray-900/90 dark:text-yellow-400",
    dot: "bg-yellow-500 animate-pulse",
  },
  github: {
    label: { fr: "GitHub", en: "GitHub" },
    classes: "bg-white/95 text-gray-700 border border-gray-400/40 shadow-sm dark:bg-gray-900/90 dark:text-gray-300",
  },
};

interface CustomCardProps {
  title: string;
  tagline?: string;
  description: string;
  imageUrl?: string[];
  githubUrl?: string;
  liveUrl?: string;
  techno: string[];
  status?: ProjectStatus;
  client?: boolean;
  skills?: {
    fr: string[];
    en: string[];
  };
}

interface CarouselProps {
  images: string[];
  title: string;
  compact?: boolean;
}

const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".webm");

const MediaItem = ({ src, title, compact }: { src: string; title: string; compact: boolean }) => {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        className="object-cover w-full h-full"
        autoPlay
        muted
        loop
        playsInline
        onClick={e => e.stopPropagation()}
      />
    );
  }
  return (
    <img
      src={src}
      alt={title}
      loading="lazy"
      className={`object-cover w-full h-full transition-opacity duration-300 ${compact ? "hover:scale-105 transition-transform duration-500" : ""}`}
    />
  );
};

const Carousel = ({ images, title, compact = false }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent(i => (i - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent(i => (i + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <MediaItem src={images[current]} title={`${title} - ${current + 1}`} compact={compact} />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft size={compact ? 14 : 18} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight size={compact ? 14 : 18} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setCurrent(i); }}
                className={`p-0 border-0 rounded-full transition-all duration-200 ${
                  i === current ? "bg-white w-3 h-1.5" : "bg-white/50 w-1.5 h-1.5"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded-full">
            {current + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
};

const ImagePlaceholder = ({ title }: { title: string }) => (
  <div className="w-full h-full bg-gradient-to-br from-own-purple/20 to-purple-900/40 flex items-center justify-center">
    <span className="text-own-purple font-bold text-4xl">{title.charAt(0)}</span>
  </div>
);

export const CustomCard = ({
  title,
  tagline,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  techno,
  status,
  client,
  skills
}: CustomCardProps) => {
  const { lang } = useLanguageStore();
  const [open, setOpen] = useState(false);
  const statusCfg = status ? statusConfig[status] : null;
  const hasImages = imageUrl && imageUrl.length > 0;

  const StatusBadge = ({ className = "" }: { className?: string }) => {
    if (!statusCfg) return null;
    const inner = (
      <>
        {statusCfg.dot && <span className={`w-1.5 h-1.5 rounded-full ${statusCfg.dot}`} />}
        {statusCfg.label[lang]}
      </>
    );
    const href = status === "live" ? liveUrl : status === "github" ? githubUrl : undefined;
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className={`flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm hover:opacity-80 transition-opacity ${statusCfg.classes} ${className}`}
        >
          {inner}
        </a>
      );
    }
    return (
      <span className={`flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm ${statusCfg.classes} ${className}`}>
        {inner}
      </span>
    );
  };

  return (
    <>
      <Card
        onClick={() => setOpen(true)}
        className="cursor-pointer flex flex-col h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative w-full h-48 overflow-hidden">
          {hasImages
            ? <Carousel images={imageUrl} title={title} compact />
            : <ImagePlaceholder title={title} />
          }
          <StatusBadge className="absolute top-2 left-2" />
        </div>
        <div className="p-4">
          {client && (
            <span className="mb-1 inline-block text-[11px] font-semibold uppercase tracking-wider text-own-purple">
              {lang === "en" ? "Client project" : "Projet client"}
            </span>
          )}
          <h3 className="text-lg font-semibold text-own-dark-deep dark:text-white">
            {title}
          </h3>
          {tagline && <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{tagline}</p>}
          <div className="mb-3" />
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
            <div className="flex items-center gap-3 flex-wrap">
              <DialogTitle className="text-2xl font-bold text-own-dark-deep dark:text-white">
                {title}
              </DialogTitle>
              <StatusBadge />
            </div>
            <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
              {client
                ? lang === "en" ? "Client project, in production" : "Projet client, en production"
                : lang === "en" ? "Project details" : "Détails du projet"}
            </DialogDescription>
          </DialogHeader>

          <div className="w-full h-56 rounded-lg overflow-hidden mb-4">
            {hasImages
              ? <Carousel images={imageUrl} title={title} />
              : <ImagePlaceholder title={title} />
            }
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

          <div className="flex gap-4 flex-wrap">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-own-purple hover:underline text-sm font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                {liveUrl.includes("chromewebstore")
                  ? lang === "en" ? "View on the Chrome Web Store" : "Voir sur le Chrome Web Store"
                  : lang === "en" ? "Open site" : "Ouvrir le site"}
              </a>
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
