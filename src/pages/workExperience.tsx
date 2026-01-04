import { fetchJobs, Job } from '../data/workExperience';
import { useState, useEffect } from 'react';
import Tag from '../components/Tags/Tag';
import parse from 'html-react-parser';

const decorations = ['/hotBalloon.svg', '/kite.svg', '/plane.svg'];

const WorkExperiencePage = () => {
    const [jobs, setJobs] = useState<Job[]>();

    useEffect(() => {
        fetchJobs().then(setJobs);
    }, []);

    const formatText = (text?: string) => {
        if (!text) return null;

        const updatedText = text.replace(
            /<a /g,
            '<a target="_blank" style="text-decoration: underline;" '
        );

        return updatedText.split('\n').map((line, index) => (
            <p key={index}>{parse(line)}</p>
        ));
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="p-16" id="experience" />
            <h3 className="font-semibold text-3xl mb-4 text-white text-center">
                Work Experience
            </h3>

            <div className="flex flex-col gap-24">
                {jobs?.map((job, index) => {
                    const decoration = decorations[index % decorations.length];
                    const isDecorationLeft = index % 2 === 1;

                    return (
                        <div
                            key={`${job.companyName}-${index}`}
                            className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center"
                        >
                            {isDecorationLeft && (
                                <img
                                    className="hidden lg:block w-1/4"
                                    src={decoration}
                                    alt="Decoration"
                                />
                            )}

                            <div className="flex sm:flex-row flex-col ml-5 mr-5 gap-5 p-5 py-7 lg:p-5 md:py-3 md:px-5 sm:px-5 sm:py-3 bg-white items-center justify-center rounded-2xl min-w-[85vw] max-w-[85vw] sm:min-w-[625px] sm:max-w-[625px] md:min-w-[825px] md:max-w-[825px] lg:min-w-[900px] lg:max-w-[900px]">
                                <img
                                    className="min-w-[70vw] max-w-[70vw] sm:min-w-[250px] sm:max-w-[250px] md:min-w-[250px] md:max-w-[250px] lg:min-w-[325px] lg:max-w-[325px] rounded-2xl"
                                    src={job.imageLink}
                                    alt={`${job.companyName} logo`}
                                />

                                <div className="flex flex-col gap-1 sm:items-start sm:justify-start justify-center items-center">
                                    <h4 className="text-blue-dark font-bold text-xl lg:text-xl md:text-lg sm:text-base">
                                        {job.companyName}
                                    </h4>

                                    <h5 className="text-blue-dark font-semibold text-lg mb-1 text-center sm:text-left sm:mb-0 lg:text-lg md:text-base sm:text-sm">
                                        {job.role}
                                    </h5>

                                    <div className="flex flex-wrap gap-1.5 sm:justify-start justify-center items-center mb-1 sm:mb-0">
                                        {job.skills.map((skill) => (
                                            <Tag key={skill} name={skill} />
                                        ))}
                                    </div>

                                    <div className="flex flex-col gap-1 text-blue-grey font-medium text-sm lg:text-base md:text-sm sm:text-xs sm:text-left text-center">
                                        {formatText(job.description)}
                                    </div>
                                </div>
                            </div>

                            {!isDecorationLeft && (
                                <img
                                    className="hidden lg:block w-1/4"
                                    src={decoration}
                                    alt="Decoration"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WorkExperiencePage;
