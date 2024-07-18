"use client"

import Image from "next/image";
import { Button } from "./ui/button";

interface ProjectCardProps {
	title: string;
	technologies: string;
	description: string;
	image: string;
	href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	technologies,
	description,
  image,
  href,
}) => {

	const handleClick = () => {
    window.open(href, '_blank')
  }

  return ( 
    <div className="bg-white group rounded-xl border p-3 flex flex-col w-full">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={image}
          fill
          alt="Imagem do projeto"
          className="aspect-square object-cover rounded-md"
        />
      </div>
			<div className="flex-grow">
				<h1 className="text-2xl font-ttsupermolot-bold">{title}</h1>
				<p className="text-sm text-muted-foreground">
					{technologies}
				</p>
				<div className="mt-4">
					{description}
				</div>
      </div>
			<Button 
				className="w-full mt-4 text-lg font-ttsupermolot-normal bg-[#201F53] hover:bg-[#33326b]"
				onClick={handleClick}
			>
				Acessar
			</Button>
    </div>
   );
}
 
export default ProjectCard;