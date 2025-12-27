import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button, ButtonVariants } from "../ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Ashish Kumar Saini</h3>
            <p className="text-muted-foreground">
              Full Stack Developer crafting digital experiences with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-2">
              <Button variant={ButtonVariants.OUTLINE} size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant={ButtonVariants.OUTLINE} size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant={ButtonVariants.OUTLINE} size="icon" asChild>
                <a href="mailto:alex@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Ashish Kumar Saini. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React & Shadcn
          </p>
        </div>
      </div>
    </footer>
  );
}
