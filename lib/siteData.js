export const SITE = {
  name: 'Super Brass Industries',
  shortName: 'Super Brass',
  tagline: 'Precision Brass Components Manufacturer',
  established: 2021,
  phone: '+91 98765 43210',
  phone2: '+91 288 255 0123',
  email: 'info@superbrassindustries.com',
  salesEmail: 'sales@superbrassindustries.com',
  address: 'Plot No. 45, GIDC Phase-II, Dared, Jamnagar, Gujarat 361004, India',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM IST',
};

export const IMAGES = {
  heroMain: 'https://images.unsplash.com/photo-1552257127-151dd9bcc678?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
  brassParts: 'https://images.unsplash.com/photo-1636624679304-232a9ca54736?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
  cncMachine: 'https://images.unsplash.com/photo-1711418235334-8895331a6cf9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400',
  machining: 'https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  factory1: 'https://images.unsplash.com/photo-1474674556023-efef886fa147?q=85&w=1600&auto=format&fit=crop',
  factory2: 'https://images.pexels.com/photos/10031804/pexels-photo-10031804.jpeg?auto=compress&cs=tinysrgb&w=1200',
  factory3: 'https://images.unsplash.com/photo-1598302936625-6075fbd98dd7?q=85&w=1200&auto=format&fit=crop',
  fittings: 'https://images.unsplash.com/photo-1589870446935-ce8bc41685b8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  parts2: 'https://images.pexels.com/photos/14593018/pexels-photo-14593018.jpeg?auto=compress&cs=tinysrgb&w=1200',
  parts3: 'https://images.unsplash.com/photo-1625464733746-f884014c73bc?q=85&w=1200&auto=format&fit=crop',
};

