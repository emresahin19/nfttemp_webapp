import React, {Fragment} from 'react';
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [
  "../img/fixedcard1.png",
  "../img/fixedcard2.png",
  "../img/fixedcard3.png",
  "../img/fixedcard4.png",
  "../img/fixedcard5.png",
  "../img/fixedcard6.png",
  "../img/fixedcard1.png",
  "../img/fixedcard2.png",
  "../img/fixedcard3.png",
  "../img/fixedcard4.png",
  "../img/fixedcard5.png",
  "../img/fixedcard6.png",
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Slider = ({ deviceType }) => {
    return (
        <Fragment>
            <section
                style={{
                    margin: "20px 0 20px 0"
                }}
            >
                <Carousel
                      swipeable={false}
                      showDots={true}
                      responsive={responsive}
                      ssr={true}
                      infinite={true}
                      autoPlay={deviceType !== "mobile" ? true : false}
                      autoPlaySpeed={5000}
                      keyBoardControl={true}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={["mobile"]}
                      deviceType={deviceType}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px"
                >
                {images.map(image => {
                    return (
                    <img
                        draggable={false}
                        style={{ width: "100%", height: "100%" }}
                        src={image}
                    />
                    );
                })}
                </Carousel>
            </section>
        </Fragment>
    );
};

export default Slider;