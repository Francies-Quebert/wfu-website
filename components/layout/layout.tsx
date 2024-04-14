import Image from 'next/image';
import React from 'react';
import logo from '@assets/logo.png';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-poppins">
      <nav className="flex justify-center items-center">
        <Image height={150} alt="logo" src={logo} />
      </nav>
      {children}
    </main>
  );
}

export default Layout;
