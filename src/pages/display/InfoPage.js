import React, { useRef, useState, useEffect } from "react";
import { TEXT, IMAGE, VIDEO } from "../content/types";

const InfoPage = ({ content }) => {
  const selfRef = useRef();
  const [dimensions, setDimensions] = useState({ height: null, width: null });

  useEffect(() => {
    setDimensions({
      height: selfRef.current.clientHeight,
      width: selfRef.current.clientWidth,
    });
  }, []);

  return (
    <div ref={selfRef}>
      {content.map((item, i) => {
        if (item.type === TEXT) {
          return <p key={i}>{item.text}</p>;
        } else if (item.type === IMAGE) {
          return <img src={item.uri} alt={item.title} key={i} />;
        } else if (item.type === VIDEO) {
          return (
            <iframe
              title={item.title}
              width={dimensions.width}
              height={400}
              src={item.uri}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              key={i}
            ></iframe>
          );
        } else return null;
      })}
    </div>
  );
};

export default InfoPage;
