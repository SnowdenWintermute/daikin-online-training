import React, { useRef, useState, useEffect, useCallback } from "react";
import { TEXT, IMAGE, VIDEO } from "../../content/types";
import TextBox from "../../components/text/TextBox";
import ImageCard from "../../components/ImageCard/ImageCard";
import VideoCard from "../../components/VideoCard/VideoCard";

const InfoPage = ({ content }) => {
  const selfRef = useRef();
  const [dimensions, setDimensions] = useState({ height: null, width: null });

  useEffect(() => {
    setDimensions({
      height: selfRef.current.clientHeight,
      width: selfRef.current.clientWidth,
    });
  }, []);

  const handleResize = useCallback(() => {
    setDimensions({
      height: selfRef.current.clientHeight,
      width: selfRef.current.clientWidth,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div ref={selfRef}>
      {content?.map((item, i) => {
        if (item.type === TEXT) {
          return <TextBox key={i} text={item.text} />;
        } else if (item.type === IMAGE) {
          return <ImageCard src={item.uri} title={item.title} caption={item.caption} key={i} />;
        } else if (item.type === VIDEO) {
          return <VideoCard title={item.title} src={item.uri} dimensions={dimensions} key={i} />;
        } else return null;
      })}
    </div>
  );
};

export default InfoPage;
