import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = ({gitUser}) => {

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Моя партфолио</h4>
        <h1 className="text-6xl font-bold text-white">
            Я<span className="text-[#ff014f]">{gitUser?.name}</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>React Coder, Developer, UI Designer</span>
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {gitUser?.bio ?? 'bio'}
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner