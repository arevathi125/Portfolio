import { Bars3Icon } from "@heroicons/react/24/solid";
export default function Header() {
  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-black" href="#">
        Revathi
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="block md:hidden">
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}
