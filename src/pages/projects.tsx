import { fetchProjects, Project } from '../data/projects';
import { fetchLinks, Links } from '../data/links';
import { useState, useEffect } from 'react';
import Tag from '../components/Tags/Tag';

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
        <div>
            <div className="p-16" id="projects"></div>
            <div className="w-screen flex flex-col items-center gap-5">
                <h3 className="font-semibold text-3xl w-full text-center text-white">Projects</h3>
                <p className="font-semibold text-md max-w-[85vw] text-center">Want to know about these projects in more detail?
                    <a href={links?.oldPersonalWebsite} target="_blank" rel="noopener noreferrer"> <span className="underline hover:text-grey">Check out my old site here!</span></a>
                </p>
                <div className="flex flex-wrap justify-center gap-5 max-w-[1250px]">
                    {projects?.map((project, index) => (
                        <div key={index} className="lg:min-w-[400px] lg:max-w-[400px] md:min-w-[400px] md:max-w-[400px] sm:min-w-[400px] sm:max-w-[400px] p-4">
                            <div className="max-w-[85vw] md:min-h-[415px] md:max-h-[415px] lg:min-h-[415px] lg:max-h-[415px] sm:min-h-[415px] sm:max-h-[415px] flex flex-col gap-1 bg-white p-8 rounded-lg relative text-left">
                                <img src={project.image} className="sm:min-w-[300px] sm:max-w-[300px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[300px] lg:max-w-[300px] mb-3 border-grey border-2 rounded-lg" alt={project.name} />
                                <div className="flex items-center">
                                    <h3 className="font-bold text-blue-dark text-lg">{project.name}</h3>
                                    <div className="ml-auto flex gap-5">
                                        {project.github != "" && <a href={project.github} target="_blank" rel="noopener noreferrer" className="ml-auto">
                                            <img className="min-w-[22px] max-w-[22px] min-h-[22px] max-h-[22px]" src='/githubBlue.png' alt="GitHub" />
                                        </a>}
                                        {project.demoSite != "" && <a href={project.demoSite} target="_blank" rel="noopener noreferrer" className="ml-auto">
                                            <img className="min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px]" src='/newTab.png' alt="Demo Site" />
                                        </a>}
                                    </div>
                                </div>
                                <p className="text-md text-blue-grey font-semibold leading-6 mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1">
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
