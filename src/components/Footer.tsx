
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1a3d6b] to-[#1f4f83] text-white py-8 lg:pb-0 pb-36 ">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-4">
          {/* Left - Impressum */}
          <div className="text-center md:text-left">
            <Link 
              href="/impressum" 
              className="hover:text-gray-300 transition-colors duration-200 text-sm md:text-base"
            >
              Impressum
            </Link>
          </div>

          {/* Center - Company Name */}
          <div className="text-center">
            <p className="text-xs md:text-sm font-light leading-relaxed">
              EGM - Institut für Elektrochemie, Galvanotechnik und Materialchemie
              <br />
              <span className="text-xs">Ziviltechniker GmbH</span>
            </p>
          </div>

          {/* Right - Privacy Policy */}
          <div className="text-center md:text-right">
            <Link 
              href="/datenschutz" 
              className="hover:text-gray-300 transition-colors duration-200 text-sm md:text-base"
            >
              Datenschutzerklärung
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/20 pt-4">
          <p className="text-xs md:text-sm text-gray-300">
            Copyright © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}