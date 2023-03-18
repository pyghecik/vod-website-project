import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid"; /*Random ID library*/
import Link from "next/link";
import Head from "next/head";
import VideoTile from "./components/VideoTile";
import SpecificVideoCard from "./components/SpecificVideoCard";

class Video {
  constructor(title, time, key) {
    this.title = title;
    this.time = time;
    this.key = key;
  }
}

export default function Home() {
  {
    /*Movies*/
  }

  const v1 = new Video("History of Scotland", "100min", uuidv4());
  const v2 = new Video("History of Egypt", "140min", uuidv4());
  const v3 = new Video("How is it possible!", "160min", uuidv4());
  const v4 = new Video("Wild Russia", "75min", uuidv4());

  {
    /*Series*/
  }

  const v5 = new Video("Sims 3: Beginners guide", "30min Episodes 3", uuidv4());
  const v6 = new Video(
    "Create Minecraft with Java",
    "180min Epsiodes 5",
    uuidv4()
  );
  const v7 = new Video("Create Music", "60min Episodes 10", uuidv4());

  {
    /*Other variables*/
  }

  const allMovies = [v1, v2, v3, v4];
  const allSeries = [v5, v6, v7];
  const selectedOption = useRef();

  {
    /*useStates*/
  }

  const [query, setQuery] = useState("");
  const [select, setSelect] = useState("A");
  const [leave, setLeave] = useState(false);
  const [menuText, setMenuText] = useState("Menu");
  const [specificCard, setSpecificCard] = useState(false);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  {
    /*Function*/
  }

  function setSpecificCardValue() {
    if (specificCard === false) setSpecificCard(true);
    else setSpecificCard(false);
  }

  function getSelectedValue() {
    const value = selectedOption.current.value;
    setSelect(value);
  }

  function setLeaveTrue() {
    if (leave === false) {
      setLeave(true);
      setMenuText("Close");
    } else {
      setLeave(false);
      setMenuText("Menu");
    }
  }

  {
    /*Variable Components*/
  }

  let showLeave = null;
  if (leave === true) {
    showLeave = (
      <Link
        href="/Error"
        className=" absolute text-center cursor-pointer drop-shadow-md ml-2 mt-16 p-1 text-2xl border-2 border-slate-900 bg-white w-36 h-12"
      >
        Quit
      </Link>
    );
  }

  let showedMovies = null;
  if (select === "A") {
    showedMovies = (
      <div>
        {/*Movies*/}
        <section className=" mt-2">
          <div className=" flex-none">
            <h1 className=" text-5xl">Movies</h1>
            <div className=" flex">
              {/*Here starts our vid plate*/}
              {allMovies
                .filter((element) => {
                  if (query === "") {
                    return (
                      <VideoTile
                        onclick={() => {
                          setTitle(element.title);
                          setTime(element.time);
                          if (specificCard === false) {
                            setSpecificCard(true);
                          } else null;
                        }}
                        title={element.title}
                        time={element.time}
                        key={element.key}
                        showed={specificCard}
                      />
                    );
                  } else if (
                    element.title.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return (
                      <VideoTile
                        onclick={() => {
                          setTitle(element.title);
                          setTime(element.time);
                          if (specificCard === false) {
                            setSpecificCard(true);
                          } else null;
                        }}
                        title={element.title}
                        time={element.time}
                        key={element.key}
                        showed={specificCard}
                      />
                    );
                  }
                })
                .map((element) => (
                  <VideoTile
                    onclick={() => {
                      setTitle(element.title);
                      setTime(element.time);
                      if (specificCard === false) {
                        setSpecificCard(true);
                      } else null;
                    }}
                    title={element.title}
                    time={element.time}
                    key={element.key}
                    showed={specificCard}
                  />
                ))}
              {/*Here ends our vid plate*/}
            </div>
          </div>
        </section>
        {/*Movies Ends*/}
        {/*Series*/}
        <section className=" mt-2">
          <h1 className=" text-5xl">Series</h1>
          <div className=" flex justify-start">
            {/*Here starts our vid plate*/}
            {allSeries
              .filter((element) => {
                if (query === "") {
                  return (
                    <VideoTile
                      onclick={() => {
                        setTitle(element.title);
                        setTime(element.time);
                        if (specificCard === false) {
                          setSpecificCard(true);
                        } else null;
                      }}
                      title={element.title}
                      time={element.time}
                      key={element.key}
                      showed={specificCard}
                    />
                  );
                } else if (
                  element.title.toLowerCase().includes(query.toLowerCase())
                ) {
                  return (
                    <VideoTile
                      onclick={() => {
                        setTitle(element.title);
                        setTime(element.time);
                        if (specificCard === false) {
                          setSpecificCard(true);
                        } else null;
                      }}
                      title={element.title}
                      time={element.time}
                      key={element.key}
                      showed={specificCard}
                    />
                  );
                }
              })
              .map((element) => (
                <VideoTile
                  onclick={() => {
                    setTitle(element.title);
                    setTime(element.time);
                    if (specificCard === false) {
                      setSpecificCard(true);
                    } else null;
                  }}
                  title={element.title}
                  time={element.time}
                  key={element.key}
                  showed={specificCard}
                />
              ))}
            {/*Here ends our vid plate*/}
          </div>
        </section>
        {/*Series Ends*/}
      </div>
    );
  } else if (select === "M") {
    showedMovies = (
      <div>
        {/*Movies*/}
        <section className=" mt-2">
          <div className=" flex-none">
            <h1 className=" text-5xl">Movies</h1>
            <div className=" flex">
              {/*Here starts our vid plate*/}
              {allMovies
                .filter((element) => {
                  if (query === "") {
                    return (
                      <VideoTile
                        onclick={() => {
                          setTitle(element.title);
                          setTime(element.time);
                          if (specificCard === false) {
                            setSpecificCard(true);
                          } else null;
                        }}
                        title={element.title}
                        time={element.time}
                        key={element.key}
                        showed={specificCard}
                      />
                    );
                  } else if (
                    element.title.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return (
                      <VideoTile
                        onclick={() => {
                          setTitle(element.title);
                          setTime(element.time);
                          if (specificCard === false) {
                            setSpecificCard(true);
                          } else null;
                        }}
                        title={element.title}
                        time={element.time}
                        key={element.key}
                        showed={specificCard}
                      />
                    );
                  }
                })
                .map((element) => (
                  <VideoTile
                    onclick={() => {
                      setTitle(element.title);
                      setTime(element.time);
                      if (specificCard === false) {
                        setSpecificCard(true);
                      } else null;
                    }}
                    title={element.title}
                    time={element.time}
                    key={element.key}
                    showed={specificCard}
                  />
                ))}
              {/*Here ends our vid plate*/}
            </div>
          </div>
        </section>
        {/*Movies Ends*/}
      </div>
    );
  } else if (select === "S") {
    showedMovies = (
      <div>
        {/*Series*/}
        <section className=" mt-2">
          <h1 className=" text-5xl">Series</h1>
          <div className=" flex justify-start">
            {/*Here starts our vid plate*/}
            {allSeries
              .filter((element) => {
                if (query === "") {
                  return (
                    <VideoTile
                      onclick={() => {
                        setTitle(element.title);
                        setTime(element.time);
                        if (specificCard === false) {
                          setSpecificCard(true);
                        } else null;
                      }}
                      title={element.title}
                      time={element.time}
                      key={element.key}
                      showed={specificCard}
                    />
                  );
                } else if (
                  element.title.toLowerCase().includes(query.toLowerCase())
                ) {
                  return (
                    <VideoTile
                      onclick={() => {
                        setTitle(element.title);
                        setTime(element.time);
                        if (specificCard === false) {
                          setSpecificCard(true);
                        } else null;
                      }}
                      title={element.title}
                      time={element.time}
                      key={element.key}
                      showed={specificCard}
                    />
                  );
                }
              })
              .map((element) => (
                <VideoTile
                  onclick={() => {
                    setTitle(element.title);
                    setTime(element.time);
                    if (specificCard === false) {
                      setSpecificCard(true);
                    } else null;
                  }}
                  title={element.title}
                  time={element.time}
                  key={element.key}
                  showed={specificCard}
                />
              ))}
            {/*Here ends our vid plate*/}
          </div>
        </section>
        {/*Series Ends*/}
      </div>
    );
  }

  let showSpecificCard = null;
  if (specificCard === true) {
    showSpecificCard = (
      <div className=" flex justify-center ease-in delay-300">
        <SpecificVideoCard
          Close={setSpecificCardValue}
          title={title}
          time={time}
        />
      </div>
    );
  }

  {
    /*Return*/
  }

  return (
    <>
      <Head>
        <title>Simple VOD Website Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={specificCard === true ? "blur-sm" : null}>
          {/*Header*/}
          <section className=" grid place-content-center">
            <div className=" flex m-10">
              {/*Logo*/}
              <div className=" cursor-pointer drop-shadow-md mr-10 text-2xl border-2 border-slate-900 bg-white w-72 h-12 ">
                <h1 className=" p-1 text-center">
                  <a href="/">Simplly</a>
                </h1>
              </div>
              {/*Search label*/}
              <form className=" drop-shadow-md">
                <input
                  onChange={(event) => setQuery(event.target.value)}
                  type="text"
                  placeholder="Search"
                  className=" focus:outline-none mr-0 p-4 border-2 border-r-0 border-slate-900 bg-white w-64 xl:w-96 lg:w-80 h-12"
                />
                <select
                  onChange={getSelectedValue}
                  ref={selectedOption}
                  className=" text-center p-1 border-2 border-l-0 border-slate-900 bg-white min-w-6 h-12"
                >
                  <option value="A">All</option>
                  <option value="M">Movies</option>
                  <option value="S">Series</option>
                </select>
              </form>
              {/*Hamburger*/}
              <div className=" flex flex-col">
                <button
                  onClick={setLeaveTrue}
                  className=" cursor-pointer drop-shadow-md ml-10 text-2xl border-2 border-slate-900 bg-white w-28 h-12"
                >
                  {menuText}
                </button>
                {showLeave}
              </div>
            </div>
          </section>
        </div>
        {/*Showing Specific Card*/}
        {showSpecificCard}
        {/*Showing Specific Card end*/}
        <div className={specificCard === true ? "blur-sm" : null}>
          {/*Showing videos*/}
          <div className=" md:ml-32 lg:ml-48 ">
            <div className=" grid place-content-start z-0">{showedMovies}</div>
          </div>
          {/*Showing videos end*/}
        </div>
      </main>
    </>
  );
}
