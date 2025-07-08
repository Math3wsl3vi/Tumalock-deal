import Image from 'next/image'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Column */}
          <div className=''>
            <Image src='/images/logo.png' alt='logo' width={300} height={300} className='w-1/2'/>
          </div>

          {/* Solutions Column */}
          <div className=''>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Automation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Commerce</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Insights</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Submit ticket</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Guides</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="about" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Press</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className='md:-mt-10'>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">License</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© 2025 Tumalock Deal. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/mantlekenya/" className="text-gray-600 hover:text-gray-900">
              <BsInstagram className="h-5 w-5" />
            </a>
            <a href="https://x.com/mantle_networks" className="text-gray-600 hover:text-gray-900">
              <BsTwitter className="h-5 w-5" />
            </a>
            <a href="https://github.com/Math3wsl3vi" className="text-gray-600 hover:text-gray-900">
              <BsGithub className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/levi-mathews-math3wsl3vi" className="text-gray-600 hover:text-gray-900">
              <BsLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}