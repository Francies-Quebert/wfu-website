import Image from 'next/image';
import { FileUploader } from '@/components/file-upload';
import Address from '@/components/address';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-[#92d4deff] flex justify-center">
        <Image
          className="bg-cover w-96"
          alt={`Couple's in a church`}
          src={require('@assets/bg.gif')}
        />
      </div>

      <div className=" w-full max-w-4xl py-10">
        <Address />
      </div>

      <div className="py-2 px-4 text-center  max-w-xl text-primary-dark">
        Add your favourite memories from the wedding you can select multiple
        file at once
      </div>
      <div className="max-w-full py-4 text-center ">
        <FileUploader />
      </div>
    </main>
  );
}
