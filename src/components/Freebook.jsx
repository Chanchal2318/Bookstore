import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Cards from '../components/Cards';
import Slider from "react-slick";

function Freebook() {
  const filterData=list.filter((data) => data.category ==="free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(filterData);
  return (
    <>
      <div className='max-w-screen-xl container mx-auto  '>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>This is a free course available to all. We are here to provide you quality education without a single penny. So keep learning and keep supporting and loving us.</p>
        </div>
      <div>
      <Slider {...settings}>
        {filterData.map((item)=>{
          <Cards item={item} key={item.id}/>
        })}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default Freebook
