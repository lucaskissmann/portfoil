import { RxHamburgerMenu } from "react-icons/rx";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";

export function MenuToggle() {

	const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pdfUrl = '/curriculum.pdf';
		window.open(pdfUrl, '_blank');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <RxHamburgerMenu size={30} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/">Sobre</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/curriculum" onClick={handleDownload}>Currículo</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/projects">Projetos</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="https://github.com/lucaskissmann/" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="https://www.linkedin.com/in/lucas-kissmann-862395207/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
