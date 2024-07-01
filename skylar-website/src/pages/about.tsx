import { fetchBriefDescriptions, BriefDescription } from '../data/briefDescriptions';
import { fetchWorkSummaries, WorkSummary } from '../data/briefWorkSummaries';
import { useState, useEffect } from 'react';

const AboutPage = () => {
    const [briefDescriptions, setBriefDescriptions] = useState<BriefDescription | undefined>();
    const [workSummaries, setWorkSummaries] = useState<WorkSummary[] | undefined>();

    useEffect(() => {
        fetchBriefDescriptions().then((data) => {
            setBriefDescriptions(data);
        });

        fetchWorkSummaries().then((data) => {
            setWorkSummaries(data);
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
        <>
            <div className="w-screen flex lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center lg:gap-36 md:gap-36 sm:gap-20 gap-5">
                <h3 className="font-semibold lg:text-2xl md:text-lg sm:text-base text-base mb-4 w-1/3">About</h3>
                <h3 className="font-semibold lg:text-2xl md:text-lg sm:text-base text-base mb-4 w-1/4">Where I’ve Worked</h3>
            </div>

            <div className="w-screen flex lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center lg:gap-36 md:gap-36 sm:gap-20 gap-5">
                <div className="w-1/3">
                    <p className="font-semibold lg:text-md">{formatText(briefDescriptions?.aboutDesc)}</p>
                </div>
                <div className="w-1/4 flex flex-col gap-5">
                    {
                        workSummaries?.map((workSummary) => (
                            <div className="flex gap-8">
                                <img className="w-16 h-16 bg-white rounded-lg" src={workSummary.companyImage}></img>
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
            <img className="w-screen mt-20" src={'/clouds.svg'}></img>
        </>
    );
};


export default AboutPage;