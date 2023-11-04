import Gallery from "../../_components/gallery"

const ProjectsPage = () => {
  return (
    <section className="flex flex-col items-center justify-between w-full min-w-full">
      <div className="flex flex-col items-center lg:items-start w-full max-w-5xl mt-20 px-4 lg:px-0">
        <h1 className="pb-1 text-2xl lg:text-3xl text-[--green] border-b-4 border-[--terminal-black]">
          Projects
        </h1>
        <Gallery />
        <div className="flex justify-center w-full mt-12 text-sm lg:text-base">
          <p className="max-w-3xl">
            Ullamco exercitation aliqua enim minim quis aliqua id commodo. Minim
            id officia amet excepteur. Minim commodo nostrud ipsum elit minim
            duis elit exercitation Lorem excepteur magna sit. Voluptate
            excepteur occaecat amet eiusmod elit. Elit elit ea adipisicing ex
            ut. Quis fugiat dolore sint aliquip fugiat officia dolor minim
            aliqua aliquip deserunt minim culpa tempor. Qui aliqua est labore
            cillum.
          </p>
        </div>
        <div className="flex justify-center w-full mt-8">
          <a
            href="/contact"
            className="group rounded-lg px-4 py-2 border border-[--dark-blue] transition-colors hover:border-[--blue] hover:bg-slate-800/30"
          >
            <div>
              Contact{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
