export interface GymProgram {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  intensity: 'Medium' | 'High' | 'Extreme' | 'All Levels';
  category: 'strength' | 'cardio' | 'dance-wellness' | 'health-diet';
  features: string[];
  trainerSpecialty: string;
}

export interface ProgramCategory {
  id: 'strength' | 'cardio' | 'dance-wellness' | 'health-diet';
  name: string;
  subtitle: string;
  description: string;
  programs: GymProgram[];
}

export interface ClassScheduleItem {
  id: string;
  time: string;
  className: string;
  trainer: string;
  category: 'Strength' | 'HIIT' | 'Dance' | 'CrossFit' | 'Yoga' | 'Kickboxing';
  intensity: string;
  duration: string;
  days: string[]; // e.g. ['Mon', 'Wed', 'Fri']
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  price: string;
  billingText: string;
  popular?: boolean;
  features: string[];
}

export const GYM_INFO = {
  name: "Wao Fitness",
  category: "Premium Fitness Center & Gym",
  tagline: "Chandigarh's Elite Strength, Conditioning & Group Fitness Club",
  rating: "4.9",
  reviewCount: "1.3k+",
  reviewCountExact: "1,320+",
  phone: "6283117815",
  phoneFormatted: "+91 62831 17815",
  whatsappUrl: "https://wa.me/916283117815",
  freePassWhatsappUrl: "https://wa.me/916283117815?text=Hello%20Wao%20Fitness!%20I%20would%20like%20to%20claim%20my%201-Day%20Free%20Trial%20Pass%20at%20SCO%2034-37,%20Madhya%20Marg,%20Sector%209D,%20Chandigarh.",
  address: "SCO 34, 35, 36, 37, Madhya Marg, Sector 9D, Chandigarh - 160009",
  addressShort: "SCO 34-37, Madhya Marg, Sector 9D, Chandigarh",
  hoursWeekday: "Monday – Saturday: 6:00 AM – 10:00 PM",
  hoursSunday: "Sunday: 8:00 AM – 2:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=SCO+34+35+36+37+Madhya+Marg+Sector+9D+Chandigarh+160009",
  heroImage: "https://i.ibb.co/Qvx1tNBK/Screenshot-2026-10-19-23-17-21-087-com-google-android-googlequicksearchbox-edit.jpg",
  facilityImage: "https://i.ibb.co/sdBBFRxb/Screenshot-2026-10-19-23-17-51-152-com-google-android-googlequicksearchbox-edit.jpg",
};

