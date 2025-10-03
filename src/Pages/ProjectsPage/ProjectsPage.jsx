import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import bgImg from "/ProjectsPage/bgImg.webp";
import { cn } from "../../lib/utils";
import ProjectsPageCard from "../../Components/ProjectsPageCard/ProjectsPageCard";
import projectsImages from "../../Data/projectsImages";
import IntroOverlay from './../../Components/IntroOverlay/IntroOverlay';

export default function ProjectsPage() {
  return (
    <section className="organizational-chart pb-0">
      <IntroOverlay />
      {/* Header */}
      <div
        className={cn(
          "relative px-6 md:px-16 py-10 mb-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] md:bg-fixed bg-center shadow-xl overflow-hidden"
        )}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-secColor/40 z-10" />
        <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
          <h1 className="text-secColor text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg tracking-tight leading-tight drop-shadow-xl">
            Our Projects
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl font-bold">
            Through our projects, we showcase the trust we’ve earned and the
            standards we uphold in every detail.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="container mx-auto px-4 py-5">
        <PhotoProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-hidden px-4 md:px-10">
            {projectsImages.map(({ src, alt }, index) => (
              <ProjectsPageCard key={index} src={src} alt={alt} index={index} />
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}
