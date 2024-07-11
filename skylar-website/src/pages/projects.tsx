import { fetchProjects, Project } from '../data/projects';
import { useState, useEffect } from 'react';
import Tag from '../components/Tags/Tag';

const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[] | undefined>();

    useEffect(() => {
        fetchProjects().then((data) => {
            setProjects(data);
        });
    }, []);

    return (
        <div>
            <div className="w-screen flex flex-col items-center gap-5 mt-20">
                <h3 className="font-semibold text-3xl w-full text-center text-white">Projects</h3>
                <p className="font-semibold text-md">Want to know about these projects in more detail? Check out my old site here!</p>
                <div className="flex flex-wrap justify-center gap-5 max-w-[1250px]">
                    {projects?.map((project, index) => (
                        <div key={index} className="min-w-[400px] max-w-[400px] p-4">
                            <div className="bg-white p-8 rounded-lg relative text-left">
                                <img src={project.image} className="min-w-[300px] max-w-[300px] mb-3 rounded-lg" alt={project.name} />
                                <div className="flex items-center">
                                    <h3 className="font-bold text-blue-dark text-lg">{project.name}</h3>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="ml-auto">
                                        <img className="min-w-[22px] max-w-[22px] min-h-[22px] max-h-[22px]" src='/githubBlue.png' alt="GitHub" />
                                    </a>
                                </div>
                                <p className="text-md text-blue-grey font-semibold leading-6 mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1">
                                    {project.skills.map((skill) => (
                                        <Tag key={skill} name={skill}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img className="w-screen mt-10" src={'/clouds.svg'} alt="Clouds" />
        </div>
    );
};

export default ProjectsPage;
