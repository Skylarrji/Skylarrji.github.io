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
        <>
            <div className="w-screen h-96 flex lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center lg:gap-36 md:gap-36 sm:gap-20 gap-5 mt-28">
                <img className="lg:w-96 md:w-80 sm:w-72 w-80 rounded-xl border border-8 border-white" src={briefDescriptions?.profilePic}></img>
                <div className="flex flex-col lg:w-1/4 md:w-1/3 sm:w-1/3 w-2/3 lg:gap-7 md:gap-6 sm:gap-5 gap-4">
                    <h3 className="font-semibold lg:text-xl md:text-lg sm:text-base text-base">Hi! I'm</h3>
                    <h1 className="font-semibold lg:text-6xl md:text-5xl sm:text-5xl text-5xl">Skylar Ji</h1>
                    <h3 className="font-semibold lg:text-xl md:text-lg sm:text-base text-base lg:leading-10">{briefDescriptions?.introDesc}</h3>
                
                    <div className="flex gap-7">
                        <ContactButton graphic={"/linkedin.png"} url={links?.linkedin}/>
                        <ContactButton graphic={"/github.png"} url={links?.github}/>
                        <ContactButton graphic={"/gmail.png"} url={links?.gmail}/>
                        <ContactButton graphic={"/resume.png"} url={links?.resume}/>
                    </div>
                </div>
            </div>
            <img className="w-screen mt-20" src={'/clouds.svg'}></img>
        </>
    );
};


export default HomePage;