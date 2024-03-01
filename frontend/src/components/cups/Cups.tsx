import { ReactEventHandler, useState } from "react";
//import { useWebSocket } from "../hooks/useWebsocket";
import redCupImg from "../../images/redCup.png";
import greenCupImg from "../../images/greenCup.png";
import yellowCupImg from "../../images/yellowCup.png";

export const Cups = () => {
  //const { send } = useWebSocket();
  //console.log("send", send);

  enum CupColorEnum {
    RED = "red",
    YELLOW = "yellow",
    GREEN = "green",
  }

  const redCup = { img: redCupImg, color: CupColorEnum.RED };
  const yellowCup = { img: yellowCupImg, color: CupColorEnum.YELLOW };
  const greenCup = { img: greenCupImg, color: CupColorEnum.GREEN };

  type CupColor = { img: string; color: CupColorEnum };

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
    if (newSelectedCup.color === CupColorEnum.GREEN) {
      setSideCup1(yellowCup);
      setSideCup2(redCup);
    }
    if (newSelectedCup.color === CupColorEnum.YELLOW) {
      setSideCup1(greenCup);
      setSideCup2(redCup);
    }
    if (newSelectedCup.color === CupColorEnum.RED) {
      setSideCup1(greenCup);
      setSideCup2(yellowCup);
    }
  };

  return (
    <div className="flex-auto h-1/3 flex gap-4 mb-10">
      <Cup cup={selectedCup.img} selectedCup={true} />
      <div className=" flex-auto w-1/3 h-1/2 justify-center self-end flex">
        <Cup
          cup={sideCup1.img}
          selectedCup={false}
          onClick={() => {
            setSelectedCup(sideCup1);
            getNextCup(sideCup1);
          }}
        />
        <Cup
          cup={sideCup2.img}
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

  const containerClassName = `relative flex justify-center h-full ${
    selectedCup && "flex-auto w-1/3 flex-col items-center"
  }`;
  const cupClassName = `transform rotate-180 h-full transition ease-in-out duration-150 ${
    !selectedCup && "hover:-translate-y-2 cursor-pointer"
  }`;
  const selectedShadow =
    "absolute -mb-10 h-9 w-full transform scale-75 bg-[#252931] rounded-[100%] -bottom-2 z-0 blur";
  const sideShadow = `absolute -mb-9 h-7 w-full transform scale-75 bg-[#252931] rounded-[100%] -bottom-2 z-0 blur transition ease-in-out duration-300 ${
    isHovered ? "blur-md" : ""
  }`;
  const shadowClassName = `${selectedCup ? selectedShadow : sideShadow}`;

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
