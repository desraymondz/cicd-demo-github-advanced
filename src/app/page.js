export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Welcome to GitHub Advanced
          </h1>
          <p className="text-2xl md:text-3xl text-red-500 font-semibold">
            CI/CD Demo
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Demonstrating continuous integration and continuous deployment with GitHub Actions
        </p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-800 rounded-lg p-6 border border-red-500/30 hover:border-red-500 transition-all">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">Automated Deploy</h3>
            <p className="text-gray-300">Push to main and watch it deploy automatically</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-red-500/30 hover:border-red-500 transition-all">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast Pipeline</h3>
            <p className="text-gray-300">Optimized workflow for quick deployments</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-red-500/30 hover:border-red-500 transition-all">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Modern Stack</h3>
            <p className="text-gray-300">Built with Next.js and GitHub Actions</p>
          </div>
        </div>

        {/* Status badge */}
        <div className="pt-8">
          <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-6 py-3 rounded-full border border-red-500/30">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            CI/CD Pipeline Active
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}
