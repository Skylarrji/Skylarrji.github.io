import { fetchJobs, Job } from "../data/workExperience";
import { useState, useEffect } from "react";
import Tag from "../components/Tags/Tag";
import parse from "html-react-parser";

const WorkExperiencePage = () => {
  const [jobs, setJobs] = useState<Job[]>();

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  const formatText = (text?: string) => {
    if (!text) return null;

    const updatedText = text.replace(
      /<a /g,
      '<a target="_blank" style="text-decoration: underline;" ',
    );

    return updatedText
      .split("\n")
      .map((line, index) => <p key={index}>{parse(line)}</p>);
  };

  return (
    <div id="experience">
      <div className="max-w-[960px] mx-auto px-6 py-16">
        <h2 className="font-semibold text-2xl mb-8 text-notionText tracking-tight text-center md:text-left">
          Work Experience
        </h2>

        <div className="flex flex-col gap-6 max-w-[680px] mx-auto md:mx-0">
          {jobs?.map((job, index) => {
            return (
              <div
                key={`${job.companyName}-${index}`}
                className="flex flex-col gap-4 p-5 bg-white border border-notionBorder rounded-lg"
              >
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-3 mb-1">
                    <img
                      className="w-8 h-8 object-contain bg-white rounded border border-notionBorder p-0.5 flex-shrink-0"
                      src={job.logoLink}
                      alt={`${job.companyName} logo`}
                    />
                    <h4 className="text-notionText font-semibold text-sm">
                      {job.companyName}
                    </h4>
                  </div>

                  <h5 className="text-notionGray font-medium text-sm">
                    {job.role}
                  </h5>

                  <div className="flex flex-wrap gap-1.5 items-center mt-0.5">
                    {job.skills.map((skill) => (
                      <Tag key={skill} name={skill} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-notionGray text-xs leading-relaxed">
                  {formatText(job.description)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
