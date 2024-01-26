import { Container } from "./styles"
import { Swiper, SwiperSlide } from "swiper/react"
import { getImages } from "../../utils/getImages"

function Slider({ info, title }) {
  console.log(info)
  console.log(info)

  return (
    <>
      <Container>
        <h2>{title}</h2>
        <Swiper
          grabCursor
          spaceBetween={10}
          slidesPerView={"auto"}
          className="swiper"
        >
          {info.map((item, index) => (
            <SwiperSlide key={index}>
              <div>{getImages(item.original_title)}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  )
}

export default Slider
