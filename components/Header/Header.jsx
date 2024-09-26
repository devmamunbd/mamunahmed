import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'


//components
import Navbar from '../Navbar/Navbar'
import MobileNav from '../MobileNav'


const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-pink-50-20'>
        <div className='container mx-auto flex justify-between items-center'>
            {/* logo */}
            <Link href="/">
            <h1 className='text-3xl font-semibold'>Mamun <span className='text-accent'>Ahmed.</span></h1>
            </Link>

            {/* desktop-nav */}
            <div className="hidden xl:flex items-center gap-8">
            <Navbar/>
            <Link href="/contact">
            <Button>Hire Me</Button>
            </Link>
            </div>


            {/* mobile-nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>

        </div>
    </header>
  )
}

export default Header
