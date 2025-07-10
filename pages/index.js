import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-400 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-10 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg max-w-xl text-center text-white mt-12 mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Tomatocoin 🍅</h1>
        <p className="text-lg mb-2">
          Tomatocoin is a memecoin created on 28 June 2025 using the Moonshot app.
        </p>
        <p className="text-base mb-8">
          This is not financial advice, do your own research.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="https://jup.ag/swap/SOL-CdczQNrp2DZ9c89LSjCyRF6VmS4VtTCBkNSjXtpvmoon"
            target="_blank"
            className="bg-white text-red-600 font-bold text-lg py-3 rounded hover:bg-gray-100 transition"
          >
            🚀 Buy Tomatocoins
          </a>
          <a
            href="https://x.com/offtomatocoin?s=21"
            target="_blank"
            className="border border-white text-white text-lg py-3 rounded hover:bg-white hover:text-red-600 transition"
          >
            🐦 Follow on X
          </a>
          <a
            href="https://t.me/tomatocoinsolana"
            target="_blank"
            className="border border-white text-white text-lg py-3 rounded hover:bg-white hover:text-red-600 transition"
          >
            💬 Join our Telegram
          </a>
          <a
            href="https://dexscreener.com/solana/3ypq174goek9gg39r2eosxvc8fli3qwowkd3uacvnlsf"
            target="_blank"
            className="border border-white text-white text-lg py-3 rounded hover:bg-white hover:text-red-600 transition"
          >
            📈 Graph on Dexscreener
          </a>
        </div>
        <Image
          src="/tomato-girl.png"
          alt="Tomato Girl"
          width={400}
          height={400}
          className="mx-auto rounded-xl mb-6 mt-20"
        />
        <p className="text-base mt-6">
          Tomatola, official ambassador of Tomatocoin 🍅 — always ready to pump!
        </p>
      </motion.div>
    </div>
  )
}
