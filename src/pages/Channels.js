import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createChannel, getChannels } from "../utils/firebase";

const Channels = () => {
  const [channels, setChannels] = useState([]);
  const [newChannel, setNewChannel] = useState("");

  useEffect(async () => {
    let channels = await getChannels(setChannels);
    console.log("channels", channels);
  }, []);

  useEffect(() => {}, [channels]);

  return (
    <>
      <div className="w-full h-full">
        {
          <ul>
            {channels.map((channel) => (
              <li>
                <Link to={`/chat/${channel.key}`}>{channel.key}</Link>
              </li>
            ))}
          </ul>
        }
        <input
          name="newChannel"
          onChange={(event) => setNewChannel(event.target.value)}
          value={newChannel}
        />
        <button onClick={() => createChannel(newChannel)}>New channel</button>
      </div>
    </>
  );
};

export default Channels;
