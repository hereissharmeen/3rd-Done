const HeroSection = () => {
    return (
      <section className="bg-gray-900 text-white h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-bus_1258-177174.jpg?t=st=1729762345~exp=1729765945~hmac=643d6c42583534b354e72f32ae183fcb863e4655d64b7f8d9859a1ed6d2aa50b&w=996')" }}>

        <div className="text-center">
          <h1 className="text-5xl font-sans mb-4">I'm Sharmeen</h1>
          <h1 className="text-5xl font-sans mb-4">Full Stack Developer</h1>
          <a
          href="#projects"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mt-8 inline-block"
        >
          See My Work
        </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  