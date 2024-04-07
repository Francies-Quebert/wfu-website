'use client';
import { Suspense } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '@assets/loader.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Loader = () => {
  return (
    <Suspense>
      <div className="flex max-w-full max-h-full">
        <Lottie options={defaultOptions} />
      </div>
    </Suspense>
  );
};
