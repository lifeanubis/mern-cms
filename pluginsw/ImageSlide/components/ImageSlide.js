import useEmblaCarousel from "embla-carousel-react"
import React from "react"

const ImageSlide = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="flex gap-x-20">
        <div className="embla__slide  ">
          <img
            className="bg-fixed w-full "
            src="/diamond_1.jpg"
            width={300}
            height={300}
            alt="broken_img"
          />
        </div>
        <div className="embla__slide">
          <img
            className="bg-fixed w-full h-full"
            src="/diamond_2.jpg"
            width={300}
            height={300}
            alt="broken_img"
          />
        </div>
        <div className="embla__slide">
          <img
            className="bg-fixed w-full"
            src="/diamond_3.jpg"
            width={300}
            height={300}
            alt="broken_img"
          />
        </div>
        <div className="embla__slide">
          <img
            className="bg-fixed w-full"
            src="/diamond_1.jpg"
            width={300}
            height={300}
            alt="broken_img"
          />
        </div>
        <div className="embla__slide">
          <img
            className="bg-fixed w-full h-full"
            src="/diamond_2.jpg"
            width={300}
            height={300}
            alt="broken_img"
          />
        </div>
        <div className="embla__slide">
          <img
            className="bg-fixed w-full"
            src="/diamond_3.jpg"
            width={300}
            height={300}
            alt="broken_img"
          />
        </div>
      </div>
    </div>
  )
}

export default ImageSlide
