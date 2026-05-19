import React from "react";

function HeroSection() {
  return (
    <section className="min-h-screen bg-[#050510] text-white flex items-center px-10">
      {/* LEFT */}
      <div className="w-1/2 space-y-6">
        <p className="text-purple-400 uppercase tracking-[5px]">
          Full Stack Developer
        </p>

        <h1 className="text-7xl font-bold leading-tight">
          Creating Websites
          <br />
          That Stand Out
        </h1>

        <p className="text-gray-400 text-lg max-w-lg">
          I build modern, responsive, and high-performance web applications with
          clean design and smooth user experiences.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 hover:scale-105 transition">
            View Work
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 hover:border-purple-500 transition">
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 flex justify-center items-center relative">
        {/* glow background */}
        <div className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-[140px] opacity-30"></div>
        <div className="absolute w-[250px] h-[250px] bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

        {/* laptop image */}
        <img
          src="src\assets\laptop.jpg"
          alt="laptop"
          className="relative w-[420px] drop-shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
}

export default HeroSection;
