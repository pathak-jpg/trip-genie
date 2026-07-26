import { motion } from "framer-motion";
import { destinations } from "@/data/destinations";
import { MapPin } from "lucide-react";

interface Props {
  onSelect: (destinationId: string) => void;
}

const DestinationsShowcase = ({ onSelect }: Props) => {
  return (
    <section id="destinations" className="py-24 md:py-32 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mb-14"
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-3">
          <MapPin className="h-4 w-4" /> Editorial destinations
        </div>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
          Ten places, hand-picked for
          <span className="italic text-primary"> slow travel</span>.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          From cliffside monasteries to floating palaces, each destination has three
          curated tiers — pick a mood and we'll shape the days.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((d, i) => (
          <motion.button
            key={d.id}
            onClick={() => onSelect(d.id)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
            className="group relative overflow-hidden rounded-3xl text-left border border-border bg-card lift"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={d.image}
                alt={`${d.name}, ${d.region}`}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/70 mb-1">
                  {d.region}
                </div>
                <div className="font-serif text-3xl text-foreground">{d.name}</div>
                <p className="text-sm text-foreground/70 mt-2 line-clamp-2">{d.tagline}</p>
              </div>
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                {(["low", "medium", "high"] as const).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t === "low" ? "Essentials" : t === "medium" ? "Comfort" : "Signature"}
                  </span>
                ))}
              </div>
              <span className="text-xs text-primary font-medium opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                Plan →
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default DestinationsShowcase;
