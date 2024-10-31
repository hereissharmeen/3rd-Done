import Header from './component/header/page';
import Hero from './component/herosection/page';
import About from './component/about/page';
import Skills from './component/skills/page';
import Projects from './component/project/page';
import Contact from './component/contact/page';
import Footer from './component/footer/page';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
