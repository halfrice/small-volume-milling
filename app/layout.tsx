// import "normalize.css/normalize.css"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const montserrat = Montserrat({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      {/* <body className={montserrat.className}> */}
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
