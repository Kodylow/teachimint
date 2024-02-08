import { useState } from "react";
import { useParams } from "react-router-dom";
import { useWebSocket } from "../hooks/useWebsocket";

function Student() {
  const { classroom } = useParams();
  const { send } = useWebSocket();
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");

  console.log("classroom", classroom);
  console.log("send", send);
  if (!classroom || !send) return null;

  const handleCircleClick = (color: string) => {
    const params = { classroom: classroom, status: color };
    setSelected(color);
    // send({
    //   method: "updateStatus",
    //   params: JSON.stringify(params),
    // });
  };

  const handleSendChatMessage = () => {
    // send({
    //   method: "sendChatMessage",
    //   params: JSON.stringify({ classroom: classroom, message: message }),
    //   onResponse: (response) => console.log(response),
    // });
    setMessage("");
  };
  return (
    <div>
      <div>
        <div
          onClick={() => handleCircleClick("red")}
          className={selected === "red" ? "selected" : ""}
        >
          Red
        </div>
        <div
          onClick={() => handleCircleClick("yellow")}
          className={selected === "yellow" ? "selected" : ""}
        >
          Yellow
        </div>
        <div
          onClick={() => handleCircleClick("green")}
          className={selected === "green" ? "selected" : ""}
        >
          Green
        </div>
      </div>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSendChatMessage}>Send</button>
    </div>
  );
}

export default Student;
