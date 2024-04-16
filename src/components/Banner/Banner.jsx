import React from "react"

const Banner = (props) => {

  return (
   <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/3Y1sMY5/french-home-in-a-beautiful-complex-landscape-web-header-size-800x200-jpg-nggid049380-ngg0dyn-800x200.jpg" className="w-full h-[250px] md:[400px] lg:h-[600px] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/mtNRcwW/cities-travel-world-banner-2914-size-800x200-jpg-nggid047664-ngg0dyn-800x200x100-00f0w010c010r110f11.jpg" className="w-full h-[250px] md:[400px] lg:h-[600px] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/BZMKvRC/download.jpg" className="w-full h-[250px] md:[400px] lg:h-[600px] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>
  )
};

export default Banner;
