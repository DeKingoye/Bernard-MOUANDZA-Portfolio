import Link from "next/link"

Link

const Logo = () => {
  return (
    <Link href="/" className="text-[28px] font-normal">
      Bernard<span className="text-accent text-4xl">.</span>
    </Link>
  )
}

export default Logo