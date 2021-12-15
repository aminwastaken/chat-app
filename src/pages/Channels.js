import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getChannels } from "../utils/firebase";

const Channels = () => {
  const [channels, setChannels] = useState([]);

  useEffect(async () => {
    let channels = await getChannels();
    console.log("channels", channels);
    setChannels(channels);
  }, []);

  useEffect(() => {
    
  }, [channels]);

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
      </div>
    </>
  );
};

export default Channels;
