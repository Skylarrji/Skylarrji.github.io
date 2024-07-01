import { fetchBriefDescriptions, BriefDescription } from '../data/briefDescriptions';
import { useState, useEffect } from 'react';

const AboutPage = () => {
    const [briefDescriptions, setBriefDescriptions] = useState<BriefDescription | undefined>();

    useEffect(() => {
        fetchBriefDescriptions().then((data) => {
            setBriefDescriptions(data);
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
                <div className="w-1/4">
                    <h3 className="font-semibold lg:text-2xl md:text-lg sm:text-base text-base mb-4">About</h3>
                    <p className="font-semibold lg:text-md">{formatText(briefDescriptions?.aboutDesc)}</p>
                </div>
                <div className="w-1/4">
                    <h3 className="font-semibold lg:text-2xl md:text-lg sm:text-base text-base mb-4">Where I’ve Worked</h3>
                </div>
            </div>
            <img className="w-screen mt-20" src={'/clouds.svg'}></img>
        </>
    );
};


export default AboutPage;