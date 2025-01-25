import { calculateDuration } from '@/components/content/CurrentTimeLineExp';
import AnimationContainer from '@/components/utils/AnimationContainer';
import { skills } from '@/components/utils/mySkills';
import ShowSkills from '@/components/utils/ShowSkills';

const Skills = () => {
  return (
    <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
      <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
        Skills
      </h2>

      <p className="text-base text-gray-400">
        A look at my scriptwriting expertise and tools I've worked with. I
        started my professional writing journey{' '}
        {calculateDuration('2020-01-01', false)} ago. I have experience in
        various forms of scriptwriting and storytelling, from screenplays to
        television scripts.
      </p>

      <p className="text-base text-gray-400">
        While the field of writing is vast, I specialize in crafting compelling
        narratives for visual media, with a focus on character development and
        engaging dialogue.
      </p>

      <div className="flex flex-col items-start gap-3 mt-3">
        {skills.map(({ title, techs }) => (
          <div key={title}>
            <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">
              {title}
            </h3>

            <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
              <ShowSkills skills={techs} />
            </AnimationContainer>
          </div>
        ))}
      </div>
    </AnimationContainer>
  );
};

export default Skills;
