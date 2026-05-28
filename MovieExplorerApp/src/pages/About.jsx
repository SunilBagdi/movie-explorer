// src/pages/About.jsx

const  About = () => {
  const features = [
    { icon: '🔍', title: 'Smart Search', desc: 'Real-time movie search powered by TMDB API' },
    { icon: '❤️', title: 'Favorites', desc: 'Save your favorite movies — persists across sessions' },
    { icon: '🎬', title: 'Movie Details', desc: 'Deep dive into cast, ratings, budget and more' },
    { icon: '🌙', title: 'Dark Mode', desc: 'Easy on the eyes — toggle anytime' },
    { icon: '🎯', title: 'Related Movies', desc: 'Discover similar movies you might love' },
    { icon: '⚡', title: 'Fast & Smooth', desc: 'Debounced search, lazy loading, clean UX' },
  ]

  const techStack = [
    { name: 'React 18', color: 'text-cyan-400', bg: 'bg-cyan-400/10 border-cyan-400/20' },
    { name: 'Tailwind CSS', color: 'text-teal-400', bg: 'bg-teal-400/10 border-teal-400/20' },
    { name: 'React Router', color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20' },
    { name: 'Context API', color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
    { name: 'TMDB API', color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20' },
    { name: 'localStorage', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
    { name: 'Vite', color: 'text-pink-400', bg: 'bg-pink-400/10 border-pink-400/20' },
  ]

  return (
    <div className="min-h-screen bg-gray-950">

      {/* ── Hero Section ── */}
      <div className="relative overflow-hidden">

        {/* Background glow effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96
                          bg-yellow-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border
                          border-yellow-400/20 text-yellow-400 text-xs font-medium
                          px-4 py-1.5 rounded-full mb-6">
            🎬 About MovieExplorer
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Personal
            <span className="text-yellow-400"> Movie </span>
            Universe
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            MovieExplorer ek React learning project hai — jisme real-world features
            hain jaise API integration, state management, routing aur bahut kuch!
          </p>

        </div>
      </div>

      {/* ── Stats Section ── */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: '500K+', label: 'Movies Available' },
            { number: '10+', label: 'Components Built' },
            { number: '5+', label: 'React Concepts' },
            { number: '1', label: 'Awesome Developer 😄' },
          ].map((stat) => (
            <div key={stat.label}
              className="bg-gray-900 border border-gray-800 rounded-2xl
                         p-6 text-center hover:border-yellow-400/30
                         transition-colors duration-300">
              <p className="text-3xl font-bold text-yellow-400 mb-1">
                {stat.number}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features Section ── */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-white text-2xl font-bold mb-8 text-center">
          ✨ Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6
                         hover:border-yellow-400/30 hover:-translate-y-2
                         transition-all duration-300 group">
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="text-white font-semibold mb-2 
                             group-hover:text-yellow-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tech Stack ── */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-white text-2xl font-bold mb-8 text-center">
          🛠️ Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {techStack.map((tech) => (
            <span key={tech.name}
              className={`${tech.bg} ${tech.color} border text-sm font-medium
                          px-4 py-2 rounded-full hover:scale-125
                          transition-transform duration-200 cursor-default`}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Learning Journey ── */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-white text-2xl font-bold mb-8 text-center">
          📚 Learning Journey
        </h2>
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800 
                          md:left-1/2" />

          {[
            { step: '01', title: 'Project Setup + Navbar', desc: 'Vite + React + Tailwind setup, NavLink, Outlet' },
            { step: '02', title: 'Movie Cards + Props', desc: 'Reusable components, props, destructuring' },
            { step: '03', title: 'Search + useState', desc: 'Controlled inputs, real-time filtering' },
            { step: '04', title: 'TMDB API + useEffect', desc: 'Async/await, debouncing, loading states' },
            { step: '05', title: 'Movie Details + Routing', desc: 'useParams, useNavigate, dynamic routes' },
            { step: '06', title: 'Favorites + Context API', desc: 'createContext, Provider, custom hooks' },
            { step: '07', title: 'Dark Mode + localStorage', desc: 'Theme toggle, persistent storage' },
          ].map((item, index) => (
            <div key={item.step}
              className={`relative flex gap-6 mb-8 ml-12 md:ml-0
                          ${index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}>

              {/* Dot */}
              <div className="absolute -left-12 md:left-1/2 md:-translate-x-1/2
                              w-8 h-8 bg-yellow-400 rounded-full flex items-center
                              justify-center text-gray-900 text-xs font-bold
                              border-4 border-gray-950 z-10">
                {item.step}
              </div>

              {/* Card */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl
                              p-5 w-full hover:border-yellow-400/30
                              transition-colors duration-300">
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ── Footer CTA ── */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                        border border-gray-700 rounded-3xl p-10 text-center
                        relative overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 bg-yellow-400/5 pointer-events-none" />

          <h2 className="text-white text-2xl font-bold mb-3 relative">
            Ready to Explore? 🍿
          </h2>
          <p className="text-gray-400 mb-6 relative">
            Hazaaron movies — ek jagah. Dhundho, save karo, explore karo!
          </p>
          <a href="/"
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900
                       font-bold px-8 py-3 rounded-full hover:bg-yellow-300
                       transition-colors duration-200 relative">
            🎬 Start Exploring
          </a>
        </div>
      </div>

    </div>
  )
}

export default About