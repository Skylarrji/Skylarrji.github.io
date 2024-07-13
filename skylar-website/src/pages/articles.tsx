import { fetchBriefDescriptions, BriefDescription } from '../data/briefDescriptions';
import { fetchLinks, Links } from '../data/links';
import { useState, useEffect } from 'react';

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

    return (
        <>
        <div className="flex pb-10">
            <div className="w-1/4">
                <h1 className="text-white">Articles</h1>
                <p className="text-white">{briefDescriptions?.articleDesc}</p>
                <div className="flex ">
                    <button>Medium</button>
                    <button>LinkedIn</button>
                </div>
            </div>
            <img className="w-1/4" src={'/letter.png'}></img>
        </div>
        </>
    );
}

export default ArticlesPage;