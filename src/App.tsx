import ReactPlayer from "react-player";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Bookmark, CircleDot, Home, Search, User } from "lucide-react";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      const measureSize = () => {
        const box = ref.current!.getBoundingClientRect();
        setSize({ width: box.width, height: box.height });
      };

      measureSize();

      window.addEventListener("resize", measureSize);

      return () => window.removeEventListener("resize", measureSize);
    }
  }, []);

  return (
    <div className={`h-[100dvh]`}>
      <div className={`h-full flex flex-col bg-black`}>
        <div className={`flex-1 flex justify-center`}>
          <div
            className={`h-full bg-gray-500 rounded-[12px] aspect-[9/16]`}
            ref={ref}
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              width={size.width}
              height={size.height}
            />
          </div>
        </div>
        <div className={`h-[8dvh] flex justify-center gap-16 items-center`}>
          <Home color={`#FFFFFF`} size={40} />
          <Search color={`#FFFFFF`} size={40} />
          <CircleDot color={`#FFFFFF`} size={40} />
          <Bookmark color={`#FFFFFF`} size={40} />
          <User color={`#FFFFFF`} size={40} />
        </div>
      </div>
    </div>
  );
}

export default App;
