import { storeAtom } from "@/utils/atom";
import { useAtom } from "jotai";
import { FaCheckSquare } from "react-icons/fa";

const Display = () => {
  const [list, setList] = useAtom(storeAtom);

  const checkHandler = (index: number) => {
    // Remove the item from the list
    const newList = [...list];
    newList.splice(index, 1);
    // Update the state
    setList(newList);
    // Update the local storage
    localStorage.setItem("list", JSON.stringify(newList));
  };
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center mt-8">
        {list.map((item, index) => {
          return (
            <>
              <div className="bg-pink-100 px-3 py-2  rounded-md">
                <div className="w-48 grid grid-cols-3">
                  <div className="col-span-2">{item}</div>
                  <div className="flex justify-center items-center">
                    <FaCheckSquare
                      onClick={() => {
                        checkHandler(index);
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Display;
