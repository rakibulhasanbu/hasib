import SectionContainer from '@/components/utils/SectionContainer';
import TitleSectionPageContainer from '@/components/utils/TitleSectionPageContainer';
import AnimationContainer from '@/components/utils/AnimationContainer';
import ShowSkills from '@/components/utils/ShowSkills';
import { skills } from '@/components/utils/mySkills';
import CurrentTimeLineExp, {
  calculateDuration
} from '@/components/content/CurrentTimeLineExp';
import ProcessWork from '@/components/content/ProcessWork';
import Skills from '@/components/content/Skills';

const AboutPage = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            As a versatile storyteller with{' '}
            {calculateDuration('2021-01-01', false)}
            of screenwriting experience, I blend creative narratives with
            compelling character development. Currently expanding my expertise
            into television writing, I'm mastering various formats including
            hour-long dramas, half-hour comedies, and limited series, crafting
            engaging stories that resonate with both audiences and industry
            professionals.
          </p>

          <p className="text-base text-gray-400">
            My core strength lies in dramatic writing, with extensive experience
            crafting scripts across film, television, and digital media
            platforms. I excel in developing complex character arcs, dynamic
            dialogue, and intricate plot structures while maintaining a strong
            foundation in traditional storytelling techniques. My approach
            combines creative innovation with industry standards, adhering to
            proper screenplay formatting and contemporary narrative structures
            to deliver compelling scripts.
          </p>

          <p className="text-base text-gray-400">
            Beyond my professional projects, I'm passionate about mentoring
            emerging writers and contributing to writers' rooms. I specialize in
            adapting novels and true stories for the screen, with a particular
            focus on character-driven narratives. By leveraging both classical
            and contemporary storytelling techniques, I transform complex human
            experiences into accessible and emotionally resonant stories.
          </p>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <Skills />

        <ProcessWork />
      </div>
    </SectionContainer>
  );
};

export default AboutPage;
