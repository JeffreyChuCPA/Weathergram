
export const snowAnimation = (isSnowy) => {
    let animationFrame;
    
    const startAnimation = () => {
    let w = window.innerWidth,
        h = window.innerHeight,
        canvas = document.getElementById("snow"),
        ctx = canvas.getContext("2d"),
        arc = 500,
        time,
        count,
        size = 2,
        speed = 10,
        lights = new Array(),
        colors = ["white"];

    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);

    const init = () => {
      time = 0;
      count = 0;

      for (let i = 0; i < arc; i++) {
          lights[i] = {
              x: Math.ceil(Math.random() * w),
              y: Math.ceil(Math.random() * h),
              toX: Math.random() * 5 + 1,
              toY: Math.random() * 5 + 1,
              c: colors[Math.floor(Math.random() * colors.length)],
              size: Math.random() * size
          };
      }
    };

    const bubble = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < arc; i++) {
          let li = lights[i];

          ctx.beginPath();
          ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
          ctx.fillStyle = li.c;
          ctx.fill();

          li.x = li.x + li.toX * (time * 0.05);
          li.y = li.y + li.toY * (time * 0.05);

          if (li.x > w) {
              li.x = 0;
          }
          if (li.y > h) {
              li.y = 0;
          }
          if (li.x < 0) {
              li.x = w;
          }
          if (li.y < 0) {
              li.y = h;
          }
      }
      if (time < speed) {
          time++;
        }

      animationFrame = requestAnimationFrame(bubble);
      console.log("running");
    }
    init()
    bubble()
  };

  const stopAnimation = () => {
    cancelAnimationFrame(animationFrame)
  }

  if (isSnowy) {
    startAnimation()
    console.log("started");
  } else {
    stopAnimation()
    console.log("stopped");
  }
};




