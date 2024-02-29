import Slider, { Settings } from "react-slick";
import algarLogo from '../../assets/img/algar.png';
import bethaLogo from '../../assets/img/betha.png';
import bitzarLogo from '../../assets/img/bitzar2.png';
import ciaLogo from '../../assets/img/cia.png';
import covidasLogo from '../../assets/img/covidas.png';
import dsinLogo from '../../assets/img/dsin.png';
import eneLogo from '../../assets/img/ene.png';
import infraLogo from '../../assets/img/infra.png';
import mudadearesLogo from '../../assets/img/mudadeares.png';
import oesteLogo from '../../assets/img/oeste.png';
import ppaLogo from '../../assets/img/ppa.png';
import tk3Logo from '../../assets/img/tk3.png';
import ucaLogo from '../../assets/img/uca.png';
import { CustomCard } from "../CustomCard";

export function ThirdContainer() {
  var settings: Settings = {
    dots: true,
    arrows: false,
    lazyLoad: 'ondemand',
    dotsClass: "slick-dots slick-thumb carousel-dots",
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  return (
    <div className='w-screen mx-auto py-12 px-5 md:py-20 md:px-32 justify-center'>
      <div className="text-center mb-0 sm:mb-5 md:mb-10">
        <p className='text-4xl font-bold mb-2'>
          Atuação em projetos
        </p>
      </div>
      <div>
        <Slider {...settings}>
          <div className="p-10">
            <CustomCard bordered image={algarLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard bordered image={infraLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard bordered image={bethaLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard image={eneLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard image={dsinLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard image={bitzarLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard image={covidasLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard image={oesteLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard image={ppaLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard image={ucaLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard image={mudadearesLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard image={ciaLogo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
          <div className="p-10">
            <CustomCard image={tk3Logo} bgColor="bg-off" rounded="rounded-3xl" />
          </div>
        </Slider>
      </div >
    </div >
  );
};

