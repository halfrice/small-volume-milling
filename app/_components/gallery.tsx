import Image from "next/image"

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 overflow-hidden">
      <div className="relative">
        <Image
          className="object-cover"
          src="/images/dominoes-red-flat.jpg"
          alt=""
          fill
        />
      </div>
      <div className="relative">
        <Image className="object-cover" src="/images/bg.jpg" alt="" fill />
      </div>
      <div className="relative">
        <Image
          className="object-cover"
          src="/images/dominoes.jpg"
          alt=""
          fill
        />
      </div>
      <div className="relative">
        <Image
          className="object-cover"
          src="/images/smallvolumemilling.jpg"
          alt=""
          width={360}
          height={240}
        />
      </div>
      <div className="relative">
        <Image className="object-cover" src="/images/doge.png" alt="" fill />
      </div>
      <div className="relative">
        <Image
          className="object-cover"
          src="/images/dominoes-red-vertical.jpg"
          alt=""
          fill
        />
      </div>
      <div className="relative">
        <Image
          className="object-cover"
          src="/images/millworkmgmt.jpg"
          alt=""
          width={360}
          height={240}
        />
      </div>
      <div className="relative">
        <Image className="" src="/images/bg.jpg" alt="" fill />
      </div>
    </div>
  )
}

export default Gallery
