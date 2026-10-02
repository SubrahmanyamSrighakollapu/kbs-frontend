export interface CivilServiceDetail {
  slug: string;
  shortName: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  overview: string[];
  accent: string;
  keywords: string[];
  deliverables: { title: string; description: string }[];
  workflow: { number: string; title: string; description: string }[];
  coordination: string[];
  projectTypes: string[];
  partners: string[];
  projectInputs: string[];
  qualityPriorities: { title: string; description: string }[];
}

export interface CivilServiceImage {
  src: string;
  alt: string;
  caption: string;
}

export const tiltUpProjectImages: CivilServiceImage[] = [
  {
    src: "/Tiltup_Page_02_300DPI.png",
    alt: "Tilt-Up panel plan layout and grid coordination drawing",
    caption: "Partial panel plan layout with grid lines and dimensions",
  },
  {
    src: "/Tiltup_Page_06_300DPI.png",
    alt: "Tilt-Up panel P2 elevation with embed details and dimensions",
    caption: "Panel P2 elevation, dimensions, openings, and embeds",
  },
  {
    src: "/Tiltup_Page_07_300DPI.png",
    alt: "Tilt-Up panel P11A elevation drawing with embed details",
    caption: "Panel P11A elevation and embed coordination",
  },
  {
    src: "/Tiltup_Page_08_300DPI.png",
    alt: "Tilt-Up panel P13 elevation drawing with embed layout",
    caption: "Panel P13 elevation and embed coordination",
  },
  {
    src: "/Tiltup_Page_09_300DPI.png",
    alt: "Tilt-Up panel P17A elevation drawing with embed details",
    caption: "Panel P17A elevation and embed coordination",
  },
  {
    src: "/Tiltup_Page_10_300DPI.png",
    alt: "Tilt-Up panel P20 elevation drawing with pilaster and doorway",
    caption: "Panel P20 elevation, pilaster, doorway, and embeds",
  },
  {
    src: "/Tiltup_Page_11_300DPI.png",
    alt: "Tilt-Up panel P24C elevation drawing with opening and embed details",
    caption: "Panel P24C elevation, opening, and embed coordination",
  },
];

export const selfStorageProjectImages: CivilServiceImage[] = [
  {
    src: "/kbs-light-gauge-page-01.jpg",
    alt: "Light gauge steel framing overview for self-storage building",
    caption: "Self-storage structural framing & layout overview (Sheet 1)",
  },
  {
    src: "/kbs-light-gauge-page-02.jpg",
    alt: "Light gauge framing plan and grid layout details",
    caption: "Framing plan layout with grid dimensions (Sheet 2)",
  },
  {
    src: "/kbs-light-gauge-page-03.jpg",
    alt: "Self-storage unit partition wall and corridor framing details",
    caption: "Partition wall & corridor framing details (Sheet 3)",
  },
  {
    src: "/kbs-light-gauge-page-04.jpg",
    alt: "Light gauge roof framing and truss layout details",
    caption: "Roof framing & slope structural details (Sheet 4)",
  },
  {
    src: "/kbs-light-gauge-page-05.jpg",
    alt: "Self-storage wall elevation and roll-up door opening details",
    caption: "Wall elevations & door opening framing (Sheet 5)",
  },
  {
    src: "/kbs-light-gauge-page-06.jpg",
    alt: "Light gauge structural connection and fastener details",
    caption: "Structural connection & fastener details (Sheet 6)",
  },
  {
    src: "/kbs-light-gauge-page-07.jpg",
    alt: "Self-storage multi-story mezzanine & floor framing details",
    caption: "Mezzanine & floor framing details (Sheet 7)",
  },
  {
    src: "/kbs-light-gauge-page-08.jpg",
    alt: "Light gauge steel column base and foundation interface details",
    caption: "Column base & foundation interface details (Sheet 8)",
  },
  {
    src: "/kbs-light-gauge-page-09.jpg",
    alt: "Self-storage canopy and exterior wall framing details",
    caption: "Exterior wall & canopy framing details (Sheet 9)",
  },
  {
    src: "/kbs-light-gauge-page-10.jpg",
    alt: "Light gauge component schedule and material bill",
    caption: "Framing component schedule & bill of materials (Sheet 10)",
  },
];

