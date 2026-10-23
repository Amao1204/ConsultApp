import { CategoryInfo, Consultant, SearchSuggestion } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'business',
    name: 'Business',
    tagline: 'Launch, build or grow your business.',
    iconName: 'Briefcase',
    count: 142,
  },
  {
    id: 'branding',
    name: 'Branding',
    tagline: 'Turn your idea into a brand people remember.',
    iconName: 'Palette',
    count: 98,
  },
  {
    id: 'marketing',
    name: 'Marketing',
    tagline: 'Reach more of the right people.',
    iconName: 'Megaphone',
    count: 115,
  },
  {
    id: 'career',
    name: 'Career',
    tagline: "Figure out what's next.",
    iconName: 'Compass',
    count: 87,
  },
  {
    id: 'fashion',
    name: 'Fashion',
    tagline: 'Find the right look for the moment.',
    iconName: 'Sparkles',
    count: 73,
  },
  {
    id: 'events',
    name: 'Events',
    tagline: 'Plan it without the stress.',
    iconName: 'CalendarCheck',
    count: 64,
  },
  {
    id: 'food',
    name: 'Food',
    tagline: 'Make better food decisions.',
    iconName: 'Utensils',
    count: 49,
  },
  {
    id: 'strategy',
    name: 'Strategy',
    tagline: 'Know what to do next.',
    iconName: 'Target',
    count: 91,
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    tagline: 'Make everyday decisions easier.',
    iconName: 'HeartHandshake',
    count: 58,
  },
  {
    id: 'startup',
    name: 'Startup Support',
    tagline: 'Move your idea forward.',
    iconName: 'Rocket',
    count: 104,
  },
];

export const SEARCH_SUGGESTIONS: SearchSuggestion[] = [
  {
    query: 'How do I launch my fashion brand?',
    category: 'fashion',
    description: 'Sourcing, identity, pricing & launch roadmap with fashion consultants.',
  },
  {
    query: 'I need help planning an event.',
    category: 'events',
    description: 'Vendor selection, budget allocation & timeline management.',
  },
  {
    query: 'How can I grow my business?',
    category: 'business',
    description: 'Revenue models, unit economics & customer acquisition.',
  },
  {
    query: 'Help me improve my CV.',
    category: 'career',
    description: 'Executive resume review, LinkedIn audit & interview prep.',
  },
  {
    query: 'What should I wear to this event?',
    category: 'fashion',
    description: 'Wardrobe consultation, moodboard & personal styling guidance.',
  },
  {
    query: 'How do I turn my food business profitable?',
    category: 'food',
    description: 'Menu costing, kitchen workflows & delivery economics.',
  },
];

