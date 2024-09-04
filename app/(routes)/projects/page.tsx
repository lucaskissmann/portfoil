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
					title = "Livraria Backend NodeJS"
					technologies = "NodeJS, NestJS, TypeORM, Jest, Artillery, Docker"
					description = "O Projeto Livraria Backend é um sistema completo de gerenciamento de livrarias, permitindo a administração eficiente de autores, livros, aluguéis e locatários. O sistema oferece funcionalidades que facilitam o controle das operações."
					image = "/library.jpg"
					href = "https://github.com/lucaskissmann/library-api"
				/>
				<ProjectCard
					title = "Delivery Microsservices"
					technologies = "Java, Spring, Eureka, Gateway API, Feign Client"
					description = "O Projeto é uma solução de entrega, organizada em microsserviços para gerenciar pedidos e pagamentos. Utilizando Service Discovery e Gateway, oferece comunicação entre serviços, além de resiliência com Circuit Breaker e fallback."
					image = "/microsservices.png"
					href = "https://github.com/lucaskissmann/delivery-microsservices"
				/>
				<ProjectCard
					title = "Kafka Pix"
					technologies = "Java, Spring, Kafka, Zookeeper"
					description = "O Projeto explora a utilização do kafka para registrar os eventos de uma aplicação de Pix. Possui um serviço de produtor que atua como uma API Rest, um serviço de consumidor e outro de stream de dados para capturar os eventos em tempo real."
					image = "/kafka.png"
					href = "https://github.com/lucaskissmann/kafka-pix"
				/>
				<ProjectCard
					title = "Spring Security JWT"
					technologies = "Java, Spring, Spring Security"
					description = "O Projeto ilustra a utilização da biblioteca de segurança do Spring. Possui uma rota para autenticação do usuário que retorna o token de acesso. Utilizando esse token de acesso, é possível visualizar o conteúdo da rota privada."
					image = "/security.jpg"
					href = "https://github.com/lucaskissmann/spring-security-jwt"
				/>
				<ProjectCard
					title = "Procecssamento Assíncrono"
					technologies = "Java, Spring, Spring Batch"
					description = "O projeto ilustra a criação de um job simples utilizando Spring Batch para ler e processar dados de um arquivo CSV. Para melhorar a performance, foi adotado o processamento assíncrono, permitindo a criação de múltiplos processadores e threads."
					image = "/springbatch.png"
					href = "https://github.com/lucaskissmann/processamento-assincrono"
				/>
				<ProjectCard
					title = "Livraria Backend Java"
					technologies = "Java, Spring, MySQL, JUnit, Design Pattern"
					description = "O Projeto Livraria Backend é um sistema completo de gerenciamento de livrarias, permitindo a administração eficiente de autores, livros, aluguéis e locatários. O sistema oferece funcionalidades que facilitam o controle das operações."
					image = "/library_java.jpg"
					href = "https://github.com/lucaskissmann/library-api-spring"
				/>
				<ProjectCard
					title = "Livraria Frontend"
					technologies = "NextJS, React, Axios, Vercel"
					description = "O Projeto Livraria Frontend representa a parte de interação com o usuário, usando como base para as operações o serviço de livraria desenvolvido em Java. Essa interface possui todas as funcionalidades para gerenciamento de livros, autores, locatários e locação de livros."
					image = "/book.jpg"
					href = "https://github.com/lucaskissmann/library-front"
				/>
			</section>
		</div>
	)
}

export default ProjectPage;