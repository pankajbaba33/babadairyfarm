import React, { useEffect, useState } from "react";
import MobileDevice from "./MobileDevice";
import Navbar from "../Navbar";
export default function Mobileview() {
  const [mobile, setMobile] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setMobile(window.innerWidth);
      // Set the height in state as well as the width
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  console.log(mobile);
  return (
    <>
      <div>{mobile < 775 ? <MobileDevice /> : <Navbar />}</div>
    </>
  );
}
