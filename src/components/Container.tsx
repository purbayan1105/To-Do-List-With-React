import { storeAtom, targetAtom, valueAtom } from "@/utils/atom";
import { Button, Input } from "@nextui-org/react";
import { useAtom } from "jotai";

const Container = () => {
  const [value, setValue] = useAtom<string>(valueAtom);
  const [list, setList] = useAtom<string[]>(storeAtom);
  const onChangeHandler = (e: any) => {
    setValue(e.target.value);
  };
  const btnHandler = () => {
    if (value !== "") {
      setList([...list, value]);
      console.log(value);
      setValue("");
    } else {
      alert("Please Add Your To-Do List");
    }
  };

  const Handler2 = (e: any) => {
    if (e.key === "Enter") {
      if (value !== "") {
        setList([...list, value]);
        console.log(value);
        setValue("");
      } else {
        alert("Please Add Your To-Do List");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center text-2xl font-normal mt-5 mb-5">
        Create Your To-Do List Here
      </div>
      <div className="">
        <div className="flex mx-auto w-64 md:w-96">
          <Input
            className=""
            color="success"
            value={value}
            onChange={onChangeHandler}
            onKeyDown={Handler2}
          />
        </div>
        <Button
          color="primary"
          variant="flat"
          onClick={btnHandler}
          className="mt-3 flex mx-auto">
          Create
        </Button>
      </div>
    </>
  );
};

export default Container;