export const CATEGORIES = [
  {
    slug: 'brass-auto-parts',
    name: 'Brass Auto Parts',
    short: 'Precision-turned brass components for automotive fuel, braking and engine systems.',
    description:
      'We manufacture high-tolerance brass auto parts for OEMs and Tier-1 suppliers worldwide. From fuel line connectors and sensor housings to brake fittings and radiator components, every part is CNC-machined from certified free-cutting brass and inspected against your drawing specifications.',
    image: IMAGES.heroMain,
    applications: ['Fuel line connectors & unions', 'Brake system fittings', 'Sensor housings & bodies', 'Radiator drain plugs & valves', 'Battery terminals & clamps', 'Gear shift components'],
    specs: [
      { label: 'Material', value: 'CW614N / C36000 Free-Cutting Brass, CW617N' },
      { label: 'Size Range', value: 'M2 to M64 / 1/16" to 2.5"' },
      { label: 'Tolerance', value: 'Up to \u00B10.01 mm' },
      { label: 'Threading', value: 'ISO, BSP, BSPT, NPT, UNF, UNC, Metric' },
      { label: 'Finish', value: 'Natural, Nickel, Tin, Zinc, Chrome plated' },
      { label: 'Standards', value: 'IS 319, BS 249, ASTM B16, DIN 17660' },
    ],
  },
  {
    slug: 'brass-pipe-fitting-parts',
    name: 'Brass Pipe Fitting Parts',
    short: 'Leak-proof brass fittings, adapters, elbows and unions for plumbing and industrial lines.',
    description:
      'Our brass pipe fittings are engineered for leak-proof performance under pressure. We produce elbows, tees, couplings, reducers, adapters and unions with precision-cut threads in all international standards, suitable for water, oil, air and chemical transfer lines.',
    image: IMAGES.fittings,
    applications: ['Plumbing & sanitary systems', 'Compressed air lines', 'Hydraulic & pneumatic circuits', 'Water treatment plants', 'Oil & chemical transfer', 'HVAC installations'],
    specs: [
      { label: 'Material', value: 'CW617N / CW614N Brass, DZR Brass' },
      { label: 'Size Range', value: '1/8" to 4" NB' },
      { label: 'Pressure Rating', value: 'Up to PN25 / 363 PSI' },
      { label: 'Threading', value: 'BSP, BSPT, NPT, Metric' },
      { label: 'Finish', value: 'Natural, Nickel plated, Chrome plated' },
      { label: 'Standards', value: 'EN 1254-4, ISO 228, ASME B1.20.1' },
    ],
  },
  {
    slug: 'brass-gas-parts',
    name: 'Brass Gas Parts',
    short: 'Safety-critical brass components for LPG, CNG and industrial gas distribution systems.',
    description:
      'Safety is non-negotiable in gas systems. Our brass gas parts \u2014 valves bodies, nozzles, regulators components, burner parts and cylinder adapters \u2014 are machined to strict tolerances and 100% pressure-tested to ensure leak-free operation in LPG, CNG and industrial gas applications.',
    image: IMAGES.brassParts,
    applications: ['LPG cylinder valves & adapters', 'CNG kit components', 'Gas regulator internals', 'Burner nozzles & jets', 'Gas meter components', 'Flare fittings for gas lines'],
    specs: [
      { label: 'Material', value: 'CW617N / CW614N, Lead-free brass available' },
      { label: 'Size Range', value: 'M4 to M50' },
      { label: 'Testing', value: '100% pneumatic leak testing' },
      { label: 'Threading', value: 'BSP, NPT, Metric fine threads' },
      { label: 'Finish', value: 'Natural, Nickel plated' },
      { label: 'Standards', value: 'IS 3224, EN 549, ISO 15245' },
    ],
  },
  {
    slug: 'brass-electrical-pins',
    name: 'Brass Electrical Pins',
    short: 'High-conductivity brass pins for plugs, sockets, connectors and switchgear.',
    description:
      'We are a leading manufacturer of brass electrical pins for plug tops, socket outlets, connectors and switchgear. Produced on high-speed CNC and traub machines, our pins deliver consistent conductivity, perfect knurling and burr-free finishing at volumes of millions of pieces per month.',
    image: IMAGES.parts2,
    applications: ['2-pin & 3-pin plug tops', 'Socket outlet contacts', 'Industrial connectors', 'Switchgear contacts', 'PCB terminal pins', 'Extension board pins'],
    specs: [
      { label: 'Material', value: 'CW614N / C38500 High-Conductivity Brass' },
      { label: 'Size Range', value: '\u00D81.5 mm to \u00D812 mm' },
      { label: 'Tolerance', value: 'Up to \u00B10.02 mm' },
      { label: 'Knurling', value: 'Straight, Diamond, Cross knurl' },
      { label: 'Finish', value: 'Natural, Nickel, Tin, Silver plated' },
      { label: 'Standards', value: 'IS 1293, BS 1363, IEC 60884' },
    ],
  },
  {
    slug: 'brass-inserts',
    name: 'Brass Inserts',
    short: 'Knurled and threaded brass inserts for plastic moulding, PPR fittings and assemblies.',
    description:
      'Our brass inserts provide permanent, high-strength threads in plastic and composite assemblies. We manufacture ultrasonic, heat-staking, press-in and moulded-in inserts with precision knurling patterns that guarantee maximum pull-out and torque resistance in PPR, CPVC, UPVC and engineering plastics.',
    image: IMAGES.parts3,
    applications: ['PPR / CPVC pipe fittings', 'Injection moulded enclosures', 'Automotive plastic assemblies', 'Electronics housings', 'Furniture & fixtures', 'Medical device components'],
    specs: [
      { label: 'Material', value: 'CW614N / C36000 Free-Cutting Brass' },
      { label: 'Size Range', value: 'M2 to M24' },
      { label: 'Types', value: 'Ultrasonic, Moulded-in, Press-in, Self-tapping' },
      { label: 'Knurling', value: 'Diamond, Straight, Helical' },
      { label: 'Finish', value: 'Natural, Nickel, Tin plated' },
      { label: 'Standards', value: 'DIN 16903, Customer drawings' },
    ],
  },
  {
    slug: 'brass-electrical-terminals',
    name: 'Brass Electrical Terminals',
    short: 'Terminal blocks, connectors and earthing accessories machined for reliable contact.',
    description:
      'From neutral links and terminal blocks to battery terminals and earthing accessories, our brass electrical terminals are manufactured for low contact resistance and long service life. Every batch is dimensionally inspected and plating thickness is verified for consistent performance.',
    image: IMAGES.machining,
    applications: ['Terminal blocks & neutral links', 'Battery terminals', 'Earthing & grounding accessories', 'Panel board connectors', 'Transformer terminals', 'Solar & EV connectors'],
    specs: [
      { label: 'Material', value: 'CW614N / C37700 Forging Brass' },
      { label: 'Size Range', value: 'M3 to M30' },
      { label: 'Process', value: 'CNC turning, Hot forging, Stamping' },
      { label: 'Conductivity', value: '\u226526% IACS' },
      { label: 'Finish', value: 'Natural, Nickel, Tin plated' },
      { label: 'Standards', value: 'IS 5082, EN 12164, UL 486' },
    ],
  },
  {
    slug: 'brass-screws',
    name: 'Brass Screws',
    short: 'Machine screws, wood screws and fasteners in every head style and thread standard.',
    description:
      'We produce brass screws and fasteners in every configuration \u2014 slotted, Phillips, hex, socket and custom head styles \u2014 with rolled or cut threads. High-speed heading and thread-rolling lines let us deliver large volumes with tight consistency and competitive pricing.',
    image: IMAGES.cncMachine,
    applications: ['Electrical switchgear fastening', 'Marine-grade assemblies', 'Decorative hardware', 'Instrumentation & meters', 'Wood & furniture applications', 'General engineering'],
    specs: [
      { label: 'Material', value: 'CW614N / C36000, Naval Brass on request' },
      { label: 'Size Range', value: 'M1.6 to M20 / #0 to 3/4"' },
      { label: 'Head Styles', value: 'Pan, CSK, Cheese, Hex, Button, Custom' },
      { label: 'Threads', value: 'Metric, BA, BSW, UNC, UNF' },
      { label: 'Finish', value: 'Natural, Nickel, Tin, Chrome plated' },
      { label: 'Standards', value: 'DIN 84, DIN 963, ISO 7045, IS 1365' },
    ],
  },
  {
    slug: 'brass-custom-parts',
    name: 'Brass Custom Parts',
    short: 'Built-to-print brass components manufactured exactly to your drawing or sample.',
    description:
      'Send us your drawing, 3D model or physical sample \u2014 we will manufacture it. As OEM manufacturers with in-house tooling, CNC turning, milling and finishing, we specialise in built-to-print brass components for customers who need a reliable, confidential production partner.',
    image: IMAGES.factory3,
    applications: ['OEM proprietary components', 'Prototype to production runs', 'Import substitution parts', 'Reverse-engineered legacy parts', 'Special-purpose machine parts', 'Any industry, any geometry'],
    specs: [
      { label: 'Material', value: 'Any brass grade \u2014 CW614N, CW617N, DZR, Lead-free' },
      { label: 'Size Range', value: '\u00D81 mm to \u00D8100 mm' },
      { label: 'Tolerance', value: 'Up to \u00B10.005 mm' },
      { label: 'Input Accepted', value: '2D drawings, STEP/IGES models, Samples' },
      { label: 'MOQ', value: 'Flexible \u2014 from prototype quantities' },
      { label: 'Confidentiality', value: 'NDA-protected development' },
    ],
  },
];

