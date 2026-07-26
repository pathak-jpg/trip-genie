import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { destinations, categorizeBudget, tierLabel } from "@/data/destinations";
import { ArrowRight, MapPin, Wallet } from "lucide-react";

interface Props {
  onGenerate: (destinationId: string, budget: number) => void;
  initialDestination?: string;
}

const TripPlanner = ({ onGenerate, initialDestination }: Props) => {
  const [destination, setDestination] = useState<string>(initialDestination ?? "goa");
  const [budget, setBudget] = useState<number>(35000);
  const tier = categorizeBudget(budget);

  useEffect(() => {
    if (initialDestination) setDestination(initialDestination);
  }, [initialDestination]);

  const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-[2rem] p-6 md:p-10 w-full max-w-2xl mx-auto"
    >
      <div className="space-y-8">
        {/* Destination */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
            <MapPin className="h-4 w-4" /> Destination
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {destinations.map((d) => {
              const active = d.id === destination;
              return (
                <button
                  key={d.id}
                  onClick={() => setDestination(d.id)}
                  className={`relative overflow-hidden rounded-2xl p-4 text-left transition-all duration-500 border ${
                    active
                      ? "border-primary/40 bg-gradient-primary text-primary-foreground shadow-soft"
                      : "border-border bg-card hover:border-primary/20 hover:shadow-soft"
                  }`}
                >
                  <div className="font-serif text-lg leading-tight">{d.name}</div>
                  <div className={`text-xs mt-1 ${active ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {d.region}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Budget */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Wallet className="h-4 w-4" /> Budget
            </label>
            <div className="text-right">
              <div className="font-serif text-2xl text-foreground">{formatINR(budget)}</div>
              <div className="text-xs uppercase tracking-widest text-primary">{tierLabel(tier)}</div>
            </div>
          </div>
          <Slider
            value={[budget]}
            min={10000}
            max={100000}
            step={1000}
            onValueChange={(v) => setBudget(v[0])}
            className="my-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>₹10,000</span>
            <span>₹1,00,000</span>
          </div>
        </div>

        <Button
          size="lg"
          onClick={() => onGenerate(destination, budget)}
          className="w-full h-14 rounded-2xl bg-gradient-primary hover:shadow-lift text-base font-medium group transition-all duration-500"
        >
          Generate my trip
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};

export default TripPlanner;
