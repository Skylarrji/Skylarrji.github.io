import { fetchJobs, Job } from '../data/workExperience';
import { useState, useEffect } from 'react';

const WorkExperiencePage = () => {
    const [jobs, setJobs] = useState<Job[] | undefined>();

    useEffect(() => {
        fetchJobs().then((data) => {
            setJobs(data);
        });
    }, []);

    const formatText = (text: string | undefined) => {
        if (text) {
            return text.split('\n').map((line, index) => (
                <p key={index} className="mb-5">{line}</p>
            ));
        }
    };

    return (
        <div className="flex flex-col gap-5">
            <h3 className="font-semibold lg:text-3xl md:text-2xl sm:text-lg text-base mb-4 text-white text-center">Work Experience</h3>
            
            <div className="flex flex-col gap-24">
                <div className="flex gap-64 items-center justify-center">
                    {jobs && jobs[0] && (
                        <>
                            <div className="flex bg-white rounded-2xl min-w-[750px] max-w-[750px] min-h-[400px] max-h-[400px]">
                                <img className="w-1/4" src={jobs[0].imageLink} alt={`${jobs[0].companyName} logo`} />
                                <div className="p-5">
                                    <h4 className="text-blue-dark font-bold text-lg mb-2">{jobs[0].companyName}</h4>
                                    <h5 className="text-blue-dark font-semibold text-md mb-1">{jobs[0].role}</h5>
                                    <div className="text-blue-grey font-medium">{formatText(jobs[0].description)}</div>
                                    <div className="mt-2 text-blue-dark">
                                        <strong>Skills: </strong>{jobs[0].skills.join(', ')}
                                    </div>
                                </div>
                            </div>
                            <img className="w-1/4" src={'/hotBalloon.svg'} alt="Decoration" />
                        </>
                    )}
                </div>

                <div className="flex gap-64 items-center justify-center">
                    {jobs && jobs[1] && (
                        <>
                            <img className="w-1/4" src={'/kite.svg'} alt="Decoration" />
                            <div className="flex bg-white rounded-2xl min-w-[750px] max-w-[750px] min-h-[400px] max-h-[400px]">
                                <img className="w-1/4" src={jobs[1].imageLink} alt={`${jobs[1].companyName} logo`} />
                                <div className="p-5">
                                    <h4 className="text-blue-dark font-bold text-lg mb-2">{jobs[1].companyName}</h4>
                                    <h5 className="text-blue-dark font-semibold text-md mb-1">{jobs[1].role}</h5>
                                    <div className="text-blue-grey font-medium">{formatText(jobs[1].description)}</div>
                                    <div className="mt-2 text-blue-dark">
                                        <strong>Skills: </strong>{jobs[1].skills.join(', ')}
                                    </div>
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