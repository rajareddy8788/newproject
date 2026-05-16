import birthdayPic from './rajasekhar.jpg';
import { motion } from 'framer-motion';
import { Sparkles, Crown, PartyPopper, Music2 } from 'lucide-react';

export default function UltraBirthdayWebsite() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Animated Luxury Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff0080_0%,#090014_35%,#000000_100%)]"></div>

      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-200px] left-[-100px] w-[700px] h-[700px] bg-pink-500 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-200px] right-[-100px] w-[700px] h-[700px] bg-cyan-400 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute top-[40%] left-[35%] w-[400px] h-[400px] bg-yellow-300 blur-[140px] rounded-full opacity-30"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(70)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ y: '-10vh', opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">

        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-10 px-8 py-3 rounded-full bg-white/10 backdrop-blur-2xl border border-pink-400/30 shadow-[0_0_50px_rgba(255,0,150,0.5)]"
        >
          <span className="flex items-center gap-3 text-pink-200 tracking-[8px] uppercase font-bold text-sm md:text-lg">
            <Crown className="text-yellow-300" />
            July 15 Birthday Celebration 2026
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-[180px] font-black uppercase leading-none tracking-[10px]
          bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-300
          bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(255,255,255,0.8)]"
        >
          HAPPY
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-[140px] font-black uppercase text-white mt-2"
        >
          BIRTHDAY
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-4xl md:text-7xl font-bold italic
          bg-gradient-to-r from-pink-400 via-yellow-200 to-cyan-300
          bg-clip-text text-transparent"
        >
          Rajasekhar ✨
        </motion.div>

        {/* Hero Layout */}
        <div className="mt-20 grid md:grid-cols-2 gap-20 items-center max-w-7xl w-full">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            className="text-left"
          >
            <h3 className="text-4xl md:text-6xl font-black leading-tight">
              The Most <span className="text-pink-400">Electrifying</span>
              <br />
              Birthday Night 🎉
            </h3>

            <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed">
              A night filled with vibes, music, luxury, memories and celebrations.
              July 15 is not just a birthday — it’s a cinematic experience ✨
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-6">
              <button className="px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white text-xl font-black shadow-[0_0_60px_rgba(255,0,255,0.6)] hover:scale-110 transition duration-500 flex items-center gap-3">
                <PartyPopper /> Celebrate
              </button>

              <button className="px-10 py-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl text-white text-xl font-black hover:bg-white/20 hover:scale-110 transition duration-500 flex items-center gap-3">
                <Music2 /> Party Vibes
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative flex justify-center"
          >
            {/* Glow Rings */}
            <div className="absolute w-[550px] h-[550px] border border-pink-500/40 rounded-full animate-ping"></div>
            <div className="absolute w-[650px] h-[650px] border border-cyan-400/20 rounded-full animate-pulse"></div>

            {/* Glow Background */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 blur-3xl opacity-60 animate-pulse"></div>

            {/* Main Image */}
            <div className="relative rounded-[50px] p-3 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.3)] hover:scale-105 transition duration-700">
              <img
                src={birthdayPic}
                alt="Rajasekhar"
                className="w-[340px] md:w-[500px] rounded-[40px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">

          {[
            {
              title: 'Luxury Vibes',
              color: 'from-pink-500 to-purple-500',
              desc: 'An unforgettable birthday celebration filled with premium vibes.'
            },
            {
              title: 'Epic Memories',
              color: 'from-cyan-400 to-blue-500',
              desc: 'Capturing moments that will stay forever in hearts.'
            },
            {
              title: 'Party Energy',
              color: 'from-yellow-300 to-orange-500',
              desc: 'Music, lights, celebration and unstoppable birthday energy.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -15, scale: 1.03 }}
              className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-2xl p-10 shadow-[0_0_50px_rgba(255,255,255,0.08)]"
            >
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${item.color}`}></div>

              <div className="relative z-10">
                <Sparkles className="w-12 h-12 text-yellow-300 mb-6" />

                <h4 className="text-4xl font-black mb-5">{item.title}</h4>

                <p className="text-xl text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-28 max-w-5xl"
        >
          <p className="text-4xl md:text-6xl italic font-bold leading-relaxed bg-gradient-to-r from-pink-400 via-yellow-200 to-cyan-300 bg-clip-text text-transparent">
            “This isn’t just my birthday... it’s the beginning of another legendary year ✨”
          </p>
        </motion.div>
      </div>
    </div>
  );
}

