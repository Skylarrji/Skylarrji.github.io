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

    const formatText = (text: string | undefined) => {
        if (text) {
            return text.split('\n').map((line, index) => (
                <p key={index} className="mb-4">{line}</p>
            ));
        }
    };

    return (
        <div id="about">
            <div className="max-w-[960px] mx-auto px-6 py-16">
                <div className="flex md:flex-row flex-col md:items-start items-center gap-12">
                    <div className="md:w-1/2 w-full">
                        <h2 className="font-semibold text-2xl mb-5 text-notionText tracking-tight text-center md:text-left">About</h2>
                        <div className="text-notionGray text-sm leading-relaxed text-center md:text-left">{formatText(briefDescriptions?.aboutDesc)}</div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <h2 className="font-semibold text-2xl mb-5 text-notionText tracking-tight text-center md:text-left">Where I've Worked</h2>
                        {/* At md+: single column inside the 50% container. */}
                        <div className="columns-1 gap-x-10 w-fit mx-auto md:mx-0">
                        {
                            workSummaries?.map((workSummary, index) => (
                                <div key={index} className="break-inside-avoid mb-5 flex gap-4 items-start">
                                    <img className="w-10 h-10 object-contain bg-white rounded-md border border-notionBorder p-1 flex-shrink-0" src={workSummary.companyImage}></img>
                                    <div className="flex flex-col gap-0.5 text-left">
                                        <p className="text-xs text-notionGray">{workSummary.date}</p>
                                        <div className="flex flex-wrap gap-2 items-baseline">
                                            <p className="text-sm font-semibold text-notionText">{workSummary.companyName}</p>
                                            <p className="text-xs text-notionGray">{workSummary.location}</p>
                                        </div>
                                        <p className="text-sm text-notionGray">{workSummary.role}</p>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="font-semibold text-2xl mb-6 text-notionText tracking-tight text-center md:text-left">Skills</h2>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {
                            skills?.map((skill) => (
                                <div className="flex-1 min-w-[260px] max-w-[calc(50%-8px)] bg-white border border-notionBorder rounded-lg p-5 text-left flex flex-col gap-3 hover:shadow-sm transition-shadow">
                                    <h3 className="font-semibold text-notionText text-sm">{skill.name}</h3>
                                    <p className="text-xs text-notionGray leading-relaxed">{skill.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                        {
                                            skill.images.map((image) => (
                                                <img className="h-7 sm:h-8 bg-white rounded" src={image.url} alt={skill.name} key={image.url}></img>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;