import { fetchProjects, Project } from "../data/projects";
import { fetchLinks, Links } from "../data/links";
import { useState, useEffect } from "react";
import Tag from "../components/Tags/Tag";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[] | undefined>();
  const [links, setLinks] = useState<Links | undefined>();

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data);
    });

    fetchLinks().then((data) => {
      setLinks(data);
    });
  }, []);

  return (
    <div id="projects">
      <div className="max-w-[960px] mx-auto px-6 py-16">
        <h2 className="font-semibold text-2xl mb-2 text-notionText tracking-tight text-center md:text-left">
          Projects
        </h2>
        <p className="text-notionGray text-sm mb-6 text-center md:text-left">
          Want to know more?{" "}
          <a
            href={links?.oldPersonalWebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out my old site here
          </a>
          .
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          {projects?.map((project, index) => (
            <div
              key={index}
              className="w-full sm:flex-1 sm:min-w-[260px] sm:max-w-[calc(50%-8px)]"
            >
              <div className="h-full flex flex-col gap-2 bg-white border border-notionBorder p-4 rounded-lg hover:shadow-sm transition-shadow text-left">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-notionText text-sm">
                    {project.name}
                  </h3>
                  <div className="ml-auto flex gap-3">
                    {project.github != "" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="w-4 h-4 opacity-50 hover:opacity-90 transition-opacity"
                          src="/githubBlue.png"
                          alt="GitHub"
                        />
                      </a>
                    )}
                    {project.demoSite != "" && (
                      <a
                        href={project.demoSite}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="w-4 h-4 opacity-50 hover:opacity-90 transition-opacity"
                          src="/newTab.png"
                          alt="Demo Site"
                        />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-xs text-notionGray leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-auto pt-1">
                  {project.skills.map((skill) => (
                    <Tag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
