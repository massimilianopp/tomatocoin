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
        className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg max-w-2xl text-center text-white mt-12 mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Tomatocoin 🍅</h1>
        <p className="text-lg mb-4">The memecoin that refreshes your portfolio!</p>
        <a
          href="https://jup.ag/swap/SOL-CdczQNrp2DZ9c89LSjCyRF6VmS4VtTCBkNSjXtpvmoon"
          target="_blank"
          className="bg-white text-red-600 font-bold text-lg py-3 px-6 rounded hover:bg-gray-100 transition inline-block mb-4"
        >
          🚀 Buy Tomatocoins
        </a>
        <Image
          src="/tomato-girl.png"
          alt="Tomato Girl"
          width={400}
          height={400}
          className="mx-auto rounded-xl mt-6"
        />
      </motion.div>

      {/* About */}
      <section className="max-w-2xl text-center text-white mb-12">
        <h2 className="text-3xl font-bold mb-4">What is Tomatocoin?</h2>
        <p className="text-base">
          Tomatocoin is a fun, community-driven memecoin launched on Solana.
          🍅 It's all about good vibes, memes, and a juicy community spirit.
        </p>
      </section>

      {/* How to Buy */}
      <section className="max-w-2xl text-white mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">How to buy Tomatocoins</h2>
        <div className="space-y-4 text-left">
          <p>1️⃣ Get a Solana wallet (e.g., Phantom or Solflare).</p>
          <p>2️⃣ Fund your wallet with SOL.</p>
          <p>3️⃣ Go to Jupiter (link above).</p>
          <p>4️⃣ Swap SOL for Tomatocoins 🍅.</p>
        </div>
      </section>

      {/* Community */}
      <section className="max-w-2xl text-white mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the community</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://x.com/offtomatocoin?s=21"
            target="_blank"
            className="border border-white text-white text-lg py-3 px-6 rounded hover:bg-white hover:text-red-600 transition"
          >
            🐦 Follow on X
          </a>
          <a
            href="https://t.me/tomatocoinsolana"
            target="_blank"
            className="border border-white text-white text-lg py-3 px-6 rounded hover:bg-white hover:text-red-600 transition"
          >
            💬 Join Telegram
          </a>
        </div>
      </section>

      {/* Token info */}
      <section className="max-w-2xl text-white mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Tokenomics & Info</h2>
        <p className="mb-2 break-words">
          CA: CdczQNrp2DZ9c89LSjCyRF6VmS4VtTCBkNSjXtpvmoon
        </p>
        <p>Total supply: 1,000,000,000 🍅</p>
        <a
          href="https://dexscreener.com/solana/3ypq174goek9gg39r2eosxvc8fli3qwowkd3uacvnlsf"
          target="_blank"
          className="border border-white text-white text-lg py-3 px-6 rounded hover:bg-white hover:text-red-600 transition inline-block mt-4"
        >
          📈 View on Dexscreener
        </a>
      </section>

      {/* Footer */}
      <footer className="text-white text-center mb-8 text-sm opacity-70">
        <p>This is not financial advice. Always do your own research.</p>
        <p>© 2025 Tomatocoin 🍅</p>
      </footer>
    </div>
  )
}
