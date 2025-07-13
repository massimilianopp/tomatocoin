import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-400 flex flex-col items-center px-4">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-10 backdrop-blur-md p-6 md:p-12 rounded-2xl shadow-lg max-w-2xl w-full text-center text-white mt-8 mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Tomatocoin 🍅</h1>
        <p className="text-base md:text-lg mb-4">The memecoin that refreshes your portfolio!</p>
        <a
          href="https://jup.ag/swap/SOL-CdczQNrp2DZ9c89LSjCyRF6VmS4VtTCBkNSjXtpvmoon"
          target="_blank"
          className="bg-white text-red-600 font-bold text-base md:text-lg py-3 px-6 rounded hover:bg-gray-100 transition inline-block mb-4"
        >
          🚀 Buy Tomatocoins
        </a>
        <div className="flex justify-center">
          <Image
            src="/tomato-girl.png"
            alt="Tomato Girl"
            width={400}
            height={400}
            className="w-full max-w-[300px] rounded-xl mt-4"
          />
        </div>
      </motion.div>

      {/* About */}
      <section className="max-w-2xl w-full text-center text-white mb-10 px-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">What is Tomatocoin?</h2>
        <p className="text-sm md:text-base">
          Tomatocoin is a fun, community-driven memecoin launched on Solana. 🍅 It's all about good vibes,
          memes, and a juicy community spirit.
        </p>
      </section>

      {/* How to Buy */}
      <section className="max-w-2xl w-full text-white mb-10 px-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">How to buy Tomatocoins</h2>
        <div className="space-y-3 text-left text-sm md:text-base">
          <p>1️⃣ Get a Solana wallet (e.g., Phantom or Solflare).</p>
          <p>2️⃣ Fund your wallet with SOL.</p>
          <p>3️⃣ Go to Jupiter (link above).</p>
          <p>4️⃣ Swap SOL for Tomatocoins 🍅.</p>
        </div>
      </section>

      {/* Community */}
      <section className="max-w-2xl w-full text-white mb-10 text-center px-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Join the community</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://x.com/offtomatocoin?s=21"
            target="_blank"
            className="border border-white text-white text-base md:text-lg py-3 px-6 rounded hover:bg-white hover:text-red-600 transition"
          >
            🐦 Follow on X
          </a>
          <a
            href="https://t.me/tomatocoinsolana"
            target="_blank"
            className="border border-white text-white text-base md:text-lg py-3 px-6 rounded hover:bg-white hover:text-red-600 transition"
          >
            💬 Join Telegram
          </a>
        </div>
      </section>

      {/* Token info */}
      <section className="max-w-2xl w-full text-white mb-10 text-center px-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Tokenomics & Info</h2>
        <p className="mb-1 break-words text-sm md:text-base">
          CA: CdczQNrp2DZ9c89LSjCyRF6VmS4VtTCBkNSjXtpvmoon
        </p>
        <p className="text-sm md:text-base">Total supply: 1,000,000,000 🍅</p>
        <a
          href="https://www.geckoterminal.com/solana/pools/3YpQ174goeK9Gg39r2eoSXVc8FLi3QwoWkD3uAcVNLSf"
          target="_blank"
          className="border border-white text-white text-base md:text-lg py-3 px-6 rounded hover:bg-white hover:text-red-600 transition inline-block mt-4"
        >
          📈 View on GeckoTerminal
        </a>
      </section>

      {/* Roadmap */}
      <section className="max-w-2xl w-full text-white mb-10 text-center px-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Roadmap</h2>
        <div className="flex justify-center">
          <Image
            src="/Roadmap.png"
            alt="Tomatocoin Roadmap"
            width={800}
            height={1200}
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>


      {/* Footer */}
      <footer className="text-white text-center mb-6 text-xs opacity-70 px-2">
        <p>This is not financial advice. Always do your own research.</p>
        <p>© 2025 Tomatocoin 🍅</p>
      </footer>
    </div>
  )
}
