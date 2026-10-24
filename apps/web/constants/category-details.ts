export interface CategoryKeyAttribute {
    label: string;
    value: string;
    hint?: string;
}

export interface CategorySpecifications {
    materials: string[];
    threads: string[];
    sizes: string[];
    finishes: string[];
    applications: string[];
    standards?: string[];
}

export interface CategoryTableData {
    title: string;
    subtitle?: string;
    headers: string[];
    rows: string[][];
    note?: string;
}

export interface DetailedCategory {
    slug: string;
    title: string;
    shortTitle: string;
    eyebrow: string;
    image: string;
    heroDescription: string;
    keyAttributes: CategoryKeyAttribute[];
    variants: string[];
    features: string[];
    specifications: CategorySpecifications;
    tableData: CategoryTableData;
    capabilities: {
        tolerance: string;
        moq: string;
        monthlyCapacity: string;
        leadTime: string;
    };
}

export const CATEGORY_DETAILS: Record<string, DetailedCategory> = {
    "brass-insert": {
        slug: "brass-insert",
        title: "Brass Insert For Plastic Moulding",
        shortTitle: "Brass Insert",
        eyebrow: "Threaded Fasteners & Inserts",
        image: "/categories/Brass Insert.webp",
        heroDescription:
            "High-precision brass inserts engineered for thermoplastic, thermoset, rotational moulding, and wood fastening. Designed with deep grooves and engineered knurling to deliver maximum pull-out and torque-out resistance across critical assemblies.",
        keyAttributes: [
            { label: "Material Grade", value: "IS 319 / CW614N", hint: "Free cutting brass" },
            { label: "Thread Standard", value: "ISO Metric / UNC / BA", hint: "Class 6H Go/No-Go" },
            { label: "Tolerance Class", value: "±0.005 mm", hint: "Close I/D tolerance" },
            { label: "Knurl Options", value: "Diamond / Straight / Cross", hint: "Helical & unidirectional" },
        ],
        variants: [
            "Round Knurled Inserts",
            "Hexagonal Inserts",
            "Square Inserts",
            "Blind (Closed End) Inserts",
            "Through-Hole Inserts",
            "Ultrasonic & Heat Staking Inserts",
            "Press-In Expansion Inserts",
            "Moulded-In Threaded Bushings",
        ],
        features: [
            "Threads strictly conform to International Go & Not Go plug gauge standards.",
            "Deep helical and diamond grooves deliver maximum torque and tensile pull-out resistance.",
            "Precision inner diameter (I/D) after threads with tight tolerances prevents flash or molten plastic from entering the thread bore.",
            "Sharp knurling crests provide exceptional mechanical interlocking in injection moulding.",
            "Both blind and through variants available from rapid prototypes to high-volume recurring lots.",
            "100% burr-free threads, degreased and ultrasonically cleaned before dispatch.",
        ],
        specifications: {
            materials: [
                "Free Cutting Brass IS 319 Type (I) or Type (II)",
                "Free Cutting Brass as per BS 249 Type (I)",
                "High Grade European CW614N (CuZn39Pb3)",
                "CuZn40Pb2, C36000 Lead Brass",
                "RoHS & REACH Compliant Lead-Free Brass (<0.1% Pb) on request",
                "Special custom alloy formulations tailored to customer drawings",
            ],
            threads: [
                "ISO Metric (MM Threads): M1.6, M2, M2.5, M3, M4, M5, M6, M8, M10, M12 to M24",
                "British Standards: BSW (Whitworth 1/8\" to 1\"), BSF, BA (0 BA to 12 BA)",
                "Unified Standards: UNC & UNF (No. 2-56 up to 1/2-13)",
                "Any custom thread pitch or multi-start threads per customer specification",
            ],
            sizes: [
                "Thread begins from M1.6 or equivalent imperial threads up to M30",
                "Lengths ranging from 3.0 mm to 65.0 mm",
                "Outer diameters from Ø 2.5 mm up to Ø 45 mm",
                "Custom stepped, flanged, and collared profiles per engineering drawing",
            ],
            finishes: [
                "Natural Clean Degreased Brass",
                "Electro-Nickel Plating (2 to 8 microns)",
                "Pure Tin Plating (Bright / Matte)",
                "Electro-Chrome Flash Plating",
                "Zinc Plating with Yellow or Clear Passivation",
                "Silver Plating for ultra-conductive sensor housings",
            ],
            applications: [
                "Plastic injection moulding and rotational moulding cases",
                "Automotive dashboard panels, sensor housings, and ECU brackets",
                "Electrical switchboards, socket housings, and terminal casings",
                "Telecommunication routers, satellite devices, and handset assemblies",
                "Consumer appliances, power tool housings, and laptop hinges",
            ],
            standards: ["ISO 9001:2015", "RoHS Compliant", "REACH Compliant", "DIN 16903"],
        },
        tableData: {
            title: "Standard Brass Insert Dimensional & Mechanical Matrix",
            subtitle: "Reference metrics for standard diamond-knurled threaded inserts. Custom dimensions manufactured upon request.",
            headers: [
                "Thread Size (D)",
                "Outer Dia (O.D. mm)",
                "Length (L mm)",
                "Knurl Type",
                "Pull-out Force",
                "Torque Resistance",
                "Rec. Hole Dia (mm)",
            ],
            rows: [
                ["M2.0 x 0.40", "3.20 ± 0.05", "4.00 ± 0.10", "Diamond", "> 420 N", "> 0.55 N·m", "2.90 ± 0.05"],
                ["M2.5 x 0.45", "3.60 ± 0.05", "5.00 ± 0.10", "Diamond", "> 580 N", "> 0.85 N·m", "3.30 ± 0.05"],
                ["M3.0 x 0.50", "4.40 ± 0.05", "5.80 ± 0.10", "Diamond / Straight", "> 820 N", "> 1.40 N·m", "4.00 ± 0.05"],
                ["M3.5 x 0.60", "5.00 ± 0.05", "6.50 ± 0.10", "Helical Diamond", "> 1,050 N", "> 2.10 N·m", "4.60 ± 0.05"],
                ["M4.0 x 0.70", "5.80 ± 0.05", "7.50 ± 0.10", "Cross / Hexagonal", "> 1,350 N", "> 3.20 N·m", "5.30 ± 0.05"],
                ["M5.0 x 0.80", "7.00 ± 0.08", "9.50 ± 0.15", "Diamond Knurled", "> 2,100 N", "> 5.80 N·m", "6.40 ± 0.05"],
                ["M6.0 x 1.00", "8.50 ± 0.08", "12.00 ± 0.15", "Diamond with Undercut", "> 3,400 N", "> 9.50 N·m", "7.80 ± 0.08"],
                ["M8.0 x 1.25", "11.00 ± 0.10", "15.00 ± 0.20", "Heavy Duty Hex", "> 5,200 N", "> 18.0 N·m", "10.20 ± 0.10"],
                ["M10.0 x 1.50", "13.50 ± 0.10", "18.00 ± 0.20", "Diamond + Flange", "> 7,800 N", "> 32.0 N·m", "12.50 ± 0.10"],
                ["Custom Sizes", "Any Ø2.5 - Ø50 mm", "Any 3 - 65 mm", "As per 2D/3D DWG", "Tested per ASTM", "Engineered to order", "Custom mould pin"],
            ],
            note: "All dimensions in millimeters. Pull-out and torque-out resistance tested in standard unfilled ABS/Polycarbonate substrates.",
        },
        capabilities: {
            tolerance: "±0.005 mm (5 microns)",
            moq: "5,000 pcs (prototyping 500 pcs)",
            monthlyCapacity: "4.5 Million Units",
            leadTime: "7–14 days for standard batches",
        },
    },

    "brass-electric-terminal": {
        slug: "brass-electric-terminal",
        title: "Brass Electrical Terminals & Connector Blocks",
        shortTitle: "Electrical Terminal",
        eyebrow: "Power Distribution & Switchgear",
        image: "/categories/Brass Electrical Terminal.webp",
        heroDescription:
            "Engineered brass terminal blocks, neutral links, and earth bars offering exceptional electrical conductivity and mechanical rigidity. Manufactured for switchgear panels, energy meters, distribution boxes, and industrial circuit protection.",
        keyAttributes: [
            { label: "Conductivity", value: "> 28% IACS", hint: "High electrical efficiency" },
            { label: "Material Grade", value: "CW617N / IS 319", hint: "Electrolytic grade brass" },
            { label: "Current Rating", value: "16A up to 400A", hint: "Low thermal rise" },
            { label: "Plating Option", value: "Electro-Tin / Silver", hint: "Solderable & anti-corrosion" },
        ],
        variants: [
            "Neutral Links & Earth Terminal Bars",
            "PCB Mount Screw Terminal Blocks",
            "Battery Lug & Clamp Terminals",
            "Heavy-Duty Switchgear Terminal Studs",
            "Panel Board Cross-Connectors",
            "Multi-Way Distribution Terminals (2-Way to 60-Way)",
            "Din-Rail Mounted Brass Terminals",
            "Custom Forged & Stamped Terminals",
        ],
        features: [
            "Extruded brass profile with high density to prevent porosity and internal micro-cracks.",
            "Tapped holes machine-chamfered and 100% thread inspected for effortless screw driving.",
            "Supplied with brass or mild steel zinc-plated binding screws (slotted/combo head).",
            "Minimal voltage drop across contact points under continuous high current load.",
            "Tin or nickel electroplating prevents galvanic corrosion in humid and marine environments.",
            "Manufactured to fit DIN rail standard terminal enclosures and custom moulded housings.",
        ],
        specifications: {
            materials: [
                "Free Cutting Brass IS 319 Type I/II",
                "High Conductivity Brass CW617N (CuZn40Pb2)",
                "CDA 360 / ASTM B16 Alloy 360",
                "High Tensile Forging Brass IS 8726",
                "RoHS & REACH Compliant Low-Lead Brass",
            ],
            threads: [
                "Metric standard: M2.5, M3, M3.5, M4, M5, M6, M8, M10",
                "Imperial threads: 1/8\" BSW, 3/16\" BSW, 1/4\" BSW, UNC",
                "Fine thread pitches available for vibration-proof clamping",
            ],
            sizes: [
                "Cross sections: 6x9 mm, 9x12 mm, 10x15 mm, 12x15 mm, 16x20 mm",
                "Lengths: 25 mm up to 1,200 mm continuous terminal bars",
                "Hole configurations: 2-way up to 60-way with custom pitch spacing",
            ],
            finishes: [
                "Electro-Tin Plating (3 to 12 microns) for maximum solderability",
                "Nickel Plating (2 to 5 microns) for chemical resistance",
                "Silver Plating for ultra-high conductivity contact points",
                "Natural Bright Pickled Brass finish",
            ],
            applications: [
                "Low and medium voltage switchgear assemblies",
                "Domestic and industrial distribution boards (DBs)",
                "Single-phase and three-phase energy meters",
                "Solar inverter combiners and battery storage units",
                "Uninterruptible Power Supply (UPS) systems and control panels",
            ],
            standards: ["IEC 60947-7-1", "IS 13947", "RoHS", "UL94V-0 Compliant Mating"],
        },
        tableData: {
            title: "Standard Neutral & Earth Terminal Bar Specifications",
            subtitle: "Common commercial sizes. Screw configurations and hole pitch customized upon request.",
            headers: [
                "Bar Profile (H x W)",
                "No. of Holes",
                "Screw Size",
                "Hole Diameter",
                "Current Rating",
                "Standard Length",
                "Plating Finish",
            ],
            rows: [
                ["6.0 x 9.0 mm", "4 to 12 Ways", "M4 Slotted", "Ø 4.5 mm", "40 A", "45 – 120 mm", "Electro-Tin / Nickel"],
                ["6.0 x 9.0 mm", "14 to 24 Ways", "M4 Slotted", "Ø 4.5 mm", "63 A", "140 – 240 mm", "Electro-Tin / Nickel"],
                ["9.0 x 12.0 mm", "6 to 18 Ways", "M5 Combo", "Ø 5.5 mm", "100 A", "85 – 220 mm", "Electro-Tin Plated"],
                ["9.0 x 12.0 mm", "20 to 36 Ways", "M5 Combo", "Ø 5.5 mm", "125 A", "250 – 420 mm", "Electro-Tin Plated"],
                ["10.0 x 15.0 mm", "8 to 24 Ways", "M6 Hex/Combo", "Ø 6.5 mm", "160 A", "120 – 350 mm", "Pure Tin (8µm)"],
                ["12.0 x 15.0 mm", "10 to 32 Ways", "M6 / M8 Hex", "Ø 7.0 / 8.5 mm", "200 A", "160 – 450 mm", "Pure Tin (8µm)"],
                ["16.0 x 20.0 mm", "12 to 40 Ways", "M8 / M10", "Ø 9.0 mm", "315 A", "200 – 600 mm", "Silver / Heavy Tin"],
                ["Custom Profile", "Up to 60 Ways", "Custom Tapped", "Per Wire Gauge", "Up to 500 A", "Up to 1.2 Meters", "Per OEM Spec"],
            ],
            note: "Supplied complete with galvanized, stainless steel, or brass screws assembled or packaged loose.",
        },
        capabilities: {
            tolerance: "±0.02 mm on hole pitch spacing",
            moq: "1,000 pcs",
            monthlyCapacity: "1.2 Million Units",
            leadTime: "10–18 days",
        },
    },

    "brass-screw": {
        slug: "brass-screw",
        title: "Brass Precision Screws & Fasteners",
        shortTitle: "Brass Screw",
        eyebrow: "Cold Forged & Turned Fasteners",
        image: "/categories/Brass Screw.webp",
        heroDescription:
            "Industrial-grade brass machine screws, fasteners, and bolts precision cold-forged and CNC-threaded. Offering superior anti-magnetic properties, zero corrosion in marine/chemical environments, and smooth aesthetic finishes for demanding applications.",
        keyAttributes: [
            { label: "Head Styles", value: "Pan, Flat, Hex, Round", hint: "DIN & ISO standards" },
            { label: "Drive Types", value: "Slotted, Phillips, Torx", hint: "Burr-free recesses" },
            { label: "Diameter Range", value: "M1.2 to M20", hint: "Micro to heavy duty" },
            { label: "Corrosion Class", value: "Marine Grade", hint: "100% non-rusting brass" },
        ],
        variants: [
            "Slotted Head Machine Screws (DIN 84 / DIN 963)",
            "Phillips / Cross-Recessed Screws (DIN 7985 / DIN 965)",
            "Hexagon Head Brass Screws & Bolts (DIN 933)",
            "Socket Head Cap Screws (DIN 912)",
            "Grub Screws & Set Screws (DIN 913 / 916)",
            "Knurled Thumb Screws for Instrument Panels",
            "Brass Wood & Tapping Screws (DIN 7997)",
            "Custom Head Profiles per Engineering Print",
        ],
        features: [
            "Precision cold-heading ensures high tensile and shear strength without grain fracture.",
            "Rolled or single-point CNC turned threads guarantee smooth engagement without cross-threading.",
            "Completely non-magnetic alloy suitable for sensitive electronic and medical instrumentation.",
            "Burr-free drive recesses prevent driver slippage and ensure automated feeder compatibility.",
            "Highly decorative polished finishes for architectural hardware and luxury lighting fixtures.",
            "Packaged in corrosion-inhibiting VCI polybags for long sea-freight shelf life.",
        ],
        specifications: {
            materials: [
                "Extruded Brass Rods BS 249 Type (I)",
                "Cold Heading Brass Wire CuZn37 / CW508L",
                "Free Cutting Brass IS 319 Gr. 1 / CW614N",
                "Naval Brass (C46400) for marine saltwater resistance",
                "Silicon Bronze and High Tensile Manganese Brass",
            ],
            threads: [
                "ISO Metric (Coarse & Fine): M1.2, M1.6, M2, M2.5, M3, M4, M5, M6, M8, M10, M12 to M20",
                "British Standards: BSW, BSF, BA (0 BA to 16 BA)",
                "American Standards: UNC, UNF (No. 0-80 to 3/4\"-10)",
            ],
            sizes: [
                "Shank Diameters: Ø 1.2 mm to Ø 20.0 mm",
                "Lengths: 3.0 mm up to 150.0 mm (threaded full or partial)",
                "Custom shoulder screws, step screws, and hollow-shank designs",
            ],
            finishes: [
                "Natural Clean Degreased Brass",
                "Bright Acid Dipped & Passivated",
                "Electro-Nickel Plating (Bright / Satin)",
                "Antique Brass & Bronze Oxidized Finish",
                "Chrome Plated & Mirror Polished",
                "Electro-Tin Plated for electrical solderability",
            ],
            applications: [
                "Electrical switch plates, wall sockets, and junction boxes",
                "Marine hardware, navigational gear, and boat fittings",
                "Electronic telecommunications equipment and instrumentation",
                "Architectural ironmongery, doors, windows, and luxury furniture",
                "Medical device fixtures and diagnostic housings",
            ],
            standards: ["DIN 84", "DIN 963", "DIN 7985", "DIN 965", "DIN 933", "ISO 1207"],
        },
        tableData: {
            title: "Standard Brass Machine Screw Dimensional Guide",
            subtitle: "Pan Head (DIN 7985 / ISO 7045) standard cross-recess dimensions.",
            headers: [
                "Thread Size (d)",
                "Pitch (P)",
                "Head Dia (dk mm)",
                "Head Height (k mm)",
                "Drive Type",
                "Length Range (L mm)",
                "Tensile Strength",
            ],
            rows: [
                ["M1.6", "0.35 mm", "3.20 ± 0.15", "1.30 ± 0.10", "PH #0 / Slotted", "3 – 16 mm", "> 380 N/mm²"],
                ["M2.0", "0.40 mm", "4.00 ± 0.15", "1.60 ± 0.10", "PH #0 / Slotted", "4 – 25 mm", "> 400 N/mm²"],
                ["M2.5", "0.45 mm", "5.00 ± 0.15", "2.00 ± 0.10", "PH #1 / Slotted", "5 – 35 mm", "> 420 N/mm²"],
                ["M3.0", "0.50 mm", "6.00 ± 0.18", "2.40 ± 0.12", "PH #1 / Combo", "6 – 45 mm", "> 440 N/mm²"],
                ["M4.0", "0.70 mm", "8.00 ± 0.20", "3.10 ± 0.15", "PH #2 / Combo", "8 – 60 mm", "> 450 N/mm²"],
                ["M5.0", "0.80 mm", "10.00 ± 0.25", "3.80 ± 0.15", "PH #2 / Torx T25", "10 – 80 mm", "> 460 N/mm²"],
                ["M6.0", "1.00 mm", "12.00 ± 0.25", "4.60 ± 0.18", "PH #3 / Hex Head", "12 – 100 mm", "> 470 N/mm²"],
                ["M8.0", "1.25 mm", "16.00 ± 0.30", "6.00 ± 0.20", "Hex / Socket Cap", "16 – 120 mm", "> 480 N/mm²"],
                ["M10.0", "1.50 mm", "20.00 ± 0.35", "7.50 ± 0.25", "Hex Head DIN 933", "20 – 150 mm", "> 500 N/mm²"],
                ["Custom", "Any Pitch", "Per Drawing", "Per Drawing", "Torx / Security / Slot", "Up to 250 mm", "Alloy specific"],
            ],
            note: "Values given for standard brass alloys. Custom head markings and captive washers available.",
        },
        capabilities: {
            tolerance: "Class 6g thread tolerance / DIN standard head limits",
            moq: "10,000 pcs (micro screws: 25,000 pcs)",
            monthlyCapacity: "8.0 Million Units",
            leadTime: "12–20 days",
        },
    },

    "brass-auto-parts": {
        slug: "brass-auto-parts",
        title: "Brass Automotive Precision Components",
        shortTitle: "Brass Auto Parts",
        eyebrow: "Tier-1 OEM Automotive Machining",
        image: "/categories/Brass Auto Parts.webp",
        heroDescription:
            "Mission-critical automotive brass components precision CNC turned and forged for Tier-1 and OEM automotive suppliers. Engineered to endure continuous thermal cycles, severe engine vibration, and aggressive automotive fluids with zero defect tolerance.",
        keyAttributes: [
            { label: "Machining Accuracy", value: "±0.005 mm", hint: "Multi-axis Swiss CNC" },
            { label: "Pressure Rating", value: "Up to 250 Bar", hint: "100% leak & burst tested" },
            { label: "Material Grade", value: "DZR / CW602N / CW617N", hint: "Dezincification resistant" },
            { label: "Quality System", value: "PPAP Level 3 Ready", hint: "CMM & SPC verification" },
        ],
        variants: [
            "Fuel Injection Nozzles & Rail Connectors",
            "Air Brake Hose Fittings & Unions",
            "Thermostat Housings & Water Pump Plugs",
            "Oil Pressure & Temperature Sensor Sleeves",
            "Radiator Drain Valves & Petcocks",
            "Transmission Synchronizer Brass Rings",
            "Brake Bleeder Screws & Caliper Inserts",
            "Carburetor Jets & Idle Adjuster Screws",
        ],
        features: [
            "Tight dimensional tolerances down to ±0.005 mm held stably across high-volume production runs.",
            "Dezincification-resistant (DZR) brass alloys prevent coolant attack and internal degradation.",
            "100% automated optical inspection (AOI) available for critical automotive seating faces.",
            "High burst pressure resistance with verified bubble-tight sealing surfaces.",
            "Full traceability with heat treatment lot numbers, material test reports, and 3.1 inspection certificates.",
            "PPAP Level 3 documentation, CPK > 1.67, and FMEA reports provided on request.",
        ],
        specifications: {
            materials: [
                "Dezincification Resistant (DZR) Brass CW602N (CuZn36Pb2As)",
                "High Tensile Forging Brass IS 8726 / CW617N",
                "Free Cutting Brass IS 319 Gr. 1 / CuZn39Pb3",
                "Lead-Free Automotive Brass Alloys meeting ELV directives",
                "High-Wear Leaded Bronze for bush and synchronizer rings",
            ],
            threads: [
                "Metric Fine: M10x1.0, M12x1.25, M12x1.5, M14x1.5, M16x1.5",
                "Pipe Threads: NPT, NPTF (Dryseal), BSPT, BSPP (ISO 228-1)",
                "UNF threads: 7/16-24, 1/2-20, 9/16-18 for brake and fluid lines",
            ],
            sizes: [
                "Bar turned components: Ø 4.0 mm to Ø 75.0 mm",
                "Forged and finish-machined components up to Ø 120 mm",
                "Length range: 5 mm to 180 mm",
            ],
            finishes: [
                "Electroless Nickel Plating (5 to 15 microns) for extreme wear resistance",
                "Yellow & Clear Trivalent Zinc Passivation",
                "Bright Degreased Brass with anti-tarnish protective coating",
                "Cadmium-free protective barrier coatings",
            ],
            applications: [
                "Commercial vehicle pneumatic braking and air suspension systems",
                "Passenger vehicle cooling circuits, radiator caps, and thermostats",
                "Engine management pressure sensors and fuel injection lines",
                "Two-wheeler carburetors, brake calipers, and oil drain plugs",
                "Agricultural tractors and construction machinery hydraulic valves",
            ],
            standards: ["IATF 16949 Compliant Systems", "SAE J512", "DIN 74324", "RoHS ELV"],
        },
        tableData: {
            title: "Automotive Precision Components Engineering Matrix",
            subtitle: "Representative critical components manufactured for vehicle systems.",
            headers: [
                "Component Name",
                "Subsystem",
                "Thread / Port Spec",
                "Critical Tolerance",
                "Burst Pressure",
                "Material Grade",
            ],
            rows: [
                ["Air Brake Quick Coupling", "Pneumatic Braking", "M16x1.5 / M22x1.5", "±0.008 mm", "> 220 Bar", "CW614N / CW617N"],
                ["Coolant Temp Sensor Body", "Engine Cooling", "M12x1.5 / 3/8\" NPT", "±0.010 mm", "> 45 Bar", "DZR Brass CW602N"],
                ["Fuel Rail Banjo Connector", "Fuel Injection", "M10x1.0 / M12x1.25", "±0.006 mm", "> 180 Bar", "Forged CW617N"],
                ["Radiator Drain Petcock", "Cooling Circuit", "1/4\" NPT / M10x1.0", "±0.012 mm", "> 25 Bar", "Free Cutting IS 319"],
                ["Brake Caliper Bleed Screw", "Hydraulic Brake", "M8x1.25 / M10x1.0", "±0.005 mm", "> 250 Bar", "High Tensile Brass"],
                ["Transmission Bushing", "Gearbox Assembly", "Precision Bore Ø22", "±0.005 mm (H7)", "N/A (Wear)", "CuZn40Pb2 / Bronze"],
                ["Oil Pressure Switch Shell", "Lubrication System", "1/8\"-27 NPTF", "±0.008 mm", "> 90 Bar", "CW614N Leaded"],
                ["Custom OEM Auto Part", "Per Customer DWG", "Per Specification", "Down to ±0.005 mm", "Per OEM Test", "Per Print Grade"],
            ],
            note: "All automotive parts pass 100% helium or hydrostatic pressure testing where specified.",
        },
        capabilities: {
            tolerance: "±0.005 mm (5 microns)",
            moq: "2,500 pcs",
            monthlyCapacity: "850,000 Units",
            leadTime: "14–25 days (PPAP 3–4 weeks)",
        },
    },

    "brass-electrical-pin": {
        slug: "brass-electrical-pin",
        title: "Brass Electrical Pins & Plug Contacts",
        shortTitle: "Electrical Pin",
        eyebrow: "Power Transmission & Connector Contacts",
        image: "/categories/Brass Electrical Pin.webp",
        heroDescription:
            "High-conductivity brass male plug pins, socket contact sleeves, and terminal connector pins. Manufactured for domestic power plugs, heavy-duty industrial plugs, and modern EV charging connectors with guaranteed insertion endurance and minimum resistance.",
        keyAttributes: [
            { label: "Conductivity", value: "> 30% IACS", hint: "Low resistance alloy" },
            { label: "Cycle Endurance", value: "> 10,000 cycles", hint: "Zero fatigue split pins" },
            { label: "Plating Standard", value: "Nickel / Silver", hint: "3–8 µm corrosion shield" },
            { label: "International Fit", value: "BS 1363, Schuko, UL", hint: "Global connector specs" },
        ],
        variants: [
            "Solid Plug Pins (Moulded-in & Screw Mounted)",
            "Hollow Brass Plug Pins for Weight Reduction",
            "Split Spring-Loaded Plug Pins",
            "BS 1363 UK 3-Pin Rectangular Earth & Power Pins",
            "Europlug & Schuko Round Pins (Ø 4.0 mm & Ø 4.8 mm)",
            "Industrial CEE / IEC 60309 Multi-Phase Plug Pins",
            "EV Charging Connector Male/Female Pins",
            "PCB Header Pins & Crimp Contacts",
        ],
        features: [
            "Precision turned on Swiss-type CNC and rotary transfer machines for perfect concentricity.",
            "Split pins engineered with calibrated spring temper to maintain tight grip contact after 10,000+ insertions.",
            "Lead-in chamfers on pin tips allow smooth, jam-free insertion into power sockets.",
            "Available with cross-drilled wire holes, blind tapped bores, or solder cup terminations.",
            "Heavy electro-nickel plating prevents oxidation, pitting, and discoloration during high-heat operation.",
            "Complies with international electrical safety standards across UK, EU, US, and Asian plug geometries.",
        ],
        specifications: {
            materials: [
                "Free Cutting Brass IS 319 Type (I) / BS 249",
                "High Conductivity Brass CW614N (CuZn39Pb3)",
                "Phosphor Bronze for heavy spring contact sleeves",
                "RoHS & REACH Compliant Lead-Free Brass",
                "Beryllium Copper contacts for extreme current EV pins",
            ],
            threads: [
                "Internal Tapped Threads: M2.5, M3, M3.5, M4, M5",
                "External Threaded Studs: M3, M4, M5, M6",
                "Threadless crimp, knurled press-fit, or hollow rivet tails",
            ],
            sizes: [
                "Pin Diameters: Ø 2.0 mm up to Ø 16.0 mm",
                "Lengths: 15.0 mm up to 90.0 mm",
                "Rectangular pins: 4.0 x 6.35 mm (BS 1363 line/neutral) and 4.0 x 8.0 mm (earth)",
            ],
            finishes: [
                "Electro-Nickel Plated (3 to 6 microns) for long cycle durability",
                "Bright Acid Tin Plating for easy wire soldering",
                "Pure Silver Plating (2 to 5 microns) for high-amperage industrial pins",
                "Hard Gold Flash for sensitive data/signal connector pins",
                "Natural Bright Clean Polished Brass",
            ],
            applications: [
                "Domestic power cords, extension reels, and multi-plug adaptors",
                "UK BS 1363 rewirable plugs, Europlug CEE 7/16, and Schuko plugs",
                "Industrial 16A / 32A / 63A weatherproof socket-outlets",
                "Electric vehicle (EV) Type 2 and CCS charging gun pins",
                "Heavy appliance power supply cords (air conditioners, heaters)",
            ],
            standards: ["BS 1363-1", "CEE 7/4 & 7/7", "IS 1293", "IEC 60309", "RoHS"],
        },
        tableData: {
            title: "Standard Plug & Connector Pin Geometries",
            subtitle: "Dimensional parameters for dominant international power connector types.",
            headers: [
                "Connector Standard",
                "Pin Geometry",
                "Nominal Dimensions",
                "Current Rating",
                "Contact Style",
                "Plating Finish",
            ],
            rows: [
                ["Europlug (CEE 7/16)", "Round Solid / Insulated", "Ø 4.00 x 19.0 mm", "2.5 A", "Solid Round", "Nickel Plated (3µm)"],
                ["Schuko (CEE 7/4)", "Round Solid / Hollow", "Ø 4.80 x 19.0 mm", "16 A", "Solid / Split", "Nickel Plated (4µm)"],
                ["UK BS 1363 Power", "Rectangular Flat Pin", "4.0 x 6.35 x 17.5 mm", "13 A", "Solid Flat", "Nickel / Natural"],
                ["UK BS 1363 Earth", "Rectangular Flat Pin", "4.0 x 8.00 x 22.5 mm", "13 A", "Solid Flat", "Nickel / Natural"],
                ["Indian Standard (IS 1293)", "Round Power Pin", "Ø 5.08 x 20.6 mm", "6 A", "Solid Round", "Nickel Plated (3µm)"],
                ["Indian Standard (IS 1293)", "Heavy Duty Round", "Ø 7.06 x 20.6 mm", "16 A", "Solid Round", "Nickel Plated (4µm)"],
                ["Industrial CEE 60309", "Multi-Phase Pin", "Ø 6.00 to Ø 8.00 mm", "16A / 32A", "Split Barrel", "Silver / Nickel"],
                ["EV Charging Pin (Type 2)", "Power & Signal Pins", "Ø 3.0 / Ø 6.0 mm", "32A / 63A", "Spring Band", "Silver (5µm) / Gold"],
                ["Custom OEM Pin", "Per Specification", "Custom Ø & Length", "Per Application", "Per Engineering DWG", "Per OEM Spec"],
            ],
            note: "Available with molded nylon insulation sleeves (shrouded pins) meeting IEC electrical creepage rules.",
        },
        capabilities: {
            tolerance: "±0.01 mm on pin diameter",
            moq: "10,000 pcs",
            monthlyCapacity: "5.5 Million Units",
            leadTime: "10–18 days",
        },
    },

    "brass-gas-parts": {
        slug: "brass-gas-parts",
        title: "Brass Gas Valves, Burner Jets & Fittings",
        shortTitle: "Brass Gas Parts",
        eyebrow: "Pneumatic & Gas Flow Precision Components",
        image: "/categories/Brass Gas Parts.webp",
        heroDescription:
            "Gas-tight brass components engineered for LPG, CNG, natural gas, and industrial fuel lines. Featuring micro-precision drilled burner orifices, blow-out proof valve stems, and 100% pneumatic underwater bubble leak testing.",
        keyAttributes: [
            { label: "Leak Testing", value: "100% Submerged", hint: "Zero bubble leak tested" },
            { label: "Micro-Drill Orifice", value: "Down to 0.35 mm", hint: "±0.01 mm flow tolerance" },
            { label: "Material Grade", value: "CW617N / DZR", hint: "High density forging brass" },
            { label: "Safety Rating", value: "Up to 30 Bar", hint: "Gas appliance certified" },
        ],
        variants: [
            "Gas Stove Burner Nozzles & Injector Jets",
            "LPG / Propane Cylinder Adaptors & Valves",
            "CNG Automotive Regulator Connectors",
            "Gas Flare Nuts & Inverted Flare Fittings",
            "Thermocouple Safety Valve Housings",
            "Gas Flow Control Spindles & Needle Valves",
            "Gas Meter Swivels & Union Nuts",
            "Pilot Burner Assemblies & Flame Jets",
        ],
        features: [
            "100% submerged pneumatic bubble leak testing under dry nitrogen/air up to 15 bar pressure.",
            "Micro-drilled gas orifices held to ±0.01 mm diameter tolerance for uniform flame and BTU combustion.",
            "Forged brass bodies provide dense, non-porous structure impervious to fuel gas seepage.",
            "Non-sparking brass alloy prevents ignition hazard in combustible hydrocarbon atmospheres.",
            "Precision taper threads (NPT / BSPT) form gas-tight metal-to-metal dryseal joints.",
            "Compatible with natural gas (methane), LPG (propane/butane), biogas, and CNG mixtures.",
        ],
        specifications: {
            materials: [
                "Hot Forging Brass IS 6912 FLB / CW617N (CuZn40Pb2)",
                "Dezincification Resistant Brass CW602N",
                "High Precision Free Cutting Brass IS 319 Gr. 1",
                "CDA 377 Extruded & Forged Brass",
                "Special Low-Sulfide gas brass formulations",
            ],
            threads: [
                "Taper Gas Standards: 1/8\", 1/4\", 3/8\", 1/2\", 3/4\" NPT and BSPT (ISO 7/1)",
                "Parallel Gas Standards: BSPP (ISO 228-1) with copper/bonded washer face",
                "Left-Hand Fuel Threads: POL cylinder valve threads (0.885-14 NGO-LH)",
                "Metric Orifice Threads: M5x0.75, M6x0.75, M7x0.75, M8x1.0",
            ],
            sizes: [
                "Orifice Jet Drillings: Ø 0.35 mm to Ø 4.50 mm",
                "Fittings: 1/8\" NPT up to 1-1/2\" NPT/BSP",
                "Valve Spindles: Ø 6.0 mm to Ø 32.0 mm",
            ],
            finishes: [
                "Hot Forged Shot-Blasted Natural Finish",
                "Bright Acid Pickled & Degreased Brass",
                "Electro-Nickel Plated (3 to 6 microns) for outdoor exposure",
                "Electroless Nickel Plating for aggressive gas scrubbers",
            ],
            applications: [
                "Domestic and commercial kitchen LPG / PNG cooktops and gas ranges",
                "Outdoor gas barbecues, patio heaters, and camping stoves",
                "Automotive CNG conversion kits and bi-fuel engine manifolds",
                "Industrial furnace burner manifolds and flame treatment systems",
                "Residential gas meters, pressure regulators, and shut-off valves",
            ],
            standards: ["EN 331", "EN 88-1", "ISO 228-1", "ISO 7-1", "RoHS"],
        },
        tableData: {
            title: "Standard Gas Burner Orifice & Fitting Metrics",
            subtitle: "Reference flow jets and pressure ratings across domestic and commercial fuels.",
            headers: [
                "Fitting / Jet Type",
                "Inlet Thread",
                "Orifice Size (Ø mm)",
                "Working Pressure",
                "Test Pressure",
                "Compatible Gas",
            ],
            rows: [
                ["Micro Cooktop Jet", "M6 x 0.75", "0.45 – 0.75 mm", "28 – 37 mbar", "10 Bar Pneumatic", "LPG / Butane"],
                ["Standard Burner Jet", "M6 x 0.75", "0.85 – 1.30 mm", "20 mbar", "10 Bar Pneumatic", "Natural Gas (PNG)"],
                ["Commercial Wok Jet", "M8 x 1.00", "1.50 – 2.40 mm", "50 mbar – 1 Bar", "15 Bar Pneumatic", "LPG / Propane"],
                ["Flare Union 45°", "3/8\" SAE Flare", "Full Bore Ø 7.0 mm", "Up to 35 Bar", "50 Bar Hydrostatic", "LPG / CNG Fuel"],
                ["LPG Cylinder Adaptor", "POL LH Thread", "Internal Checked", "Up to 25 Bar", "35 Bar Nitrogen", "LPG High Pressure"],
                ["Gas Thermocouple Nut", "M8x1.0 / M9x1.0", "Sensor Port", "Atmospheric", "Leak Tested", "Combustion Gas"],
                ["CNG Regulator Nipple", "1/4\" NPT Male", "Bore Ø 4.5 mm", "Up to 220 Bar", "300 Bar Hydro", "Compressed Natural Gas"],
                ["Custom OEM Jet", "Per Customer DWG", "0.35 – 5.00 mm", "Per Specification", "100% Bubble Test", "Per Fuel Spec"],
            ],
            note: "Orifices drilled with high-speed micro-spindles ensuring zero entrance burr and laminar gas flow.",
        },
        capabilities: {
            tolerance: "±0.01 mm on orifice jet bore",
            moq: "3,000 pcs (jets: 10,000 pcs)",
            monthlyCapacity: "1.8 Million Units",
            leadTime: "12–22 days",
        },
    },

    "brass-pipe-fitting-parts": {
        slug: "brass-pipe-fitting-parts",
        title: "Brass Pipe Fittings, Nipples & Adaptors",
        shortTitle: "Pipe Fitting Parts",
        eyebrow: "Plumbing, Fluid & Pneumatic Systems",
        image: "/categories/Brass Pipe Fitting Parts.webp",
        heroDescription:
            "Heavy-duty brass pipe fittings, threaded adapters, and compression couplings machined from solid hex bar and dense hot forgings. Designed for potable water plumbing, HVAC hydronic heating, pneumatic pipelines, and marine fluid transport.",
        keyAttributes: [
            { label: "Pressure Class", value: "PN 16 / PN 25", hint: "High pressure certified" },
            { label: "Material Grade", value: "CW617N / DZR / Lead-Free", hint: "NSF/potable compliant" },
            { label: "Threads", value: "BSP (G/R) & NPT", hint: "Precision taper & parallel" },
            { label: "Wall Thickness", value: "Heavy-Duty Schedule", hint: "Zero crack under torque" },
        ],
        variants: [
            "Hex Nipples & Reducing Nipples",
            "Reducing Bushings & Thread Adaptors",
            "Hose Barb Connectors & Tailpieces",
            "90° Street Elbows & Equal Elbows",
            "Equal Tees & Reducing Branch Tees",
            "Compression Fittings & Brass Compression Olives",
            "Threaded Pipe Plugs (Hex Head & Countersunk Socket)",
            "Tank Adaptors & Bulkhead Brass Fittings",
        ],
        features: [
            "Thick wall construction provides superior hoop strength against hydraulic surge and overtightening.",
            "Precision CNC cut threads guarantee leak-free seal with PTFE tape, hemp, or anaerobic thread sealants.",
            "Lead-free brass alloys available for strict compliance with global potable drinking water regulations.",
            "Dezincification-resistant (DZR) formulations eliminate white corrosion and stress corrosion cracking.",
            "Uniform hex dimensions allow standard open-end and adjustable wrench gripping without slipping.",
            "100% visual and thread gauge inspection before packing.",
        ],
        specifications: {
            materials: [
                "Forging Brass CW617N (CuZn40Pb2) / EN 12165",
                "Dezincification Resistant Brass (DZR) CW602N / EN 12164",
                "Lead-Free Plumbing Brass (< 0.1% Pb) C27453 / CW724R",
                "Free Cutting Brass IS 319 Gr. 1",
                "Naval Brass C46400 for marine seawater piping",
            ],
            threads: [
                "British Standards: BSPP (Parallel ISO 228-1) and BSPT (Taper ISO 7/1)",
                "American Standards: NPT (National Pipe Taper ANSI B1.20.1) and NPTF",
                "Metric Threads: M10 up to M42 for hydraulic applications",
            ],
            sizes: [
                "Pipe Nominal Sizes: 1/8\", 1/4\", 3/8\", 1/2\", 3/4\", 1\", 1-1/4\", 1-1/2\", 2\", 2-1/2\", 3\"",
                "Hex sizes: 10 mm up to 85 mm across flats (A/F)",
                "Custom reduction and compounding step combinations",
            ],
            finishes: [
                "Natural Bright Brass",
                "Chrome Plated (CP) Mirror Finish for exposed sanitaryware",
                "Electro-Nickel Plating (Satin or Bright)",
                "Shot Blasted Clean Matte Finish",
            ],
            applications: [
                "Residential and commercial potable water plumbing systems",
                "HVAC hydronic heating, cooling coils, and chillers",
                "Compressed air delivery lines and pneumatic automation manifolds",
                "Irrigation manifolds, agricultural sprayers, and booster pumps",
                "Marine yacht bilge piping and sanitary seawater connections",
            ],
            standards: ["EN 1254-2", "ANSI / ASME B16.15", "NSF/ANSI 61 Compliant", "ISO 228-1"],
        },
        tableData: {
            title: "Standard Brass Hex Nipple & Bushing Specifications",
            subtitle: "Working pressure ratings and dimensions for standard BSP/NPT threaded connectors.",
            headers: [
                "Nominal Size",
                "Thread Standard",
                "Hex Across Flats (A/F)",
                "Overall Length",
                "Flow Bore (I/D)",
                "Working Pressure",
                "Burst Pressure",
            ],
            rows: [
                ["1/8\" BSP/NPT", "G 1/8\" / 1/8\"-27 NPT", "11.0 mm", "19.0 mm", "Ø 5.0 mm", "PN 25 (360 PSI)", "> 120 Bar"],
                ["1/4\" BSP/NPT", "G 1/4\" / 1/4\"-18 NPT", "14.0 mm", "24.0 mm", "Ø 7.5 mm", "PN 25 (360 PSI)", "> 110 Bar"],
                ["3/8\" BSP/NPT", "G 3/8\" / 3/8\"-18 NPT", "18.0 mm", "26.0 mm", "Ø 10.5 mm", "PN 25 (360 PSI)", "> 100 Bar"],
                ["1/2\" BSP/NPT", "G 1/2\" / 1/2\"-14 NPT", "22.0 mm", "32.0 mm", "Ø 14.0 mm", "PN 20 (300 PSI)", "> 85 Bar"],
                ["3/4\" BSP/NPT", "G 3/4\" / 3/4\"-14 NPT", "28.0 mm", "36.0 mm", "Ø 19.0 mm", "PN 20 (300 PSI)", "> 80 Bar"],
                ["1\" BSP/NPT", "G 1\" / 1\"-11.5 NPT", "35.0 mm", "42.0 mm", "Ø 24.5 mm", "PN 16 (230 PSI)", "> 65 Bar"],
                ["1-1/4\" BSP/NPT", "G 1-1/4\" / 1-1/4\" NPT", "44.0 mm", "48.0 mm", "Ø 31.0 mm", "PN 16 (230 PSI)", "> 60 Bar"],
                ["1-1/2\" BSP/NPT", "G 1-1/2\" / 1-1/2\" NPT", "50.0 mm", "52.0 mm", "Ø 37.0 mm", "PN 16 (230 PSI)", "> 55 Bar"],
                ["2\" BSP/NPT", "G 2\" / 2\"-11.5 NPT", "62.0 mm", "60.0 mm", "Ø 48.0 mm", "PN 16 (230 PSI)", "> 50 Bar"],
                ["Custom Reducing", "Male/Female Steps", "Per Specification", "Per Drawing", "Optimized Bore", "Engineered", "Tested per Batch"],
            ],
            note: "All fittings pressure hydro-tested. NPT threads follow ANSI B1.20.1; BSP follow ISO 228-1.",
        },
        capabilities: {
            tolerance: "Thread class A / 6g, Hex tolerance ±0.15 mm",
            moq: "1,500 pcs",
            monthlyCapacity: "950,000 Units",
            leadTime: "12–20 days",
        },
    },

    "custom-parts": {
        slug: "custom-parts",
        title: "Custom Brass Parts & OEM Precision Machining",
        shortTitle: "Custom Parts",
        eyebrow: "Drawing-To-Delivery Manufacturing",
        image: "/categories/Custom Parts.webp",
        heroDescription:
            "Custom-engineered precision brass and bronze components manufactured directly from customer 2D drawings, 3D CAD files (.STEP, .IGES), or physical master samples. Full in-house Swiss CNC turning, 4-axis milling, specialized knurling, and sub-assembly.",
        keyAttributes: [
            { label: "Tolerance Class", value: "Down to ±0.005 mm", hint: "Swiss CNC precision" },
            { label: "Drawing Formats", value: ".STEP / .DWG / .PDF", hint: "24-hr DFM review" },
            { label: "Batch Scale", value: "500 to 1,000,000+", hint: "Prototyping to mass runs" },
            { label: "NDA Protection", value: "100% Confidential", hint: "Proprietary IP secured" },
        ],
        variants: [
            "Complex Multi-Axis CNC Turned Shafts & Spindles",
            "Intricate Milled Sensor Bodies & Electronic Enclosures",
            "Custom Knurled Control Knobs & Dials",
            "Precision Bushings, Collars, Spacers & Standoffs",
            "Special Threaded Flanges & Pressure Adaptors",
            "Medical Diagnostic Instrument Fittings",
            "Robotics & Automation Actuator Brass Bushings",
            "Sub-Assembled Brass Components with Steel/Plastic Inserts",
        ],
        features: [
            "Strict manufacturing adherence to customer drawings with zero unauthorized modifications.",
            "Design for Manufacturability (DFM) feedback provided within 24 hours of CAD file submission.",
            "Swiss-type sliding headstock CNC lathes allow micro-machining of long, thin, complex parts.",
            "Equipped with Coordinate Measuring Machines (CMM), optical profile projectors, and surface roughness testers.",
            "Complete material batch traceability with EN 10204 Type 3.1 chemical & mechanical inspection certificates.",
            "Proprietary customer tooling, special knurling form tools, and custom gauges built in-house.",
        ],
        specifications: {
            materials: [
                "Any Customer Specified Brass Grade (IS, BS, DIN, ASTM, EN, JIS)",
                "European Standard CW614N, CW617N, CW602N (DZR), CW508L",
                "Naval Brass C46400, Admiralty Brass C44300",
                "Phosphor Bronze (PB1, PB2, CuSn8) & Aluminium Bronze",
                "Leaded Gunmetal / Red Brass (RG5 / LG2)",
                "Certified Lead-Free & Eco-Brass (< 0.09% Lead)",
            ],
            threads: [
                "All Global Thread Standards: Metric, BSW, BSF, BA, UNC, UNF, UNEF",
                "Pipe Threads: NPT, NPTF, BSPP, BSPT, NPSM, ACME, Trapezoidal",
                "Micro threads from M0.8 and multi-start high-lead custom threads",
            ],
            sizes: [
                "Machining Diameter: Ø 1.0 mm up to Ø 120.0 mm",
                "Lengths: 2.0 mm up to 350.0 mm",
                "Bore tolerances held to IT6 / IT7 class (down to 5 microns)",
            ],
            finishes: [
                "Custom Plating per Specification: Nickel, Tin, Silver, Gold, Chrome, Zinc",
                "Electroless Nickel Plating (ENP) with heat treatment for high hardness (up to 60 HRC)",
                "Black Passivation & Chemical Blackening",
                "Ultrasonic Degreasing and Micro-Deburring",
                "Clear Anti-Oxidation Protective Lacquer",
            ],
            applications: [
                "Aerospace, defense, and avionics communication connectors",
                "Precision medical devices, surgical valves, and optical mounts",
                "Industrial automation, robotics, servo actuators, and encoders",
                "High-end acoustic audio equipment, hi-fi hardware, and musical instruments",
                "Luxury architectural hardware, yachts, and bespoke designer fittings",
            ],
            standards: ["ISO 9001:2015", "PPAP Level 1-3", "RoHS", "REACH", "ASTM / DIN / JIS"],
        },
        tableData: {
            title: "Super Brass In-House OEM Machining Capabilities",
            subtitle: "Equipment, dimensional envelopes, and precision metrics for custom manufacturing.",
            headers: [
                "Machining Process",
                "Workpiece Envelope",
                "Achievable Tolerance",
                "Surface Finish (Ra)",
                "Batch Volume Scale",
                "Typical Parts",
            ],
            rows: [
                ["Swiss-Type CNC Turning", "Ø 1.0 – Ø 32.0 mm", "±0.005 mm (5 µm)", "Ra 0.4 – 0.8 µm", "1,000 – 1,000,000+", "Micro pins, valve needles, probe tips"],
                ["CNC Chucking & Turning", "Ø 10.0 – Ø 120.0 mm", "±0.010 mm (10 µm)", "Ra 0.8 – 1.6 µm", "500 – 100,000+", "Flanges, sensor bodies, couplings"],
                ["4-Axis Vertical Machining (VMC)", "300 x 200 x 150 mm", "±0.015 mm (15 µm)", "Ra 0.8 – 1.6 µm", "200 – 25,000+", "Milled housings, manifold blocks"],
                ["Automatic Traub Lathes", "Ø 3.0 – Ø 45.0 mm", "±0.025 mm (25 µm)", "Ra 1.6 – 3.2 µm", "10,000 – 5,000,000+", "Fasteners, simple inserts, spacers"],
                ["Rotary Transfer Multi-Spindle", "Ø 4.0 – Ø 38.0 mm", "±0.015 mm (15 µm)", "Ra 0.8 – 1.6 µm", "50,000 – 10,000,000+", "High-speed electrical pins & terminals"],
                ["Deep-Hole & Micro Drilling", "Drill Ø 0.35 – Ø 16 mm", "±0.010 mm on bore", "Ra 0.8 µm", "500 – 500,000+", "Gas orifices, spray nozzles, oil feeds"],
                ["Custom Knurling & Rolling", "Diametrical knurls", "Standard DIN 82", "Sharp crests", "5,000 – 2,000,000+", "Threaded inserts, thumb knobs"],
                ["Assembly & Staking", "Multi-component", "100% verified fit", "Clean room packed", "500 – 100,000+", "Sub-assemblies with O-rings/pins"],
            ],
            note: "Send your 2D PDF or 3D STEP/IGES files for an official DFM evaluation and quote within 24 hours.",
        },
        capabilities: {
            tolerance: "±0.005 mm (5 microns)",
            moq: "500 pcs (prototypes from 50 pcs)",
            monthlyCapacity: "3.0 Million Units",
            leadTime: "7–15 days after drawing sign-off",
        },
    },
};
