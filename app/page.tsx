import Image from 'next/image';

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
      <div className="py-6 px-4">
        <div className="font-bonheur-royale text-6xl text-center">
          Larson & Muriel
        </div>
      </div>
    </main>
  );
}
