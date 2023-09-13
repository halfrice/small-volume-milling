// import "normalize.css/normalize.css"
import "./globals.css"
import Navbar from "./components/navbar"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
