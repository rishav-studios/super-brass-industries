# Individual Category Pages Implementation Plan — Super Brass Industries

This document outlines the detailed plan, component architecture, roughly drawn wireframe layout, and category-by-category engineering specifications for creating the 8 individual category pages for **Super Brass Industries**, inspired by and vastly improving upon the reference page from [Akshar Brass Industries](https://www.aksharbrass.com/products/brass-insert-for-plastic-moulding/).

---

## 1. Executive Summary & Objective

- **Goal**: Create high-converting, visually stunning individual category pages for all 8 product categories defined in `apps/web/constants/categories.ts`.
- **Reference**: [Akshar Brass Insert for Plastic Moulding](https://www.aksharbrass.com/products/brass-insert-for-plastic-moulding/) — contains product images, variant listings, material specifications, threads, sizes, finishes, applications, and related products.
- **Upgrades for Super Brass Industries**:
  - Replace the outdated 2000s table styling with a sleek, modern industrial OEM layout using glassmorphism, high-contrast engineering darks, and warm brass accents (`#1a2845`, `#f59e0b`, amber-400).
  - Add interactive dimension tables with searchable/filterable metrics (thread, OD, length, knurl, pull-out force).
  - Add breadcrumb navigation with a quick-switch category pill bar.
  - Add an OEM Custom CAD/Drawing RFQ callout banner with 24-hr turnaround SLA.
  - Fully integrate with `next-intl` static locale routing (`/[locale]/categories/[slug]`).

---

## 2. Roughly Drawn Layout (Wireframe)

```text
+---------------------------------------------------------------------------------------------------+
|  TOP PAGE HEADER                                                                                  |
|  ISO 9001:2015 Certified • Jamnagar, Gujarat • Phone: +91 8141100249                              |
+---------------------------------------------------------------------------------------------------+
|  NAVBAR                                                                                           |
|  [Logo]          Home    About    Categories    Contact         [Language]   [Request a Quote ->] |
+---------------------------------------------------------------------------------------------------+
|  BREADCRUMB & QUICK-SWITCH CATEGORY BAR                                                           |
|  Home  >  Categories  >  Brass Insert For Plastic Moulding                                        |
|  +----------------------------------------------------------------------------------------------+ |
|  | [● Brass Insert] [Terminal] [Screw] [Auto Parts] [Pin] [Gas Parts] [Pipe Fittings] [Custom]  | |
|  +----------------------------------------------------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  SPLIT HERO SHOWCASE SECTION (2-Column Responsive Layout)                                         |
|                                                                                                   |
|  +---------------------------------------+  +---------------------------------------------------+ |
|  | [LEFT: CATEGORY VISUAL SHOWCASE]      |  | [RIGHT: ENGINEERING SPEC OVERVIEW & CTAs]         | |
|  |                                       |  |                                                   | |
|  | +-----------------------------------+ |  |  [EYEBROW] PRECISION CNC MACHINED COMPONENTS      | |
|  | |                                   | |  |  # Brass Insert For Plastic Moulding              | |
|  | |   [ High-Resolution WebP Image ]  | |  |                                                   | |
|  | |   - Interactive Zoom / Tilt       | |  |  High-tensile threaded brass inserts engineered   | |
|  | |   - Warm Brass Lighting Glow      | |  |  for thermoplastic, thermoset, and wood moulding. | |
|  | |                                   | |  |                                                   | |
|  | |   [Badge: ±0.005mm Tolerance]     | |  |  KEY ATTRIBUTES GRID:                             | |
|  | |   [Badge: RoHS / REACH Compliant] | |  |  +-------------------+  +-----------------------+ | |
|  | +-----------------------------------+ |  |  | Material Grades   |  | Thread Standards      | | |
|  |                                       |  |  | IS 319 / CW614N   |  | ISO Metric / UNC / BA | | |
|  | Quick Action Bar:                     |  |  +-------------------+  +-----------------------+ | |
|  | [📄 Download Specs PDF] [📐 Request 3D]|  |  | Knurl Patterns    |  | Tolerance Class       | | |
|  |                                       |  |  | Diamond / Straight|  | 6H / 6g (±0.005 mm)   | | |
|  | Trust Strip:                          |  |  +-------------------+  +-----------------------+ | |
|  | 🛡️ 100% Gauge Inspected              |  |                                                   | |
|  | 🏭 Direct Jamnagar Factory OEM       |  |  AVAILABLE TYPES / VARIANTS:                       | |
|  |                                       |  |  [Round Knurled] [Hexagonal] [Square] [Blind/Thru]| |
|  |                                       |  |                                                   | |
|  |                                       |  |  [⚡ REQUEST AN INSTANT QUOTE]  [📞 CALL SALES]   | |
|  +---------------------------------------+  +---------------------------------------------------+ |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  TECHNICAL SPECIFICATIONS & TABULAR DETAILS (Deep-Dive Tabbed / Accordion Section)                |
|                                                                                                   |
|  [TAB 1: Technical Specs]   [TAB 2: Dimensional Table]   [TAB 3: Finishes]   [TAB 4: Quality & QA]|
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | TAB 1: TECHNICAL SPECIFICATION MATRIX (Aksharbrass-style detailed specs)                    |  |
|  |  - Material Specifications: Free Cutting Brass IS 319 Type I/II, BS 249, CW614N (CuZn39Pb3)   |  |
|  |  - Size Range: M1.6 to M24 / 1/8" to 1" / Custom drawing lengths 3mm to 65mm                |  |
|  |  - Threads: ISO Metric MM, BSW, UNC, UNF, BA, NPT, custom pitch                             |  |
|  |  - Finish: Natural Brass, Nickel Plated (3-5µm), Tin, Chrome, Silver                        |  |
|  |  - Typical Application: Plastic casings, automotive clusters, instrumentation, connectors   |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
|  +---------------------------------------------------------------------------------------------+  |
|  | TAB 2: INTERACTIVE ENGINEERING DIMENSIONAL TABLE                                            |  |
|  | +-------------+----------+-----------+------------+--------------------+------------------+ |  |
|  | | Thread Size | O.D. (mm)| Length(mm)| Knurl Type | Pull-out Force (N) | Rec. Hole (mm)   | |  |
|  | +-------------+----------+-----------+------------+--------------------+------------------+ |  |
|  | | M2.0 x 0.40 | 3.20 mm  | 4.00 mm   | Diamond    | > 420 N            | 2.90 ± 0.05 mm   | |  |
|  | | M2.5 x 0.45 | 3.60 mm  | 5.00 mm   | Diamond    | > 580 N            | 3.30 ± 0.05 mm   | |  |
|  | | M3.0 x 0.50 | 4.40 mm  | 5.80 mm   | Straight   | > 820 N            | 4.00 ± 0.05 mm   | |  |
|  | | M4.0 x 0.70 | 5.80 mm  | 7.50 mm   | Cross/Hex  | > 1,350 N          | 5.30 ± 0.05 mm   | |  |
|  | | M5.0 x 0.80 | 7.00 mm  | 9.50 mm   | Helical    | > 2,100 N          | 6.40 ± 0.05 mm   | |  |
|  | | M6.0 x 1.00 | 8.50 mm  | 12.00 mm  | Diamond    | > 3,400 N          | 7.80 ± 0.05 mm   | |  |
|  | | Custom Size | Any O.D. | Any Length| As per DWG | Tested per ASTM    | Custom Mould Pin | |  |
|  | +-------------+----------+-----------+------------+--------------------+------------------+ |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  OEM CUSTOM DRAWING & DFM CALLOUT BANNER                                                          |
|  +---------------------------------------------------------------------------------------------+  |
|  |  📐 "Need Non-Standard Dimensions or Custom Tolerances?"                                     |  |
|  |  We manufacture custom components directly from .STEP, .DWG, or sample parts.               |  |
|  |  24-Hour DFM & Quotation Turnaround • 100% Confidential NDA • Batch volumes 500 to 1M+ pcs |  |
|  |  [ Upload Your CAD / Drawing -> ]                                                           |  |
|  +---------------------------------------------------------------------------------------------+  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  EXPLORE OTHER CATEGORIES (Interactive 7-Card Grid with Hover Elevation)                          |
|  +---------------+  +---------------+  +---------------+  +---------------+                       |
|  | [Terminal]    |  | [Screw]       |  | [Auto Parts]  |  | [Electrical]  |                       |
|  +---------------+  +---------------+  +---------------+  +---------------+                       |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
|  BOTTOM GLOBAL CTA SECTION & FOOTER                                                               |
+---------------------------------------------------------------------------------------------------+
```

---

## 3. Comparison: Akshar Brass vs. Proposed Super Brass Industries Layout

| Feature | Akshar Brass Reference | Super Brass Industries Design |
|---|---|---|
| **Layout Style** | Dated WordPress single column with low-res image float | Modern dual-column industrial showcase with glassmorphism & brass accents |
| **Data Presentation** | Unformatted unordered text lists | Structured **Specification Matrix Cards** + **Sortable/Responsive Technical Data Tables** |
| **Category Navigation** | Requires opening menu dropdown every time | Instant sticky/top **Category Switcher Pill Bar** to jump across all 8 categories in 1 click |
| **Engineering Utility** | Basic text sizes ("M2 upwards") | Exact dimensional parameters (Thread pitch, OD, length, knurl, pull-out force, hole drill size) |
| **Direct RFQ / Action** | Generic contact form pop-up | Pre-filled Quote CTA targeting the specific component + Drawing upload banner |
| **Internationalization** | Google Translate widget script | High-performance static routing via `next-intl` (`/categories/[slug]`, `/de/categories/[slug]`, etc.) |

---

## 4. The 8 Categories & Their Tailored Engineering Data

Each category is populated with accurate, industrial-grade brass manufacturing data:

### 1. Brass Insert (`brass-insert`)
- **Title**: Brass Insert For Plastic Moulding & Fasteners
- **Variants**: Round Knurled Inserts, Hexagonal Inserts, Square Inserts, Blind & Through Inserts, Ultrasonic / Heat Staking Inserts, Press-in Inserts.
- **Knurling Available**: Diamond, Straight, Helical, Unidirectional.
- **Material Grades**: Free Cutting Brass IS 319 Type (I)/(II), BS 249 Type (I), CW614N (CuZn39Pb3), CuZn40Pb2, RoHS Compliant Lead-Free Brass.
- **Threads**: ISO Metric (M1.6 to M24), BA, BSW (inches), UNC, UNF, custom pitches.
- **Sizes**: Begins from M1.6 / M2 up to M30, lengths 3mm to 50mm, or custom drawings.
- **Finishes**: Natural, Nickel Plated (3-5 microns), Tin Plated, Chrome Plated, Passivated.
- **Applications**: Injection moulding, automotive instrument housings, electrical enclosures, telecommunications cases, consumer electronics.
- **Table Columns**: Thread Size, Outside Diameter (OD), Length, Knurl Pattern, Pull-out Resistance (N), Recommended Hole Size.

### 2. Brass Electrical Terminal (`brass-electric-terminal`)
- **Title**: Brass Electrical Terminals & Connector Blocks
- **Variants**: Neutral Links, Earth Bars, PCB Screw Terminals, Disconnect Terminals, Battery Lug Terminals, Heavy Duty Terminal Blocks.
- **Material Grades**: High Conductivity Brass CW617N, IS 319 Type I/II, CDA 360, C36000.
- **Threads**: Metric M2.5 to M16, BSW, UNC, fine thread pitches, burr-free tapped holes.
- **Sizes**: 2-way up to 60-way terminal bars; cross sections 6x9mm, 9x12mm, custom extrusion bars.
- **Finishes**: Electro-Tin Plated (for solderability & corrosion resistance), Nickel Plated, Silver Plated, Natural.
- **Applications**: Switchgear assemblies, control panels, circuit breakers (MCBs/MCCBs), power distribution boards, solar inverters.
- **Table Columns**: Ampere Rating, Pole / Way Count, Bar Dimensions (H x W mm), Screw Thread, Wire Range (AWG/mm²).

### 3. Brass Screw (`brass-screw`)
- **Title**: Brass Precision Screws & Fasteners
- **Variants**: Slotted Screws, Phillips / Cross Recessed, Torx Drive, Hex Head Bolts, Grub / Set Screws, Knurled Thumb Screws, DIN 933, DIN 84, DIN 7985.
- **Material Grades**: Extruded Brass Rods BS 249, CuZn37, IS 319 Gr. 1, Naval Brass for marine anti-corrosion.
- **Threads**: ISO Metric (M1.2 to M20), BSW, BSF, UNC, UNF, BA (0 to 16 BA).
- **Sizes**: Diameter 1.2 mm to 20 mm, Length 3 mm to 150 mm.
- **Finishes**: Degreased Natural, Nickel Plated, Antique Brass, Tin Plated, Gold Flash.
- **Applications**: Electrical switches & sockets, precision meters, decorative lighting, marine hardware, medical instruments.
- **Table Columns**: Screw Type, DIN Standard, Thread Size, Length Range, Head Diameter, Drive Style.

### 4. Brass Auto Parts (`brass-auto-parts`)
- **Title**: Brass Automotive Precision Turned Components
- **Variants**: Fuel Injection Nozzles, Air Brake Fittings, Temperature & Pressure Sensor Housings, Radiator Drain Petcocks, Synchronizer Rings.
- **Material Grades**: High Tensile Brass CW602N (DZR), Forging Brass CW617N, IS 8726, C37700.
- **Threads**: NPT, NPTF, BSPT, BSPP, Metric Fine (M10x1, M12x1.25, M14x1.5).
- **Sizes**: Precision turned and hot forged parts from 4 mm to 75 mm diameter.
- **Finishes**: Natural, Electroless Nickel Plating, Yellow Zinc, Cadmium-Free passivation.
- **Applications**: Commercial vehicles, passenger cars, two-wheelers, tractors, heavy earthmoving fuel & hydraulic systems.
- **Table Columns**: Component Name, Critical Tolerance (±mm), Working Pressure Rating, Thread/Port Spec, Automotive System.

### 5. Brass Electrical Pin (`brass-electrical-pin`)
- **Title**: Brass Electrical Pins & Plug Contacts
- **Variants**: Solid & Hollow Plug Pins, Socket Contact Sleeves, Industrial Euro / Schuko / UK Pins, EV Charging Connector Pins.
- **Material Grades**: High Conductivity Free Cutting Brass IS 319 / CW614N, Phosphor Bronze contacts, CDA 360.
- **Standards**: BS 1363 (UK 3-pin), CEE 7/4 (Schuko), IS 1293 (India), NEMA 5-15 (US), IEC 60309.
- **Sizes**: Diameters 2.0 mm to 12.0 mm, lengths 15 mm to 80 mm, solid or crimp-ready wire pins.
- **Finishes**: Nickel Plated (3-5µm), Tin Plated, Silver Plated, Gold Flash for low-voltage signal pins.
- **Applications**: Power plugs, surge protectors, industrial power receptacles, EV charging cables, appliance connectors.
- **Table Columns**: Pin Type, Pin Diameter (mm), Overall Length, Current Capacity (5A/13A/16A/32A), Standard Compliance.

### 6. Brass Gas Parts (`brass-gas-parts`)
- **Title**: Brass Gas Valves, Burner Jets & Fittings
- **Variants**: LPG / CNG Cylinder Valves, Gas Stove Burner Jets / Nozzles, Flare Fittings & Unions, Thermocouple Gas Adapters, Regulators.
- **Material Grades**: Forging Brass IS 6912 FLB, CW617N, DZR Brass CW602N, CDA 377.
- **Threads**: NPT, BSPT (Gas standard ISO 7/1), Left-hand threads for cylinders (POL valve threads).
- **Sizes**: 1/8" to 1-1/2" NPT/BSP; orifices drilled from 0.35 mm up to 4.0 mm with precision micro-drilling.
- **Finishes**: Natural Forged & Shot-blasted, Nickel Plated, Bright Dipped Brass.
- **Applications**: Domestic LPG gas appliances, industrial gas pipelines, CNG automotive kits, gas meters, outdoor grills.
- **Table Columns**: Fitting Type, Inlet/Outlet Thread, Orifice Jet Diameter, Test Pressure (bar), Applicable Gas Type.

### 7. Brass Pipe Fitting Parts (`brass-pipe-fitting-parts`)
- **Title**: Brass Pipe Fittings, Nipples & Adaptors
- **Variants**: Hex Nipples, Reducing Bushings, Hose Barbs, 90° & 45° Elbows, Equal & Reducing Tees, Compression Couplers & Olives.
- **Material Grades**: DZR Brass CW602N, Lead-Free Brass (C27453 / CW724R), CW617N, IS 319 Gr. 1.
- **Threads**: BSP (British Standard Pipe Parallel/Taper), NPT (National Pipe Taper), Metric.
- **Sizes**: 1/8" BSP/NPT up to 3" BSP/NPT; custom lengths and hex bar sizes up to 65 mm A/F.
- **Finishes**: Natural Brass, Chrome Plated (CP for sanitaryware), Nickel Plated, Shot Blasted Matte.
- **Applications**: Potable water systems, sanitary plumbing, hydronic heating, HVAC chillers, marine piping.
- **Table Columns**: Pipe Size, Hex A/F (mm), Thread Standard (BSP/NPT), Working Pressure (PN 16/25), Flow Bore (mm).

### 8. Custom Parts (`custom-parts`)
- **Title**: Custom Turned & Milled Brass Components
- **Variants**: Multi-axis CNC Turned Shafts, Bushings & Spacers, Sensor Bodies, Intricate Milling Parts, Knurled Knobs, Special Flanges.
- **Material Grades**: Any customer-specified brass/bronze grade (CW614N, CW602N, Naval Brass C46400, Phosphor Bronze PB1/PB2).
- **Tolerances**: Swiss CNC turning tolerance down to ±0.005 mm (5 microns), Ra 0.4 µm surface roughness, Class 6g/6H threads.
- **Capabilities**: Prototyping (50–500 pcs) to mass production (100,000+ pcs/month), in-house tooling and custom knurling wheels.
- **Finishes**: Custom plating (Gold, Silver, Electroless Nickel, Tin, Black Oxide, Passivation).
- **Applications**: Aerospace, defense, medical instrumentation, telecommunications, luxury architectural hardware, custom automation.
- **Table Columns**: Process Capability, Workpiece Diameter (Ø1mm–Ø100mm), Achievable Tolerances, Batch MOQ, Accepted CAD Formats (.step, .dwg, .pdf).

---

## 5. File Architecture & Implementation Steps

```
apps/web/
├── constants/
│   ├── categories.ts                 ← Existing base list of 8 categories
│   └── category-details.ts           ← [NEW] Comprehensive engineering specs & dimensional tables for all 8 categories
├── components/pages/category/
│   ├── CategoryBreadcrumbs.tsx       ← [NEW] Breadcrumbs + Quick Category Switcher pill bar
│   ├── CategoryHeroShowcase.tsx      ← [NEW] Dual-column hero: Image showcase (left) + Specs & CTA (right)
│   ├── CategorySpecsMatrix.tsx       ← [NEW] Structured technical cards (Materials, Threads, Sizes, Coatings, Apps)
│   ├── CategoryDataTable.tsx         ← [NEW] Interactive, responsive dimensional engineering table
│   ├── CategoryCustomOemBanner.tsx   ← [NEW] Drawing upload & 24h quote SLA callout
│   └── CategoryRelatedGrid.tsx       ← [NEW] Explore other categories cards
├── app/[locale]/
│   └── categories/
│       ├── page.tsx                  ← [NEW] Categories overview / catalog listing
│       └── [slug]/
│           └── page.tsx              ← [NEW] Dynamic individual category page (with generateStaticParams)
```

---

## 6. Verification & Quality Assurance Plan

1. **Build & Route Verification**:
   - Verify all 8 URLs (`/categories/brass-insert`, `/categories/brass-electric-terminal`, `/categories/brass-screw`, `/categories/brass-auto-parts`, `/categories/brass-electrical-pin`, `/categories/brass-gas-parts`, `/categories/brass-pipe-fitting-parts`, `/categories/custom-parts`) resolve and render properly without 404s.
2. **Homepage Link Synchronisation**:
   - Update `HomeCategories.tsx` link target from `/components/${cat.slug}` to `/categories/${cat.slug}` so cards navigate seamlessly.
3. **Responsive Visual Testing**:
   - Test table horizontal scrolling on mobile viewports so data doesn't clip.
   - Verify image zoom and badge overlays on both desktop and mobile.
4. **Interactive Actions**:
   - Test "Request Quote" buttons ensure they pass the category title to `/quote?category=...`.
