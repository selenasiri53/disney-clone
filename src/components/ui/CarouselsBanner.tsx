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
            {movies.map((movie) => (
                <div key={movie.id} className="flex-[0_0_100%] min-w-0 relative"> 
                {/* relative - shows text based on that specific movie */}
                {/* option 1: className added in tailwind.config.ts > 'extend'. use className="flex-full" */}
                {/* option 2: inline solution: "flex-[0_0_100]" */}
                    hello
                    <Image
                        key={movie.id}
                        src={getImagePath(movie.backdrop_path, true)}
                        alt=""
                        width={1920}
                        height={1080}
                        // height={1340} // changed from 1080, to view title and overview below
                    />

                    <div className="hidden md:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90  via-transparent to-transparent p-10 space-y-5 text-white"> 
                    {/* hidden on mobile view, mt - margin top z - zed-index, see coming through */}
                        <h2 className="text-5xl font-bold max-w-xl z-50">{movie.title}</h2>
                        <p className="max-w-xl line-clamp-3">{movie.overview}</p>
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