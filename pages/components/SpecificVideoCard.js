import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AiFillPlayCircle } from "react-icons/ai";

function SpecificVideoCard(props) {
  const [more, setMore] = useState("Show more");
  const [style, setStyle] = useState(
    "truncate mt-3 ml-1 font-semibold text-2xl cursor-default opacity-40"
  );

  function showMoreLess() {
    if (more === "Show more") {
      setMore("Show less");
      setStyle("mt-3 ml-1 font-semibold text-2xl cursor-default opacity-40");
    } else {
      setMore("Show more");
      setStyle(
        "truncate mt-3 ml-1 font-semibold text-2xl cursor-default opacity-40"
      );
    }
  }

  return (
    <div className=" absolute mt-10 z-10 w-1/2 h-2/3 bg-gradient-to-r from-purple-400 to-purple-500 border-2 border-slate-900 ">
      {/*Cancel Button*/}
      <button onClick={props.Close}>
        <GrFormClose className=" pointer m-3 w-12 h-12 opacity-20 hover:opacity-30 ease-in duration-300" />
      </button>
      <div className=" flex justify-center">
        {/*Play Button*/}
        <button>
          <AiFillPlayCircle className=" pointer mt-12 w-28 h-28 opacity-10 hover:opacity-25 ease-in duration-300"></AiFillPlayCircle>
        </button>
      </div>
      {/*Other Things*/}
      <div className=" absolute inset-x-0 bottom-0 h-64 w-full bg-white border-t-2 border-slate-900">
        <div className=" flex-col justify-start p-2">
          <p className=" ml-1 cursor-default text-xl">{props.time}</p>
          <h1 className=" font-bold text-5xl cursor-default">{props.title}</h1>
          <h2 className={style}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus
            nisi, suscipit vel iaculis a, iaculis vel ex. Morbi faucibus dolor
            vitae lorem rutrum finibus. Mauris tincidunt tincidunt tristique.
            Suspendisse pretium libero eu dictum laoreet.
          </h2>
          <button onClick={showMoreLess} className=" font-semibold ml-1">
            {more}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecificVideoCard;
