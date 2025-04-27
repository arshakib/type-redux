import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function Cards() {
  const count = useSelector((state: RootState) => state.counter.value) as {
    task: number;
    status: string;
  }[];

  console.log(
    "card count",
    count.map((item) => typeof item.task)
  );
  return (
    <div>
      <h1>cards</h1>
      <div className="grid grid-cols-3 gap-4">
        {count.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <h2 className="text-lg font-bold">{item?.task || "Task"}</h2>
              <p className="text-gray-500">{item?.status || "Status"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
