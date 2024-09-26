import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"
import Services from "./services/page"
import Work from "./work/page"
import Resume from "./resume/page"
import Contact from "./contact/page"


const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
            <div className="flex flex-col md:flex-row lg:flex-row
             justify-between items-center lg:pb-20 ">

                {/* Text */}
                <div className="text-center md:text-left order-2 xl:order-none">
                    <span className="text-xl">Front-end Developer | MERN Stack Developer</span>
                    <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Mamun Ahmed.</span></h1>
                    <p className="max-w-[500px] mb-9 text-white/80">
                        I excel at crafting elegant digital experiences and I am proficient in
                        various programming languages and technologies.
                    </p>

                {/* button and social icons */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <Button variant="outline" size="lg"
                    className="uppercase flex items-center gap-2">
                        <span>Download CV</span>
                        <FiDownload className="text-xl"/>
                    </Button>

                    <div className="mb-8 xl:mb-0">
                    <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full
                    flex justify-center items-center text-accent text-base hover:bg-accent hover:bg-accent hover:text-primary
                    hover:transition-all duration-500" />
                    </div>
                </div>

                </div>

                {/* Photo */}
                <div className="order-1 xl:order-none mb-8 xl:mb-0">
                    <Photo/>
                </div>
            </div>
        </div>

        <Stats/>


        {/* work */}
        <div className="">
       <div className="mt-20 mb-20">
       <div className="border-b border-white/20 w-full"></div>
       </div>
            <Work/>
        </div>


        {/* services */}
        <div className="">
       <div className="mt-20 mb-20">
       <div className="border-b border-white/20 w-full"></div>
       </div>
            <Services/>
        </div>


        {/* resume */}
        <div className="">
       <div className="mt-20 mb-20">
       <div className="border-b border-white/20 w-full"></div>
       </div>
            <Resume/>
        </div>

          {/* contact */}
          <div className="">
       <div className="mt-20 mb-20">
       <div className="border-b border-white/20 w-full"></div>
       </div>
            <Contact/>
        </div>




    </section>
  )
}

export default Home
