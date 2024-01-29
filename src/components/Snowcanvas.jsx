import { useEffect } from "react";
import { snowAnimation } from "../utilities/snowAnimation";

const Snowcanvas = ({onSnowy}) => {

  if (!onSnowy) {
    return null;
  }
  
  useEffect(() => {
    snowAnimation()
  }, [onSnowy])

  return (
    <canvas id="snow"></canvas>
  )
}

export default Snowcanvas