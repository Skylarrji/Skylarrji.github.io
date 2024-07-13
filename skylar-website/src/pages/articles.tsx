import { fetchBriefDescriptions, BriefDescription } from '../data/briefDescriptions';
import { fetchLinks, Links } from '../data/links';
import { useState, useEffect } from 'react';
import TextButton from '../components/Buttons/textButton';
import parse from 'html-react-parser';

const ArticlesPage = () => {
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

    const formatText = (text: string | undefined) => {
        if (text) {
            return text.split('\n').map((line, index) => (
                <p key={index} className="mb-5">{parse(line)}</p>
            ));
        }
    };

    return (
        <>
            <div className="flex justify-center gap-24 pb-24">
                <div className="w-1/3">
                    <h1 className="font-semibold text-3xl mb-5 text-white">Articles</h1>
                    <p className="text-white text-lg mb-8">{formatText(briefDescriptions?.articleDesc)}</p>
                    <div className="flex gap-5">
                        <TextButton text={"Medium"} url={links?.medium}/>
                        <TextButton text={"LinkedIn"} url={links?.linkedin}/>
                    </div>
                </div>
                <img className="w-1/3 rounded-xl border-8 border-white" src={'/letter.png'}></img>
            </div>
        </>
    );
}

export default ArticlesPage;