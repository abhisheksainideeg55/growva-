import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactInfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {/* Card 1 */}
      <div className="p-8 rounded-2xl bg-white border border-gray-200/80 shadow-2xs text-center hover:shadow-xl hover:border-[#0E7490]/40 transition-all duration-300 group">
        <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center text-xl mx-auto mb-5 group-hover:bg-[#0E7490] group-hover:text-white transition-colors">
          <FaMapMarkerAlt />
        </div>
        <h4 className="font-syne font-bold text-lg text-[#0F172A] mb-2">Our Location</h4>
        <p className="font-outfit text-sm text-[#64748B]">
          123 Innovation Way, Suite 400<br />
          Tech Hub, CA 94016
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-8 rounded-2xl bg-white border border-gray-200/80 shadow-2xs text-center hover:shadow-xl hover:border-[#0E7490]/40 transition-all duration-300 group">
        <div className="w-14 h-14 rounded-2xl bg-[#E0F7F6] text-[#0E7490] flex items-center justify-center text-xl mx-auto mb-5 group-hover:bg-[#0E7490] group-hover:text-white transition-colors">
          <FaPhoneAlt />
        </div>
        <h4 className="font-syne font-bold text-lg text-[#0F172A] mb-2">Phone Number</h4>
        <p className="font-outfit text-sm text-[#64748B] mb-1">
          <a href="tel:+1234567890" className="hover:text-[#0E7490] font-medium">+1 (234) 567-8900</a>
        </p>
        <p className="font-outfit text-xs text-[#94A3B8]">Mon - Fri: 9am - 6pm EST</p>
      </div>

      {/* Card 3 */}
      <div className="p-8 rounded-2xl bg-white border border-gray-200/80 shadow-2xs text-center hover:shadow-xl hover:border-[#0E7490]/40 transition-all duration-300 group">
        <div className="w-14 h-14 rounded-2xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center text-xl mx-auto mb-5 group-hover:bg-[#0E7490] group-hover:text-white transition-colors">
          <FaEnvelope />
        </div>
        <h4 className="font-syne font-bold text-lg text-[#0F172A] mb-2">Email Address</h4>
        <p className="font-outfit text-sm text-[#64748B] mb-1">
          <a href="mailto:hello@growva.agency" className="hover:text-[#0E7490] font-medium">hello@growva.agency</a>
        </p>
        <p className="font-outfit text-xs text-[#94A3B8]">Online 24/7 client response</p>
      </div>
    </div>
  );
}
