import React, { useRef } from "react";
import { WHITE_PLAY, WHITE_SETTINGS, WHITE_SOUND_ON } from "../utils/constants";

function Video() {
  const videoRef = useRef();

  console.log("videoRef", videoRef);
  return (
    <div className="relative">
      <video
        ref={videoRef}
        // controls
        className="border rounded-lg overflow-hidden shadow-lg"
      >
        <source src="https://www.taxmann.com/emailer/images/CompaniesAct.mp4"></source>
      </video>

      {/* custom-controls */}

      <div className="absolute bg-gradient-to-t from-black gap-2 to-transparent shadow-2xl bottom-0 z-10 left-0 w-full  h-16 px-6 py-2 flex flex-col items-center ">
        <div className="bg-blue-500 h-1 w-full rounded-full"></div>
        {/* down controls */}
        <div className="flex justify-between w-full ">
          {/* sound */}
          <div className="flex gap-2">
            <img className="w-6 h-6" src={WHITE_SOUND_ON}></img>
            {/* <div className="bg-blue-500 h-1 rounded-full"></div> */}
          </div>
          {/* time play/pause time */}
          
          <div className=" flex gap-2">

            <img className="w-6 h-6" src={WHITE_PLAY}></img>
          </div>
          {/* settings full screen */}
          <div>
            <img className="w-6 h-6" src={WHITE_SETTINGS}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
