import ProjectCard from "@/components/project-card";

const ProjectPage = () => {
	return (
		<div className="my-16 mx-8 ">
			<section className="space-y-4 pb-7">
				<div className="text-3xl font-ttsupermolot-bold">
					Meus
				</div>
				<div className="text-6xl font-extrabold">
					Projetos
				</div>
			</section>
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
					<ProjectCard
						title = "Votação Backend"
						technologies = "Java, SpringBoot, Swagger, MySQL, Docker"
						description = "O Projeto Votação Backend é uma solução robusta para a gestão de sessões de votação. Ele permite a administração de várias sessões de votação, cada uma com suas pautas específicas, além de gerenciar os votos de cada usuário."
						image = "/votacaoJava.svg"
						href = "https://github.com/lucaskissmann/desafio-db-votacao"
					/>
					<ProjectCard
						title = "Livraria Backend"
						technologies = "NodeJS, NestJS, TypeORM, Jest, Artillery, Docker"
						description = "O Projeto Livraria Backend é um sistema completo de gerenciamento de livrarias, permitindo a administração eficiente de autores, livros, aluguéis e locatários. O sistema oferece funcionalidades que facilitam o controle das operações."
						image = "/library.jpg"
						href = "https://github.com/lucaskissmann/library-api"
					/>
			</section>
		</div>
	)
}

export default ProjectPage;