export const civilServiceDetails: CivilServiceDetail[] = [
  {
    slug: "precast-concrete-detailing",
    shortName: "Precast Detailing",
    name: "Precast Concrete Detailing Services",
    eyebrow: "PRECAST CONCRETE DETAILING",
    tagline: "Production-ready precast drawings developed for coordination, manufacturing, and efficient erection.",
    description:
      "KBS Civil Engineering Services develops coordinated precast concrete shop drawings, element details, reinforcement documentation, connection details, and erection information for complex building projects.",
    overview: [
      "Precast construction depends on accurate information moving clearly from the design team to the plant and then to the site. Our detailing workflow translates structural and architectural requirements into organized documentation that supports manufacturing, handling, coordination, and installation.",
      "We review grids, levels, member geometry, openings, reinforcement, embeds, connections, and interface conditions as one coordinated system. The objective is to identify inconsistencies early and provide practical drawings that project teams can review, approve, produce, and erect with confidence.",
    ],
    accent: "#FF6B35",
    keywords: [
      "precast concrete detailing services",
      "precast shop drawings",
      "precast panel detailing",
      "precast reinforcement detailing",
      "precast erection drawings",
      "precast BIM services",
      "precast detailing company",
    ],
    deliverables: [
      { title: "General Arrangement Drawings", description: "Coordinated layouts showing grids, levels, member locations, references, and overall precast relationships." },
      { title: "Precast Shop Drawings", description: "Production-focused drawings with dimensions, profiles, openings, finishes, reinforcement, embeds, and required notes." },
      { title: "Panel & Element Details", description: "Individual documentation for wall panels, slabs, beams, columns, stairs, and other project-specific precast elements." },
      { title: "Reinforcement Detailing", description: "Clear reinforcement layouts and schedules coordinated with element geometry, connections, openings, and production needs." },
      { title: "Embed & Insert Coordination", description: "Location and identification of cast-in items, plates, inserts, sleeves, anchors, and coordinated interface requirements." },
      { title: "Connection Details", description: "Documentation of element-to-element and element-to-structure interfaces based on the approved engineering information." },
      { title: "Opening & Penetration Review", description: "Coordination of doors, windows, service penetrations, block-outs, recesses, and architectural features." },
      { title: "Erection Drawings", description: "Organized plans and elevations that help site teams understand element identification, location, and erection sequence." },
      { title: "BIM-Based Coordination", description: "Model-led review that improves visibility of geometry, interfaces, clearances, and potential drawing conflicts." },
      { title: "Revision & Project Support", description: "Controlled updates responding to review comments, design changes, RFIs, and evolving project information." },
    ],
    workflow: [
      { number: "01", title: "Project Setup", description: "Review structural, architectural, specification, and project-standard information before establishing grids, levels, and drawing controls." },
      { number: "02", title: "Model & Coordinate", description: "Develop coordinated geometry and review element interfaces, openings, embeds, connections, and related project requirements." },
      { number: "03", title: "Detail & Document", description: "Prepare element drawings, reinforcement, schedules, erection information, and production-ready documentation." },
      { number: "04", title: "Review & Support", description: "Complete internal quality checks, incorporate review comments, manage revisions, and support coordination through delivery." },
    ],
    coordination: [
      "Structural grids, levels, member geometry, and design intent",
      "Architectural elevations, openings, finishes, reveals, and interface conditions",
      "Embedded items, cast-in components, plates, inserts, sleeves, and block-outs",
      "Reinforcement congestion, edge distances, connection zones, and production clearances",
      "Element identification, handling requirements, erection information, and drawing references",
      "Design revisions, review comments, RFIs, and drawing-package consistency",
    ],
    projectTypes: ["Commercial buildings", "Industrial facilities", "Warehouses and logistics facilities", "Institutional projects", "Residential developments", "Infrastructure components"],
    partners: ["Precast manufacturers", "Structural engineers", "General contractors", "Developers", "Architects", "Erection and project teams"],
    projectInputs: ["Architectural drawings", "Structural drawings and design information", "Project specifications", "Precast design criteria", "Connection and embed information", "Client drafting standards and deliverable requirements"],
    qualityPriorities: [
      { title: "Dimensional Accuracy", description: "Consistent geometry, levels, openings, references, and element dimensions across the drawing package." },
      { title: "Production Clarity", description: "Organized information that is practical for review and precast manufacturing workflows." },
      { title: "Constructability", description: "Early consideration of connections, access, interfaces, tolerances, handling, and erection requirements." },
    ],
  },
  {
    slug: "tilt-up-detailing",
    shortName: "Tilt-Up Detailing",
    name: "Tilt-Up Detailing Services",
    eyebrow: "TILT-UP PANEL DETAILING",
    tagline: "Comprehensive Tilt-Up Detailing Services",
    description:
      "We provide accurate and construction-ready Tilt-Up Shop Drawings and Embed Panel Detailing Services tailored to meet contractor and engineer requirements.",
    overview: [
      "Tilt-up projects bring structural, architectural, fabrication, and field requirements together within every panel. Accurate panel geometry and coordinated cast-in information are essential because discrepancies discovered after casting can affect erection and downstream construction activities.",
      "Our team develops panel-focused drawing packages from the approved design information, coordinating elevations, dimensions, openings, reinforcing, embeds, connections, reveals, and interface conditions. Each package is structured to make review efficient and field information clear.",
    ],
    accent: "#A52BFF",
    keywords: ["tilt-up detailing services", "tilt-up panel shop drawings", "tilt wall detailing", "embed panel detailing", "lifting and bracing design", "tilt-up construction drawings", "tilt panel detailing company"],
    deliverables: [
      { title: "Complete Panel Layout Drawings", description: "Complete panel layout drawings based on approved architectural and structural plans." },
      { title: "Casting Layout Plan", description: "Detailed casting layout plan for site layout and panel setup coordination." },
      { title: "Detailed Embed Layout & Placement", description: "Detailed embed layout and placement drawings for each panel." },
      { title: "Individual Panel Sheets", description: "Individual panel sheets with dimensions, openings, and reinforcement references." },
      { title: "Comprehensive Embed Lists", description: "Comprehensive embed lists covering plates, angles, anchors, sizes & quantities." },
      { title: "Connection & Bracing Details Coordination", description: "Connection and bracing details coordination, including Lifting & Bracing design." },
      { title: "Floor Plan Layout References", description: "Floor plan layout references for accurate site positioning." },
      { title: "Clash-Free Deliverables", description: "Clash-free, fabrication-ready deliverables tailored to contractor and engineer requirements." },
    ],
    workflow: [
      { number: "01", title: "Panel Study", description: "Establish panel breaks, geometry, grids, levels, architectural features, and project drawing standards." },
      { number: "02", title: "Interface Coordination", description: "Coordinate openings, reinforcement, embeds, connections, adjacent construction, and panel-to-roof or foundation interfaces." },
      { number: "03", title: "Drawing Development", description: "Produce panel elevations, shop drawings, layouts, schedules, and coordinated construction information." },
      { number: "04", title: "Quality & Revisions", description: "Check dimensions and package consistency, then incorporate review feedback through controlled drawing revisions." },
    ],
    coordination: ["Panel joint locations and architectural elevations", "Door, window, louver, and service openings", "Reinforcement around edges, openings, embeds, and connection zones", "Cast-in plates, inserts, anchors, block-outs, and recesses", "Foundation, roof, steel, canopy, and adjacent construction interfaces", "Panel marks, drawing references, review comments, and revision consistency"],
    projectTypes: ["Warehouses", "Distribution centers", "Industrial facilities", "Commercial buildings", "Retail developments", "Institutional facilities"],
    partners: ["Tilt-up contractors", "Structural engineers", "General contractors", "Panel and embed suppliers", "Architects", "Field erection teams"],
    projectInputs: ["Architectural plans and elevations", "Structural drawings", "Panel design and reinforcing criteria", "Embed and connection details", "Door and opening schedules", "Project specifications and drafting standards"],
    qualityPriorities: [
      { title: "Panel Coordination", description: "Consistent panel geometry, joints, dimensions, openings, and interfaces across every view." },
      { title: "Embed Accuracy", description: "Clear cast-in component locations coordinated with reinforcement and adjoining construction." },
      { title: "Field Usability", description: "Readable drawings arranged to support layout, forming, casting, review, and erection activities." },
    ],
  },
  {
    slug: "self-storage-detailing",
    shortName: "Self-Storage Detailing",
    name: "Mini & Self-Storage Detailing Services",
    eyebrow: "MINI & SELF-STORAGE DETAILING",
    tagline: "Structured drawing packages for efficient, repeatable, and scalable storage developments.",
    description:
      "KBS delivers coordinated structural shop drawings, framing layouts, fabrication details, BIM models, and project support for single-building and multi-building self-storage developments.",
    overview: [
      "Self-storage construction combines highly repeatable building components with project-specific site conditions, unit layouts, structural systems, access requirements, and architectural interfaces. Well-organized drawings help fabricators and construction teams manage that repetition without losing project-specific accuracy.",
      "Our detailing team develops coordinated documentation for framing, walls, roofs, connections, openings, and related building components. Packages are organized to support fabrication and installation while remaining scalable across phased sites and multi-building developments.",
    ],
    accent: "#168BFF",
    keywords: ["self-storage detailing services", "mini storage shop drawings", "self-storage structural detailing", "storage building fabrication drawings", "self-storage BIM modeling", "metal storage building detailing", "multi-building storage detailing"],
    deliverables: [
      { title: "Structural Shop Drawings", description: "Coordinated drawings showing the structural and building-component information required for the agreed project scope." },
      { title: "Framing Layouts", description: "Organized wall, roof, floor, corridor, and project-specific framing information with clear references." },
      { title: "Fabrication Drawings", description: "Detailed component information developed to support repeatable and accurate fabrication workflows." },
      { title: "Wall Framing Details", description: "Documentation of wall systems, partitions, jamb conditions, intersections, and opening interfaces." },
      { title: "Roof Framing Details", description: "Coordinated roof framing, slopes, edges, transitions, openings, and supporting component relationships." },
      { title: "Connection Details", description: "Project connection information documented from the supplied engineering and manufacturer requirements." },
      { title: "Opening Coordination", description: "Coordination of access points, doors, stairs, corridors, equipment zones, and service penetrations." },
      { title: "CAD Drawing Packages", description: "Consistent plans, elevations, sections, details, marks, notes, and references for project delivery." },
      { title: "BIM Models", description: "Coordinated models that improve visibility of building relationships, repetitive elements, and interface conditions." },
      { title: "Multi-Building Support", description: "Drawing controls and documentation structured for phased sites and developments containing multiple buildings." },
    ],
    workflow: [
      { number: "01", title: "Scope & Standards", description: "Review the building system, site arrangement, project phases, unit planning, structural information, and client standards." },
      { number: "02", title: "Layout Coordination", description: "Coordinate grids, levels, framing, units, openings, corridors, access requirements, and building interfaces." },
      { number: "03", title: "Detailing & Packages", description: "Develop shop and fabrication drawings, framing details, models, schedules, and cross-referenced documentation." },
      { number: "04", title: "Consistency Review", description: "Check repetitive conditions, building-to-building references, dimensions, marks, revisions, and package completeness." },
    ],
    coordination: ["Site plans, building identification, phases, grids, and levels", "Unit layouts, corridors, doors, access, and circulation requirements", "Wall, roof, floor, stair, and project-specific framing interfaces", "Openings, equipment zones, service penetrations, and architectural features", "Repeated component marks, details, schedules, and fabrication references", "Multi-building consistency, project revisions, and release-package controls"],
    projectTypes: ["Single-storey self-storage", "Multi-storey self-storage", "Mini-storage facilities", "Multi-building developments", "Phased storage projects", "Storage expansions and additions"],
    partners: ["Self-storage developers", "Building-system suppliers", "Structural engineers", "Fabricators", "General contractors", "Installation teams"],
    projectInputs: ["Site and architectural drawings", "Structural design information", "Unit and door layouts", "Building-system details", "Manufacturer or fabricator standards", "Project phasing and deliverable requirements"],
    qualityPriorities: [
      { title: "Repeatable Accuracy", description: "Consistent details, marks, dimensions, and component references across similar building conditions." },
      { title: "Scalable Documentation", description: "Drawing structures that remain clear across large sites, multiple buildings, and phased releases." },
      { title: "Interface Control", description: "Careful coordination where framing, access, openings, stairs, roofs, and adjacent systems meet." },
    ],
  },
  {
    slug: "pemb-detailing",
    shortName: "PEMB Detailing",
    name: "PEMB Design & Detailing Services",
    eyebrow: "PRE-ENGINEERED METAL BUILDINGS",
    tagline: "Coordinated metal-building documentation focused on structural efficiency, fabrication, and erection.",
    description:
      "KBS provides modeling and detailing support for pre-engineered metal building systems, including primary and secondary framing, connections, anchor bolt plans, fabrication drawings, and erection packages.",
    overview: [
      "Pre-engineered metal buildings bring primary framing, secondary members, roof and wall systems, connections, and accessories together as an integrated structural package. Reliable documentation is essential for coordinating these systems from engineering through fabrication and erection.",
      "Our team develops structured PEMB models and drawing packages based on the approved project information. We focus on member relationships, connection information, openings, anchor locations, cladding interfaces, and clear cross-referencing between general arrangements, shop details, and erection documentation.",
    ],
    accent: "#FF9F1C",
    keywords: ["PEMB detailing services", "pre-engineered metal building detailing", "PEMB shop drawings", "metal building fabrication drawings", "PEMB erection drawings", "anchor bolt layout drawings", "steel building detailing services"],
    deliverables: [
      { title: "Structural Modeling", description: "Coordinated representation of the metal-building system, geometry, member relationships, and project interfaces." },
      { title: "General Arrangement Drawings", description: "Plans, elevations, sections, grids, levels, slopes, building dimensions, and framing references." },
      { title: "Primary Framing Details", description: "Documentation for rigid frames, columns, rafters, end-wall frames, and related primary structural members." },
      { title: "Secondary Framing Details", description: "Coordinated information for purlins, girts, eave struts, bracing, and other secondary components." },
      { title: "Roof & Wall Framing", description: "Layouts and details covering roof slopes, wall lines, transitions, openings, edges, and system interfaces." },
      { title: "Connection Detailing", description: "Project-specific connection documentation based on the supplied engineering and design information." },
      { title: "Anchor Bolt Layouts", description: "Coordinated anchor locations, grids, dimensions, orientations, and base references for foundation interfaces." },
      { title: "Fabrication Drawings", description: "Member and component drawings organized for practical review and fabrication processes." },
      { title: "Erection Drawings", description: "Plans, elevations, marks, and references that communicate building assembly and member locations." },
      { title: "BIM & CAD Documentation", description: "Consistent model and drawing outputs supporting coordination, review, fabrication, and project delivery." },
    ],
    workflow: [
      { number: "01", title: "Building Definition", description: "Review geometry, design information, loading criteria supplied by the engineer, openings, accessories, and project standards." },
      { number: "02", title: "System Coordination", description: "Coordinate primary frames, secondary members, bracing, connections, anchor locations, roof and wall interfaces." },
      { number: "03", title: "Fabrication Documentation", description: "Prepare general arrangements, member details, shop drawings, anchor layouts, and coordinated schedules." },
      { number: "04", title: "Erection & Revision Support", description: "Develop erection information, complete quality reviews, and manage comments or revised project data." },
    ],
    coordination: ["Building grids, dimensions, eave heights, roof slopes, and structural geometry", "Primary frames, end walls, secondary framing, and bracing systems", "Mezzanines, canopies, framed openings, equipment loads, and project-specific features", "Anchor bolt locations, column bases, and foundation interface information", "Roof and wall cladding, trims, accessories, and adjoining construction interfaces", "Member marks, shop details, erection references, revisions, and package consistency"],
    projectTypes: ["Industrial facilities", "Warehouses", "Logistics and distribution centers", "Manufacturing buildings", "Commercial metal buildings", "Special-purpose facilities"],
    partners: ["Metal building manufacturers", "Steel fabricators", "Structural engineers", "General contractors", "Developers", "Erection teams"],
    projectInputs: ["Architectural and structural drawings", "Approved design information", "Building geometry and loading criteria", "Connection and anchor requirements", "Cladding and accessory information", "Fabricator standards and deliverable requirements"],
    qualityPriorities: [
      { title: "System Coordination", description: "Alignment of primary framing, secondary members, bracing, openings, accessories, and interfaces." },
      { title: "Fabrication Readiness", description: "Clear member details, marks, dimensions, connection information, and cross-references." },
      { title: "Erection Clarity", description: "Organized plans and elevations that communicate member locations and building assembly relationships." },
    ],
  },
];

export function getCivilServiceDetail(slug: string) {
  return civilServiceDetails.find((service) => service.slug === slug);
}
