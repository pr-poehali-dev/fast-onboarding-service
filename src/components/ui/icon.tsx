import {
  LucideIcon,
  Phone,
  FileText,
  MessageCircle,
  Clock,
  Settings,
  CheckCircle,
  Monitor,
  Shield,
  Link,
  Download,
  Check,
  Quote,
  Star,
  TrendingUp,
  Send,
  Search,
  BookOpen,
  Briefcase,
  Mail,
  Info,
  ChevronDown,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Phone,
  FileText,
  MessageCircle,
  Clock,
  Settings,
  CheckCircle,
  Monitor,
  Shield,
  Link,
  Download,
  Check,
  Quote,
  Star,
  TrendingUp,
  Send,
  Search,
  BookOpen,
  Briefcase,
  Mail,
  Info,
  ChevronDown,
};

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "Check",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Using fallback "${fallback}".`);
    return <iconMap.Check size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
