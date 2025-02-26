
const Index = () => {
  return (
    <div className="min-h-screen bg-[#000033] bg-gradient-to-b from-[#000033] to-[#000066] text-white flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-16">
        <img 
          src="/lovable-uploads/48c75c3d-ff02-4088-8daa-6216303c38d3.png" 
          alt="SN Logo"
          className="w-24 md:w-32 h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-serif italic mb-4 leading-tight">
          SkyRocket your Brand With
          <span className="block italic font-serif">SkyNet</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          SkyNet provides the best web development
          <br />
          Services tailored for your needs
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full 
          transition-all duration-300 shadow-lg hover:shadow-blue-500/50
          border border-blue-400 hover:border-blue-300">
          Schedule a call
        </button>
      </div>

      {/* Pixelated Logo Background */}
      <div className="fixed bottom-0 w-full max-w-4xl h-[300px] mx-auto opacity-50 pointer-events-none">
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/48c75c3d-ff02-4088-8daa-6216303c38d3.png"
            alt="Background Logo"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-auto opacity-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
