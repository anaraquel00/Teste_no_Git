import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Responsivo',
    description: 'Plataforma completa de e-commerce com carrinho de compras e pagamentos integrados.',
    image: 'https://placehold.co/600x400',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveLink: 'https://exemplo.com',
    github: 'https://github.com/exemplo',
    testimonial: 'O John entregou um projeto excepcional que superou nossas expectativas. - Maria Silva, CEO'
  },
  {
    title: 'App de Gestão de Tarefas',
    description: 'Aplicativo de produtividade com recursos de colaboração em tempo real.',
    image: 'https://placehold.co/600x400',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://exemplo.com',
    github: 'https://github.com/exemplo',
    testimonial: 'Excelente trabalho e comunicação clara durante todo o projeto. - Pedro Santos, CTO'
  },
  {
    title: 'Sistema de Reservas',
    description: 'Sistema de reservas online para restaurantes com painel administrativo.',
    image: 'https://placehold.co/600x400',
    tech: ['React', 'Express', 'PostgreSQL'],
    liveLink: 'https://exemplo.com',
    github: 'https://github.com/exemplo'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo com visualização de dados em tempo real.',
    image: 'https://placehold.co/600x400',
    tech: ['Next.js', 'D3.js', 'Prisma'],
    liveLink: 'https://exemplo.com',
    github: 'https://github.com/exemplo'
  }
];

const skills = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Vue.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 }
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MongoDB', level: 80 }
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'CI/CD', level: 80 }
  ]
};

const certifications = [
  'AWS Certified Developer - Associate',
  'Meta Front-End Developer Professional Certificate',
  'Google Cloud Professional Developer'
];

function App() {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });
  const { ref: portfolioRef, inView: portfolioInView } = useInView({ triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-[#F3E5F5] text-[#4A148C]">
      {/* Header */}
      <header ref={headerRef} className={`py-20 px-4 text-center transition-opacity duration-1000 ${headerInView ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src="https://placehold.co/200x200"
          alt="John Doe"
          className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-[#9C27B0]"
        />
        <h1 className="text-4xl font-bold mb-4">John Doe</h1>
        <h2 className="text-2xl mb-6">Desenvolvedor Web Full Stack</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Especializado em criar soluções web inovadoras e escaláveis. 
          Com mais de 5 anos de experiência em desenvolvimento full stack, 
          transformo ideias em aplicações web de alta qualidade.
        </p>
      </header>

      {/* Portfolio */}
      <section ref={portfolioRef} className={`py-16 px-4 transition-opacity duration-1000 ${portfolioInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Portfólio</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#E1BEE7] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveLink} className="flex items-center text-[#4A148C] hover:underline">
                    <ExternalLink className="w-4 h-4 mr-1" /> Demo
                  </a>
                  <a href={project.github} className="flex items-center text-[#4A148C] hover:underline">
                    <Github className="w-4 h-4 mr-1" /> GitHub
                  </a>
                </div>
                {project.testimonial && (
                  <blockquote className="mt-4 italic text-sm border-l-4 border-[#9C27B0] pl-4">
                    {project.testimonial}
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section ref={skillsRef} className={`py-16 px-4 bg-white transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Habilidades & Tecnologias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              {skills.frontend.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#F3E5F5] rounded-full h-2">
                    <div
                      className="bg-[#9C27B0] h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              {skills.backend.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#F3E5F5] rounded-full h-2">
                    <div
                      className="bg-[#9C27B0] h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Ferramentas</h3>
              {skills.tools.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#F3E5F5] rounded-full h-2">
                    <div
                      className="bg-[#9C27B0] h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Certificações</h3>
            <ul className="list-disc list-inside">
              {certifications.map((cert, index) => (
                <li key={index} className="mb-2">{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} className={`py-16 px-4 transition-opacity duration-1000 ${contactInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium">Nome</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-[#9C27B0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A148C]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium">E-mail</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-[#9C27B0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A148C]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="projectType" className="block mb-2 font-medium">Tipo de Projeto</label>
              <select
                id="projectType"
                className="w-full px-4 py-2 border border-[#9C27B0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A148C]"
                required
              >
                <option value="">Selecione uma opção</option>
                <option value="website">Website</option>
                <option value="webapp">Aplicação Web</option>
                <option value="ecommerce">E-commerce</option>
                <option value="other">Outro</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="budget" className="block mb-2 font-medium">Orçamento</label>
              <select
                id="budget"
                className="w-full px-4 py-2 border border-[#9C27B0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A148C]"
                required
              >
                <option value="">Selecione uma faixa</option>
                <option value="small">Até R$ 5.000</option>
                <option value="medium">R$ 5.000 - R$ 15.000</option>
                <option value="large">R$ 15.000 - R$ 30.000</option>
                <option value="enterprise">Acima de R$ 30.000</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block mb-2 font-medium">Descrição do Projeto</label>
              <textarea
                id="description"
                rows={4}
                className="w-full px-4 py-2 border border-[#9C27B0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A148C]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#4A148C] text-white py-3 rounded-lg hover:bg-[#9C27B0] transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="mb-4">Outras formas de contato:</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:john@exemplo.com" className="flex items-center text-[#4A148C] hover:underline">
                <Mail className="w-5 h-5 mr-2" /> john@exemplo.com
              </a>
              <a href="https://linkedin.com/in/johndoe" className="flex items-center text-[#4A148C] hover:underline">
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </a>
            </div>
            <p className="mt-6">
              Tempo médio de resposta: 24-48 horas <br />
              Status: Disponível para novos projetos
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;