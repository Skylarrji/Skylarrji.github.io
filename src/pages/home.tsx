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
            <div className="flex md:flex-row flex-col md:items-center items-center justify-start md:gap-20 gap-8">
                <img className="md:block hidden md:w-64 rounded-xl border border-notionBorder flex-shrink-0" src={briefDescriptions?.profilePic}></img>
                <div className="flex flex-col md:gap-5 gap-4 md:items-start items-center md:text-left text-center">
                    <p className="text-notionGray font-medium text-xs tracking-widest">Hi! I'm</p>
                    <h1 className="font-bold md:text-5xl text-4xl text-notionText leading-tight">Skylar Ji</h1>
                    <p className="text-notionGray md:text-base text-sm leading-relaxed">{briefDescriptions?.introDesc}</p>

                    <div className="flex gap-3">
                        <ContactButton graphic={"/linkedin.png"} url={links?.linkedin} />
                        <ContactButton graphic={"/github.png"} url={links?.github} />
                        <ContactButton graphic={"/gmail.png"} url={links?.gmail} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HomePage;