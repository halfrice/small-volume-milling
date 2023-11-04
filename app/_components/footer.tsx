const Footer = () => {
  return (
    <footer className="flex justify-center w-full min-w-full h-12 mt-24">
      <div className="flex items-start justify-center lg:justify-start max-w-7xl w-full h-full text-md border-t border-[--storm]">
        <div className="flex items-center h-full text-xs lg:text-sm text-[--comments]">
          ©{new Date().getFullYear()} Small Volume Milling LLC
        </div>
      </div>
    </footer>
  )
}

export default Footer
