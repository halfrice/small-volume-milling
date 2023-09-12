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
    <nav className="flex flex-col items-center justify-between h-12 px-6">
      <div className="flex items-start max-w-5xl w-full h-full font-mono text-md">
        <div className="flex items-center space-x-6 h-full">
          <Link href="/">SMV</Link>
          {routes.map(({ name, route }, i) => (
            <Link href={route} key={i}>
              <span>{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
