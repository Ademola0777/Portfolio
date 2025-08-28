import ReviewCard from './ReviewCard';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

const reviews = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Sophia Ramirez',
    imgSrc: '/people-1.jpg',
    company: 'PixelForge'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Ethan Caldwell',
    imgSrc: '/people-2.jpg',
    company: 'NexaWave'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Liam Bennett',
    imgSrc: '/people-3.jpg',
    company: 'CodeCraft'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Noah Williams',
    imgSrc: '/people-4.jpg',
    company: 'BrightWeb'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Ava Thompson',
    imgSrc: '/people-5.jpg',
    company: 'TechMosaic'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Jonathan',
    imgSrc: '/people-6.jpg',
    company: 'Skyline Digital'
  }
];

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        scrub: true,
        start: '-200% 80%',
        end: '400% 80%',
      },
      x: '-1000'
    })
  })

  return (
    <section id="reviews" className="pt-20 lg:pt-32 overflow-hidden">
        <div className="container lg:px-8 xl:max-w-6xl px-4 mx-auto">
          <h2 className="text-3xl mb-8 lg:text-4xl lg:leading-tight font-semibold bg-linear-[0deg,#fafafa,#a1a1aa] bg-clip-text text-transparent reveal-up">
            What My Clients Say
          </h2>
  
          <div className="scrub-slide flex items-stretch gap-3 w-fit">
            {reviews.map(({ imgSrc, content, name, company }, key) => (
              <ReviewCard
                key={key}
                imgSrc={imgSrc}
                content={content}
                name={name}
                company={company}
              />
            ))}
          </div>
        </div>
      </section>
  )
}

export default Review