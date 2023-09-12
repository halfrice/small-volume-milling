import "normalize.css/normalize.css"
import "./globals.css"
import Navbar from "./components/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main>{children}</main>
//       </body>
//     </html>
//   )
// }
