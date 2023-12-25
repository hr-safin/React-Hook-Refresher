import { Button } from "@material-tailwind/react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const Home2 = () => {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      const dimension = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimension.height}px`
    }
  }, [toggle]);

  // useLayoutEffect(() => {
  //     console.log("UseLayoutEffect runs")
  // }, [toggle])

  return (
    <div className=" flex h-screen flex-col gap-4 justify-center items-center ">
      <Button onClick={() => setToggle(!toggle)} color="blue">
        Toggle
      </Button>
      {toggle && <h2 ref={textRef}>I will get a good job</h2>}
    </div>
  );
};

export default Home2;
