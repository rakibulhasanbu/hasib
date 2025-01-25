import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        I am a creative and passionate script writer with a keen eye for
        compelling storytelling and engaging content creation. With over 5 years
        of experience crafting content for YouTube, websites, and various
        digital platforms, I specialize in transforming ideas into captivating
        narratives that resonate with audiences. My expertise spans across
        multiple genres, from educational content and brand storytelling to
        entertainment and promotional materials. I pride myself on delivering
        scripts that not only engage viewers but also drive meaningful
        engagement and achieve client objectives.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
