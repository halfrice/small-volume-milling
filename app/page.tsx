import Image from "next/image"
import Gallery from "./_components/gallery"

const HomePage = () => {
  return (
    <section className="flex justify-center min-w-full mt-12 px-4 lg:px-0">
      <div id="main-inner" className="max-w-6xl">
        <section id="intro">
          <div className="flex justify-center lg:justify-start w-full mt-8">
            <h1 className="pb-1 text-3xl lg:text-4xl text-[--text] border-b-4 border-[--terminal-black]">
              Small Volume Milling
            </h1>
          </div>

          <div
            id="title-image"
            className="flex place-items-center relative w-full mt-8 px-0 aspect-video overflow-hidden z-[-1]"
          >
            <Image
              className="object-cover rounded-lg -translate-y-8 lg:-translate-y-20"
              src="/images/bg.jpg"
              alt="SVM Background"
              fill
              priority
            />
          </div>

          <div
            id="services"
            className="grid lg:grid-cols-3 place-items-center text-center lg:text-left w-full mt-8"
          >
            <a
              href="/contact"
              className="group rounded-lg max-w-sm h-full p-4 border border-transparent transition-colors hover:border-[--terminal-black] hover:bg-slate-800/20"
            >
              <h2 className="mb-3 text-xl lg:text-2xl">
                Design{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  -&gt;
                </span>
              </h2>
              <p className="w-full text-sm lg:text-base opacity-70">
                Minim tempor duis elit ut eu dolor ullamco dolore ad quis. Lorem
                do adipisicing Lorem consequat commodo ut.
              </p>
            </a>

            <a
              href="/contact"
              className="group rounded-lg max-w-sm h-full p-4 border border-transparent transition-colors hover:border-[--terminal-black] hover:bg-slate-800/20"
            >
              <h2 className="mb-3 text-xl lg:text-2xl">
                Prototype{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="w-full text-sm lg:text-base opacity-70">
                Tempor nisi proident dolor consequat cupidatat velit commodo non
                sit labore ex veniam commodo veniam.
              </p>
            </a>

            <a
              href="/contact"
              className="group rounded-lg max-w-sm h-full p-4 border border-transparent transition-colors hover:border-[--terminal-black] hover:bg-slate-800/20"
            >
              <h2 className="mb-3 text-xl lg:text-2xl">
                Build{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="w-full text-sm lg:text-base opacity-70">
                Cupidatat do dolore exercitation dolore sunt velit minim nisi
                reprehenderit esse.
              </p>
            </a>
          </div>
        </section>

        <section id="gallery">
          <div className="flex justify-center lg:justify-start w-full mt-16 pt-8 border-t border-[--storm]">
            <h1 className="pb-1 text-2xl lg:text-3xl text-[--text] border-b-4 border-[--terminal-black]">
              Our Work
            </h1>
          </div>
          <Gallery />
          <div className="flex justify-center w-full mt-8">
            <a
              href="/projects"
              className="group rounded-lg px-4 py-2 border border-[--dark-blue] transition-colors hover:border-[--blue] hover:bg-slate-800/30"
            >
              <div>
                More{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </div>
            </a>
          </div>
        </section>

        <section id="clients">
          <div className="flex justify-center w-full mt-16 pt-8 border-t border-[--storm]">
            <h1 className="pb-1 text-2xl lg:text-3xl text-[--text] border-b-4 border-[--terminal-black]">
              Clients
            </h1>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="grid lg:grid-cols-3 w-full max-w-4xl mt-8">
              <a id="amd" href="/" className="group flex justify-center w-full">
                <Image
                  className="relative w-[160px] lg:w-[196px]"
                  src="/logos/amd.svg"
                  alt="AMD"
                  width={800}
                  height={191}
                />
              </a>
              <a
                id="suffolk"
                href="/"
                className="group flex justify-center w-full mt-8 lg:mt-0"
              >
                <Image
                  className="relative w-[160px] lg:w-[196px]"
                  src="/logos/suffolk.png"
                  alt="Suffolk"
                  width={188}
                  height={48}
                />
              </a>
              <a
                id="astra-zeneca"
                href="/"
                className="group flex justify-center w-full mt-8 lg:mt-0"
              >
                <Image
                  className="relative w-[160px] lg:w-[196px]"
                  src="/logos/astrazeneca.svg"
                  alt="Astra Zeneca"
                  width={188}
                  height={48}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default HomePage
