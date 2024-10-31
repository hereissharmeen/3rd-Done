import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa'; // Import icons
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'; // Additional icons

const SkillsSection = () => {
  return (
    <section id='skills' className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-orange-600 text-6xl mb-2" />
            <p className="text-lg">HTML5</p>
          </div>
          
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-blue-600 text-6xl mb-2" />
            <p className="text-lg">CSS3</p>
          </div>
          
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-yellow-500 text-6xl mb-2" />
            <p className="text-lg">JavaScript</p>
          </div>
          
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-400 text-6xl mb-2" />
            <p className="text-lg">React.js</p>
          </div>
          
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-gray-500 text-6xl mb-2" />
            <p className="text-lg">Next.js</p>
          </div>
          
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-teal-400 text-6xl mb-2" />
            <p className="text-lg">Tailwind CSS</p>
          </div>

        </div>
      </div>
    </section>
  );
};
export default SkillsSection;

