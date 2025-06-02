import React from 'react';

const LeftBar = () => {
const images = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQkMeoua2E2xNMGdzuixhDbBPQwy_vD-rSw&s",
      overlayText: "Home",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Yy7VUfGTx_wh-xnVAbhwG93qtzUK00V9Kg&s",
      overlayText: "Profile",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDIYW9nshbLr1-BQiowX3UT3-xw9mLHUGJ6Q&s",
      overlayText: "Messages",
    },
    {
      src: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab2823bb5957cc1ffd_side-menu__game-3.png",
      overlayText: "Settings",
    },
    {
      src: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab68a3c97a6a478b8d_side-menu__watch.svg",
      overlayText: "Settings",
    },
    {
      src: "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafab332f0ade9870b435_side-menu__news.svg",
      overlayText: "Settings",
    },
  ];
  return (
    <>
    <div className='h-screen w-[4vw] border-gray-500 border-r-[1px] flex flex-col items-center justify-center gap-2 py-2'>
      {images.map((item, index) => (
        <div
          key={index}
          className='h-[5vh] w-[2vw] bg-cover bg-center'
          style={{ backgroundImage: `url(${item.src})` }}>
           <div className="h-full w-full bg-gray-800 opacity-45 hover:opacity-0"/>
          </div>
      ))}
    </div>
    </>
  );
};

export default LeftBar;
