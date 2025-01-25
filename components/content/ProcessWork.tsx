import AnimationContainer from '../utils/AnimationContainer';

const myWorkProcess = [
  {
    id: '1',
    title: 'Discovery & Strategy',
    des: 'We begin with an in-depth consultation to understand your vision, goals, and project requirements. This crucial phase involves analyzing your target audience, defining key performance indicators, and establishing a comprehensive project roadmap that aligns with your business objectives.',
    delay: 0.3
  },
  {
    id: '2',
    title: 'Design & Prototyping',
    des: 'Leveraging industry-leading tools like Figma, we create high-fidelity prototypes that bring your vision to life. Our design process emphasizes user-centric interfaces, brand consistency, and responsive layouts that deliver seamless experiences across all devices.',
    delay: 0.4
  },
  {
    id: '3',
    title: 'SEO & Content Strategy',
    des: 'Our data-driven SEO approach combines technical optimization with compelling content strategy. We implement advanced search engine optimization techniques while developing engaging, value-driven content that resonates with your audience and drives sustainable organic growth.',
    delay: 0.5
  },
  {
    id: '4',
    title: 'Development & Implementation',
    des: 'During this phase, we transform approved designs into robust, scalable code. Our development process adheres to industry best practices, ensuring clean architecture, optimal performance, and seamless integration of all specified functionalities.',
    delay: 0.6
  },
  {
    id: '5',
    title: 'Quality Assurance',
    des: 'Our rigorous testing protocol encompasses performance optimization, cross-browser compatibility, security audits, and accessibility compliance. We meticulously verify every feature to ensure your website meets the highest standards of excellence.',
    delay: 0.7
  },
  {
    id: '6',
    title: 'Launch & Support',
    des: 'Upon successful deployment, we provide comprehensive documentation and optional ongoing maintenance services. Our support ensures your digital presence remains cutting-edge, secure, and optimized for peak performance.',
    delay: 0.8
  }
];

const ProcessWork = () => {
  return (
    <AnimationContainer customClassName="w-full mb-4">
      <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-12 text-white text-start">
        My work process
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mx-auto">
        {myWorkProcess.map(({ id, title, des, delay }) => (
          <AnimationContainer
            key={id}
            customClassName="rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease"
            customDelay={delay}
          >
            <h3 className="font-bold text-1xl tracking-tight text-white text-start">
              {title}
            </h3>

            <p className="mt-2 text-base text-gray-400">{des}</p>
          </AnimationContainer>
        ))}
      </div>
    </AnimationContainer>
  );
};

export default ProcessWork;
