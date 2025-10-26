import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  categories: string[];
  status: 'Published Research' | 'Open Source' | 'Active Development' | 'Completed' | 'Featured';
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Code Assistant',
    subtitle: 'Intelligent Development Tool',
    description: 'AI-powered code completion and debugging assistant that integrates with popular IDEs. Features real-time suggestions, bug detection, and automated code refactoring capabilities.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    technologies: ['Python', 'OpenAI API', 'VS Code Extension', 'TypeScript', 'Machine Learning'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    categories: ['AI/ML', 'Developer Tools'],
    status: 'Featured',
    featured: true
  },
  {
    id: 2,
    title: 'Smart Portfolio Optimizer',
    subtitle: 'Financial ML Platform',
    description: 'Machine learning platform for portfolio optimization and risk assessment. Analyzes market trends and provides intelligent investment recommendations.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    categories: ['AI/ML', 'Finance', 'Full-Stack'],
    status: 'Open Source'
  },
  {
    id: 3,
    title: 'Real-time Chat Application',
    subtitle: 'WebSocket Communication Platform',
    description: 'Scalable real-time messaging application with end-to-end encryption, file sharing, and video calling capabilities.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
    technologies: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'WebRTC'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    categories: ['Full-Stack', 'Real-time'],
    status: 'Completed'
  },
  {
    id: 4,
    title: 'E-commerce Analytics Dashboard',
    subtitle: 'Business Intelligence Tool',
    description: 'Comprehensive analytics dashboard for e-commerce businesses featuring sales tracking, customer insights, and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    technologies: ['React', 'D3.js', 'Python', 'Django', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    categories: ['Full-Stack', 'Data Visualization'],
    status: 'Completed'
  },
  {
    id: 5,
    title: 'IoT Weather Station',
    subtitle: 'Hardware Integration Project',
    description: 'Internet of Things weather monitoring system with real-time data collection, analysis, and web-based visualization.',
    image: 'https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?w=600&h=400&fit=crop',
    technologies: ['Arduino', 'Python', 'MQTT', 'InfluxDB', 'Grafana'],
    githubUrl: 'https://github.com',
    categories: ['IoT', 'Hardware'],
    status: 'Completed'
  },
  {
    id: 6,
    title: 'Health Tracking Mobile App',
    subtitle: 'React Native Application',
    description: 'Cross-platform mobile application for health and fitness tracking with gamification elements and social features.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    categories: ['Mobile', 'Health Tech'],
    status: 'Active Development'
  },
];

const categories = ['All', 'AI/ML', 'Full-Stack', 'Mobile', 'IoT', 'Developer Tools', 'Finance', 'Health Tech', 'Hardware', 'Real-time', 'Data Visualization'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(selectedCategory));

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that bridge cutting-edge technology with real-world impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="md:hidden">
            <div className="relative">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none bg-background border border-border rounded-full px-4 py-3 pr-10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category} Projects</option>
                ))}
              </select>
            </div>
          </div>

          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category} Projects
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`glass-card rounded-xl overflow-hidden group animate-fade-in-up ${
                project.featured ? 'md:col-span-2 xl:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-accent/20">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs ${
                    project.status === 'Featured' 
                      ? 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80'
                      : 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}>
                    {project.status}
                  </div>
                  {project.featured && (
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-xs">
                      Featured
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <div 
                      key={tech}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs bg-primary/10"
                    >
                      {tech}
                    </div>
                  ))}
                  {project.technologies.length > 4 && (
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs bg-primary/10">
                      +{project.technologies.length - 4} more
                    </div>
                  )}
                </div>

                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex-1 group/view-code"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Interested in collaborating on innovative projects?</p>
          <button 
            onClick={scrollToContact}
            className="glow-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
}