export const INDUSTRIES = [
  { name: 'Automotive', icon: 'Car', desc: 'Fuel systems, braking, sensors and engine components for OEMs and Tier-1s.' },
  { name: 'Electrical & Electronics', icon: 'Zap', desc: 'Pins, terminals, contacts and connectors for switchgear and appliances.' },
  { name: 'Gas & Energy', icon: 'Flame', desc: 'Safety-critical valves, nozzles and regulator parts for LPG and CNG.' },
  { name: 'Plumbing & Sanitary', icon: 'Droplets', desc: 'Leak-proof fittings, inserts and valve components for water systems.' },
  { name: 'Telecommunications', icon: 'Radio', desc: 'Precision connector bodies and RF hardware components.' },
  { name: 'Construction & Hardware', icon: 'Building2', desc: 'Architectural hardware, anchors and fastening solutions.' },
  { name: 'Agriculture', icon: 'Tractor', desc: 'Sprayer nozzles, irrigation fittings and pump components.' },
  { name: 'Defence & Railways', icon: 'Shield', desc: 'High-reliability components manufactured to strict specifications.' },
];

export const STATS = [
  { value: 5, suffix: '+', label: 'Years of Excellence' },
  { value: 120, suffix: '+', label: 'Global Clients' },
  { value: 10, suffix: 'M+', label: 'Components / Year' },
  { value: 18, suffix: '+', label: 'Countries Served' },
];

