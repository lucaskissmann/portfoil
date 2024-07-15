"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

interface NavItemProps {
  label: string;
	href?: string;
};

const NavItem: React.FC<NavItemProps> = ({
  label,
	href
}) => {
  const pathname = usePathname();

	const isActive = href ? pathname === `/${href}` : pathname === "/";
	const isCurriculum = href === 'curriculum';

	const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pdfUrl = '/curriculum.pdf';
		window.open(pdfUrl, '_blank');
  };

  return ( 
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
			<Link
				key={label}
				href={href? href: '/'}  
				className={cn(
					"text-lg font-bold transition-colors hover:text-[#201F53] font-ttsupermolot-bold",
					isActive ? "text-[#201F53]" : "text-[#494883]"
				)}
				onClick={isCurriculum ? handleDownload : undefined }
			>
				{label}
			</Link>
    </nav>
   );
}
 
export default NavItem;