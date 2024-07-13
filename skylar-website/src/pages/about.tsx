import { fetchBriefDescriptions, BriefDescription } from '../data/briefDescriptions';
import { fetchWorkSummaries, WorkSummary } from '../data/briefWorkSummaries';
import { fetchSkills, Skill } from '../data/skills';
import { useState, useEffect } from 'react';

const AboutPage = () => {
    const [briefDescriptions, setBriefDescriptions] = useState<BriefDescription | undefined>();
    const [workSummaries, setWorkSummaries] = useState<WorkSummary[] | undefined>();
    const [skills, setSkills] = useState<Skill[] | undefined>();

    useEffect(() => {
        fetchBriefDescriptions().then((data) => {
            setBriefDescriptions(data);
        });

        fetchWorkSummaries().then((data) => {
            setWorkSummaries(data);
        });

        fetchSkills().then((data) => {
            setSkills(data);
        });
    }, []);

    const formatText = (text: string | undefined) => { // formats newlines
        if (text) {
            return text.split('\n').map((line, index) => (
                <p key={index} className="mb-5">{line}</p>
            ));
        }
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="w-screen flex lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center lg:gap-36 md:gap-36 sm:gap-20">
                <h3 className="font-semibold text-3xl mb-4 w-1/3 text-white">About</h3>
                <h3 className="font-semibold text-3xl mb-4 w-1/4 text-white">Where I’ve Worked</h3>
            </div>

            <div className="w-screen flex lg:flex-row md:flex-row sm:flex-row flex-col justify-center lg:gap-36 md:gap-36 sm:gap-20 gap-5">
                <div className="w-1/3 flex flex-col gap-24">
                    <p className="font-semibold lg:text-md">{formatText(briefDescriptions?.aboutDesc)}</p>
                </div>

                <div className="w-1/4 flex flex-col gap-5 mb-auto">
                    {
                        workSummaries?.map((workSummary) => (
                            <div className="flex gap-8">
                                <img className="min-w-16 max-w-16 min-h-16 max-h-16 bg-white rounded-lg" src={workSummary.companyImage}></img>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm text-transparentWhite font-semibold">{workSummary.date}</p>
                                    <div className="flex gap-7">
                                        <p className="text-base font-bold"> {workSummary.companyName}</p>
                                        <p className="text-base text-transparentWhite font-semibold"> {workSummary.location}</p>
                                    </div>
                                    <p className="text-sm font-semibold">{workSummary.role}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-screen flex flex-col items-center gap-5 mt-20">
                <h3 className="font-semibold text-3xl mb-4 w-full text-center text-white">My Skills</h3>
                <div className="flex flex-wrap justify-center gap-10">
                    {
                        skills?.map((skill) => (
                            <div className="relative min-w-[400px] max-w-[400px] min-h-[290px] max-h-[290px]">
                                <div className="bg-offWhite p-8 rounded-lg absolute top-3 left-3 w-full h-full"></div>
                                <div className="bg-white p-8 rounded-lg relative text-left flex flex-col gap-3">
                                    <h3 className="font-bold text-blue-dark text-xl">{skill.name}</h3>
                                    <p className="text-md text-blue-grey font-semibold leading-2">{skill.description}</p>
                                    <div className="flex gap-3 mt-3">
                                        {
                                            skill.images.map((image) => (
                                                <img className="h-16 bg-white rounded-lg" src={image.url} alt={skill.name} key={image.url}></img>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <img className="w-screen mt-10" src={'/clouds.svg'} alt="Clouds"></img>
        </div>
    );
};

export default AboutPage;
