import AboutMe from '@/components/content/AboutMe';
import ContactMe from '@/components/content/ContactMe';
import CurrentFavTech from '@/components/content/CurrentFavTech';
import CurrentLearning from '@/components/content/CurrentLearning';
import CurrentTimeLineExp from '@/components/content/CurrentTimeLineExp';
import Hero from '@/components/content/Hero';
import Skills from '@/components/content/Skills';
import SectionContainer from '@/components/utils/SectionContainer';

const HomePage = () => {
  return (
    <SectionContainer>
      <Hero />

      <CurrentFavTech />
      <CurrentLearning />

      <div className="w-full flex flex-col items-start">
        <AboutMe />

        <CurrentTimeLineExp />

        {/* <FavProjects /> */}

        <Skills />

        <ContactMe />
      </div>
    </SectionContainer>
  );
};

export default HomePage;
