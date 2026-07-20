import {
  fetchBriefDescriptions,
  BriefDescription,
} from "../data/briefDescriptions";
import { fetchLinks, Links } from "../data/links";
import { useState, useEffect } from "react";
import TextButton from "../components/Buttons/textButton";
import parse from "html-react-parser";

const ArticlesPage = () => {
  const [briefDescriptions, setBriefDescriptions] = useState<
    BriefDescription | undefined
  >();
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
      return text.split("\n").map((line, index) => (
        <p key={index} className="mb-5">
          {parse(line)}
        </p>
      ));
    }
  };

  return (
    <div id="articles">
      <div className="max-w-[960px] mx-auto px-6 py-16">
        <h2 className="font-medium text-2xl mb-4 text-notionText tracking-tight text-center md:text-left">
          Articles
        </h2>
        <div className="text-notionGray text-sm font-normal leading-relaxed mb-6 text-center md:text-left [&_strong]:font-normal [&_b]:font-normal">
          {formatText(briefDescriptions?.articleDesc)}
        </div>
        <div className="flex gap-3 justify-center lg:justify-start">
          <TextButton text={"Medium"} url={links?.medium} />
          <TextButton text={"LinkedIn"} url={links?.linkedin} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
