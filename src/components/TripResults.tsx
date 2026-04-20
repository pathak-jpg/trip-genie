import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Hotel, Sparkles } from "lucide-react";
import ActivityIcon from "./ActivityIcon";
import { tierLabel, type GeneratedTrip } from "@/data/destinations";

interface Props {
  trip: GeneratedTrip;
  onBack: () => void;
}

const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

const TripResults = ({ trip, onBack }: Props) => {
  const { destination, plan, tier, budget } = trip;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.img
          src={destination.image}
          alt={`${destination.name} landscape`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          width={1024}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background" />

        <div className="relative z-10 container h-full flex flex-col">
          <div className="pt-8">
            <Button
              variant="ghost"
              onClick={onBack}
              className="glass-soft rounded-full hover:shadow-soft transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> New plan
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-auto pb-12 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 glass-soft rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/80 mb-6">
              <Sparkles className="h-3 w-3" /> {tierLabel(tier)} · {formatINR(budget)}
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95]">
              {destination.name}
            </h1>
            <p className="mt-4 text-lg text-foreground/70 max-w-xl">{destination.tagline}</p>
          </motion.div>
        </div>
      </div>

      {/* Hotel */}
      <div className="container py-16 md:py-24 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-[2rem] p-8 md:p-12 lift"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-3">
                <Hotel className="h-4 w-4" /> Where you'll stay
              </div>
              <h2 className="font-serif text-4xl md:text-5xl">{plan.hotel.name}</h2>
              <p className="mt-2 text-muted-foreground">{plan.hotel.type}</p>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">From</div>
              <div className="font-serif text-3xl">{formatINR(plan.hotel.pricePerNight)}</div>
              <div className="text-xs text-muted-foreground">per night</div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {plan.hotel.perks.map((perk) => (
              <span
                key={perk}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
              >
                {perk}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Itinerary */}
      <div className="container pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Day by day</div>
          <h2 className="font-serif text-4xl md:text-5xl">A gentle rhythm to your days</h2>
        </motion.div>

        <div className="space-y-8">
          {plan.days.map((day, dayIdx) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: dayIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12"
            >
              <div className="md:sticky md:top-8 md:self-start">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Day</div>
                <div className="font-serif text-6xl text-primary">{String(day.day).padStart(2, "0")}</div>
                <div className="font-serif text-xl mt-2">{day.title}</div>
              </div>

              <div className="space-y-4">
                {day.activities.map((act, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="group bg-card border border-border rounded-2xl p-6 lift cursor-default"
                  >
                    <div className="flex gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground transition-transform duration-500 group-hover:scale-110">
                        <ActivityIcon name={act.icon} className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs tracking-widest text-primary font-medium">{act.time}</div>
                        <h3 className="font-serif text-xl mt-1">{act.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{act.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripResults;
