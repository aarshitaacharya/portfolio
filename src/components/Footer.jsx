import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className = "border-t-2 border-black bg-[#FFF8E1] py-6 px-6 md:px-20">
        <div className = "max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-black font-medium space-y-4 md:space-y-0">
            <div>© Aarshita Acharya {new Date().getFullYear()}</div>

                {/* Social Links */}
            <div className="flex space-x-6">
            <a
                href="http://github.com/aarshitaacharya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
            >
                <FaGithub className='w-5 h-5' />
            </a>
            <a
                href="http://linkedin.com/in/aarshita-acharya-095429202/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
            >
                <FaLinkedin className='w-5 h-5' />
            </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer