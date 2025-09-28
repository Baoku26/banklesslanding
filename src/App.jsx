import { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Zap,
  ExternalLink,
  Twitter,
  FileSearch,
} from "lucide-react";
import "./App.css";

export default function BanklessLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCopyAlert, setShowCopyAlert] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contractAddress = "0xfC8A5aeEfAd8cC23f629489Cdc6b0Ec883D04702";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowCopyAlert(true);
    setTimeout(() => setShowCopyAlert(false), 2000);
  };

  const BanklessLogo = () => (
    <div className="flex items-center justify-center">
      <svg width="200" height="60" viewBox="0 0 400 120" className="text-white">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FFC6" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        {/* Stylized "B" with radiating lines */}
        <g transform="translate(20, 20)">
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1="40"
              y1="40"
              x2={40 + Math.cos((i * Math.PI) / 10) * 30}
              y2={40 + Math.sin((i * Math.PI) / 10) * 30}
              stroke="url(#logoGradient)"
              strokeWidth="2"
              opacity={0.8}
            />
          ))}
          <rect x="10" y="10" width="8" height="60" fill="url(#logoGradient)" />
          <rect x="18" y="10" width="25" height="8" fill="url(#logoGradient)" />
          <rect x="18" y="36" width="20" height="8" fill="url(#logoGradient)" />
          <rect x="18" y="62" width="25" height="8" fill="url(#logoGradient)" />
        </g>

        {/* ANKLESS text */}
        <text
          x="120"
          y="55"
          fontFamily="Arial Black, sans-serif"
          fontSize="36"
          fill="url(#logoGradient)"
          fontWeight="900"
        >
          ANKLESS
        </text>
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A1F1C] text-white overflow-x-hidden">
      {/* Copy Alert Popup */}
      {showCopyAlert && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 bg-[#00ffc881] text-[#0A1F1C] px-6 py-3 rounded-full font-bold shadow-lg ease-in-out">
          ✓ Address Copied to Clipboard!
        </div>
      )}
      {/*Nav*/}
      <div className="fixed z-10 top-0 py-2 mb-8 w-full flex items-center justify-center bg-[#0A1F1C]">
        {/* <BanklessLogo /> */}
        <img
          src="logo.png"
          alt="logo"
          width="150px"
          className="animate-pulse"
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 relative mb-15 pt-20">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-[#00FFC6] to-white bg-clip-text text-transparent">
              XPL WILL MAKE
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-[#00FFC6] bg-clip-text text-transparent">
              EVERYONE BANKLESS
            </span>
            <br />
            <span className="text-[#00FFC6]">SOON.</span>
          </h1>

          <p
            className="text-[18px] md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto font-light"
            style={{ fontFamily: "'Inter',sans-serif" }}
          >
            The viral memecoin paired on Plasma, redefining what it means to go
            BANKLESS in the age of Web3.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 justify-center">
            <a
              href="https://mevx.io/plasma/0xfC8A5aeEfAd8cC23f629489Cdc6b0Ec883D04702"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#00FFC6] text-[#0A1F1C] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00FFC6]/25 flex items-center justify-center"
              style={{ fontFamily: "'Montserrat',sans-serif" }}
            >
              <Zap size={20} className="mr-2 text-[#0A1F1C]" />
              Buy Bankless
            </a>
            <a
              href="https://x.com/i/communities/1972012632203731133"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#00FFC6] text-[#00FFC6] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#00FFC6] hover:text-[#0A1F1C] hover:scale-105 flex items-center justify-center"
              style={{ fontFamily: "'Montserrat',sans-serif" }}
            >
              <Users size={20} className="mr-2" />
              Join Community
            </a>
          </div>
        </div>

        {/* <div className="absolute bottom-5 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#00FFC6] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#00FFC6] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </section>

      {/* About Section */}
      <section className="py-20 md:px-10">
        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="w-[80%] md:w-[60%]">
              <h2
                className="text-4xl text-center md:text-left md:text-5xl font-bold mb-6 text-[#00FFC6]"
                style={{ fontFamily: "'Orbitron',sans-serif" }}
              >
                Why Bankless?
              </h2>
              <p
                className="text-[18px] text-center md:text-left text-gray-300 leading-relaxed mb-8"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                The whole point of stablecoins — and one of Plasma's aims — is
                to provide an alternative to the traditional banking system,
                making people BANKLESS. Our fast-growing community is here to
                support the mission.
              </p>
              {/* <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#00FFC6]/20 flex items-center justify-center">
                  <span className="text-[#00FFC6] font-bold">100+</span>
                </div>
                <span className="text-gray-400">Active community members</span>
              </div> */}
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#00FFC6]/20 rounded-full blur-xl"></div>
                <img src="logo.png" alt="logo" width="150px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-15 px-4 bg-[#0A1F1C]/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Orbitron',sans-serif" }}
          >
            Join the Movement
          </h2>
          <p
            className="text-[18px] text-gray-300 mb-12"
            style={{ fontFamily: "'Inter',sans-serif" }}
          >
            Over 300+ members are already discussing and building the Bankless
            future on X. Be part of the viral wave.
          </p>

          <div className="bg-gradient-to-r from-[#00FFC6]/10 to-transparent border-l-4 border-[#00FFC6] p-8 mb-12 text-left max-w-2xl mx-auto">
            <p className="text-lg italic text-gray-300">
              "The whole point of stablecoins & one of Plasma's aims is to
              provide an alternative to the traditional banking system, making
              people BANKLESS."
            </p>
            {/* <p className="text-[#00FFC6] mt-4 font-semibold">— Pinned Post</p> */}
          </div>

          <a
            href="https://x.com/i/communities/1972012632203731133"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-[#00FFC6] to-[#00FFC6]/80 text-[#0A1F1C] px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00FFC6]/25"
          >
            <Users size={20} className="mr-2" />
            Join Community on X
          </a>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            style={{ fontFamily: "'Orbitron',sans-serif" }}
          >
            Token Details
          </h2>

          <div
            className="grid md:grid-cols-2 gap-8"
            style={{ fontFamily: "'inter',sans-serif" }}
          >
            <div className="bg-gradient-to-br from-[#00FFC6]/10 to-transparent border border-[#00FFC6]/30 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Name</span>
                  <span className="font-bold text-[#00FFC6]">Bankless</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Ticker</span>
                  <span className="font-bold">BANKLESS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Pair</span>
                  <span className="font-bold">BANKLESS/XPL</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00FFC6]/10 to-transparent border border-[#00FFC6]/30 rounded-xl p-8">
              <div className="space-y-4">
                <span className="text-gray-400 block">Contract Address</span>
                <div className="bg-[#0A1F1C] rounded-lg p-4 border border-[#00FFC6]/20">
                  <code className="text-sm text-[#00FFC6] break-all">
                    {contractAddress}
                  </code>
                </div>
                <button
                  onClick={() => copyToClipboard(contractAddress)}
                  className="w-full bg-[#00FFC6]/20 hover:bg-[#00FFC6]/30 text-[#00FFC6] px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                  style={{ fontFamily: "'Montserrat',sans-serif" }}
                >
                  Copy Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="buy"
        className="py-20 px-4 bg-gradient-to-t from-[#00FFC6]/5 to-transparent"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Orbitron',sans-serif" }}
          >
            Go Bankless Today
          </h2>
          <p
            className="text-[18px] text-gray-300 mb-12"
            style={{ fontFamily: "'Inter',sans-serif" }}
          >
            Join the revolution. Break free from traditional banking.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`https://mevx.io/plasma/0xfC8A5aeEfAd8cC23f629489Cdc6b0Ec883D04702`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00FFC6] text-[#0A1F1C] px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00FFC6]/25 flex items-center justify-center"
              style={{ fontFamily: "'Montserrat',sans-serif" }}
            >
              <Zap size={20} className="mr-2 text-[#0A1F1C]" />
              Buy Now
            </a>
            {/* <a
              href={`https://etherscan.io/address/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#00FFC6] text-[#00FFC6] px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#00FFC6] hover:text-[#0A1F1C] hover:scale-105 flex items-center justify-center"
              style={{ fontFamily: "'Montserrat',sans-serif" }}
            >
              <FileSearch size={20} className="mr-2" />
              View Contract
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00FFC6]/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-8">
              <a
                href="https://x.com/i/communities/1972012632203731133"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FFC6] transition-colors duration-300 flex items-center"
              >
                <Users size={20} className="mr-2" />
                Community on X
              </a>
              <a
                href={`https://etherscan.io/address/${contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FFC6] transition-colors duration-300 flex items-center"
              >
                <ExternalLink size={16} className="mr-2" />
                Etherscan
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Bankless Memecoin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
