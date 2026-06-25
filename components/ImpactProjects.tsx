import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/content";

export default function ImpactProjects() {
  return (
    <section className="bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Our Impact in Action
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Building a Better Tomorrow
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-900 lg:aspect-[3/4]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 20vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 hidden bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:block" />
                <div className="absolute inset-x-0 bottom-0 hidden p-4 lg:block">
                  <h3 className="text-sm font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/70">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 lg:hidden">
                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange"
                >
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
