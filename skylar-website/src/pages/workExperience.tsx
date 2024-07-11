import { fetchJobs, Job } from '../data/workExperience';
import { useState, useEffect } from 'react';
import Tag from '../components/Tags/Tag';
import parse from 'html-react-parser';

const WorkExperiencePage = () => {
    const [jobs, setJobs] = useState<Job[] | undefined>();

    useEffect(() => {
        fetchJobs().then((data) => {
            setJobs(data);
        });
    }, []);

    const formatText = (text: string | undefined) => {
        if (text) {
            const updatedText = text.replace(/<a /g, '<a target="_blank" style="text-decoration: underline;" '); // adds links
            return updatedText.split('\n').map((line, index) => (
                <p key={index} className="mb-5">{parse(line)}</p>
            ));
        }
    };

    return (
        <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-3xl mb-4 text-white text-center">Work Experience</h3>
            
            <div className="flex flex-col gap-24">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
                    {jobs && jobs[0] && (
                        <>
                            <div className="flex bg-white items-center justify-center rounded-2xl min-w-full md:min-w-[700px] lg:min-w-[900px] max-w-full md:max-w-[700px] lg:max-w-[900px] min-h-[400px] max-h-[400px]">
                                <img className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] max-w-[250px] md:max-w-[300px] lg:max-w-[350px] min-h-[250px] md:min-h-[300px] lg:min-h-[350px] max-h-[250px] md:max-h-[300px] lg:max-h-[350px] ml-4 rounded-2xl" src={jobs[0].imageLink} alt={`${jobs[0].companyName} logo`} />
                                <div className="px-5">
                                    <h4 className="text-blue-dark font-bold text-xl mb-1">{jobs[0].companyName}</h4>
                                    <h5 className="text-blue-dark font-semibold text-lg mb-1">{jobs[0].role}</h5>
                                    <div className="flex flex-wrap gap-1.5">
                                        {jobs[0].skills.map((skill) => (
                                            <Tag key={skill} name={skill}/>
                                        ))}
                                    </div>
                                    <div className="text-blue-grey font-medium">{formatText(jobs[0].description)}</div>
                                </div>
                            </div>
                            <img className="hidden md:block w-1/4" src={'/hotBalloon.svg'} alt="Decoration" />
                        </>
                    )}
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
                    {jobs && jobs[1] && (
                        <>
                            <img className="hidden md:block w-1/4" src={'/kite.svg'} alt="Decoration" />
                            <div className="flex bg-white items-center justify-center rounded-2xl min-w-full md:min-w-[700px] lg:min-w-[900px] max-w-full md:max-w-[700px] lg:max-w-[900px] min-h-[400px] max-h-[400px]">
                                <img className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] max-w-[250px] md:max-w-[300px] lg:max-w-[350px] min-h-[250px] md:min-h-[300px] lg:min-h-[350px] max-h-[250px] md:max-h-[300px] lg:max-h-[350px] ml-4 rounded-2xl" src={jobs[1].imageLink} alt={`${jobs[1].companyName} logo`} />
                                <div className="px-5">
                                    <h4 className="text-blue-dark font-bold text-xl mb-1">{jobs[1].companyName}</h4>
                                    <h5 className="text-blue-dark font-semibold text-lg mb-1">{jobs[1].role}</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {jobs[1].skills.map((skill) => (
                                            <Tag key={skill} name={skill}/>
                                        ))}
                                    </div>
                                    <div className="text-blue-grey font-medium">{formatText(jobs[1].description)}</div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <img className="w-screen mt-10" src={'/clouds.svg'} alt="Clouds" />
        </div>
    );
};

export default WorkExperiencePage;
