import { Icons } from "@/mocks/contants";
import { Github, Linkedin, Mail, ArrowDown, Code2, Database, Laptop, Briefcase, GraduationCap } from "lucide-react";

export const getIcon = (iconName:string, props= {}) => {
  const iconProps = {
    tabIndex: -1,
    ...props
  }
  switch (iconName){
    case Icons.github: return <Github {...iconProps} />;
    case Icons.linkedIn: return <Linkedin {...iconProps} />;
    case Icons.mail: return <Mail {...iconProps} />;
    case Icons.arrowDown: return <ArrowDown {...iconProps} />;
    case Icons.laptop: return <Laptop {...iconProps} />;
    case Icons.database: return <Database {...iconProps} />;
    case Icons.code: return <Code2 {...iconProps} />;
    case Icons.code: return <Briefcase {...iconProps} />;
    case Icons.code: return <GraduationCap {...iconProps} />;
    default: return null;
  }
}