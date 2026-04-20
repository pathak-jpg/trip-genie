import { Sunrise, Utensils, Compass, Camera, Moon, Waves, Mountain, Sparkles } from "lucide-react";
import type { Activity } from "@/data/destinations";

const map = {
  sunrise: Sunrise,
  utensils: Utensils,
  compass: Compass,
  camera: Camera,
  moon: Moon,
  waves: Waves,
  mountain: Mountain,
  sparkles: Sparkles,
};

const ActivityIcon = ({ name, className }: { name: Activity["icon"]; className?: string }) => {
  const Icon = map[name];
  return <Icon className={className} />;
};

export default ActivityIcon;
