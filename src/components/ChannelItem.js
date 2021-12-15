import { Link } from "react-router-dom";

function ChannelItem(channel) {
  return <li>
  <Link to={`/chat/${channel.key}`}>{channel.key}</Link>
</li>
}

export default ChannelItem;