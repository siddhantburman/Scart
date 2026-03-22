import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-blue-50 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Useful Links */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Useful Links</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Blog</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>FAQs</li>
              <li>Security</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <ul className="space-y-2 text-gray-600 mt-9">
              <li>Partner</li>
              <li>Franchise</li>
              <li>Seller</li>
              <li>Warehouse</li>
              <li>Deliver</li>
              <li>Resources</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-semibold text-lg mb-4">
              Categories <span className="text-blue-600 text-sm ml-2">see all</span>
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>Snacks & Munchies</li>
              <li>Beverages</li>
              <li>Dairy & Breakfast</li>
              <li>Fruits & Vegetables</li>
              <li>Instant & Frozen Food</li>
              <li>Personal Care</li>
              <li>Cleaning & Household</li>
              <li>Toys</li>
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <ul className="space-y-2 text-gray-600 mt-9">
              <li>Dairy & Breakfast</li>
              <li>Instant & Frozen Food</li>
              <li>Sweet Tooth</li>
              <li>Sauces & Spreads</li>
              <li>Cleaning Essentials</li>
              <li>Pet Care</li>
              <li>Kitchen & Dining</li>
              <li>Stationery Needs</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500 text-sm">
            © Scart Commerce Private Limited, 2026
          </p>

          {/* Download App */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <p className="font-medium">Download App</p>

            <img
              className="h-10"
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt=""
            />

            <img
              className="h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt=""
            />
          </div>

          {/* Social Icons using SVG */}
          <div className="flex gap-4 mt-4 md:mt-0">

            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm">f</span>
            </div>

            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm">X</span>
            </div>

            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm">in</span>
            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
