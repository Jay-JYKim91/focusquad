import clsx from "clsx"
import Logo from "/logo.png"

const titleClasses = clsx(
  "text-2xl font-bold text-charcoalGray hidden md:block"
)

export default function Header() {
  return (
    <header className="flex p-2 md:p-4">
      <div className="flex content-center items-center">
        <img src={Logo} className="w-12 h-12 mr-2" />
        <span className={titleClasses}>FocusQuad</span>
      </div>
      <div></div>
    </header>
  )
}
