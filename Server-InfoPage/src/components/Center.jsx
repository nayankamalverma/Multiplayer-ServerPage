import React, { useState, useEffect } from "react";
import ActionButtons from "./ActionButtons";

function Center() {
  const [serverData, setServerData] = useState(null);
  let defaultServer = "Asia"

  const staticData = {
    serverName: "! Flubber",
    mode: "Conquest Large",
    map: "Propaganda",
    tickrate: 40,
    link: "Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg |",
    discord: "Discord https://discord.gg/3r5NK4d"
  };

  useEffect(() => {
    const fetchServerInfo = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/servers/region/"+defaultServer);
        if (!response.ok) throw new Error("Network response was not ok");

        const json = await response.json();
        if (Array.isArray(json) && json.length > 0) {
          setServerData(json[0]);
        }
      } catch (err) {
        console.error("Fetch error: ", err);
      }
    };

    fetchServerInfo();
  }, []);

  return (
    <div className="absolute top-[14vh] left-[35vw] transform -translate-x-1/2 text-white rounded-2xl p-6 max-w-6xl z-50">
      <header className="flex flex-col md:flex-row justify-between pb-4">
        <div>
          <h1 className="text-2xl font-bold">{staticData.serverName}</h1>
          <p className="rajdhani-medium text-xs">
            {staticData.mode} • {staticData.map} • {staticData.tickrate} Hz
          </p>
          <p className="rajdhani-medium text-xs">
            {staticData.link} <br /> {staticData.discord}
          </p>
        </div>
      </header>

      <ActionButtons />

      {serverData && (
        <>
          <div className="flex text-[2.5vh] gap-14 md:text-left mt-2 leading-5">
            <p><span className="text-[1.6vh]">Players:</span><br />{serverData.server.players.current}/{serverData.server.players.max}</p>
            <p><span className="text-[1.6vh]">Ping:</span><br />{serverData.server.ping} ms</p>
            <p><span className="text-[1.6vh]">TICKRATE:</span><br />{serverData.server.tickrate} Hz</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <InfoSection title="Settings" data={serverData.settings} />
            <InfoSection title="Advanced" data={serverData.advanced} />
            <InfoSection title="Rules" data={serverData.rules} />
          </div>
        </>
      )}
    </div>
  );
}

function InfoSection({ title, data }) {
  return (
    <div>
      <h2 className="text-[1.8vh] tracking-wider font-semibold border-b border-gray-700 pb-2 mb-2">{title}</h2>
      <ul className="text-[2.4vh] tracking-wide w-40">
        {Object.entries(data).map(([key, value]) => (
          <li
            key={key}
            className="flex justify-between border-b border-gray-700 py-1 hover:text-gray-900 hover:bg-white text-gray-300"
          >
            <span>{key}</span>
            <span className="font-medium text-white hover:text-gray-900">{String(value)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Center;