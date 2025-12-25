import { Icons } from "@/mocks/contants";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export const getIcon = (iconName:string) => {
  switch (iconName){
    case Icons.github: return Github;
    case Icons.linkedIn: return Linkedin;
    case Icons.mail: return Mail;
    case Icons.arrowDown: return ArrowDown;
    default: return null;
  }
}