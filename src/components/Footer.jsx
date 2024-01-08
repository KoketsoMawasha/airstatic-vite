import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white p-4 text-center fixed bottom-0 w-full">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Air-static. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
