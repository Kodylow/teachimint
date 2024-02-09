import { ReactEventHandler, useState } from "react";
//import { useWebSocket } from "../hooks/useWebsocket";
import redCup from "../../images/redCup.png";
import greenCup from "../../images/greenCup.png";
import yellowCup from "../../images/yellowCup.png";

export const Cups = () => {
  //const { send } = useWebSocket();
  //console.log("send", send);

  //   const redCup = { img: redCupImg, color: "red" };
  //   const yellowCup = { img: yellowCupImg, color: "yellow" };
  //   const greenCup = { img: greenCupImg, color: "green" };

  type CupColor = typeof redCup | typeof yellowCup | typeof greenCup;

  type SelectedCup = typeof redCup | typeof yellowCup | typeof greenCup;
  const [selectedCup, setSelectedCup] = useState<CupColor>(greenCup);
  const [sideCup1, setSideCup1] = useState<CupColor>(yellowCup);
  const [sideCup2, setSideCup2] = useState<CupColor>(redCup);

  //   const [selectedColor, setSelectedColor] = useState("");
  //   const [message, setMessage] = useState("");

  //   const handleCircleClick = (color: string) => {
  //     //const params = { classroom: classroom, status: color };
  //     setSelectedColor(color);
  //     // send({
  //     //   method: "updateStatus",
  //     //   params: JSON.stringify(params),
  //     // });
  //   };

  //   const handleSendChatMessage = () => {
  //     // send({
  //     //   method: "sendChatMessage",
  //     //   params: JSON.stringify({ classroom: classroom, message: message }),
  //     //   onResponse: (response) => console.log(response),
  //     // });
  //     setMessage("");
  //   };

  const getNextCup = (newSelectedCup: SelectedCup) => {
    if (newSelectedCup === greenCup) {
      setSideCup1(yellowCup);
      setSideCup2(redCup);
    }
    if (newSelectedCup === yellowCup) {
      setSideCup1(greenCup);
      setSideCup2(redCup);
    }
    if (newSelectedCup === redCup) {
      setSideCup1(greenCup);
      setSideCup2(yellowCup);
    }
  };

  return (
    <div className="flex-auto h-1/3 flex gap-4 mb-10">
      <Cup cup={selectedCup} selectedCup={true} />
      <div className=" flex-auto w-1/3 h-1/2 justify-center self-end flex">
        <Cup
          cup={sideCup1}
          selectedCup={false}
          onClick={() => {
            setSelectedCup(sideCup1);
            getNextCup(sideCup1);
          }}
        />
        <Cup
          cup={sideCup2}
          selectedCup={false}
          onClick={() => {
            setSelectedCup(sideCup2);
            getNextCup(sideCup2);
          }}
        />
      </div>
      <div className="flex-auto w-1/3 flex items-center justify-center">
        Status Message
        {/* <textarea value={message} onChange={(e) => setMessage(e.target.value)} /> */}
      </div>
    </div>
  );
};

const Cup = ({
  cup,
  onClick,
  selectedCup,
}: {
  cup: string;
  onClick?: ReactEventHandler;
  selectedCup: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerClassName = selectedCup
    ? "relative flex justify-center h-full flex-auto w-1/3  flex-col items-center"
    : "relative flex justify-center h-full";
  const cupClassName = selectedCup ? "rotate-180 h-full" : "rotate-180 h-full hover:-translate-y-2";
  const shadowClassName = selectedCup
    ? "absolute -mb-10 w-[83%] h-9 bg-[#252931] rounded-[100%] -bottom-2 z-0 blur transform scale-75"
    : "absolute -mb-9 w-full h-7 bg-[#252931] rounded-[100%] -bottom-2 z-0 blur transform scale-75" +
      (isHovered ? " w-[85%] bg-[#252931D9]" : "");

  return (
    <div className={containerClassName}>
      <img
        src={cup}
        className={cupClassName}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className={shadowClassName}></div>
    </div>
  );
};
