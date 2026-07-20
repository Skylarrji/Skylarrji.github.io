import { fetchBriefDescriptions, BriefDescription } from '../data/briefDescriptions';
import { fetchLinks, Links } from '../data/links';
import { useState, useEffect } from 'react';
import ContactButton from '../components/Buttons/contactButton';

const HomePage = () => {
    const [briefDescriptions, setBriefDescriptions] = useState<BriefDescription | undefined>();
    const [links, setLinks] = useState<Links | undefined>();

    useEffect(() => {
        fetchBriefDescriptions().then((data) => {
            setBriefDescriptions(data);
        });

        fetchLinks().then((data) => {
            setLinks(data);
        });
    }, []);

    return (
        <div id="home" className="max-w-[960px] mx-auto px-6 py-16">
            <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-start lg:gap-20 md:gap-16 sm:gap-12 gap-8">
                <img className="lg:block md:block sm:block hidden lg:w-72 md:w-64 sm:w-56 rounded-xl border border-notionBorder flex-shrink-0" src={briefDescriptions?.profilePic}></img>
                <div className="flex flex-col lg:gap-5 md:gap-4 sm:gap-4 gap-5">
                    <p className="text-notionGray font-medium text-xs tracking-widest">Hi! I'm</p>
                    <h1 className="font-bold lg:text-5xl md:text-4xl sm:text-4xl text-5xl text-notionText leading-tight">Skylar Ji</h1>
                    <p className="text-notionGray lg:text-base md:text-sm sm:text-sm text-sm leading-relaxed">{briefDescriptions?.introDesc}</p>

                    <div className="flex gap-3">
                        <ContactButton graphic={"/linkedin.png"} url={links?.linkedin} />
                        <ContactButton graphic={"/github.png"} url={links?.github} />
                        <ContactButton graphic={"/gmail.png"} url={links?.gmail} />
                        <ContactButton graphic={"/resume.png"} url={links?.resume} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HomePage;