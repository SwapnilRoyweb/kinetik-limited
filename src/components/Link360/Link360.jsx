import React from 'react';
import { BiSolidHandLeft, BiSolidHandRight } from "react-icons/bi";
import { Tb360View, TbView360 } from "react-icons/tb";

const Link360 = () => {
    return (
        <div className='bg-black border-y-4 border-yellow-500 py-3 blur-sm hover:blur-none w-full flex items-center justify-between'>
            <TbView360 className='text-white text-4xl' />
            <div className='flex items-center gap-10'>
                <BiSolidHandRight className='text-white text-4xl' />
                <h1 className='text-center text-white text-3xl font-bold uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 flex items-center gap-3'>View Our Company <Tb360View className='text-4xl' /></h1>
                <BiSolidHandLeft className='text-white text-4xl' />
            </div>
            <TbView360 className='text-white text-4xl' />
        </div>
    );
};

export default Link360;