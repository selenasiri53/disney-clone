import { Genres } from "../../../typings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link";

async function GenreDropdown() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`, // not accessible on the client's side, only on the server side
        },
        next: {
            revalidate: 60 * 60 * 24, // once every 24 hours it builds a fresh request (seconds * minutes * hours), rather than 10,000 dynamic requests
            // useful if it doesnt need to be dynamic every single time
        }
    };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres; // pass the data to the Genres type

  console.log(data)

  console.log(process.env.TMDB_API_KEY)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center">
        Genre <ChevronDown className="ml-1" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* 3rd */}
        {data.genres.map((genre) => (
          <DropdownMenuItem key={genre.id}>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>{genre.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default GenreDropdown

// https://developer.themoviedb.org/docs/getting-started