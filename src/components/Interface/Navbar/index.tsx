import { IconPR, IconUser } from "@/components/Icons";
import { Logo } from "@icons/Logo";

export function Navbar() {
  return (
    <header className="">
      <div className="flex justify-between align-center ml-[2.5rem] mr-[2.5rem] mt-[15px] mb-[21px]">
        <div className="">
          <Logo />
        </div>
        <nav className="pl-4 pr-4 flex ">
          <a
            className="text-purple-400 px-[18px] hover:text-purple-300 "
            href="#"
          >
            Projetos e comunidades
          </a>
          <a
            className="text-purple-400 px-[18px] hover:text-purple-300 flex "
            href="#"
          >
            <div className="mr-2 pb-2">
              <IconPR />
            </div>
            Explore
          </a>
          <a
            className="text-purple-400 px-[18px] hover:text-purple-300 flex selection:"
            href="#"
          >
            <div className="mr-2 pb-2">
              <IconUser />
            </div>
            Artistas
          </a>
          <a
            className="text-purple-400 px-[18px] hover:text-purple-300"
            href="#"
          >
            Sobre
          </a>
          <a
            className="text-purple-400 px-[18px] hover:text-purple-300"
            href="#"
          >
            Dashboard
          </a>
        </nav>
        <button className="bg-purple-400 w-[149px] h-[28px]">
          <span className="text-gray-900 text-base">Invista em nós</span>
        </button>
      </div>
    </header>
  );
}
