import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || "2jxrugqw",
  dataset: process.env.VITE_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const staticSermons = [
  {
    _type: "sermon",
    title: "Spoudazo: Giving Earnest Diligence",
    preacher: "Pastor Ebenezer Ama",
    audioLink: "https://t.me/FlourishNation/1959",
    date: "2024-10-01",
  },
  {
    _type: "sermon",
    title: "Kartatizo: All Things In Order",
    preacher: "Pastor Ebenezer Ama",
    audioLink: "https://t.me/FlourishNation/1956",
    date: "2024-09-24",
  },
  {
    _type: "sermon",
    title: "The Purpose and Power of Fasting",
    preacher: "Pastor Ebenezer Ama",
    audioLink: "https://t.me/FlourishNation/1950",
    date: "2024-09-17",
  },
  {
    _type: "sermon",
    title: "The Tokens of Preservation",
    preacher: "Pastor Ebenezer Ama",
    audioLink: "https://t.me/FlourishNation/1944",
    date: "2024-09-10",
  },
  {
    _type: "sermon",
    title: "The Ark, The Flood, and The Rain 2",
    preacher: "Pastor Ebenezer Ama",
    audioLink: "https://t.me/FlourishNation/1939",
    date: "2024-09-03",
  },
  {
    _type: "sermon",
    title: "The Ark, The Flood, and The Rain 1",
    preacher: "Pastor Ebenezer Ama",
    audioLink: "https://t.me/FlourishNation/1937",
    date: "2024-08-27",
  },
];

const staticEvents = [
  {
    _type: "event",
    title: "The Urgency Camp Meeting",
    description:
      'At the end of every year, we gather together to retreat into God and seek his face and counsel for the next year of our lives. It is an atmosphere of intense worship and prayers, deep teaching of the word of God and moments of liberation and deliverance.',
    date: "End of year",
    location: "Enugu, Nigeria",
  },
  {
    _type: "event",
    title: "Recalibration",
    description:
      'It is that time of the year where we gather to reset, re-strategize and realign ourselves into the blueprint of God, per time, per season.',
    date: "Annual Gathering",
    location: "Enugu, Nigeria",
  },
  {
    _type: "event",
    title: "Noah Crusades",
    description:
      'Just like how the Lord commanded Noah to build an ark and prepare for the flood, the Lord has asked us to announce His good news to the people around us to prepare them to come into Himself (The ark) to be preserved.',
    date: "Seasonal",
    location: "Various Locations",
  },
];

const staticTestimonies = [
  {
    _type: "testimony",
    name: "Chigozirim Chibuokem",
    testimony:
      "I want to thank God for my life, the successful completion of my two surgeries and my dad's surgery. I also want to thank God for his mercies upon my family.",
  },
  {
    _type: "testimony",
    name: "Ogbodo Chiamaka",
    testimony:
      "I want to thank God for the 21 days of prayer and fasting, for strength, clarity, and discipline. I also want to thank God for healing. I usually feel pain when I lift my hands up but yesterday, during the festival of praise, my hands were up and no pain!",
  },
];

async function seed() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error(
      "Error: SANITY_API_TOKEN is required to write data to Sanity. Generate one at sanity.io/manage -> Project -> API -> Tokens"
    );
    process.exit(1);
  }

  console.log("Seeding sermons, events, and testimonies to Sanity...");

  const allDocs = [...staticSermons, ...staticEvents, ...staticTestimonies];
  for (const doc of allDocs) {
    try {
      const res = await client.create(doc);
      console.log(`Created [${doc._type}]: ${doc.title || doc.name} (${res._id})`);
    } catch (err) {
      console.error(`Failed to create ${doc.title || doc.name}:`, err.message);
    }
  }

  console.log("Done seeding!");
}

seed();
