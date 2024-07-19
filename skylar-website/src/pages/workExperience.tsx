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
                <p key={index} className="">{parse(line)}</p>
            ));
        }
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="p-16" id="experience"></div>
            <h3 className="font-semibold text-3xl mb-4 text-white text-center">Work Experience</h3>
            
            <div className="flex flex-col gap-24">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
                    {jobs && jobs[0] && (
                        <>
                            <div className="flex sm:flex-row flex-col ml-5 mr-5 lg:mr-5 gap-5 p-5 py-7 lg:p-5 md:py-3 md:px-5 sm:px-5 sm:py-3 bg-white items-center justify-center rounded-2xl min-w-[425px] max-w-[425px] sm:min-w-[625px] sm:max-w-[625px] md:min-w-[825px] md:max-w-[825px] lg:min-w-[900px] lg:max-w-[900px]">
                                <img className="min-w-[370px] max-w-[370px] sm:min-w-[250px] sm:max-w-[250px] md:min-w-[250px] md:max-w-[250px] lg:min-w-[325px] lg:max-w-[325px] rounded-2xl" src={jobs[0].imageLink} alt={`${jobs[0].companyName} logo`} />
                                <div className="flex flex-col gap-1 sm:items-start sm:justify-start justify-center items-center">
                                    <h4 className="text-blue-dark font-bold text-xl lg:text-xl md:text-lg sm:text-base">{jobs[0].companyName}</h4>
                                    <h5 className="text-blue-dark font-semibold text-lg mb-1 sm:mb-0 lg:text-lg md:text-base sm:text-sm">{jobs[0].role}</h5>
                                    <div className="flex flex-wrap gap-1.5 sm:justify-start justify-center items-center mb-1 sm:mb-0">
                                        {jobs[0].skills.map((skill) => (
                                            <Tag key={skill} name={skill}/>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-1 text-blue-grey font-medium text-sm lg:text-base md:text-sm sm:text-xs sm:text-left text-center">{formatText(jobs[0].description)}</div>
                                </div>
                            </div>
                            <img className="hidden lg:block w-1/4" src={'/hotBalloon.svg'} alt="Decoration" />
                        </>
                    )}
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
                    {jobs && jobs[1] && (
                        <>
                            <img className="hidden lg:block w-1/4" src={'/kite.svg'} alt="Decoration" />
                            <div className="flex sm:flex-row flex-col ml-5 mr-5 lg:mr-5 gap-5 p-5 py-7 lg:p-5 md:py-3 md:px-5 sm:px-5 sm:py-3 bg-white items-center justify-center rounded-2xl min-w-[425px] max-w-[425px] sm:min-w-[625px] sm:max-w-[625px] md:min-w-[825px] md:max-w-[825px] lg:min-w-[900px] lg:max-w-[900px]">
                                <img className="min-w-[370px] max-w-[370px] sm:min-w-[250px] sm:max-w-[250px] md:min-w-[250px] md:max-w-[250px] lg:min-w-[325px] lg:max-w-[325px] rounded-2xl" src={jobs[1].imageLink} alt={`${jobs[1].companyName} logo`} />
                                <div className="flex flex-col gap-1 sm:items-start sm:justify-start justify-center items-center">
                                    <h4 className="text-blue-dark font-bold text-xl lg:text-xl md:text-lg sm:text-base">{jobs[1].companyName}</h4>
                                    <h5 className="text-blue-dark font-semibold text-lg mb-1 text-center sm:text-left sm:mb-0 lg:text-lg md:text-base sm:text-sm">{jobs[1].role}</h5>
                                    <div className="flex flex-wrap gap-1.5 sm:justify-start justify-center items-center mb-1 sm:mb-0">
                                        {jobs[1].skills.map((skill) => (
                                            <Tag key={skill} name={skill}/>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-1 text-blue-grey font-medium text-sm lg:text-base md:text-sm sm:text-xs sm:text-left text-center">{formatText(jobs[1].description)}</div>
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
