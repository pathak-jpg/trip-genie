import goa from "@/assets/dest-goa.jpg";
import manali from "@/assets/dest-manali.jpg";
import jaipur from "@/assets/dest-jaipur.jpg";
import udaipur from "@/assets/dest-udaipur.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import andaman from "@/assets/dest-andaman.jpg";
import rishikesh from "@/assets/dest-rishikesh.jpg";
import darjeeling from "@/assets/dest-darjeeling.jpg";
import varanasi from "@/assets/dest-varanasi.jpg";

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
  {
    id: "ladakh",
    name: "Ladakh",
    region: "Trans-Himalaya",
    tagline: "High-altitude deserts under an endless indigo sky",
    image: ladakh,
    tiers: {
      low: {
        hotel: { name: "Zostel Leh", type: "Mountain Hostel", pricePerNight: 1100, perks: ["Rooftop chai", "Bike rentals", "Central Leh"] },
        days: [
          { day: 1, title: "Leh Acclimatize", activities: [
            { time: "09:00", title: "Bowl breakfast at Bon Appetit", detail: "Yak cheese & apricot jam", icon: "utensils" },
            { time: "12:00", title: "Leh market wander", detail: "Pashmina & prayer wheels", icon: "compass" },
            { time: "18:00", title: "Shanti Stupa sunset", detail: "Panoramic Leh views", icon: "sunrise" },
          ]},
          { day: 2, title: "Monasteries", activities: [
            { time: "08:00", title: "Thiksey Monastery", detail: "Morning prayer chants", icon: "mountain" },
            { time: "13:00", title: "Local thukpa lunch", detail: "Warm Ladakhi noodles", icon: "utensils" },
            { time: "20:00", title: "Bonfire at Gesmo Café", detail: "Live folk guitar", icon: "sparkles" },
          ]},
        ],
      },
      medium: {
        hotel: { name: "The Grand Dragon Ladakh", type: "4-Star Boutique", pricePerNight: 6800, perks: ["Oxygen rooms", "Mountain view suite", "Curated breakfast"] },
        days: [
          { day: 1, title: "Nubra Gateway", activities: [
            { time: "09:00", title: "Drive over Khardung La", detail: "World's highest motorable pass", icon: "mountain" },
            { time: "14:00", title: "Diskit Monastery visit", detail: "Giant Maitreya Buddha", icon: "compass" },
            { time: "19:30", title: "Nubra camp dinner", detail: "Sand dunes at dusk", icon: "moon" },
          ]},
          { day: 2, title: "Pangong Blue", activities: [
            { time: "07:00", title: "Drive to Pangong Lake", detail: "Chang La high pass en route", icon: "mountain" },
            { time: "13:00", title: "Lakeside packed lunch", detail: "By the sapphire waters", icon: "utensils" },
            { time: "20:00", title: "Stargazing dinner", detail: "Milky Way over Pangong", icon: "sparkles" },
          ]},
        ],
      },
      high: {
        hotel: { name: "The Ultimate Travelling Camp Chamba", type: "5-Star Luxury Camp", pricePerNight: 32000, perks: ["Private luxe tent", "Butler & chef", "Guided expeditions"] },
        days: [
          { day: 1, title: "Royal Ladakh Arrival", activities: [
            { time: "10:00", title: "Champagne breakfast in-tent", detail: "Panoramic valley views", icon: "utensils" },
            { time: "14:00", title: "Private Thiksey heritage tour", detail: "With resident historian", icon: "compass" },
            { time: "20:30", title: "Chef's Ladakhi tasting menu", detail: "Modern Trans-Himalayan", icon: "sparkles" },
          ]},
          { day: 2, title: "Pangong Private", activities: [
            { time: "07:00", title: "Chauffeured Pangong drive", detail: "SUV with photography stops", icon: "mountain" },
            { time: "13:00", title: "Lakeside gourmet picnic", detail: "Chef-plated riverside", icon: "utensils" },
            { time: "20:00", title: "Private bonfire under stars", detail: "Astronomer-guided", icon: "moon" },
          ]},
        ],
      },
    },
  },
  {
    id: "andaman",
    name: "Andaman",
    region: "Bay of Bengal",
    tagline: "Turquoise lagoons and coral gardens under a slow sun",
    image: andaman,
    tiers: {
      low: {
        hotel: { name: "Havelock Beach Resort", type: "Beach Cottages", pricePerNight: 1500, perks: ["Steps to Radhanagar", "Bicycle rental", "Beach shack meals"] },
        days: [
          { day: 1, title: "Radhanagar Slow Day", activities: [
            { time: "09:00", title: "Beachside breakfast", detail: "Coconut pancakes", icon: "utensils" },
            { time: "12:00", title: "Radhanagar Beach swim", detail: "Asia's iconic white sand", icon: "waves" },
            { time: "19:00", title: "Sunset at Kalapathar", detail: "Black rocks & orange sky", icon: "moon" },
          ]},
          { day: 2, title: "Snorkel Elephant Beach", activities: [
            { time: "08:00", title: "Shared ferry to Elephant Beach", detail: "Colorful reef views", icon: "waves" },
            { time: "13:00", title: "Shack lunch with fresh catch", detail: "Grilled snapper", icon: "utensils" },
            { time: "20:00", title: "Beach bonfire hangout", detail: "Backpacker vibes", icon: "sparkles" },
          ]},
        ],
      },
      medium: {
        hotel: { name: "SeaShell Havelock", type: "4-Star Beach Resort", pricePerNight: 7500, perks: ["Sea-view villa", "Infinity pool", "Diving school onsite"] },
        days: [
          { day: 1, title: "Reef Discovery", activities: [
            { time: "09:00", title: "Poolside brunch", detail: "Tropical fruit platter", icon: "utensils" },
            { time: "13:00", title: "Discover scuba session", detail: "Beginner reef dive", icon: "waves" },
            { time: "20:00", title: "Beachfront dinner", detail: "Andaman lobster", icon: "moon" },
          ]},
          { day: 2, title: "Neil Island", activities: [
            { time: "08:00", title: "Ferry to Neil Island", detail: "Bharatpur bay views", icon: "waves" },
            { time: "13:00", title: "Natural bridge walk", detail: "Coral rock formations", icon: "compass" },
            { time: "19:30", title: "Laxmanpur sunset", detail: "Golden light on tide pools", icon: "sparkles" },
          ]},
        ],
      },
      high: {
        hotel: { name: "Taj Exotica Havelock", type: "5-Star Overwater Luxury", pricePerNight: 42000, perks: ["Beachfront villa", "Private butler", "Signature spa"] },
        days: [
          { day: 1, title: "Island Luxe Arrival", activities: [
            { time: "10:00", title: "Villa deck breakfast", detail: "Sea breeze & sparkling wine", icon: "utensils" },
            { time: "14:00", title: "Private catamaran sail", detail: "Snorkel remote reefs", icon: "waves" },
            { time: "20:30", title: "Settler's chef table", detail: "Andamanese tasting menu", icon: "sparkles" },
          ]},
          { day: 2, title: "Wellness & Diving", activities: [
            { time: "08:00", title: "Beach yoga pavilion", detail: "Sunrise pranayama", icon: "sunrise" },
            { time: "11:00", title: "Guided reef dive", detail: "Manta rays if lucky", icon: "waves" },
            { time: "20:00", title: "Candlelit sandbank dinner", detail: "Private isle for two", icon: "moon" },
          ]},
        ],
      },
    },
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    region: "Uttarakhand",
    tagline: "Where the Ganga sings between forested foothills",
    image: rishikesh,
    tiers: {
      low: {
        hotel: { name: "Live Free Hostel", type: "Riverside Hostel", pricePerNight: 800, perks: ["Ganga view rooftop", "Yoga daily", "Café downstairs"] },
        days: [
          { day: 1, title: "Ganga & Ghats", activities: [
            { time: "07:00", title: "Sunrise Ganga walk", detail: "Laxman Jhula bridge", icon: "sunrise" },
            { time: "09:00", title: "Café breakfast", detail: "Muesli bowls & masala chai", icon: "utensils" },
            { time: "18:30", title: "Triveni Ghat aarti", detail: "Floating lamps at dusk", icon: "moon" },
          ]},
          { day: 2, title: "Adventure Day", activities: [
            { time: "08:00", title: "White water rafting", detail: "16 km grade III stretch", icon: "waves" },
            { time: "13:00", title: "Beach shack lunch", detail: "Riverside bhojan", icon: "utensils" },
            { time: "20:00", title: "Open-mic at Free Spirit", detail: "Traveler jam sessions", icon: "sparkles" },
          ]},
        ],
      },
      medium: {
        hotel: { name: "Aloha on the Ganges", type: "4-Star Riverside", pricePerNight: 5500, perks: ["River-facing room", "Ayurveda spa", "Yoga deck"] },
        days: [
          { day: 1, title: "Wellness Immersion", activities: [
            { time: "07:00", title: "Sunrise hatha yoga", detail: "Riverside deck", icon: "sunrise" },
            { time: "12:00", title: "Ayurvedic consult & lunch", detail: "Sattvic thali", icon: "utensils" },
            { time: "19:00", title: "Parmarth Niketan aarti", detail: "Iconic evening ceremony", icon: "moon" },
          ]},
          { day: 2, title: "Beatles Ashram", activities: [
            { time: "09:00", title: "Beatles Ashram walk", detail: "Graffitied meditation domes", icon: "compass" },
            { time: "13:00", title: "Café Ganga Beach lunch", detail: "Wood-fire pizzas", icon: "utensils" },
            { time: "19:30", title: "Bonfire kirtan", detail: "Ashram grounds", icon: "sparkles" },
          ]},
        ],
      },
      high: {
        hotel: { name: "Ananda in the Himalayas", type: "5-Star Wellness Palace", pricePerNight: 38000, perks: ["Palace suite", "70+ spa therapies", "Private yoga master"] },
        days: [
          { day: 1, title: "Palace Wellness", activities: [
            { time: "08:00", title: "Private yoga in Viceregal Palace", detail: "Curated by master", icon: "sunrise" },
            { time: "13:00", title: "Wellness cuisine lunch", detail: "Dosha-aligned menu", icon: "utensils" },
            { time: "19:00", title: "Private aarti boat", detail: "On the Ganga with priest", icon: "sparkles" },
          ]},
          { day: 2, title: "Signature Spa", activities: [
            { time: "09:00", title: "90-min Abhyanga & Shirodhara", detail: "Signature therapy", icon: "sparkles" },
            { time: "13:00", title: "Chef's tasting", detail: "Himalayan-inspired", icon: "utensils" },
            { time: "20:00", title: "Suite dining under stars", detail: "Palace terrace", icon: "moon" },
          ]},
        ],
      },
    },
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    region: "West Bengal",
    tagline: "Tea-scented mist rolling over emerald slopes",
    image: darjeeling,
    tiers: {
      low: {
        hotel: { name: "Revolver Hotel", type: "Boutique Guesthouse", pricePerNight: 1600, perks: ["Beatles-themed rooms", "Central Chowrasta", "Home cooked meals"] },
        days: [
          { day: 1, title: "Chowrasta & Chai", activities: [
            { time: "09:00", title: "Keventer's breakfast", detail: "Sausages with a view", icon: "utensils" },
            { time: "12:00", title: "Mall Road stroll", detail: "Chowrasta buskers", icon: "compass" },
            { time: "19:00", title: "Glenary's dinner", detail: "Colonial bakery classic", icon: "moon" },
          ]},
          { day: 2, title: "Tiger Hill Dawn", activities: [
            { time: "04:00", title: "Tiger Hill sunrise", detail: "Kanchenjunga glow", icon: "sunrise" },
            { time: "10:00", title: "Toy train joyride", detail: "Ghum heritage loop", icon: "compass" },
            { time: "20:00", title: "Sonam's Kitchen dinner", detail: "Homely Tibetan thenthuk", icon: "sparkles" },
          ]},
        ],
      },
      medium: {
        hotel: { name: "Mayfair Darjeeling", type: "4-Star Heritage", pricePerNight: 6200, perks: ["Cottage suites", "Fireplace lounges", "Spa access"] },
        days: [
          { day: 1, title: "Tea Estate Walk", activities: [
            { time: "09:00", title: "Estate breakfast", detail: "First flush tea tasting", icon: "utensils" },
            { time: "12:00", title: "Happy Valley plantation tour", detail: "Pluckers at work", icon: "compass" },
            { time: "19:30", title: "Cottage fireside dinner", detail: "Continental & momos", icon: "moon" },
          ]},
          { day: 2, title: "Peaks & Rituals", activities: [
            { time: "08:00", title: "Rock Garden drive", detail: "Layered waterfalls", icon: "mountain" },
            { time: "13:00", title: "Nathmulls tea lunch", detail: "Curated pairing menu", icon: "utensils" },
            { time: "20:00", title: "Live sitar dinner", detail: "Mayfair lawn", icon: "sparkles" },
          ]},
        ],
      },
      high: {
        hotel: { name: "Glenburn Tea Estate", type: "5-Star Colonial Bungalow", pricePerNight: 28000, perks: ["Private planter suite", "Personal butler", "All meals & tea tastings"] },
        days: [
          { day: 1, title: "Planter's Life", activities: [
            { time: "09:00", title: "Verandah breakfast", detail: "Estate eggs & scones", icon: "utensils" },
            { time: "12:00", title: "Private plantation walk", detail: "With head planter", icon: "compass" },
            { time: "20:00", title: "Colonial candlelit dinner", detail: "5-course chef menu", icon: "sparkles" },
          ]},
          { day: 2, title: "Rungeet River", activities: [
            { time: "08:00", title: "River picnic breakfast", detail: "By the Rungeet", icon: "sunrise" },
            { time: "13:00", title: "Tea sommelier session", detail: "Vintage first flush", icon: "utensils" },
            { time: "20:00", title: "Bonfire under Kanchenjunga", detail: "Estate lawn", icon: "moon" },
          ]},
        ],
      },
    },
  },
  {
    id: "varanasi",
    name: "Varanasi",
    region: "Uttar Pradesh",
    tagline: "Ancient lanes and lantern-lit boats on the eternal river",
    image: varanasi,
    tiers: {
      low: {
        hotel: { name: "Stops Hostel Varanasi", type: "Old-city Hostel", pricePerNight: 900, perks: ["Rooftop ghat view", "Walking tours", "Café below"] },
        days: [
          { day: 1, title: "Ghats on Foot", activities: [
            { time: "07:00", title: "Assi Ghat morning aarti", detail: "Sunrise ceremony", icon: "sunrise" },
            { time: "12:00", title: "Blue Lassi Shop", detail: "300+ flavor legend", icon: "utensils" },
            { time: "18:30", title: "Dashashwamedh Ghat aarti", detail: "Grand evening ritual", icon: "moon" },
          ]},
          { day: 2, title: "Alleys & Silks", activities: [
            { time: "09:00", title: "Kachori Gali breakfast", detail: "Puri sabzi & jalebi", icon: "utensils" },
            { time: "13:00", title: "Silk weaver visit", detail: "Banarasi heritage", icon: "compass" },
            { time: "19:00", title: "Boat ride with diyas", detail: "Float lamps on Ganga", icon: "waves" },
          ]},
        ],
      },
      medium: {
        hotel: { name: "BrijRama Palace", type: "Heritage 4-Star Ghat Palace", pricePerNight: 8000, perks: ["Ganga-facing suite", "Boat access", "Live sarod evenings"] },
        days: [
          { day: 1, title: "Palace on the Ghats", activities: [
            { time: "07:00", title: "Private boat sunrise", detail: "Palace jetty departure", icon: "sunrise" },
            { time: "12:00", title: "Palace lunch", detail: "Awadhi thali", icon: "utensils" },
            { time: "18:30", title: "Balcony aarti view", detail: "Front row over Ganga", icon: "moon" },
          ]},
          { day: 2, title: "Sarnath Day", activities: [
            { time: "09:00", title: "Sarnath Buddhist site", detail: "Dhamek Stupa", icon: "compass" },
            { time: "13:00", title: "Museum & lunch", detail: "Lion Capital of Ashoka", icon: "utensils" },
            { time: "20:00", title: "Sarod recital dinner", detail: "Palace courtyard", icon: "sparkles" },
          ]},
        ],
      },
      high: {
        hotel: { name: "Taj Nadesar Palace", type: "5-Star Royal Palace", pricePerNight: 34000, perks: ["Royal suite", "Butler & vintage car", "Private aarti boat"] },
        days: [
          { day: 1, title: "Royal Banaras", activities: [
            { time: "09:00", title: "Palace veranda breakfast", detail: "Mango orchard view", icon: "utensils" },
            { time: "14:00", title: "Vintage car ghat tour", detail: "1930s convertible", icon: "compass" },
            { time: "18:30", title: "Private aarti boat", detail: "Curated with priest", icon: "moon" },
          ]},
          { day: 2, title: "Spa & Silks", activities: [
            { time: "09:00", title: "Jiva Spa royal ritual", detail: "Kashi-inspired therapy", icon: "sparkles" },
            { time: "13:00", title: "Private silk atelier visit", detail: "Bespoke Banarasi weave", icon: "compass" },
            { time: "20:00", title: "Chef's tasting menu", detail: "Modern Banarasi cuisine", icon: "sparkles" },
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
  id?: string;
  destination: Destination;
  budget: number;
  tier: BudgetTier;
  plan: TierPlan;
  createdAt?: number;
}

export const generateTrip = (destinationId: string, budget: number): GeneratedTrip | null => {
  const destination = destinations.find((d) => d.id === destinationId);
  if (!destination) return null;
  const tier = categorizeBudget(budget);
  return { destination, budget, tier, plan: destination.tiers[tier] };
};

export interface CostBreakdown {
  stay: number;
  food: number;
  activities: number;
  transport: number;
  total: number;
  nights: number;
}

export const estimateCost = (trip: GeneratedTrip): CostBreakdown => {
  const nights = trip.plan.days.length;
  const stay = trip.plan.hotel.pricePerNight * nights;
  const tierMult = trip.tier === "low" ? 1 : trip.tier === "medium" ? 1.6 : 2.6;
  const food = Math.round(800 * tierMult * (nights + 1));
  const activities = Math.round(1500 * tierMult * nights);
  const transport = Math.round(3500 * tierMult);
  const total = stay + food + activities + transport;
  return { stay, food, activities, transport, total, nights };
};

const SAVED_KEY = "tripwise:saved";

export const getSavedTrips = (): GeneratedTrip[] => {
  try {
    const raw = localStorage.getItem(SAVED_KEY);
    return raw ? (JSON.parse(raw) as GeneratedTrip[]) : [];
  } catch {
    return [];
  }
};

export const saveTrip = (trip: GeneratedTrip): GeneratedTrip => {
  const withMeta: GeneratedTrip = {
    ...trip,
    id: trip.id ?? `${trip.destination.id}-${Date.now()}`,
    createdAt: trip.createdAt ?? Date.now(),
  };
  const existing = getSavedTrips().filter((t) => t.id !== withMeta.id);
  const next = [withMeta, ...existing].slice(0, 20);
  localStorage.setItem(SAVED_KEY, JSON.stringify(next));
  return withMeta;
};

export const removeSavedTrip = (id: string) => {
  const next = getSavedTrips().filter((t) => t.id !== id);
  localStorage.setItem(SAVED_KEY, JSON.stringify(next));
};

