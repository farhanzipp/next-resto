import { Hero, Navbar } from "@/components";
import Image from "next/image";
import { playfair } from "./fonts";

export default function Home() {
  return (
    <main>
      <div className="min-h-[93vh] mt-24">
        <Hero />
        <section className="lg:w-4/5 mx-auto">
          <div className="flex flex-col md:flex-row py-4 md:py-0 text-lg">
            <div className="flex flex-col md:w-1/2 gap-2 px-5 pb-5 justify-center">
              <h2 className={`${playfair.className} text-4xl font-bold`}>Access Hundreds Recipes Everywhere</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque alias illum, similique cumque perspiciatis, laudantium eius ab obcaecati quam dignissimos eligendi quos fugit quasi aut in? Necessitatibus, dolores corporis.</p>
            </div>
            <div className="md:w-1/2 h-64 relative md:h-80 bg-red-300">
              <Image
                src='/info1.svg'
                alt='info 1'
                sizes="100%"
                fill
                priority
              />
            </div>
          </div>
          <div className="flex flex-col py-4 md:py-0 md:flex-row-reverse text-lg">
            <div className="flex flex-col md:w-1/2 gap-2 px-5 pb-5 justify-center">
              <h2 className={`${playfair.className} text-4xl font-bold`}>Guaranteed Recipes Quality</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque alias illum, similique cumque perspiciatis, laudantium eius ab obcaecati quam dignissimos eligendi quos fugit quasi aut in? Necessitatibus, dolores corporis.</p>
            </div>
            <div className="md:flex-1 h-64 relative md:h-80 bg-green-300">
              <Image
                src='/info2.svg'
                alt='info 2'
                sizes="100%"
                fill
                priority
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-4 md:py-0 text-lg">
            <div className="flex flex-col md:w-1/2 gap-2 px-5 pb-5 justify-center">
              <h2 className={`${playfair.className} text-4xl font-bold`}>Newest Collection Available</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque alias illum, similique cumque perspiciatis, laudantium eius ab obcaecati quam dignissimos eligendi quos fugit quasi aut in? Necessitatibus, dolores corporis.</p>
            </div>
            <div className="md:flex-1 h-64 relative md:h-80 bg-blue-300">
              <Image
                src='/info3.svg'
                alt='info 3'
                sizes="100%"
                fill
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
