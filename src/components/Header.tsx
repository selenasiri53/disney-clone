import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image
        src="https://links.papareact.com/a943ae"
        alt="Logo" 
        width={120}
        height={100}
        className="cursor-pointer" 
         />
      </Link>

      <div className="flex space-x-2">
        {/* GenreDropdown */}
        {/* SearchInput */}
        {/* ThemeToggler */}
      </div>
    </header>
  )
}

export default Header