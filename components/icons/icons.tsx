import { Icons } from "@/mocks/contants";
import { Github, Linkedin, Mail, ArrowDown, Code2, Database, Laptop, Briefcase, GraduationCap, Server, Cloud, Phone, MapPin, ArrowRight, HamburgerIcon, MenuIcon } from "lucide-react";

export const getIcon = (iconName: string, props = {}) => {
  const iconProps = {
    tabIndex: -1,
    ...props
  }
  switch (iconName) {
    case Icons.github: return <Github {...iconProps} />;
    case Icons.linkedIn: return <Linkedin {...iconProps} />;
    case Icons.mail: return <Mail {...iconProps} />;
    case Icons.arrowDown: return <ArrowDown {...iconProps} />;
    case Icons.arrowRight: return <ArrowRight {...iconProps} />;
    case Icons.laptop: return <Laptop {...iconProps} />;
    case Icons.database: return <Database {...iconProps} />;
    case Icons.code: return <Code2 {...iconProps} />;
    case Icons.code: return <Briefcase {...iconProps} />;
    case Icons.code: return <GraduationCap {...iconProps} />;
    case Icons.server: return <Server {...iconProps} />;
    case Icons.cloud: return <Cloud {...iconProps} />;
    case Icons.phone: return <Phone {...iconProps} />;
    case Icons.map: return <MapPin {...iconProps} />;
    case Icons.hamburger: return <MenuIcon {...iconProps} />;
    default: return null;
  }
}