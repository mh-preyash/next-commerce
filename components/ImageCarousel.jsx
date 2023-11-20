import React from "react";
// import Slider from "react-slick";
import Typography from "./Typography";

export default class ImageCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Typography variant="h2">Single Item</Typography>
        {/* <Slider {...settings}>
          <div>
            <Typography variant="h3">1</Typography>
          </div>
          <div>
            <Typography variant="h3">2</Typography>
          </div>
          <div>
            <Typography variant="h3">3</Typography>
          </div>
          <div>
            <Typography variant="h3">4</Typography>
          </div>
          <div>
            <Typography variant="h3">5</Typography>
          </div>
          <div>
            <Typography variant="h3">6</Typography>
          </div>
        </Slider> */}
      </div>
    );
  }
}