export const CONSULTANTS: Consultant[] = [
  {
    id: 'michael-adeyemi',
    name: 'Michael Adeyemi',
    title: 'Brand Strategy Consultant',
    category: 'branding',
    specialties: ['Brand Identity', 'Market Positioning', 'Visual Narrative', 'Rebranding'],
    bio: 'Helping startups turn ideas into brands people remember. 10+ years shaping top consumer brands in West Africa.',
    fullAbout:
      'Michael Adeyemi has spent over a decade advising venture-backed startups, retail chains, and creative entrepreneurs across Nigeria, Ghana, and the UK. Previously head of brand strategy at a top Lagos creative agency, Michael specializes in turning fuzzy concepts into magnetic brand identities that command premium market share. He works closely with founders to clarify their core narrative, audit competitor landscapes, and design brand guidelines that scale.',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewCount: 127,
    startingPrice: 35000,
    currency: 'NGN',
    location: 'Lagos, Nigeria',
    responseTime: '< 2 hours',
    availableToday: true,
    nextAvailable: 'Today at 3:00 PM WAT',
    verified: true,
    badgeText: 'Top Rated',
    experienceYears: 11,
    completedConsultations: 340,
    services: [
      {
        id: 'brand-audit',
        title: 'Brand Clarification & Rapid Audit',
        duration: '45 mins',
        price: 35000,
        description: 'Comprehensive evaluation of your current brand presence, core message, and target market fit.',
        deliverables: [
          '45-minute live 1-on-1 strategy call',
          'Written brand positioning summary document',
          '3 immediate high-impact brand refinement recommendations',
        ],
      },
      {
        id: 'brand-strategy-deep-dive',
        title: 'Full Brand Architecture & Positioning',
        duration: '90 mins + 7-day follow-up',
        price: 85000,
        description: 'Deep strategic session mapping out competitive whitespace, audience personas, and messaging matrix.',
        deliverables: [
          'Pre-call brand diagnostic worksheet',
          '90-minute structured whiteboarding session',
          'Positioning matrix & messaging pillars deck',
          '7 days of async follow-up via ConsultAPP messaging',
        ],
      },
      {
        id: 'brand-execution',
        title: 'Execution Advisory & Brand Sprint',
        duration: '2 Weeks Sprint',
        price: 280000,
        description: 'Hands-on collaboration to supervise creative direction, agency briefs, and official launch rollout.',
        deliverables: [
          'Creative brief preparation & designer oversight',
          'Weekly milestone check-ins',
          'Final launch brand toolkit review',
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-1',
        clientName: 'Bolaji Adeleke',
        clientRole: 'Co-founder, Kemi Organics',
        rating: 5,
        date: '3 days ago',
        comment:
          'Michael took our confused ideas and distilled them into a crisp, magnetic brand story in under an hour. Our new packaging launch sold out in 48 hours largely thanks to the positioning adjustments he suggested.',
        serviceBooked: 'Brand Clarification & Rapid Audit',
      },
      {
        id: 'rev-2',
        clientName: 'Chioma Nnamdi',
        clientRole: 'Founder, Vane Luxury Living',
        rating: 5,
        date: '2 weeks ago',
        comment:
          'Easily the best money we spent this quarter. Instead of hiring a full agency for millions of Naira just to get clarity, Michael provided direct, honest, and actionable guidance.',
        serviceBooked: 'Full Brand Architecture & Positioning',
      },
      {
        id: 'rev-3',
        clientName: 'Ibrahim Sanni',
        clientRole: 'Managing Director, Horizon Logistics',
        rating: 4.8,
        date: 'Last month',
        comment:
          'Pragmatic, articulate, and very patient. He knows the West African consumer psychology inside out.',
        serviceBooked: 'Brand Clarification & Rapid Audit',
      },
    ],
    portfolio: [
      {
        id: 'p-1',
        title: 'Zuri FinTech Rebrand',
        category: 'Fintech Branding',
        description: 'Repositioned an emerging mobile wallet into a trusted merchant payment solution, boosting user trust by 64%.',
        metrics: '+64% trust sentiment',
      },
      {
        id: 'p-2',
        title: 'Oriola Botanicals Identity',
        category: 'DTC Skincare',
        description: 'Defined luxury clean-beauty narrative and packaging copy for retail launch across 18 stores.',
        metrics: 'Sold out 1st batch in 48h',
      },
    ],
    howIWork: [
      {
        step: '01',
        title: 'Context & Diagnostic Intake',
        description: 'Before we speak, you provide background on your product, competitors, and what feels stuck.',
      },
      {
        step: '02',
        title: 'Live Working Session',
        description: 'We diagnose the root friction, stress-test your value proposition, and establish distinct positioning.',
      },
      {
        step: '03',
        title: 'Action Blueprint Delivery',
        description: 'You receive clear, step-by-step notes and a recorded playback within 24 hours.',
      },
    ],
    faqs: [
      {
        question: 'Do I need a ready-made logo before consulting with you?',
        answer: 'Not at all. In fact, consulting before you pay for graphic design saves you tens of thousands of Naira by ensuring your visual designer gets an accurate, strategic brief.',
      },
      {
        question: 'Can you help us evaluate agency quotes?',
        answer: 'Yes! Many clients book a 45-minute session just to review brand identity proposals and ensure they are paying fair market value.',
      },
    ],
  },
  {
    id: 'amaka-okafor',
    name: 'Amaka Okafor',
    title: 'Fashion Director & Wardrobe Stylist',
    category: 'fashion',
    specialties: ['Personal Styling', 'Fashion Business Sourcing', 'Event Wardrobe', 'Collection Curation'],
    bio: 'Guiding individuals on finding their signature aesthetic and advising emerging African apparel designers on production.',
    fullAbout:
      'Amaka Okafor is a Lagos and London-trained fashion stylist and retail consultant. She has curated editorial shoots for prominent African publications and styled celebrities, corporate executives, and brides. Beyond individual wardrobe consultation, Amaka mentors young fashion entrepreneurs on textile sourcing in Balogun and international mills, pattern maker management, and pricing bespoke collections for healthy margins.',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewCount: 94,
    startingPrice: 25000,
    currency: 'NGN',
    location: 'Lagos & Abuja, Nigeria',
    responseTime: '< 1 hour',
    availableToday: true,
    nextAvailable: 'Today at 5:00 PM WAT',
    verified: true,
    badgeText: 'Verified Expert',
    experienceYears: 8,
    completedConsultations: 215,
    services: [
      {
        id: 'wardrobe-styling',
        title: 'Signature Wardrobe & Occasion Styling',
        duration: '45 mins',
        price: 25000,
        description: 'Curated outfit architecture for high-stakes business events, weddings, or personal wardrobe revamp.',
        deliverables: [
          'Personal style profile analysis',
          'Digital moodboard with 4 ready-to-buy or tailor look concepts',
          'Accessory and silhouette guide tailored to your body type',
        ],
      },
      {
        id: 'fashion-brand-advisory',
        title: 'Apparel Brand Launch & Production Roadmap',
        duration: '75 mins',
        price: 60000,
        description: 'Comprehensive business guidance for starting or scaling an African fashion or ready-to-wear label.',
        deliverables: [
          'Fabric sourcing & tailor workshop vet checklist',
          'Cost of Goods Sold (COGS) pricing model spreadsheet',
          'Lookbook art direction strategy',
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-4',
        clientName: 'Tolani Peters',
        clientRole: 'Partner, Aluko Law Chambers',
        rating: 5,
        date: '5 days ago',
        comment:
          'Amaka solved my recurring wardrobe headache ahead of an international summit. She pointed out exactly what pieces flattered me and saved me hours of futile shopping.',
        serviceBooked: 'Signature Wardrobe & Occasion Styling',
      },
      {
        id: 'rev-5',
        clientName: 'Korede Danladi',
        clientRole: 'Creative Director, K-Urban RTW',
        rating: 5,
        date: '3 weeks ago',
        comment:
          'Her sourcing contacts and sizing grading advice alone saved my ready-to-wear launch from disaster. Unbelievable return on investment.',
        serviceBooked: 'Apparel Brand Launch & Production Roadmap',
      },
    ],
    portfolio: [
      {
        id: 'p-3',
        title: 'Executive C-Suite Wardrobe Overhaul',
        category: 'Personal Styling',
        description: 'Designed a 30-piece modular capsule wardrobe for a bank executive rotating across Lagos, London, and Nairobi.',
        metrics: '100% capsule wardrobe efficiency',
      },
      {
        id: 'p-4',
        title: 'Aso-Oke Contemporary Collection',
        category: 'Production Advisory',
        description: 'Advised artisanal label on modern cut consistency, reducing customer alteration requests by 75%.',
        metrics: '-75% alteration rate',
      },
    ],
    howIWork: [
      {
        step: '01',
        title: 'Style Intake & Photos',
        description: 'Send photos of outfits you currently like, events on your calendar, or pieces you feel stuck wearing.',
      },
      {
        step: '02',
        title: 'Interactive Consultation',
        description: 'We review cuts, palettes, styling techniques, and where to source items reliably in Nigeria or abroad.',
      },
      {
        step: '03',
        title: 'Curated Lookbook Delivery',
        description: 'Receive your personalized digital style reference with direct links and tailor specifications.',
      },
    ],
    faqs: [
      {
        question: 'Do you work with men as well as women?',
        answer: 'Yes! Approximately 40% of my private clients are men seeking bespoke traditional agbada styling, corporate executive suits, or effortless smart-casual wardrobes.',
      },
    ],
  },
  {
    id: 'tobi-akinyemi',
    name: 'Tobi Akinyemi',
    title: 'Tech Startup & Growth Advisor',
    category: 'startup',
    specialties: ['Fundraising Prep', 'Go-To-Market', 'Product Strategy', 'B2B Sales Funnels'],
    bio: 'Ex-Y Combinator-backed operator helping African founders validate ideas, reach early traction, and prepare for investor meetings.',
    fullAbout:
      'Tobi has navigated the African tech startup ecosystem for over 9 years as both an operator and angel investor. Having led growth at two fintech startups that scaled to over 1M monthly active users, he guides founders through the brutal early stages of product-market fit, unit economics, customer discovery interviews, and pitch deck refinement.',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewCount: 156,
    startingPrice: 45000,
    currency: 'NGN',
    location: 'Lagos, Nigeria',
    responseTime: '< 3 hours',
    availableToday: true,
    nextAvailable: 'Today at 6:30 PM WAT',
    verified: true,
    badgeText: 'Top Rated',
    experienceYears: 9,
    completedConsultations: 410,
    services: [
      {
        id: 'startup-idea-teardown',
        title: 'Startup Idea & Business Model Teardown',
        duration: '60 mins',
        price: 45000,
        description: 'Rigorous critique of your startup hypothesis, distribution bottlenecks, and financial assumptions.',
        deliverables: [
          '60-minute intensive question & challenge session',
          'Unit economics & CAC-to-LTV benchmark critique',
          'Go-to-market test plan for the next 30 days',
        ],
      },
      {
        id: 'pitch-deck-review',
        title: 'Investor Pitch Deck & Narrative Audit',
        duration: '75 mins',
        price: 75000,
        description: 'Line-by-line teardown of your slide deck from the perspective of an active angel investor.',
        deliverables: [
          'Slide-by-slide markup and commentary',
          'Traction framing and financial narrative polish',
          'Curated list of relevant active angel investors in your sector',
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-6',
        clientName: 'Femi Alabi',
        clientRole: 'Founder, PayBridge',
        rating: 5,
        date: '1 week ago',
        comment:
          'Tobi doesn’t sugarcoat anything. He asked 3 penetrating questions in the first 10 minutes that completely saved us 6 months of building a feature nobody wanted. Pure gold.',
        serviceBooked: 'Startup Idea & Business Model Teardown',
      },
      {
        id: 'rev-7',
        clientName: 'Ngozi Okoli',
        clientRole: 'Co-founder, FarmSync',
        rating: 4.9,
        date: '3 weeks ago',
        comment:
          'Our deck went from dense academic theory to a compelling, commercially viable story. We just closed our first $50k angel check!',
        serviceBooked: 'Investor Pitch Deck & Narrative Audit',
      },
    ],
    portfolio: [
      {
        id: 'p-5',
        title: 'B2B Logistics Platform GTM',
        category: 'Growth Advisory',
        description: 'Structured cold outbound motion securing 22 corporate pilot accounts in 60 days.',
        metrics: '22 pilots closed in 60 days',
      },
    ],
    howIWork: [
      {
        step: '01',
        title: 'Pre-Session Material Review',
        description: 'Send your pitch deck, Notion specs, or live metrics so I come prepared with targeted feedback.',
      },
      {
        step: '02',
        title: 'Friction-Finding Session',
        description: 'We stress-test assumptions and strip away distractions to focus on your primary growth lever.',
      },
      {
        step: '03',
        title: 'Tactical Playbook',
        description: 'You leave with a clear experiment backlog and milestone targets for the coming month.',
      },
    ],
    faqs: [
      {
        question: 'Are you open to signing an NDA before we speak?',
        answer: 'Yes, ConsultAPP has built-in mutual confidentiality terms, and I am happy to countersign your standard 1-page NDA if sensitive IP is involved.',
      },
    ],
  },
  {
    id: 'david-adewale',
    name: 'David Adewale',
    title: 'Corporate Event & Production Strategist',
    category: 'events',
    specialties: ['Corporate Summits', 'Vendor Contract Negotiation', 'Run of Show', 'Budget Optimization'],
    bio: 'Helping companies and individuals plan seamless, memorable high-stakes events without panic or ballooning budgets.',
    fullAbout:
      'David has directed operations for summits hosting over 3,000 attendees, high-profile society galas, and tech conferences across Lagos, Abuja, and Accra. His superpower is budget realism and crisis prevention: spotting hidden vendor markups, designing bulletproof technical redundancies (power generators, live-stream audio, audio-visual syncing), and crafting runs of show that keep audiences engaged.',
    avatarUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewCount: 82,
    startingPrice: 30000,
    currency: 'NGN',
    location: 'Lagos & Port Harcourt, Nigeria',
    responseTime: '< 2 hours',
    availableToday: false,
    nextAvailable: 'Tomorrow at 10:00 AM WAT',
    verified: true,
    badgeText: 'Verified Expert',
    experienceYears: 12,
    completedConsultations: 190,
    services: [
      {
        id: 'event-sanity-check',
        title: 'Event Budget & Vendor Sanity Check',
        duration: '50 mins',
        price: 30000,
        description: 'Bring your vendor quotes and preliminary budget. We audit costs, identify duplicates, and plug holes.',
        deliverables: [
          'Detailed line-item quote audit',
          'Negotiation talking points for top 3 vendors (sound, decor, hall)',
          'Emergency contingency buffer template',
        ],
      },
      {
        id: 'run-of-show-design',
        title: 'Comprehensive Run of Show & Contingency Plan',
        duration: '90 mins',
        price: 70000,
        description: 'Design minute-by-minute protocol for your major conference, launch party, or wedding banquet.',
        deliverables: [
          'Color-coded master Run of Show schedule',
          'Production team roles & walkie-talkie cue sheet',
          'Audio-visual tech rider checklist',
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-8',
        clientName: 'Funke Lawson',
        clientRole: 'Head of People, Sterling Tech',
        rating: 5,
        date: '2 weeks ago',
        comment:
          'David trimmed over ₦1.8 million from our annual staff conference budget simply by pointing out hidden decorator markups and redundant generator charges. Essential consultation!',
        serviceBooked: 'Event Budget & Vendor Sanity Check',
      },
    ],
    portfolio: [
      {
        id: 'p-6',
        title: 'AfriTech Annual Summit 2025',
        category: 'Conference Operations',
        description: 'Lead production director for 2,400 physical attendees and 8,000 live streamers.',
        metrics: 'Zero power or audio drops',
      },
    ],
    howIWork: [
      {
        step: '01',
        title: 'Intake Questionnaire',
        description: 'Share your event objective, expected guest count, venue details, and current quotation drafts.',
      },
      {
        step: '02',
        title: 'Strategy & Risk Review',
        description: 'We walk through the day timeline, identify risk choke points, and eliminate vendor overcharging.',
      },
      {
        step: '03',
        title: 'Actionable Deliverables',
        description: 'Get updated schedule templates and immediate vendor negotiation email templates.',
      },
    ],
    faqs: [
      {
        question: 'Can you also be physically present on the day of the event?',
        answer: 'Yes, after an initial consultation, many clients retain me for on-site executive stage management or technical supervision as an execution package.',
      },
    ],
  },
  {
    id: 'ada-nwosu',
    name: 'Ada Nwosu',
    title: 'Career Transition & Executive Coach',
    category: 'career',
    specialties: ['Executive Salary Negotiation', 'Tech Pivot', 'LinkedIn Optimization', 'Interview Strategy'],
    bio: 'Helping mid-career professionals secure high-paying global and local roles. Specializing in tech and management pivots.',
    fullAbout:
      'Ada Nwosu is a certified executive career strategist with 10 years of talent acquisition experience across multinational FMCGs, financial institutions, and global tech firms hiring in Africa. She has coached more than 300 professionals to negotiate salary bumps averaging 40-75%, successfully pivot into remote international roles, and overcome imposter syndrome in boardrooms.',
    avatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewCount: 110,
    startingPrice: 28000,
    currency: 'NGN',
    location: 'Abuja, Nigeria (Remote Worldwide)',
    responseTime: '< 1 hour',
    availableToday: true,
    nextAvailable: 'Today at 4:15 PM WAT',
    verified: true,
    badgeText: 'Top Rated',
    experienceYears: 10,
    completedConsultations: 380,
    services: [
      {
        id: 'cv-linkedin-audit',
        title: 'ATS Resume & LinkedIn Profile Transformation',
        duration: '50 mins',
        price: 28000,
        description: 'Live rewrite session optimizing your resume for Applicant Tracking Systems and recruiter search algorithms.',
        deliverables: [
          '50-minute live working session',
          'Line-by-line resume bullet optimization for measurable business impact',
          'High-converting LinkedIn headline & About section rewrite',
        ],
      },
      {
        id: 'salary-negotiation-prep',
        title: 'Job Offer & Salary Negotiation Masterclass',
        duration: '60 mins',
        price: 55000,
        description: 'Exact scripts and psychological tactics to counter low-ball offers and negotiate benefits & equity.',
        deliverables: [
          'Role compensation benchmarking analysis',
          'Verbal and email counter-offer scripts',
          'Live negotiation roleplay with feedback',
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-9',
        clientName: 'Emeka Umeh',
        clientRole: 'Senior Product Manager',
        rating: 5,
        date: '4 days ago',
        comment:
          'Ada practiced the negotiation roleplay with me the evening before my final compensation call. Following her exact counter-offer script yielded an additional ₦4.2M annually plus sign-on bonus!',
        serviceBooked: 'Job Offer & Salary Negotiation Masterclass',
      },
    ],
    portfolio: [
      {
        id: 'p-7',
        title: 'Non-Tech to Remote PM Transition',
        category: 'Career Pivot',
        description: 'Guided a bank operations officer to land a $65k/yr remote role at a Canadian software firm.',
        metrics: '+180% income increase',
      },
    ],
    howIWork: [
      {
        step: '01',
        title: 'Profile & Goal Audit',
        description: 'Submit your existing CV, target job specifications, and recent interview bottlenecks.',
      },
      {
        step: '02',
        title: 'Reframing & Live Coaching',
        description: 'We turn mundane tasks into quantifiable accomplishments that prove executive value.',
      },
      {
        step: '03',
        title: 'Scripting & Rehearsal',
        description: 'Practice high-pressure interview and negotiation scenarios until confidence feels effortless.',
      },
    ],
    faqs: [
      {
        question: 'What if I am not sure which career path to take next?',
        answer: 'We can focus the first session on a transferable skills audit and mapping out the top 3 viable directions based on market demand and your natural strengths.',
      },
    ],
  },
  {
    id: 'fatima-bello',
    name: 'Fatima Bello',
    title: 'Culinary Consultant & Food Business Strategist',
    category: 'food',
    specialties: ['Menu Engineering', 'Kitchen Workflow', 'Cloud Kitchen Setup', 'Food Costing'],
    bio: 'Chef and hospitality consultant helping food startups, cloud kitchens, and cafes engineer profitable menus and reliable prep systems.',
    fullAbout:
      'Fatima Bello blends professional culinary arts training with sharp operational economics. Having owned two thriving cafes in Abuja and consulted for multi-location quick-service restaurants in Lagos and Kaduna, Fatima shows food entrepreneurs how to stop throwing away profits on food waste, miscalculated recipe yields, and slow ticket times.',
    avatarUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewCount: 64,
    startingPrice: 20000,
    currency: 'NGN',
    location: 'Abuja & Kaduna, Nigeria',
    responseTime: '< 2 hours',
    availableToday: true,
    nextAvailable: 'Today at 7:00 PM WAT',
    verified: true,
    badgeText: 'Verified Expert',
    experienceYears: 7,
    completedConsultations: 145,
    services: [
      {
        id: 'menu-engineering',
        title: 'Menu Costing & Profit Margin Optimization',
        duration: '45 mins',
        price: 20000,
        description: 'Calculate real plate costs, reduce ingredient waste, and price dishes for a 65%+ gross margin.',
        deliverables: [
          'Recipe costing spreadsheet template',
          'Portion control guidelines',
          'Menu redesign advice highlighting high-margin star items',
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-10',
        clientName: 'Amina Yusuf',
        clientRole: 'Owner, SpiceBite Abuja',
        rating: 5,
        date: '1 week ago',
        comment:
          'Her recipe batching and portioning formulas reduced our raw food waste by 30% in the first two weeks alone.',
        serviceBooked: 'Menu Costing & Profit Margin Optimization',
      },
    ],
    portfolio: [
      {
        id: 'p-8',
        title: 'Fast Casual Chain Turnaround',
        category: 'Menu Engineering',
        description: 'Redesigned 24-item menu to 14 core prep bases, cutting average customer wait time from 22 to 7 minutes.',
        metrics: '-68% wait time',
      },
    ],
    howIWork: [
      {
        step: '01',
        title: 'Current Menu & Invoice Review',
        description: 'Send current menu, supplier wholesale invoices, and sales reports.',
      },
      {
        step: '02',
        title: 'Kitchen & Cost Diagnosis',
        description: 'Pinpoint where prep labor is wasted and where margin leaks occur.',
      },
      {
        step: '03',
        title: 'System Implementation',
        description: 'Provide recipes, batch sheets, and prep schedules ready for staff training.',
      },
    ],
    faqs: [
      {
        question: 'Do you help people starting cloud kitchens from home?',
        answer: 'Absolutely! Cloud kitchens have unique delivery packaging and holding-time constraints that we optimize for specifically.',
      },
    ],
  },
  {
    id: 'chukwudi-eze',
    name: 'Chukwudi Eze',
    title: 'SME Financial Strategy & Operations',
    category: 'business',
    specialties: ['Cash Flow Modeling', 'Working Capital', 'Tax Compliance', 'SME Pricing Strategy'],
    bio: 'Chartered accountant and fractional CFO helping small and medium enterprises get control over their cash flow and unit economics.',
    fullAbout:
      'Chukwudi Eze has advised over 150 Nigerian businesses across manufacturing, distribution, retail, and tech services. An ICAN fellow with deep experience in local tax laws and bank facility structuring, Chukwudi demystifies accounting jargon so business owners can stop guessing whether they are actually making money or merely burning cash.',
    avatarUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewCount: 98,
    startingPrice: 40000,
    currency: 'NGN',
    location: 'Lagos, Nigeria',
    responseTime: '< 2 hours',
    availableToday: false,
    nextAvailable: 'Tomorrow at 11:30 AM WAT',
    verified: true,
    badgeText: 'Verified Expert',
    experienceYears: 14,
    completedConsultations: 290,
    services: [
      {
        id: 'cashflow-clarity',
        title: 'Cash Flow Emergency & Working Capital Audit',
        duration: '60 mins',
        price: 40000,
        description: 'Clear breakdown of receivables, debt obligations, inventory bottlenecks, and weekly cash burn.',
        deliverables: [
          '13-week rolling cash forecast template',
          'Receivables collection acceleration strategy',
          'Tax deduction & withholding tax review',
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-11',
        clientName: 'Olawale Sanusi',
        clientRole: 'CEO, Prime Wholesale Ltd',
        rating: 5,
        date: '2 weeks ago',
        comment:
          'Chukwudi showed me that even though our turnover was rising, our distributor payment terms were strangling our working capital. He restructured our terms in 48 hours.',
        serviceBooked: 'Cash Flow Emergency & Working Capital Audit',
      },
    ],
    portfolio: [
      {
        id: 'p-9',
        title: 'Manufacturing SME Cash Restructure',
        category: 'Financial Advisory',
        description: 'Restructured ₦45M short-term debt into low-interest supplier credit lines, avoiding shutdown.',
        metrics: 'Saved ₦12M in bank penalties',
      },
    ],
    howIWork: [
      {
        step: '01',
        title: 'Financial Intake',
        description: 'Provide 3-6 months bank statements, profit/loss records, or POS summaries.',
      },
      {
        step: '02',
        title: 'Deep Forensic Review',
        description: 'Identify hidden leakage, phantom profits, and dangerous debt service ratios.',
      },
      {
        step: '03',
        title: 'Stabilization Plan',
        description: 'A 90-day action plan to protect liquidity and improve profit retention.',
      },
    ],
    faqs: [
      {
        question: 'What if my accounting books are messy or non-existent?',
        answer: 'That is the case for 70% of business owners who contact me! Do not be embarrassed. We start from basic bank inflows/outflows and build forward.',
      },
    ],
  },
  {
    id: 'zainab-danjuma',
    name: 'Zainab Danjuma',
    title: 'Digital Marketing & Social Commerce Specialist',
    category: 'marketing',
    specialties: ['Meta Ads', 'WhatsApp Funnels', 'Content Strategy', 'Influencer ROI'],
    bio: 'Helping direct-to-consumer and retail brands drive measurable sales through social media and high-converting WhatsApp commerce.',
    fullAbout:
      'Zainab Danjuma has managed over ₦120 million in digital advertising spend across Nigeria and West Africa, consistently achieving 4x–8x return on ad spend (ROAS). She specializes in converting casual Instagram and TikTok scrollers into paying customers using direct WhatsApp automation funnels and local influencer partnerships.',
    avatarUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewCount: 75,
    startingPrice: 22000,
    currency: 'NGN',
    location: 'Lagos & Kano, Nigeria',
    responseTime: '< 1 hour',
    availableToday: true,
    nextAvailable: 'Today at 2:00 PM WAT',
    verified: true,
    badgeText: 'Rising Star',
    experienceYears: 6,
    completedConsultations: 160,
    services: [
      {
        id: 'ad-account-audit',
        title: 'Instagram & Meta Ad Account Optimization',
        duration: '45 mins',
        price: 22000,
        description: 'Audit current campaigns, creative angles, audience targeting, and stop burning ad budget without sales.',
        deliverables: [
          'Live screen-share audit of Ads Manager',
          '3 proven ad creative hooks and copy templates',
          'WhatsApp click-to-chat automation setup guide',
        ],
      },
    ],
    reviews: [
      {
        id: 'rev-12',
        clientName: 'Blessing Okafor',
        clientRole: 'Founder, GlowSkin NG',
        rating: 5,
        date: '5 days ago',
        comment:
          'I was burning ₦50,000 every week on boosted posts with zero sales. Zainab set up one targeted catalog campaign and we made 14 sales on the very first day!',
        serviceBooked: 'Instagram & Meta Ad Account Optimization',
      },
    ],
    portfolio: [
      {
        id: 'p-10',
        title: 'Fashion Brand Black Friday Campaign',
        category: 'Social Commerce',
        description: 'Generated ₦18.4M in sales in 72 hours via automated WhatsApp checkout funnel.',
        metrics: '6.8x Return On Ad Spend',
      },
    ],
    howIWork: [
      {
        step: '01',
        title: 'Campaign Review',
        description: 'Grant temporary analyst access to ad account or submit creative screenshots.',
      },
      {
        step: '02',
        title: 'Funnel Optimization',
        description: 'Fix the leaky bucket between ad clicks, product pages, and checkout closure.',
      },
      {
        step: '03',
        title: 'Scale & Retarget',
        description: 'Execute new ad variations and retarget warm prospects for lower cost per acquisition.',
      },
    ],
    faqs: [
      {
        question: 'Do I need a large ad budget to get value from this?',
        answer: 'No. I specialize in teaching businesses how to be profitable even with a modest daily ad budget of ₦5,000 to ₦10,000.',
      },
    ],
  },
];

export const GENERAL_FAQS = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What is ConsultAPP?',
    answer:
      'ConsultAPP is an expertise and solution marketplace that connects people with real problems to verified professionals who know how to solve them. Whether you are navigating a business idea, branding, career pivot, wardrobe dilemma, event planning, food venture, or lifestyle hurdle, you can discover the right expert, book a direct consultation, and even collaborate on real execution.',
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'Who can use ConsultAPP?',
    answer:
      'Anyone looking for reliable, human guidance! Individuals, founders, career professionals, creative entrepreneurs, corporate teams, and small business owners can all use ConsultAPP to get quick answers, deep strategic sessions, or ongoing execution support without long agency contracts.',
  },
  {
    id: 'faq-3',
    category: 'consultants',
    question: 'Who can become a consultant?',
    answer:
      'Experienced professionals, advisors, coaches, creative directors, and industry specialists with proven expertise and real-world track records. If you have deep knowledge and want to earn by helping others succeed, you can apply to become a verified consultant.',
  },
  {
    id: 'faq-4',
    category: 'consultants',
    question: 'How are consultants verified?',
    answer:
      'Every consultant undergoes a structured verification process. We review their professional track record, portfolio, identity documents, past client testimonials, and industry references before awarding the "Verified Consultant" badge.',
  },
  {
    id: 'faq-5',
    category: 'booking',
    question: 'How do I find and book a consultant?',
    answer:
      'You can search using natural language (e.g., "How do I launch my fashion brand?") or browse by categories and filters like budget, rating, and availability. Once you find a consultant, select a service, pick an open date and time on their calendar, and confirm your booking.',
  },
  {
    id: 'faq-6',
    category: 'booking',
    question: 'Can I message a consultant before booking?',
    answer:
      'Yes. You can send a brief preliminary inquiry to confirm whether your specific challenge is a good fit for their services before committing to a paid session.',
  },
  {
    id: 'faq-7',
    category: 'pricing',
    question: 'How much does a consultation cost?',
    answer:
      'Consultants set their own pricing based on their level of expertise and the depth of the service. Quick advice sessions often start from ₦10,000 – ₦25,000, deep-dive strategic audits range from ₦30,000 – ₦85,000, while extensive project execution sprints are custom priced.',
  },
  {
    id: 'faq-8',
    category: 'execution',
    question: 'Can consultants actually execute work for me?',
    answer:
      'Yes! Unlike traditional advice platforms that end when the call disconnects, ConsultAPP is built on "Consult + Execute." If advice alone isn’t enough, you can hire your consultant to execute deliverables, review drafts, supervise vendors, or run execution sprints.',
  },
  {
    id: 'faq-9',
    category: 'payments',
    question: 'How do payments and buyer protection work?',
    answer:
      'Payments are held securely in platform escrow until your consultation or agreed deliverable is delivered satisfactorily. This protects both clients and consultants against no-shows and misaligned expectations.',
  },
  {
    id: 'faq-10',
    category: 'booking',
    question: 'What happens if I need to reschedule or cancel?',
    answer:
      'You can reschedule or cancel your consultation directly from your booking confirmation up to 12 hours prior to the scheduled session without penalty.',
  },
  {
    id: 'faq-11',
    category: 'reviews',
    question: 'How are reviews handled?',
    answer:
      'Only clients who have booked and completed a consultation with a consultant can publish a review and star rating. This guarantees that all ratings represent authentic client experiences.',
  },
];
