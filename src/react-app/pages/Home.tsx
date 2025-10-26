import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Skills from '@/react-app/components/Skills';
import Experience from '@/react-app/components/Experience';
import Projects from '@/react-app/components/Projects';
import Contact from '@/react-app/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gradient-to-b from-background via-secondary/10 to-background border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-3 md:space-y-4 text-center md:text-left">
              <button className="text-xl md:text-2xl font-bold gradient-text font-mono hover:scale-105 transition-transform duration-200 inline-block">
                &lt;DevPortfolio/&gt;
              </button>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Ready to collaborate on something extraordinary? I'm always excited to connect with fellow innovators and push the boundaries of what's possible with technology.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 text-center md:text-left md:mx-auto">
              <h3 className="text-base md:text-lg font-semibold text-foreground">Quick Links</h3>
              <ul className="flex flex-wrap justify-center md:flex-col md:justify-start gap-x-6 gap-y-2 md:gap-x-0 md:space-y-2">
                <li>
                  <a href="#about" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-200">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 md:space-y-4 text-center md:text-left md:mx-auto">
              <h3 className="text-base md:text-lg font-semibold text-foreground">Get In Touch</h3>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-muted-foreground">Ready to work together?</p>
                <a 
                  href="mailto:your.email@example.com"
                  className="block text-sm md:text-base text-primary hover:text-accent transition-colors duration-200 font-medium"
                >
                  your.email@example.com
                </a>
                <p className="text-sm md:text-base text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left text-muted-foreground text-xs md:text-sm">
              <div className="flex items-center">
                <span>© 2024 DevPortfolio. Made with</span>
                <span className="mx-1 md:mx-2 text-red-500 animate-pulse">♥</span>
                <span>and lots of coffee.</span>
              </div>
            </div>
            <div className="text-xs md:text-sm text-muted-foreground text-center md:text-right">
              <span>Built with React, Vite & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
