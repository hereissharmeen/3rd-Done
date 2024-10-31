const ProjectsSection = () => {
    return (
      <section id="projects" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p className="mb-4">A brief description of Project 1.</p>
              <img 
              src="https://img.freepik.com/premium-vector/digital-number-frame-blue_10876-319.jpg?w=900" // Add your image path here
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
              <a 
                href="https://github.com/hereissharmeen/digitalclock" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
            
            {/* Project 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
              <p className="mb-4">A brief description of Project 2.</p>
              <img 
              src="https://i.pinimg.com/564x/b5/75/a7/b575a7a8c6b14bca4d17743b8f04c536.jpg" // Add your image path here
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
              <a 
                href="https://github.com/hereissharmeen/Games/blob/main/Game1/app.js" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
            
            {/* Project 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 3</h3>
              <p className="mb-4">A brief description of Project 3.</p>
              <img 
              src="https://img.freepik.com/premium-vector/flat-design-memory-game-cards_23-2150096047.jpg?w=740" // Add your image path here
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
              <a 
                href="https://github.com/hereissharmeen/Games/tree/main/Game1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;
  
  

