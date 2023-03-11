import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const normalStyle = " cursor-auto -mt-20  w-24 h-24 opacity-10";
const hoverStyle =
  " pointer -mt-20  w-24 h-24 opacity-10 hover:opacity-25 ease-in duration-300";

function VideoTile(props) {
  return (
    <div className=" grid place-items-center relative mt-6 ml-0 m-4 h-72 w-96 border-2 border-slate-900 bg-gradient-to-r from-purple-400 to-purple-500 hover:shadow-md ease-in duration-300">
      <button onClick={props.onclick}>
        <AiFillPlayCircle
          className={props.showed === false ? hoverStyle : normalStyle}
        ></AiFillPlayCircle>
      </button>
      <div className=" absolute inset-x-0 bottom-0 h-20 w-full bg-white border-t-2 border-slate-900">
        <div className=" flex-col justify-start p-2">
          <p className=" cursor-default">{props.time}</p>
          <h1 className=" text-2xl truncate cursor-default">{props.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default VideoTile;
