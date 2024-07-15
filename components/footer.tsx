import Link from "next/link";
import Container from "./ui/container";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="border-b bg-[#BEE7F9] pt-1">
			<div className="flex justify-center">
				<Link href="/">
					<Image src={'/footer.svg'} height={180} width={200} alt="Logo da DB azul escuro"></Image>
				</Link>
			</div>
		</div>
	)
}

export default Footer;