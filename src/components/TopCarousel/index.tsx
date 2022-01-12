import { useState, useEffect } from "react";
import { TopEvent } from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Wrap } from "../TopCarousel/styles";

export const TopCarousel = () => {
  const [id, setId] = useState<Number>(0);
  const [badge, setBadge] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const events = TopEvent.top_event;

  useEffect(() => {
    events.forEach((el) => {
      setId(el.id);
      setImg(el.img);
      setSubtitle(el.subtitle);
      setTitle(el.title);
      if (el.badge) setBadge(el.badge);
      if (el.bdColor) setBgColor(el.bdColor);
    });
    console.log(title);
  });

  return (
    <Wrap>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={2000}
        useKeyboardArrows={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
      >
        <div>
          <img src={img}></img>
          <h1>{subtitle}</h1>
          {/* <p className="legend">{title}</p> */}
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </Wrap>
  );
};
