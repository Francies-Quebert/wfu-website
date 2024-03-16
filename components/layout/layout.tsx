import Image from 'next/image';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav className="flex justify-center items-center">
        <Image height={150} alt="logo" src={require('@assets/logo.png')} />
      </nav>
      {children}
    </main>
  );
}

export default Layout;