export const CORE_PROGRAM_CATEGORIES: ProgramCategory[] = [
  {
    id: "strength",
    name: "Strength & Conditioning",
    subtitle: "Heavy Iron, Functional Power & Athletic Hypertrophy",
    description: "Scientifically structured progressive overload programs, Olympic weightlifting platforms, powerlifting racks, and dedicated personal coaching.",
    programs: [
      {
        id: "weight-training",
        name: "Weight Training",
        tagline: "Progressive Resistance & Hypertrophy",
        description: "Comprehensive resistance routines focusing on major compound movements (squat, bench press, deadlift) and targeted muscle isolation using world-class biomechanic equipment.",
        duration: "60 mins",
        intensity: "High",
        category: "strength",
        features: [
          "Commercial grade dumbbells (2.5kg to 50kg)",
          "Olympic barbells & calibrated bumper plates",
          "Pin-selected & plate-loaded isolation machines",
          "Form correction by certified floor coaches"
        ],
        trainerSpecialty: "Strength & Biomechanics Specialist"
      },
      {
        id: "crossfit-functional",
        name: "CrossFit & Functional Training",
        tagline: "High-Metabolic Power & Stamina",
        description: "Constantly varied high-intensity functional movements incorporating kettlebells, plyometric boxes, battle ropes, sled pushes, and gymnastics conditioning.",
        duration: "50 mins",
        intensity: "Extreme",
        category: "strength",
        features: [
          "Turf sprint track & sled pushing",
          "Concept2 rowers & assault air bikes",
          "Battle ropes, slam balls & plyo boxes",
          "Daily WODs (Workout of the Day)"
        ],
        trainerSpecialty: "CrossFit Level 2 Coach"
      },
      {
        id: "personal-training",
        name: "Personal Training (1-on-1)",
        tagline: "Tailored 1-on-1 Transformation",
        description: "Dedicated one-on-one coaching with periodic body composition scans, customized exercise biomechanics, posture correction, and progressive load tracking.",
        duration: "60 mins",
        intensity: "High",
        category: "strength",
        features: [
          "Initial InBody 570 body composition scan",
          "Custom tailored periodized training cycles",
          "Heart rate & progressive fatigue monitoring",
          "Dedicated 24/7 WhatsApp coach accountability"
        ],
        trainerSpecialty: "Master Strength & Conditioning Coach"
      }
    ]
  },
  {
    id: "cardio",
    name: "Cardio & Group Fitness",
    subtitle: "Heart-Pounding Calorie Burn & Endurance",
    description: "High-octane group workouts powered by pulsating beats, certified group fitness instructors, and athletic training formats.",
    programs: [
      {
        id: "hiit-classes",
        name: "HIIT Exercise Classes",
        tagline: "High-Intensity Interval Training",
        description: "Fast-paced intervals alternating between maximum-effort anaerobic work and short recovery windows to supercharge cardiovascular output and maximize calorie burn.",
        duration: "45 mins",
        intensity: "High",
        category: "cardio",
        features: [
          "Heart-rate tracked interval zones",
          "Tabata & circuit style programming",
          "Functional bodyweight & dumbbell supersets",
          "Burn up to 600–800 calories per session"
        ],
        trainerSpecialty: "High-Intensity Conditioning Lead"
      },
      {
        id: "aerobics-fitness",
        name: "Aerobics & Step Conditioning",
        tagline: "Rhythmic Cardio & Agility",
        description: "Upbeat rhythmic aerobic routines choreographed to energizing playlists, enhancing coordination, joint mobility, cardiovascular health, and core stability.",
        duration: "50 mins",
        intensity: "Medium",
        category: "cardio",
        features: [
          "Low-impact & high-impact modifications",
          "Core activation & step-platform sequences",
          "Full-body coordination & active recovery",
          "Community driven team energy"
        ],
        trainerSpecialty: "Certified Aerobic Group Instructor"
      },
      {
        id: "kickboxing-conditioning",
        name: "Kickboxing",
        tagline: "Martial Arts Striking & Core Defense",
        description: "Dynamic striking workouts combining jabs, hooks, roundhouse kicks, and defensive footwork drills against heavy bags and punch mitts for immense stress relief and core power.",
        duration: "50 mins",
        intensity: "High",
        category: "cardio",
        features: [
          "Heavy bag combination drills & pad work",
          "Rotational core power & hip mobility",
          "Real striking fundamentals & hand-eye reflexes",
          "High calorie burn and mental decompression"
        ],
        trainerSpecialty: "Pro Combat & Striking Coach"
      }
    ]
  },
  {
    id: "dance-wellness",
    name: "Dance & Wellness",
    subtitle: "Rhythmic Energy, Flexibility & Mindful Recovery",
    description: "Rejuvenating and high-energy sessions that celebrate movement, flexibility, and mind-body balance in a dedicated air-conditioned studio.",
    programs: [
      {
        id: "zumba-fitness",
        name: "Zumba",
        tagline: "Latin & Global Dance Party",
        description: "High-energy dance workout fusing Latin rhythms, Bollywood beats, and hip-hop moves into an exhilarating cardio session that feels more like a celebration than a workout.",
        duration: "55 mins",
        intensity: "Medium",
        category: "dance-wellness",
        features: [
          "Licensed Zumba® instructor led",
          "Dynamic international & Punjabi rhythm sets",
          "Cardio endurance & joyful mood booster",
          "Beginner-friendly choreography"
        ],
        trainerSpecialty: "Licensed Zumba® Fitness Master"
      },
      {
        id: "dance-fitness-classes",
        name: "Dance Fitness Classes",
        tagline: "Rhythm Conditioning & Tone",
        description: "Full-body muscular endurance set to contemporary music beats, integrating bodyweight lunges, plyometric hops, and rhythmic core rotations.",
        duration: "50 mins",
        intensity: "Medium",
        category: "dance-wellness",
        features: [
          "Choreographed muscular endurance sequences",
          "Glute, leg, and abdominal focused tracks",
          "High sweat volume without heavy joint stress",
          "Inclusive, uplifting group vibe"
        ],
        trainerSpecialty: "Choreography & Cardio Coach"
      },
      {
        id: "yoga-classes",
        name: "Yoga Classes",
        tagline: "Hatha, Vinyasa Flow & Deep Mobility",
        description: "Restorative and dynamic yoga flows designed to lengthen tight muscle tissue, improve spinal decompression, deepen breath capacity, and enhance functional range of motion.",
        duration: "60 mins",
        intensity: "All Levels",
        category: "dance-wellness",
        features: [
          "Sunrise Vinyasa & Evening Yin sessions",
          "Pranayama breath control & guided meditation",
          "Spinal decompression & hamstring mobility",
          "Ideal recovery for heavy lifting athletes"
        ],
        trainerSpecialty: "Certified Ashtanga & Vinyasa Yogi"
      }
    ]
  },
  {
    id: "health-diet",
    name: "Health & Diet",
    subtitle: "Evidence-Based Nutrition & Metabolic Coaching",
    description: "Sustainable nutrition plans tailored to Indian dietary preferences, body composition goals, busy professional schedules, and metabolic health.",
    programs: [
      {
        id: "custom-nutrition-consulting",
        name: "Custom Nutrition Consulting",
        tagline: "Personalized Macro & Calorie Protocols",
        description: "One-on-one clinical assessment of your basal metabolic rate (BMR), daily energy expenditure, and micronutrient balance to create a sustainable nutrition strategy.",
        duration: "Initial 45 mins",
        intensity: "All Levels",
        category: "health-diet",
        features: [
          "BMR & total daily energy expenditure analysis",
          "Macronutrient profiling (Protein, Carbs, Fats)",
          "Vegetarian, Vegan, and Non-Veg customized options",
          "Weekly weight & body fat tracking check-ins"
        ],
        trainerSpecialty: "Clinical Sports Dietitian"
      },
      {
        id: "custom-diet-plans",
        name: "Custom Diet Plans",
        tagline: "Goal-Oriented Meal Blueprints",
        description: "Weekly actionable meal charts with easy-to-cook wholesome meals, grocery prep lists, dining-out survival guides, and optimal supplement recommendations.",
        duration: "Continuous Coaching",
        intensity: "All Levels",
        category: "health-diet",
        features: [
          "Hypertrophy (Lean Bulk) or Fat Shredding meal plans",
          "Pre-workout fuel and post-workout recovery shakes",
          "Blood work & vitamin deficiency optimization",
          "Direct WhatsApp diet support for meal swaps"
        ],
        trainerSpecialty: "Certified Sports Nutritionist"
      }
    ]
  }
];

