import { Mail, PhoneIncoming, Popcorn } from "lucide-react";
import React from "react";
export default function Footer() {
  return (
    <div className="w-full bg-indigo-700 md:h-60 h-70 text-white md:flex flex-wrap md:justify-between p-4 pt-8 md:pt-10 md:pr-15 md:pl-15">
      <div className="flex flex-col gap-2 pb-7">
        <div className="flex items-center gap-1 text-xl">
          <Popcorn className="text-white h-6 w-6" />
          <p className="font-bold">MovieHub</p>
        </div>
        <p className="text-gray-300">© 2024 MovieHub. All Rights Reserved.</p>
      </div>

      <div className="flex md:flex-row gap-10">
        <div className="flex flex-col md:gap-3">
          <p className="md:text-xl text-lg">Contact Information</p>
          <p></p>
          <div className="flex items-center md:gap-4 gap-2">
            <Mail className="w-6 h-6" />
            <div className="text-sm">
              <p>Email:</p>
              <p>Support@movieHub.com</p>
            </div>
          </div>
          <div className="flex items-center md:gap-4 gap-2">
            <PhoneIncoming className="w-6 h-6" />
            <div className="text-sm">
              <p>Contact Us!</p>
              <p>+976 99674978</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="md:text-xl text-lg">Follow Us</p>
          <div className="flex md:gap-3 cursor-pointer text-sm md:flex-row flex-col">
            <a href="https://www.facebook.com/" className="href">
              Facebook
            </a>
            <a href="https://www.instagram.com/" className="href">
              Instagram
            </a>
            <a href="#" className="href">
              Twitter
            </a>
            <a
              href="https://www.youtube.com/watch?v=0eJA_6Qz_xU&list=RD0eJA_6Qz_xU&start_radio=1"
              className="href"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
