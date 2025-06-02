import React from 'react';

const users = [
  {
    name: "MaryJane",
    status: "Online",
    avatar: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png",
    isOnline: true,
  },
  {
    name: "420",
    status: "Offline",
    avatar: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png",
    isOnline: false,
  },
];

const Sidebar = () => {
  return (
    <div className="absolute top-0 pt-14 right-0 z-20 group hover:w-[12vw] w-[3vw] transition-all duration-300 h-screen text-white hover:bg-[#0f0f0f] overflow-hidden">
      {/* Header */}

      {/* Join Button */}
      <div className="p-1 items-center">
        <div className="py-2 flex items-center group-hover:border-t group-hover:border-gray-700">
        <img src="https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg" alt="squad" className="h-2.5 w-2.5" />
        <span className="opacity-0 group-hover:opacity-100 transition-opacity pl-2 duration-300 text-[8px]">SQUAD</span>
      </div>
      
      <div className='flex justify-start items-center  w-full text-gray-600 hover:text-black hover:bg-white'>
        <div className="bg-gray-500 hover:bg-black w-8 h-8 flex items-center justify-center pb-2 text-xl">+</div>
        <span className="hidden group-hover:block transition-opacity duration-300 pl-2 text-[10px]">Squad Join</span>
      </div>
      </div>

      {/* Online Users */}
      <div className="p-1 py-2 flex items-center gap-2 group-hover:border-t group-hover:border-gray-700 mt-2">
        <div className="w-3 h-3 rounded-full border-2 border-white bg-green-500" />
        <span className="hidden group-hover:block transition-opacity duration-300 text-[8px]">ONLINE</span>
      </div>
      {users.map(
        (user, index) =>
          user.isOnline && (
            <div key={index} className="flex items-center border-l-4 border-green-500 px-1">
              <img src={user.avatar} alt={user.name} className="rounded-sm  h-8 w-8 object-cover" />
              <div className="opacity-0 group-hover:opacity-100 pl-2 w-full text-gray-600 hover:text-black hover:bg-white transition-opacity hover:bg-whiite duration-300">
                <p className="text-[10px] font-semibold">{user.name}</p>
                <p className="text-xs text-green-500">{user.status}</p>
              </div>
            </div>
          )
      )}

      {/* Offline Users */}
      <div className="p-1 py-2 flex items-center gap-2 group-hover:border-t group-hover:border-gray-700 mt-2">
        <div className="w-3 h-3 rounded-full border-2 border-white bg-gray-500" />
        <span className="hidden group-hover:block transition-opacity duration-300 text-[8px]">OFFLINE</span>
      </div>
      {users.map(
        (user, index) =>
          !user.isOnline && (
            <div key={index} className="flex items-center border-l-4 hover:border-white border-gray-500 px-1">
              <img src={user.avatar} alt={user.name} className="rounded-sm h-8 w-8 object-cover" />
              <div className="opacity-0 group-hover:opacity-100 pl-2 w-full text-gray-600 hover:text-black hover:bg-white transition-opacity duration-300">
                <p className="text-[10px] font-semibold">{user.name}</p>
                <p className="text-xs">{user.status}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Sidebar;
