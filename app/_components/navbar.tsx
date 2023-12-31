import Image from "next/image"
import Link from "next/link"

const routes = [
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Contact",
    route: "/contact",
  },
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 flex flex-col items-center justify-between w-full h-12 backdrop-blur-xl backdrop-saturate-180 z-[9999]">
      <div className="flex items-start justify-center lg:justify-start max-w-7xl w-full h-full text-md lg:text-md border-b border-[--storm]">
        <div className="flex items-center space-x-6 h-full">
          <Link href="/" className="">
            <Image
              src="/logos/svm.svg"
              alt="Small Volume Milling"
              className="drop-shadow-[0_0_0.25rem_#ffffff50]"
              width={24}
              height={24}
              priority
            />
          </Link>
          {routes.map(({ name, route }, i) => (
            <Link href={route} key={i} className="hover:underline">
              <span>{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
