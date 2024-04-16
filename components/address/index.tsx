import React from 'react';

const Address = () => {
  return (
    <div className="lg:px-0 px-6">
      <div className="bg-[#92d4de2e] py-7">
        <div className="uppercase tracking-wider font-semibold text-sm text-center">
          <p>Love it always protects,always </p>
          <p>trusts, always hopes, always</p>
          <p>perservers, love never fails.</p>
        </div>
        <div className="py-4 text-center text-sm font-semibold">
          <p>1 Corinthians 13: 7-8</p>
        </div>
        <div className="font-bonheur-royale text-6xl text-center py-7">
          Larson & Muriel
        </div>

        <div className=" flex lg:flex-row flex-col lg:gap-24 gap-8  capitalize font-semibold text-sm justify-center t  items-center">
          <div className="lg:text-left text-center">
            <p>s/o mr. simson fernandes</p>
            <p>& mrs. judith vas</p>
          </div>
          <div className="lg:text-right text-center">
            <p>d/o mr. jose maria andre fernandes</p>
            <p>& mrs. rosalina fernandes</p>
          </div>
        </div>
        <div className="flex gap-12 text-center justify-center items-center py-6 ">
          <div className="border-t-2 border-b-2 border-black w-24 p-2">
            <p>Monday</p>
          </div>
          <div className="tracking-widest font-semibold">
            <h2 className="text-lg ">May</h2>
            <p className="font-bold text-3xl">8</p>
            <h2>2024</h2>
          </div>
          <div className="border-t-2 border-b-2 border-black w-24 p-2">
            <p>3.30 pm</p>
          </div>
        </div>
        <div className="text-center font-medium space-y-3">
          <div className=" uppercase font-semibold tracking-widest">
            <h2>Holy cross church </h2>
            <h2>Verna,goa</h2>
          </div>
          <div className="text-sm">
            <p>Join us for a celebration at</p>
          </div>
          <div>
            <h2 className="uppercase font-semibold tracking-wider">
              quinta de valadares, verna{' '}
            </h2>
            <p>At the stroke of 7.00 pm precisely</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
