const Header = () => {
    return (
      <header className="bg-gray-800 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white font-bold text-lg">
            MyPortfolio
          </div>
  
          {/* Nav Links */}
          <ul className="flex space-x-4 text-white">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  