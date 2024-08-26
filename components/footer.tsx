import Image from "next/image";

const Footer = () => {
	return (
		<div className="border-b bg-[#BEE7F9] pt-1">
			<div className="flex justify-center">
				<Image src={'/footer.svg'} height={180} width={200} alt="Logo da DB azul escuro"></Image>
			</div>
		</div>
	)
}

export default Footer;