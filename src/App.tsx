import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@mui/material";
import img1 from "../images/boty_near_packete.webp";
import img2 from "../images/gain_packete.webp";
import img3 from "../images/girl_with_color.webp";
import img4 from "../images/people_with_sacks.webp";
import img5 from "../images/boty_near_packete.webp";
import img6 from "../images/container_bau.webp";
import Item from "./components/Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const items = [img1, img2, img3, img4, img5, img6];

function App() {
  return (
    <>
      <section>
        {/* <header>
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="menu">menu-icon</div>
        </header> */}
        <div className="background ">
          <Swiper
            loop={true}
            preventInteractionOnTransition={true} // Prevent swiping during transition
            spaceBetween={0}
            centeredSlides={true}
            allowTouchMove={false}
            noSwipingSelector="img"
            draggable={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {items.map((item) => (
              <SwiperSlide>
                <img src={item} className="imgSwiper swiper-no-swiping" draggable={false} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="content">
          <h1>THAT`SWHYnheim</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequuntur ab ea id neque molestiae corporis
            labore laborum quisquam voluptate.
          </p>
        </div>
        <button className="mehr-erfahren-btn">Mehr Erfahren</button>
        <button className="spenden-btn">Spenden</button>
      </section>
    </>
  );
}

export default App;
