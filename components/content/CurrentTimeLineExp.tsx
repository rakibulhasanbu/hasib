import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Creative Writers Studio
          </a>{' '}
          | Dec. 2024 - {calculateDuration('2024-12-01', true)}
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Lead Screenwriter developing original content for streaming platforms
          and television. Collaborated with production teams using
          industry-standard screenplay formatting and story development tools.
          Implemented writer's room best practices, managed script revisions
          through Final Draft, and maintained story consistency across multiple
          episodes.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Freelance Screenwriter | Jul. 2024 - Nov. 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Wrote and developed various screenwriting projects including feature
          films, short films, and web series. Specialized in story structure,
          character development, and dialogue writing. Provided script
          consultation and revision services for independent filmmakers and
          production companies.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          Junior Screenwriter | Apr. 2024 - Jun. 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Assisted senior writers in script development and research.
          Contributed to story development meetings, wrote script coverage, and
          helped maintain story bibles for ongoing projects. Gained hands-on
          experience with industry-standard screenwriting software and
          production workflows.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
