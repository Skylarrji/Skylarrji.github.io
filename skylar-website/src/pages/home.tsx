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
            <div className="w-screen h-96 flex items-center justify-center gap-40 mt-10">
                <div className="flex flex-col w-1/4 gap-7">
                    <h3 className="font-semibold text-xl">Hi! I'm</h3>
                    <h1 className="font-semibold text-7xl">Skylar Ji</h1>
                    <h3 className="font-semibold text-xl leading-10">{briefDescriptions?.introDesc}</h3>
                
                    <div className="flex">
                        <ContactButton graphic={"/linkedin.png"} url={links?.linkedin}/>
                    </div>
                </div>
                <img className="w-96 rounded-xl border border-8 border-white" src={briefDescriptions?.profilePic}></img>
            </div>
        </>
    );
};


export default HomePage;