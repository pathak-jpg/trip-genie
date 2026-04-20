import goa from "@/assets/dest-goa.jpg";
import manali from "@/assets/dest-manali.jpg";
import jaipur from "@/assets/dest-jaipur.jpg";
import udaipur from "@/assets/dest-udaipur.jpg";
import kerala from "@/assets/dest-kerala.jpg";

export type BudgetTier = "low" | "medium" | "high";

export interface Activity {
  time: string;
  title: string;
  detail: string;
  icon: "sunrise" | "utensils" | "compass" | "camera" | "moon" | "waves" | "mountain" | "sparkles";
}

export interface DayPlan {
  day: number;
  title: string;
  activities: Activity[];
}

export interface TierPlan {
  hotel: {
    name: string;
    type: string;
    pricePerNight: number;
    perks: string[];
  };
  days: DayPlan[];
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  tagline: string;
  image: string;
  tiers: Record<BudgetTier, TierPlan>;
}

export const destinations: Destination[] = [
  {
    id: "goa",
    name: "Goa",
    region: "West Coast",
    tagline: "Sun-bleached shores & sleepy palm canopies",
    image: goa,
    tiers: {
      low: {
        hotel: { name: "Anjuna Beach Hostel", type: "Boutique Hostel", pricePerNight: 1200, perks: ["Free breakfast", "Beach 2 min walk", "Shared lounge"] },
        days: [
          { day: 1, title: "Coastal Arrival", activities: [
            { time: "09:00", title: "Café breakfast at Baba Au Rhum", detail: "Flaky croissants & filter coffee", icon: "utensils" },
            { time: "12:00", title: "Anjuna Beach swim", detail: "Soft waves and shaded shacks", icon: "waves" },
            { time: "19:30", title: "Curlies sunset dinner", detail: "Goan fish curry by the sea", icon: "moon" },
          ]},
          { day: 2, title: "Markets & Sunsets", activities: [
            { time: "08:00", title: "Sunrise at Vagator", detail: "Cliffs and golden light", icon: "sunrise" },
            { time: "11:00", title: "Mapusa Friday market", detail: "Spices, linens, trinkets", icon: "compass" },
            { time: "20:00", title: "Beachside live music", detail: "Local indie sets at Antares", icon: "sparkles" },
          ]},
        ],
      },
      medium: {
        hotel: { name: "Casa Anjuna", type: "3-Star Heritage Villa", pricePerNight: 4800, perks: ["Pool access", "Plated breakfast", "Scooter rental"] },
        days: [
          { day: 1, title: "Slow Coastal Day", activities: [
            { time: "09:00", title: "Brunch at Villa Blanche", detail: "Eggs benedict & cold press", icon: "utensils" },
            { time: "13:00", title: "Chapora Fort & cliffs", detail: "Panoramic Arabian Sea views", icon: "camera" },
            { time: "20:00", title: "Dinner at Thalassa", detail: "Greek fare with sunset views", icon: "moon" },
          ]},
          { day: 2, title: "Old Goa & Spice Trail", activities: [
            { time: "08:30", title: "Basilica of Bom Jesus", detail: "Portuguese baroque heritage", icon: "compass" },
            { time: "13:00", title: "Sahakari spice plantation lunch", detail: "Banana-leaf thali", icon: "utensils" },
            { time: "19:00", title: "River cruise on Mandovi", detail: "Live folk performances", icon: "waves" },
          ]},
        ],
      },
      high: {
        hotel: { name: "Taj Fort Aguada Resort", type: "5-Star Cliffside Resort", pricePerNight: 18000, perks: ["Private beach", "Spa & infinity pool", "Butler service"] },
        days: [
          { day: 1, title: "Arrival in Luxury", activities: [
            { time: "10:00", title: "In-villa breakfast", detail: "Champagne & seasonal fruit", icon: "utensils" },
            { time: "14:00", title: "Private yacht charter", detail: "Dolphin watching off Sinquerim", icon: "waves" },
            { time: "20:30", title: "Tasting menu at Rivali", detail: "Modern Goan haute cuisine", icon: "sparkles" },
          ]},
          { day: 2, title: "Wellness & Heritage", activities: [
            { time: "08:00", title: "Sunrise yoga on the cliff", detail: "With certified instructor", icon: "sunrise" },
            { time: "12:00", title: "Ayurvedic spa ritual", detail: "Abhyanga & shirodhara", icon: "sparkles" },
            { time: "20:00", title: "Beachfront private dinner", detail: "Candlelit, chef-curated", icon: "moon" },
          ]},
        ],
      },
    },
  },
  {
    id: "manali",
    name: "Manali",
    region: "Himachal Pradesh",
    tagline: "Pine-scented valleys beneath snow crowns",
    image: manali,
    tiers: {
      low: {
        hotel: { name: "Old Manali Backpackers", type: "Mountain Hostel", pricePerNight: 900, perks: ["Mountain view dorm", "Bonfire nights", "Café downstairs"] },
        days: [
          { day: 1, title: "Old Manali Wander", activities: [
            { time: "09:00", title: "Café 1947 breakfast", detail: "Riverside pancakes", icon: "utensils" },
            { time: "12:00", title: "Hadimba temple walk", detail: "Cedar forest shrine", icon: "compass" },
            { time: "19:00", title: "Drifters Inn dinner", detail: "Hot momos & ginger lemon tea", icon: "moon" },
          ]},
          { day: 2, title: "Solang Day Trip", activities: [
            { time: "08:00", title: "Local bus to Solang Valley", detail: "Snowy meadows", icon: "mountain" },
            { time: "13:00", title: "Maggi & chai stop", detail: "Roadside dhaba classic", icon: "utensils" },
            { time: "20:00", title: "Live acoustic at Johnson's", detail: "Cozy mountain café vibes", icon: "sparkles" },
          ]},
        ],
      },
      medium: {
        hotel: { name: "The Himalayan", type: "3-Star Castle Hotel", pricePerNight: 5200, perks: ["Valley view rooms", "Breakfast buffet", "Spa access"] },
        days: [
          { day: 1, title: "Valley Discovery", activities: [
            { time: "09:00", title: "Breakfast with valley views", detail: "Fresh apples & parathas", icon: "utensils" },
            { time: "12:00", title: "Manu Temple trek", detail: "Short forest hike", icon: "mountain" },
            { time: "20:00", title: "Johnson's Café dinner", detail: "Trout almondine specialty", icon: "moon" },
          ]},
          { day: 2, title: "Rohtang Drive", activities: [
            { time: "07:00", title: "Drive towards Rohtang Pass", detail: "Snow & alpine vistas", icon: "mountain" },
            { time: "13:00", title: "Lunch at Marhi", detail: "Hot thukpa stop", icon: "utensils" },
            { time: "19:30", title: "Bonfire & dinner", detail: "Hotel courtyard", icon: "sparkles" },
          ]},
        ],
      },
      high: {
        hotel: { name: "Span Resort & Spa", type: "5-Star Riverside Resort", pricePerNight: 16000, perks: ["River-facing cottage", "Trout fishing", "Luxury spa"] },
        days: [
          { day: 1, title: "Luxe Mountain Arrival", activities: [
            { time: "10:00", title: "Cottage breakfast by Beas", detail: "Riverside service", icon: "utensils" },
            { time: "14:00", title: "Private guided trek", detail: "Solang ridge views", icon: "mountain" },
            { time: "20:30", title: "Chef's table dinner", detail: "Himalayan tasting menu", icon: "sparkles" },
          ]},
          { day: 2, title: "Spa & Heliview", activities: [
            { time: "08:00", title: "Riverside yoga", detail: "Glacial water sounds", icon: "sunrise" },
            { time: "12:00", title: "Hot stone Himalayan spa", detail: "90-min ritual", icon: "sparkles" },
            { time: "20:00", title: "Private bonfire dinner", detail: "Live santoor performance", icon: "moon" },
          ]},
        ],
      },
    },
  },
  {
    id: "jaipur",
    name: "Jaipur",
    region: "Rajasthan",
    tagline: "Pink-washed palaces & spice-warm courtyards",
    image: jaipur,
    tiers: {
      low: {
        hotel: { name: "Zostel Jaipur", type: "Boutique Hostel", pricePerNight: 1100, perks: ["Rooftop café", "Walking tours", "Old city central"] },
        days: [
          { day: 1, title: "Pink City On Foot", activities: [
            { time: "08:30", title: "Tapri Central breakfast", detail: "Masala chai & poha", icon: "utensils" },
            { time: "11:00", title: "Hawa Mahal facade & bazaars", detail: "Lattice windows & lac bangles", icon: "camera" },
            { time: "20:00", title: "Laxmi Misthan Bhandar", detail: "Iconic Rajasthani thali", icon: "moon" },
          ]},
          { day: 2, title: "Forts & Stepwells", activities: [
            { time: "07:00", title: "Sunrise at Nahargarh Fort", detail: "City panorama", icon: "sunrise" },
            { time: "13:00", title: "Panna Meena ka Kund", detail: "Geometric stepwell", icon: "compass" },
            { time: "20:00", title: "Rooftop dinner at Peacock", detail: "Old city skyline", icon: "sparkles" },
          ]},
        ],
      },
      medium: {
        hotel: { name: "Samode Haveli", type: "Heritage 4-Star", pricePerNight: 6500, perks: ["Frescoed suites", "Courtyard pool", "Royal breakfast"] },
        days: [
          { day: 1, title: "Royal Heritage Walk", activities: [
            { time: "09:00", title: "Haveli courtyard breakfast", detail: "Daal pakwan & lassi", icon: "utensils" },
            { time: "11:00", title: "City Palace & Jantar Mantar", detail: "Astronomical wonders", icon: "compass" },
            { time: "20:00", title: "1135 AD at Amber Fort", detail: "Royal candlelit dinner", icon: "moon" },
          ]},
          { day: 2, title: "Crafts & Cuisine", activities: [
            { time: "08:00", title: "Hot air balloon over Amber", detail: "Optional sunrise float", icon: "sunrise" },
            { time: "13:00", title: "Block printing workshop", detail: "Sanganer artisans", icon: "sparkles" },
            { time: "19:30", title: "Bar Palladio dinner", detail: "Indo-Italian gardens", icon: "sparkles" },
          ]},
        ],
      },
      high: {
        hotel: { name: "Rambagh Palace", type: "5-Star Royal Palace", pricePerNight: 35000, perks: ["Suite with butler", "Royal high tea", "Spa & vintage car ride"] },
        days: [
          { day: 1, title: "Living Like Royalty", activities: [
            { time: "10:00", title: "Suvarna Mahal breakfast", detail: "Royal recipe revival", icon: "utensils" },
            { time: "14:00", title: "Vintage car city tour", detail: "Private 1930s convertible", icon: "compass" },
            { time: "20:30", title: "Polo Bar dinner", detail: "Trophy-lined dining", icon: "sparkles" },
          ]},
          { day: 2, title: "Spa & Sunset Polo", activities: [
            { time: "09:00", title: "Jiva Grande Spa ritual", detail: "Royal Rajasthani massage", icon: "sparkles" },
            { time: "16:00", title: "Private polo lesson", detail: "On the palace grounds", icon: "compass" },
            { time: "20:00", title: "Garden candlelit dinner", detail: "Live sarangi performance", icon: "moon" },
          ]},
        ],
      },
    },
  },
  {
    id: "udaipur",
    name: "Udaipur",
    region: "Rajasthan",
    tagline: "Marble palaces mirrored in still lake water",
    image: udaipur,
    tiers: {
      low: {
        hotel: { name: "Dream Heaven Guesthouse", type: "Lakeside Guesthouse", pricePerNight: 1300, perks: ["Lake view rooftop", "Home cooked meals", "Cycle rental"] },
        days: [
          { day: 1, title: "Lake Pichola Days", activities: [
            { time: "09:00", title: "Rooftop breakfast", detail: "Aloo paratha & masala chai", icon: "utensils" },
            { time: "12:00", title: "Bagore Ki Haveli", detail: "Royal household museum", icon: "compass" },
            { time: "19:00", title: "Sunset boat ride on Pichola", detail: "Public ferry", icon: "waves" },
          ]},
          { day: 2, title: "Old City Wander", activities: [
            { time: "08:00", title: "Walk to Jagdish Temple", detail: "Intricate carvings", icon: "sunrise" },
            { time: "13:00", title: "Natraj thali lunch", detail: "Local favorite", icon: "utensils" },
            { time: "20:00", title: "Dharohar folk dance show", detail: "Bagore Ki Haveli evenings", icon: "sparkles" },
          ]},
        ],
      },
      medium: {
        hotel: { name: "Jagat Niwas Palace", type: "Heritage 4-Star", pricePerNight: 7200, perks: ["Lake-facing suite", "Rooftop restaurant", "Boat transfers"] },
        days: [
          { day: 1, title: "Palace & Lake", activities: [
            { time: "09:00", title: "Rooftop lake breakfast", detail: "Eggs & fresh juice", icon: "utensils" },
            { time: "11:00", title: "City Palace tour", detail: "Largest in Rajasthan", icon: "compass" },
            { time: "20:00", title: "Ambrai dinner", detail: "Across-the-lake palace views", icon: "moon" },
          ]},
          { day: 2, title: "Countryside Day", activities: [
            { time: "08:30", title: "Drive to Kumbhalgarh Fort", detail: "Great Wall of India", icon: "mountain" },
            { time: "13:00", title: "Lunch at Aodhi Resort", detail: "Heritage hill setting", icon: "utensils" },
            { time: "20:00", title: "Live ghazal evening", detail: "Hotel courtyard", icon: "sparkles" },
          ]},
        ],
      },
      high: {
        hotel: { name: "Taj Lake Palace", type: "5-Star Floating Palace", pricePerNight: 42000, perks: ["Floating in Lake Pichola", "Royal butler", "Spa boat"] },
        days: [
          { day: 1, title: "Floating Royalty", activities: [
            { time: "10:00", title: "Marble courtyard breakfast", detail: "Lotus pond setting", icon: "utensils" },
            { time: "14:00", title: "Private royal boat tour", detail: "Sunset on Pichola", icon: "waves" },
            { time: "20:30", title: "Neel Kamal tasting menu", detail: "Mewari royal cuisine", icon: "sparkles" },
          ]},
          { day: 2, title: "Spa & Heritage", activities: [
            { time: "08:00", title: "Lakeside yoga deck", detail: "Sunrise asanas", icon: "sunrise" },
            { time: "12:00", title: "Jiva Spa ritual", detail: "Floating treatment room", icon: "sparkles" },
            { time: "20:00", title: "Private candlelit barge dinner", detail: "Strings ensemble", icon: "moon" },
          ]},
        ],
      },
    },
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "Backwaters",
    tagline: "Glassy waterways through emerald palm villages",
    image: kerala,
    tiers: {
      low: {
        hotel: { name: "Alleppey Homestay", type: "Family Homestay", pricePerNight: 1400, perks: ["Home cooked Sadhya", "Canoe ride included", "Village walks"] },
        days: [
          { day: 1, title: "Backwater Beginnings", activities: [
            { time: "09:00", title: "Appam & stew breakfast", detail: "Family-style table", icon: "utensils" },
            { time: "12:00", title: "Shared shikara canoe ride", detail: "Narrow canals & lilies", icon: "waves" },
            { time: "19:30", title: "Toddy shop dinner", detail: "Karimeen fish fry", icon: "moon" },
          ]},
          { day: 2, title: "Village Day", activities: [
            { time: "07:30", title: "Sunrise village walk", detail: "Through paddy fields", icon: "sunrise" },
            { time: "13:00", title: "Cooking class with host", detail: "Make a Sadhya", icon: "sparkles" },
            { time: "19:30", title: "Lakeside dinner", detail: "Lantern-lit jetty", icon: "moon" },
          ]},
        ],
      },
      medium: {
        hotel: { name: "Spice Coast Cruises", type: "Premium Houseboat", pricePerNight: 8500, perks: ["Private houseboat", "Chef onboard", "All meals included"] },
        days: [
          { day: 1, title: "Set Sail", activities: [
            { time: "11:00", title: "Boarding & welcome lunch", detail: "Banana-leaf meal", icon: "utensils" },
            { time: "16:00", title: "Cruise through Kuttanad", detail: "Coconut groves & shrines", icon: "waves" },
            { time: "20:00", title: "Sundeck dinner", detail: "Catch of the day", icon: "moon" },
          ]},
          { day: 2, title: "Sunrise Cruise", activities: [
            { time: "06:30", title: "Sunrise on the deck", detail: "Tea with hot vada", icon: "sunrise" },
            { time: "12:00", title: "Village stop & toddy tasting", detail: "Local brew", icon: "compass" },
            { time: "19:00", title: "Anchored dinner", detail: "Star-lit waters", icon: "sparkles" },
          ]},
        ],
      },
      high: {
        hotel: { name: "Kumarakom Lake Resort", type: "5-Star Heritage Lake Resort", pricePerNight: 22000, perks: ["Private pool villa", "Ayurveda center", "Meandering pool"] },
        days: [
          { day: 1, title: "Arrival in Paradise", activities: [
            { time: "10:00", title: "Villa breakfast on deck", detail: "Tropical fruit & dosa", icon: "utensils" },
            { time: "14:00", title: "Private sunset cruise", detail: "Vembanad lake", icon: "waves" },
            { time: "20:30", title: "Ettukettu chef's table", detail: "Heritage Syrian Christian feast", icon: "sparkles" },
          ]},
          { day: 2, title: "Ayurveda & Wellness", activities: [
            { time: "08:00", title: "Lakeside yoga pavilion", detail: "Pranayama session", icon: "sunrise" },
            { time: "11:00", title: "Signature Ayurvedic ritual", detail: "Pizhichil oil therapy", icon: "sparkles" },
            { time: "20:00", title: "Floating private dinner", detail: "Houseboat candlelight", icon: "moon" },
          ]},
        ],
      },
    },
  },
];

export const categorizeBudget = (budget: number): BudgetTier => {
  if (budget <= 20000) return "low";
  if (budget <= 50000) return "medium";
  return "high";
};

export const tierLabel = (tier: BudgetTier) =>
  tier === "low" ? "Essentials" : tier === "medium" ? "Comfort" : "Signature";

export interface GeneratedTrip {
  destination: Destination;
  budget: number;
  tier: BudgetTier;
  plan: TierPlan;
}

export const generateTrip = (destinationId: string, budget: number): GeneratedTrip | null => {
  const destination = destinations.find((d) => d.id === destinationId);
  if (!destination) return null;
  const tier = categorizeBudget(budget);
  return { destination, budget, tier, plan: destination.tiers[tier] };
};
