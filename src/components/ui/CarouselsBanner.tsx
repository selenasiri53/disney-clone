'use client' // width of carousel is dependent on the user's browser, device

import {Movie} from '../../../typings'
import useEmblaCarousel from "embla-carousel-react"; // npm install embla-carousel-react --save
import Autoplay from "embla-carousel-autoplay"; // npm install embla-carousel-autoplay --save
import Image from "next/image"
import getImagePath from "../../lib/getImagePath"

Autoplay.globalOptions = { delay: 8000 }; // every 8 seconds will swipe through

function CarouselsBanner({ movies }: {movies: Movie[] }) {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [Autoplay()]) // duration - how quickly it will swipe

   return (
   <div
    className="overflow-hidden lg:-mt-40 relative cursor-pointer"
    ref={emblaRef}
    >
        <div className="flex">
            {movies.map(movie => (
                <div key={movie.id} className="flex-[0_0_100%]"> 
                {/* option 1: className added in tailwind.config.ts > 'extend'. use className="flex-full" */}
                {/* option 2: inline solution: "flex-[0_0_100]" */}
                    hello
                    <Image
                        key={movie.id}
                        src={getImagePath(movie.backdrop_path, true)}
                        alt=""
                        width={1920}
                        height={1340} // changed from 1080, to view title and overview below
                    />

                    <div>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                </div> 
            ))}
        </div>
    </div>)
}

export default CarouselsBanner

// optimized from:

// type Props = {
//     movies: Movie[]
// }

// function CarouselsBanner({movies}: Props) {
//     const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [Autoplay()]) // how quickly it will swipe / save

//   return (
//     <div>CarouselsBanner</div>
//   )
// }