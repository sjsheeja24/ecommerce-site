import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#8B5A2B] to-[#D2B48C] shadow-lg shadow-[#6F4E37]/40 p-4-300 text-gray-800 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-pink-600">🎉 E-Shop 🎨</h2>
            <p className="mt-2 text-gray-700 font-semibold">
              The most playful and fun online shopping experience!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-blue-600">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="text-gray-800 hover:text-pink-600 transition">
                  🏠 Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-pink-600 transition">
                  🛍️ Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-pink-600 transition">
                  📖 About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-pink-600 transition">
                  📞 Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold text-green-600">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4 mt-3">
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                👍 Facebook
              </a>
              <a
                href="#"
                className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition"
              >
                📸 Instagram
              </a>
              <a
                href="#"
                className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
              >
                🐦 Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 mt-10">
          <p className="bg-white px-4 py-2 inline-block rounded-full shadow-md">
            &copy; {new Date().getFullYear()} E-Shop | All rights reserved 🎈
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
