import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroImg from "@/assets/hero-travel.jpg";
import TripPlanner from "@/components/TripPlanner";
import TripResults from "@/components/TripResults";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";
import { generateTrip, type GeneratedTrip } from "@/data/destinations";
import { toast } from "sonner";

type View = "home" | "loading" | "results";

const Index = () => {
  const [view, setView] = useState<View>("home");
  const [trip, setTrip] = useState<GeneratedTrip | null>(null);

  const handleGenerate = (destinationId: string, budget: number) => {
    const result = generateTrip(destinationId, budget);
    if (!result) {
      toast.error("Could not generate trip. Please try again.");
      return;
    }
    setView("loading");
    setTimeout(() => {
      setTrip(result);
      setView("results");
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 1400);
  };

  const handleBack = () => {
    setView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {view === "loading" && <LoadingScreen key="loading" />}

        {view === "home" && (
          <PageTransition key="home">
            {/* Hero */}
            <section className="relative min-h-screen overflow-hidden grain">
              <img
                src={heroImg}
                alt="Tranquil tropical coastline at golden hour"
                className="absolute inset-0 h-full w-full object-cover"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80" />

              {/* Nav */}
              <header className="relative z-10 container pt-8 flex items-center justify-between">
                <div className="font-serif text-2xl tracking-tight">
                  Trip<span className="text-primary">Wise</span>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
                  <a href="#planner" className="hover:text-foreground transition-colors">Plan</a>
                  <a href="#destinations" className="hover:text-foreground transition-colors">Destinations</a>
                  <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
                </nav>
              </header>

              <div className="relative z-10 container pt-20 md:pt-28 pb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-3xl"
                >
                  <div className="inline-flex items-center gap-2 glass-soft rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-foreground/80 mb-8">
                    Smart budget travel planner
                  </div>
                  <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95]">
                    Slow journeys,
                    <br />
                    <span className="italic text-primary">thoughtfully</span> planned.
                  </h1>
                  <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-xl">
                    Pick a destination, set your budget, and receive a hand-crafted itinerary
                    in seconds — hotels, day plans, and quiet little moments.
                  </p>
                </motion.div>

                {/* Planner */}
                <div id="planner" className="mt-16 md:mt-20">
                  <TripPlanner onGenerate={handleGenerate} />
                </div>
              </div>
            </section>

            {/* How it works */}
            <section id="how" className="py-24 md:py-32 container">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {[
                  { n: "01", t: "Choose where", d: "Pick from our curated list of editorial destinations across India." },
                  { n: "02", t: "Set the tone", d: "Slide your budget — from quiet hostels to floating palaces." },
                  { n: "03", t: "Receive your plan", d: "Hotel, day-by-day moments, and small rituals — instantly." },
                ].map((s, i) => (
                  <motion.div
                    key={s.n}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                  >
                    <div className="font-serif text-5xl text-primary/30">{s.n}</div>
                    <h3 className="font-serif text-2xl mt-3">{s.t}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{s.d}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
              <div className="container">
                <span className="font-serif text-lg text-foreground">TripWise</span> — quiet journeys, beautifully planned.
              </div>
            </footer>
          </PageTransition>
        )}

        {view === "results" && trip && (
          <PageTransition key="results">
            <TripResults trip={trip} onBack={handleBack} />
          </PageTransition>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Index;
