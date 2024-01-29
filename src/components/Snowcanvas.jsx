import { useEffect } from "react";
import { snowAnimation } from "../utilities/snowAnimation";

const Snowcanvas = ({onSnowy}) => {

  useEffect(() => {
    let canvas = document.getElementById("snow")
    if (canvas) {
      let ctx = canvas.getContext("2d")
      snowAnimation(canvas, ctx)
    }
  }, [onSnowy])

  if (!onSnowy) {
    return null;
  }

  return (
    <canvas id="snow"></canvas>
  )
}

export default Snowcanvas