export const WEEKLY_SCHEDULE: ClassScheduleItem[] = [
  {
    id: "sch-1",
    time: "06:30 AM – 07:15 AM",
    className: "Sunrise HIIT Burn",
    trainer: "Coach Sahil",
    category: "HIIT",
    intensity: "High",
    duration: "45 mins",
    days: ["Mon", "Wed", "Fri"]
  },
  {
    id: "sch-2",
    time: "07:30 AM – 08:30 AM",
    className: "CrossFit Power & Conditioning",
    trainer: "Coach Vikram",
    category: "CrossFit",
    intensity: "Extreme",
    duration: "60 mins",
    days: ["Mon", "Tue", "Thu", "Sat"]
  },
  {
    id: "sch-3",
    time: "08:30 AM – 09:30 AM",
    className: "Zumba Dance Fever",
    trainer: "Priya Malik",
    category: "Dance",
    intensity: "Medium",
    duration: "60 mins",
    days: ["Mon", "Wed", "Fri"]
  },
  {
    id: "sch-4",
    time: "09:30 AM – 10:30 AM",
    className: "Vinyasa Mobility & Flow",
    trainer: "Yogacharya Ananya",
    category: "Yoga",
    intensity: "All Levels",
    duration: "60 mins",
    days: ["Tue", "Thu", "Sat"]
  },
  {
    id: "sch-5",
    time: "05:30 PM – 06:15 PM",
    className: "Kickboxing Striking Drills",
    trainer: "Coach Rajat",
    category: "Kickboxing",
    intensity: "High",
    duration: "45 mins",
    days: ["Mon", "Wed", "Fri"]
  },
  {
    id: "sch-6",
    time: "06:30 PM – 07:30 PM",
    className: "Evening Zumba Blast",
    trainer: "Priya Malik",
    category: "Dance",
    intensity: "Medium",
    duration: "60 mins",
    days: ["Mon", "Tue", "Thu", "Fri"]
  },
  {
    id: "sch-7",
    time: "07:30 PM – 08:30 PM",
    className: "Barbell Strength & Hypertrophy",
    trainer: "Coach Vikram",
    category: "Strength",
    intensity: "High",
    duration: "60 mins",
    days: ["Mon", "Wed", "Fri"]
  },
  {
    id: "sch-8",
    time: "08:30 PM – 09:15 PM",
    className: "Metabolic HIIT & Core Finisher",
    trainer: "Coach Sahil",
    category: "HIIT",
    intensity: "High",
    duration: "45 mins",
    days: ["Tue", "Thu", "Sat"]
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "flex-1m",
    name: "1-Month Starter",
    tagline: "Flexible Monthly Fitness",
    duration: "1 Month",
    price: "₹2,499",
    billingText: "Billed monthly · No lock-in",
    popular: false,
    features: [
      "Full access to strength & cardio floors",
      "Unlimited group fitness classes (Zumba, Yoga, HIIT)",
      "Locker room & hot shower facilities",
      "Initial general fitness consultation",
      "Complimentary Wi-Fi & parking on Madhya Marg"
    ]
  },
  {
    id: "transform-3m",
    name: "3-Month Transformation",
    tagline: "Our Most Popular Commitment",
    duration: "3 Months",
    price: "₹5,999",
    billingText: "Equivalent to ₹1,999 / month",
    popular: true,
    features: [
      "Full access to strength, free weights & CrossFit turf",
      "Unlimited Zumba, Kickboxing & Yoga batches",
      "1x InBody 570 body composition assessment",
      "1x Personal Training trial session with master coach",
      "Basic macro nutrition guidance guide",
      "Locker & steam shower access"
    ]
  },
  {
    id: "athlete-6m",
    name: "6-Month Pro Athlete",
    tagline: "Solid Results & Habit Building",
    duration: "6 Months",
    price: "₹9,999",
    billingText: "Equivalent to ₹1,666 / month",
    popular: false,
    features: [
      "All 3-Month benefits with priority class booking",
      "2x InBody progressive body scans",
      "2x 1-on-1 personal training sessions",
      "Customized monthly workout split updates",
      "Complimentary gym shaker & guest workout pass"
    ]
  },
  {
    id: "vip-12m",
    name: "12-Month Annual VIP",
    tagline: "Maximum Value for Dedicated Fitness",
    duration: "12 Months",
    price: "₹15,999",
    billingText: "Equivalent to ₹1,333 / month · Best Value",
    popular: false,
    features: [
      "Unlimited 365-day access to all Wao Fitness facilities",
      "Unlimited group classes (Zumba, HIIT, CrossFit, Yoga)",
      "4x InBody body scans (quarterly progress tracking)",
      "4x 1-on-1 personal training sessions",
      "Personalized Diet & Nutrition plan included",
      "Free 30-day membership pause option (travel freeze)",
      "2x Free 1-Day VIP guest passes for friends/family"
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Aman Sharma",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "1 week ago",
    comment: "Wao Gym offers great equipment, motivating atmosphere, and excellent staff!",
    highlight: "Great equipment & motivating staff",
    tag: "Equipment & Staff"
  },
  {
    id: "2",
    name: "Simranjeet Kaur",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "2 weeks ago",
    comment: "Affordable price and they give a lot of attention to hygiene and cleaning.",
    highlight: "Affordable price & top hygiene",
    tag: "Hygiene & Pricing"
  },
  {
    id: "3",
    name: "Rohit Verma",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "3 weeks ago",
    comment: "Nice and clean place to workout with experienced staff and coaches.",
    highlight: "Experienced coaches & clean space",
    tag: "Coaching & Ambience"
  },
  {
    id: "4",
    name: "Karan Dhillon",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "1 month ago",
    comment: "Hands down the best gym on Madhya Marg, Sector 9. The CrossFit turf and evening Zumba classes are always packed with crazy energy. Trainers genuinely care about your lifting technique.",
    highlight: "Best gym on Madhya Marg",
    tag: "CrossFit & Zumba"
  },
  {
    id: "5",
    name: "Dr. Navneet Chawla",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "1 month ago",
    comment: "I have been coming to Wao Fitness for 8 months. The 1.3k+ reviews are completely justified. Sanitized machines, prompt air conditioning, and tailored diet charts that actually fit a doctor's erratic schedule.",
    highlight: "Sanitized machines & custom diet",
    tag: "Health & Diet"
  },
  {
    id: "6",
    name: "Harjot Singh Mann",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "2 months ago",
    comment: "Heavy lifting paradise in Sector 9! Ample 50kg dumbbells, Olympic barbells, zero crowding during morning slots, and prime location right on Madhya Marg.",
    highlight: "Heavy lifting paradise",
    tag: "Strength Training"
  }
];

export const GYM_FAQS = [
  {
    q: "How do I claim my 1-Day Free Trial Pass at Wao Fitness?",
    a: "You can claim your 1-Day Free Trial Pass instantly by clicking any 'Claim Free Pass' button or sending a message directly on WhatsApp to +91 6283117815. Our front desk will confirm your slot, prepare your guest locker, and pair you with a trainer for an initial walk-through."
  },
  {
    q: "Where is Wao Fitness located and is parking available?",
    a: "We are centrally located at SCO 34, 35, 36, 37, Madhya Marg, Sector 9D, Chandigarh - 160009. There is extensive front and rear parking space along Madhya Marg service lane for cars and two-wheelers."
  },
  {
    q: "What are the gym operating hours?",
    a: "Wao Fitness is open 7 days a week: Monday to Saturday from 6:00 AM to 10:00 PM, and Sunday from 8:00 AM to 2:00 PM."
  },
  {
    q: "Are group classes like Zumba, HIIT, and Yoga included in the membership?",
    a: "Yes! All regular Wao Fitness memberships include full access to our scheduled group fitness batches including Zumba, Dance Fitness, HIIT, Kickboxing, Aerobics, and Yoga with no hidden fees."
  },
  {
    q: "Do you provide custom diet plans and personal training?",
    a: "Yes, our certified sports nutritionists and master trainers formulate personalized diet charts (vegetarian, vegan, and non-veg) matched to your specific body composition and caloric goals."
  },
  {
    q: "What hygiene and sanitation standards does Wao Fitness follow?",
    a: "Hygiene is our top priority. As praised in our 1.3k+ reviews, equipment is wiped down and disinfected continuously, air-handling filtration runs non-stop, and steam rooms and showers are sanitized throughout the day."
  }
];

export const FACILITY_HIGHLIGHTS = [
  {
    title: "Heavy Iron & Olympic Racks",
    desc: "Rubber-coated hex & round dumbbells up to 50kg, multiple power cages, deadlift platforms, and competition-spec barbells.",
    icon: "Dumbbell"
  },
  {
    title: "Cardio & Conditioning Deck",
    desc: "Commercial treadmills, stairmasters, assault air bikes, and Concept2 rowers overlooking Madhya Marg.",
    icon: "Flame"
  },
  {
    title: "Dedicated Aerobic & Zumba Studio",
    desc: "Shock-absorbing sprung wood flooring, acoustic sound setup, and mood lighting for Zumba, Kickboxing and Yoga.",
    icon: "Music"
  },
  {
    title: "Functional CrossFit Turf",
    desc: "Sled push lane, battle ropes, kettlebells, medicine balls, and plyometric jump boxes for high-intensity circuits.",
    icon: "Activity"
  },
  {
    title: "Certified Coaches & Nutritionists",
    desc: "Kinesiology-certified personal trainers and sports nutritionists dedicated to form correction and steady progressive overload.",
    icon: "Award"
  },
  {
    title: "Locker Rooms & Steam Showers",
    desc: "Spacious individual lockers, hygienic changing rooms, grooming vanities, and high-pressure hot/cold showers.",
    icon: "ShieldCheck"
  }
];
