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
            <div className="flex justify-center px-24 gap-24 pb-24 items-center sm:text-center md:text-left lg:text-left text-center sm:flex-col md:flex-row lg:flex-row flex-col">
                <div className="lg:w-1/3">
                    <h1 className="font-semibold text-3xl mb-5 text-white">Articles</h1>
                    <p className="text-white text-lg mb-8">{formatText(briefDescriptions?.articleDesc)}</p>
                    <div className="flex gap-5 sm:justify-center md:justify-start lg:justify-start justify-center">
                        <TextButton text={"Medium"} url={links?.medium}/>
                        <TextButton text={"LinkedIn"} url={links?.linkedin}/>
                    </div>
                </div>
                <img className="sm:min-w-[400px] sm:max-w-[400px] sm:min-h-[100px] sm:max-h[100px] md:min-w-[400px] md:max-w-[400px] md:min-h-[100px] md:max-h[100px] lg:min-w-[600px] lg:max-w-[600px] lg:min-h-[300px] lg:max-h[300px] rounded-xl border-8 border-white" src={'/letter.png'}></img>
            </div>
        </>
    );
}

export default ArticlesPage;