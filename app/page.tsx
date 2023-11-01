import Image from "next/image"

const HomePage = () => {
  return (
    <section className="flex flex-col w-full min-w-full min-h-screen items-center justify-between px-4 lg:px-0">
      <div className="flex flex-col items-center lg:items-start max-w-5xl w-full mt-20">
        <a
          className="flex place-items-center"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-2xl lg:text-3xl text-[--blue]">
            Small Volume Milling
          </h1>
        </a>

        {/* <p className="flex justify-center w-full lg:static lg:w-auto mt-1">
          <code className="text-lg font-bold">408-641-8007</code>
        </p> */}
      </div>

      {/* <div className="flex place-items-center relative before:absolute before:h-[300px] before:w-[480px] my-24 lg:my-48 before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-50 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative w-[128px] lg:w-[196px] dark:drop-shadow-[0_0_2.5rem_#ffffff50]"
          src="/svm-logo.svg"
          alt="SVM Logo"
          width={196}
          height={196}
          priority
        />
      </div> */}
      <div className="flex place-items-center relative mt-0 lg:mt-8 px-0 max-w-5xl aspect-video overflow-hidden rounded-sm z-[-1]">
        <Image
          className="-translate-y-8 lg:-translate-y-20"
          src="/bg.jpg"
          alt="SVM Background"
          width={1024}
          height={768}
          priority
        />
      </div>

      <div className="grid lg:grid-cols-3 text-center lg:text-left lg:max-w-5xl lg:w-full mt-0 lg:mt-8">
        <a
          href=""
          className="group rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl lg:text-2xl">
            Design{" "}
            <span className="inline-block pl-1 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm lg:text-base opacity-50">
            Minim tempor duis elit ut eu dolor ullamco dolore ad quis. Lorem do
            adipisicing Lorem consequat commodo ut.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl lg:text-2xl">
            Prototype{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm lg:text-base opacity-50">
            Tempor nisi proident dolor consequat cupidatat velit commodo non sit
            labore ex veniam commodo veniam.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-4 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl lg:text-2xl">
            Build{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm lg:text-base opacity-50">
            Cupidatat do dolore exercitation dolore sunt velit minim nisi
            reprehenderit esse.
          </p>
        </a>
      </div>

      {/* <div className="mt-64"></div> */}
    </section>
  )
}

export default HomePage
