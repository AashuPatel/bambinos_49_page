import React from 'react';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const TrustpilotIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#00B67A" />
  </svg>
);

const TVIcon = () => (
  <svg className="w-4 h-4 text-blue-600 mr-1" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="11" rx="2" fill="white" stroke="#2563eb" strokeWidth="1.5" /><rect x="7" y="17" width="10" height="2" rx="1" fill="#2563eb" /><path d="M8 10h8v4H8z" fill="#2563eb" opacity=".2" /></svg>
);

const FlameIcon = () => (
  <svg className="w-4 h-4 text-orange-500 mr-1" fill="none" viewBox="0 0 24 24"><path d="M12 2C12 2 7 7 7 12a5 5 0 0010 0c0-5-5-10-5-10z" fill="#fbbf24" /><path d="M12 22a7 7 0 01-7-7c0-2.5 1.5-5.5 7-13 5.5 7.5 7 10.5 7 13a7 7 0 01-7 7z" fill="#fb923c" /></svg>
);

const TrustBadges = () => (
  <div className="w-full flex flex-col gap-2 items-center">
    {/* Google & Trustpilot row */}
    <div className="flex w-full gap-2 mb-1">
      <div className="flex items-center gap-2 px-3 py-3 bg-white text-gray-700 rounded-full border border-gray-200 flex-1 justify-center">
        <GoogleIcon />
        <span className="font-semibold text-sm">4.9 on Google</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-3 bg-white text-gray-700 rounded-full border border-gray-200 flex-1 justify-center">
        <TrustpilotIcon />
        <span className="font-semibold text-sm">4.8 on Trustpilot</span>
      </div>
    </div>
    {/* Outlined pills row: responsive stack */}
    <div className="flex flex-col sm:flex-row w-full gap-2 items-center justify-center">
      {/* Shark Tank outlined pill */}
      <div className="min-w-full flex items-center  py-2 border border-blue-600 text-blue-700 rounded-lg font-medium text-sm bg-white  sm:w-auto justify-center">
        <TVIcon />
        <span>As seen on Shark Tank</span>
      </div>
      {/* Few seats left outlined pill */}
      {/* <div className="flex items-center px-11 py-2  bg-yellow-100 text-yellow-800 border border-yellow-300  rounded-lg font-medium text-sm  w-full sm:w-auto justify-center">
        <FlameIcon />
        <span> Only Limited slots available at just 49-/</span>
      </div> */}
    </div>
    {/* Large Demo Class pill - now white, gray border, less radius */}
    <div className="flex items-center justify-center w-full mt-1">
      <div className="w-full flex items-center justify-center px-0">
        <span className="w-full text-center px-20 py-3 bg-indigo-600 border border-gray-300 rounded-full text-white font-extrabold text-xl tracking-wide">Demo Class: ₹49</span>
      </div>
    </div>
  </div>
);

export default TrustBadges;
