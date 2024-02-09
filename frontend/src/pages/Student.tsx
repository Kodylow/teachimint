import { useParams } from "react-router-dom";
import { Cups } from "../components/cups/Cups";

export function Student() {
  const { classroom } = useParams();

  console.log("classroom", classroom);
  if (!classroom) return null;

  return (
    <div className="flex gap-10 w-full h-full">
      <div className="flex-auto w-3/4 flex flex-col gap-10">
        <div className="bg-black shadow-lg rounded-lg p-8 flex flex-col flex-auto h-2/3 w-full justify-center items-center gap-4">
          VIDEO PLAYER
        </div>
        <Cups />
      </div>
      <div className="flex-auto w-1/4"> chat log </div>
    </div>
  );
}
