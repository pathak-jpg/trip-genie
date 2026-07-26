import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bookmark, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getSavedTrips,
  removeSavedTrip,
  tierLabel,
  type GeneratedTrip,
} from "@/data/destinations";
import { toast } from "sonner";

interface Props {
  refreshKey?: number;
  onOpen: (trip: GeneratedTrip) => void;
}

const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

const SavedTrips = ({ refreshKey, onOpen }: Props) => {
  const [trips, setTrips] = useState<GeneratedTrip[]>([]);

  useEffect(() => {
    setTrips(getSavedTrips());
  }, [refreshKey]);

  if (trips.length === 0) return null;

  const handleRemove = (id: string) => {
    removeSavedTrip(id);
    setTrips(getSavedTrips());
    toast.success("Removed from saved trips");
  };

  return (
    <section id="saved" className="py-20 md:py-28 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-3">
            <Bookmark className="h-4 w-4" /> Your saved trips
          </div>
          <h2 className="font-serif text-4xl md:text-5xl">Journeys you kept close</h2>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((trip, i) => (
          <motion.article
            key={trip.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card lift"
          >
            <button onClick={() => onOpen(trip)} className="block w-full text-left">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={trip.destination.image}
                  alt={trip.destination.name}
                  loading="lazy"
                  width={1024}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-foreground/70">
                      {trip.destination.region}
                    </div>
                    <div className="font-serif text-2xl text-foreground">
                      {trip.destination.name}
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground">
                    {tierLabel(trip.tier)}
                  </span>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Budget
                  </div>
                  <div className="font-serif text-xl">{formatINR(trip.budget)}</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {trip.createdAt
                    ? new Date(trip.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                      })
                    : ""}
                </div>
              </div>
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => trip.id && handleRemove(trip.id)}
              className="absolute top-3 right-3 h-9 w-9 rounded-full glass-soft"
              aria-label="Remove saved trip"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default SavedTrips;
