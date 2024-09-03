"use client"

import { useState , useEffect } from "react";
import { Container } from "./assets/Container";


const slides=[
  {color: "58d68d" , image: "155330318.jpg"},
  {color: "d35400" , image: "bridge.jpeg"},
  {color: "e74c3c", image: "river.jpg"}
]

export const Carousel = () => {
  const [ slideIndex , setSlideIndex]=useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    
    return () => clearInterval(interval);
  }, []);
  return (
    <Container background="bg-[#F2F0FF]">
      <div className="w-full h-[764px] overflow-hidden relative">
        <div className="w-[300%] h-full flex "
        style={{
          transform:`translateX(-${(slideIndex * 100)/3}%)`, 
          transition: "transform 0.5s"
        }}>
          {slides.map((slide , index )=>(
            <Slide key={index} img={slide.image}/>
          ))}
        </div>

        <div className="absolute flex gap-4 bottom-4 w-full justify-center">
          {slides.map((_ , index)=>(
           <Indicator key={index} active={index===slideIndex} onClick={()=>setSlideIndex(index)}/>
          ))}
        </div>
      </div>
    </Container>
  );
};

type SlideProps={
  img?: string,
  
}


const Slide =({img }:SlideProps)=>{
  return <div className={`flex-1 h-full flex justify-center items-center `}><img  src={img} className="object-cover h-full w-full"/></div>
}

type IndicatorProps={
  active:boolean;
  onClick:()=>void
}

const Indicator = ({active , onClick}:IndicatorProps)=>{
  return(
    <div className={`w-6 h-6 rounded-md ${active ? "bg-slate-700" :  "bg-slate-400"}` } onClick={onClick}></div>
  )
}