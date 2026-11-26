// Single source of truth for the business: used by the homepage and the receptionist.
// Sourced from andyldrivingschool.site (services, pricing, test centres, contact) and Google Maps
// (300 reviews, all five stars; opening hours), Nov 2026.

export const shop = {
  name: "Andy L Driving School",
  owner: "Andy",
  area: "Landsdale, Perth",
  phoneDisplay: "0422 434 951",
  phone: "61422434951",
  email: "andyly6912@gmail.com",
  facebook: "https://www.facebook.com/andyly06092012",
  website: "https://andyldrivingschool.site",
  rating: 5.0,
  reviewCount: 300,
  hours: "Monday to Friday 7 am to 6 pm, Saturday 8 am to 6 pm, Sunday 8 am to 4 pm",
};

/** Who can take a booking: Andy teaches every lesson (see schedule.pools). */
export type Pool = "andy";

export type Service = {
  id: string;
  name: string;
  minutes: number;
  pool: Pool;
  price: number;
  transmission: "Automatic" | "Manual";
  test: boolean;
  short: string;
  text: string;
  where: string;
  /** Kept for the template's booking form: no service here is free. */
  free: boolean;
};

// Prices from the website. The length of a Lesson & Test booking is a placeholder until Andy confirms it.
export const services: Service[] = [
  { id: "auto-60", name: "Automatic lesson, 1 hour", minutes: 60, price: 75, transmission: "Automatic", test: false, short: "$75 · 1 hour", text: "A one-hour lesson in Andy's dual-control automatic car, picked up and dropped off where suits you.", where: "Pickup from your place", pool: "andy", free: false },
  { id: "auto-90", name: "Automatic lesson, 90 minutes", minutes: 90, price: 110, transmission: "Automatic", test: false, short: "$110 · 90 minutes", text: "A longer automatic lesson: more time on the roads that matter for your test.", where: "Pickup from your place", pool: "andy", free: false },
  { id: "auto-test", name: "Automatic lesson & test", minutes: 120, price: 225, transmission: "Automatic", test: true, short: "$225 · on your PDA day", text: "A warm-up lesson right before your Practical Driving Assessment, then Andy's car for the test.", where: "Pickup, then your test centre", pool: "andy", free: false },
  { id: "manual-60", name: "Manual lesson, 1 hour", minutes: 60, price: 80, transmission: "Manual", test: false, short: "$80 · 1 hour", text: "A one-hour lesson in Andy's dual-control manual car, picked up and dropped off where suits you.", where: "Pickup from your place", pool: "andy", free: false },
  { id: "manual-90", name: "Manual lesson, 90 minutes", minutes: 90, price: 120, transmission: "Manual", test: false, short: "$120 · 90 minutes", text: "A longer manual lesson for clutch control, hills and test routes.", where: "Pickup from your place", pool: "andy", free: false },
  { id: "manual-test", name: "Manual lesson & test", minutes: 120, price: 230, transmission: "Manual", test: true, short: "$230 · on your PDA day", text: "A warm-up lesson right before your Practical Driving Assessment, then Andy's manual car for the test.", where: "Pickup, then your test centre", pool: "andy", free: false },
];

export const serviceNames = services.map((s) => s.name);
export const serviceByName = (name: string) => services.find((s) => s.name === name);

export const testCentres = ["Mirrabooka", "Joondalup", "Midland", "City West"];

export const included = [
  "Dual-control car, fully insured",
  "Pickup and drop-off where suits you",
  "Accredited instructor",
  "Logbook hours",
  "L and P plates supplied",
];

// What learners and parents say again and again in 300 five-star reviews
export const promises = [
  { title: "Pass first time", text: "Most of Andy's learners pass their PDA on the first attempt. He tells you honestly when you're ready." },
  { title: "Calm, patient, funny", text: "Nervous drivers relax fast. Clear instructions, constructive feedback and plenty of laughs." },
  { title: "Fits around your week", text: "Lessons from 7 am, weekends included, with pickup from home, school or work." },
  { title: "Parents welcome", text: "Andy explains the process to first-time learner parents and is happy for you to come along." },
];

export const faqs = [
  { q: "How many lessons will I need?", a: "It depends on your experience. Andy assesses you in the first lesson and tells you honestly how many you'll need before the test." },
  { q: "Do you pick me up?", a: "Yes. Every lesson includes pickup and drop-off at a place that suits you: home, school or work." },
  { q: "What is Lesson & Test?", a: "On your Practical Driving Assessment day, Andy gives you a warm-up lesson and you sit the test in his car. You book the PDA itself with the Department of Transport." },
  { q: "Which test centres?", a: "Mostly Mirrabooka, Joondalup, Midland and City West." },
  { q: "I have an overseas licence. Can you help?", a: "Yes. Andy helps international drivers get used to Australian roads and rules and prepare for the PDA." },
  { q: "Do you have packages?", a: "Yes, packages of several lessons are available. Ask Andy for the current options." },
];

export const reviews = [
  { name: "Katie Wild", tag: "Parent", text: "He explained the process for us (first time learner parents) and was happy for us to be included in the lessons. Even suggested the right number of lessons needed before testing." },
  { name: "varinder kaur", tag: "Passed first attempt", text: "I started lessons with him on 14 September and passed my driving test today on my first attempt! Andy is funny, patient and knows exactly how to keep you calm." },
  { name: "Orlando Radi", tag: "Manual licence", text: "He helped me to get my manual licence first try! He was very clear with his messages, and has a very easy to understand way of teaching." },
  { name: "Natalia Duda-Mroz", tag: "Overseas licence", text: "Andy helped me become familiar and comfortable with driving in Australia, understand the road rules and prepare for the PDA. I really appreciated the flexibility to schedule lessons." },
];

export const smsLink = (text?: string) => `sms:+${shop.phone}${text ? `?&body=${encodeURIComponent(text)}` : ""}`;
export const telLink = `tel:+${shop.phone}`;