export const EXPORT_COUNTRIES = ['United States', 'Germany', 'United Kingdom', 'UAE', 'Italy', 'Spain', 'Netherlands', 'Australia', 'South Africa', 'Brazil', 'Poland', 'Mexico'];

export const FAQS = [
  { q: 'What is your minimum order quantity (MOQ)?', a: 'Our MOQ is flexible and depends on the component complexity and size. For standard components we typically start from 1,000 pieces, while for custom-developed parts we can support prototype and pilot quantities before scaling to full production.' },
  { q: 'Can you manufacture parts from our drawings or samples?', a: 'Yes \u2014 that is our core strength as OEM manufacturers. Share your 2D drawings, 3D models (STEP/IGES) or a physical sample, and our engineering team will review it, suggest optimisations if needed, and deliver a detailed quotation within 24\u201348 hours. All development is protected under NDA.' },
  { q: 'Which quality certifications do you hold?', a: 'Super Brass Industries operates an ISO 9001:2015 certified quality management system. Our components are RoHS compliant, and we provide material test certificates, dimensional inspection reports and PPAP documentation on request.' },
  { q: 'What are your typical lead times?', a: 'Standard components ship in 2\u20133 weeks from order confirmation. Custom parts require 3\u20135 weeks including tooling and sample approval. For repeat orders we maintain safety stock programs that can reduce lead times to under a week.' },
  { q: 'Which brass grades and finishes do you work with?', a: 'We machine CW614N, CW617N, C36000, C38500, DZR and lead-free brass grades. Surface finishes include natural, nickel, tin, zinc, chrome and silver plating \u2014 all with verified plating thickness reports.' },
  { q: 'Do you export? How are shipments packed?', a: 'Yes, we currently export to 18+ countries across North America, Europe, the Middle East and Oceania. Components are packed in VCI-lined export-grade packaging with full traceability labelling, shipped via sea or air per your Incoterms (FOB, CIF, DDP).' },
];

export const CERTIFICATES = [
  { name: 'ISO 9001:2015', desc: 'Certified Quality Management System covering design, manufacture and supply of brass components.' },
  { name: 'RoHS Compliant', desc: 'All components conform to the Restriction of Hazardous Substances directive for global markets.' },
  { name: 'CE Conformity', desc: 'Applicable product ranges meet European health, safety and environmental protection standards.' },
  { name: 'MSME / Udyam Registered', desc: 'Government of India registered manufacturing enterprise, Jamnagar, Gujarat.' },
];

export const JOURNEY = [
  { year: '2021', title: 'The Foundation', desc: 'Super Brass Industries is established in Jamnagar \u2014 the brass city of India \u2014 with a small CNC setup and a big commitment: zero-compromise quality.' },
  { year: '2022', title: 'Capacity Expansion', desc: 'Added high-speed traub and CNC turning centres, growing monthly output to over 4 lakh precision components.' },
  { year: '2023', title: 'First Exports', desc: 'Shipped our first international consignments to the UAE and Germany, marking our entry into global supply chains.' },
  { year: '2024', title: 'ISO 9001:2015 Certified', desc: 'Formalised our quality management system with ISO certification and in-house testing laboratory.' },
  { year: '2025', title: '120+ Clients, 18 Countries', desc: 'Crossed 120 active clients including automotive OEM suppliers and electrical majors across 18 countries.' },
  { year: '2026', title: 'The Road Ahead', desc: 'Commissioning a new automated facility with robotic loading, inline vision inspection and doubled export capacity.' },
];
