'use client';
import Lottie from 'react-lottie';
import * as animationData from '@assets/loader.json';
import { useLoading } from '@/hooks/use-loading';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Loading() {
  useLoading();

  return (
    <div className="flex self-center">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default Loading;
