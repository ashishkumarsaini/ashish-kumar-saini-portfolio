import { Icons } from "@/mocks/contants";
import { Github, Linkedin, Mail, ArrowDown, Code2, Database, Laptop } from "lucide-react";

export const getIcon = (iconName:string) => {
  switch (iconName){
    case Icons.github: return Github;
    case Icons.linkedIn: return Linkedin;
    case Icons.mail: return Mail;
    case Icons.arrowDown: return ArrowDown;
    case Icons.laptop: return Laptop;
    case Icons.database: return Database;
    case Icons.code: return Code2;
    default: return null;
  }
}