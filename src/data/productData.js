export const productData = {
  name: "AGM Voyage",
  fullName: "AGM Voyage Thermal & Digital Day/Night Vision Binocular",
  eyebrow: "AGM ADVANCED ELECTRO-OPTICS",
  tagline: "SEE THROUGH THE DARK.",
  subTagline: "THERMAL + DIGITAL VISION.",
  description: "AGM Voyage combines thermal imaging and digital low-light vision in a single advanced fusion binocular, providing enhanced observation, target detection and recognition across demanding day and night environments.",
  
  price: "PRICE ON REQUEST",
  cataloguePath: import.meta.env.BASE_URL + "catalogue/agm-voyage.pdf",
  catalogueTitle: "AGM Voyage Product Catalogue",
  catalogueFormat: "PDF DOCUMENT",

  heroInfoStrip: [
    { label: "THERMAL", value: "INFRARED SENSOR" },
    { label: "DIGITAL LOW-LIGHT", value: "CMOS VISION" },
    { label: "FUSION", value: "DUAL-SPECTRUM" },
    { label: "DAY / NIGHT", value: "ALL-LIGHT OPERATIONAL" },
    { label: "FIELD READY", value: "RUGGED SYSTEM" }
  ],

  heroIndicators: [
    "THERMAL",
    "DIGITAL NIGHT VISION",
    "FUSION",
    "RANGE",
    "POSITIONING"
  ],

  intro: {
    eyebrow: "ADVANCED FUSION OBSERVATION",
    headline: "Two vision systems. One clearer picture.",
    description: "The AGM Voyage combines thermal imaging with digital low-light vision to help users quickly locate potential targets and examine them in greater visual detail. Thermal and visible-light information can be viewed independently or combined through multiple viewing modes.",
    flow: [
      { step: "THERMAL", detail: "Heat signature detection" },
      { step: "DIGITAL DAY/NIGHT", detail: "Low-light optical detail" },
      { step: "FUSION", detail: "Multi-spectrum integration" },
      { step: "ENHANCED SITUATIONAL AWARENESS", detail: "Comprehensive target insight" }
    ]
  },

  fusionModes: [
    {
      id: "thermal",
      name: "THERMAL",
      title: "Heat Signature Detection",
      caption: "Detect heat signatures across challenging visual conditions.",
      description: "Infrared thermal sensing highlights heat differences between targets and background elements regardless of ambient lighting.",
      palette: "ironbow"
    },
    {
      id: "digital",
      name: "DIGITAL DAY/NIGHT",
      title: "Optical Detail",
      caption: "Examine visual details when ambient light is limited.",
      description: "High-sensitivity digital low-light optical sensor delivers clear visual details, text, textures, and target identification.",
      palette: "nightvision"
    },
    {
      id: "fusion",
      name: "FUSION",
      title: "Dual-Spectrum Synergy",
      caption: "Combine thermal and visible information for enhanced awareness.",
      description: "Integrates thermal heat outlines onto high-resolution digital optical imagery, providing instant detection with rich environmental detail.",
      palette: "fusion"
    }
  ],

  environments: [
    { name: "Darkness", icon: "Moon", desc: "Maintains observation capability in complete zero-light conditions." },
    { name: "Smoke", icon: "Flame", desc: "Thermal spectrum penetrates dense particle & combustion smoke." },
    { name: "Fog", icon: "CloudFog", desc: "Infrared energy bypasses fine moisture droplets in heavy fog." },
    { name: "Rain", icon: "CloudRain", desc: "Sustains target contrast during active precipitation." },
    { name: "Snow", icon: "Snowflake", desc: "High thermal contrast against cold background terrain." }
  ],

  features: [
    {
      id: "01",
      title: "Thermal + Digital Day/Night",
      description: "Thermal and digital low-light observation integrated into one binocular system.",
      icon: "Layers"
    },
    {
      id: "02",
      title: "Image Fusion",
      description: "Combine thermal and visible-light information for enhanced target recognition and situational awareness.",
      icon: "Eye"
    },
    {
      id: "03",
      title: "Multiple Viewing Modes",
      description: "Select between different image-display and viewing modes according to the observation environment.",
      icon: "Sliders"
    },
    {
      id: "04",
      title: "Target Detection",
      description: "Designed to help users quickly locate potential targets.",
      icon: "Crosshair"
    },
    {
      id: "05",
      title: "Target Recognition",
      description: "Provides additional visual information for examining potential targets in greater detail.",
      icon: "Scan"
    },
    {
      id: "06",
      title: "Distance Measurement",
      description: "Integrated distance-measurement functionality for field observation.",
      icon: "Ruler"
    },
    {
      id: "07",
      title: "Target Positioning",
      description: "Integrated positioning functionality for improved target awareness.",
      icon: "Compass"
    },
    {
      id: "08",
      title: "Image & Video Capture",
      description: "Capture imagery and video for documentation and later review.",
      icon: "Camera"
    },
    {
      id: "09",
      title: "Ergonomic Controls",
      description: "Practical controls and straightforward operation designed for demanding field environments.",
      icon: "Cpu"
    },
    {
      id: "10",
      title: "Rugged Outdoor Design",
      description: "Built for professional and outdoor applications where environmental conditions can be challenging.",
      icon: "ShieldCheck"
    }
  ],

  hudSteps: [
    {
      step: "01",
      code: "DETECT",
      title: "Thermal Signature Location",
      desc: "Thermal imaging helps locate potential targets instantly across darkness or foliage.",
      metrics: "INFRARED SCAN: ACTIVE // contrast 94%"
    },
    {
      step: "02",
      code: "EXAMINE",
      title: "Digital Optical Detail",
      desc: "Digital and visible information provides additional visual detail for target identification.",
      metrics: "CMOS INTENSIFIER: ENGAGED // optical 100%"
    },
    {
      step: "03",
      code: "FUSE",
      title: "Dual-Spectrum Overlay",
      desc: "Combine information from both imaging channels into a unified high-clarity output.",
      metrics: "FUSION ALGORITHM: SYNCHRONIZED"
    },
    {
      step: "04",
      code: "POSITION",
      title: "Telemetry & Range",
      desc: "Integrated positioning and distance-measurement functionality provides additional field information.",
      metrics: "RANGEFINDER: READY // POS: 34°12'N 118°14'W"
    }
  ],

  applications: [
    { name: "Security & Surveillance", code: "SEC-01", desc: "Perimeter security, critical infrastructure protection, and facility monitoring." },
    { name: "Law Enforcement", code: "LE-02", desc: "Tactical observation, suspect search, and field operations." },
    { name: "Search & Rescue", code: "SAR-03", desc: "Locating missing persons across vast wilderness or disaster terrain." },
    { name: "Anti-Smuggling Operations", code: "AS-04", desc: "Interdiction and contraband surveillance in nighttime environments." },
    { name: "Border Observation", code: "BO-05", desc: "Long-range border monitoring and territorial protection." },
    { name: "Wildlife Observation", code: "WO-06", desc: "Nocturnal fauna research and non-disruptive biological monitoring." },
    { name: "Outdoor Activities", code: "OA-07", desc: "Demanding outdoor exploration, navigation, and field expeditions." }
  ],

  capabilities: [
    {
      id: "thermal-obs",
      title: "THERMAL OBSERVATION",
      subtitle: "Infrared Energy Signature Detection",
      desc: "Detect target heat profiles across darkness, fog, and light cover with uncooled infrared detection technology."
    },
    {
      id: "digital-lowlight",
      title: "DIGITAL LOW-LIGHT VISION",
      subtitle: "High-Sensitivity Optical Channel",
      desc: "Captures ambient photon signals to deliver crisp monochromatic or daylight optical imagery."
    },
    {
      id: "image-fusion",
      title: "IMAGE FUSION",
      subtitle: "Multi-Spectral Algorithmic Overlay",
      desc: "Superimposes thermal heat outlines directly over visible light optical imagery for complete target awareness."
    },
    {
      id: "target-detection",
      title: "TARGET DETECTION",
      subtitle: "Rapid Signature Highlighting",
      desc: "Assists operators in quickly isolating thermal targets from complex background environments."
    },
    {
      id: "distance-measure",
      title: "DISTANCE MEASUREMENT",
      subtitle: "Integrated Telemetry",
      desc: "Provides real-time distance estimation to target coordinates during active observation."
    },
    {
      id: "target-position",
      title: "TARGET POSITIONING",
      subtitle: "Spatial Orientation Data",
      desc: "Incorporate coordinate indicators for accurate target reporting and spatial navigation."
    },
    {
      id: "image-capture",
      title: "IMAGE CAPTURE",
      subtitle: "High-Resolution Snapshot Logging",
      desc: "Save high-definition static imagery directly to onboard memory for mission debriefing."
    },
    {
      id: "video-capture",
      title: "VIDEO CAPTURE",
      subtitle: "Continuous Mission Recording",
      desc: "Record real-time video feeds with synchronized telemetry overlays for documentation."
    }
  ],

  specifications: [
    { category: "Product", information: "AGM Voyage Thermal & Digital Day/Night Vision Binocular" },
    { category: "Imaging", information: "Thermal + Digital Low-Light Vision" },
    { category: "Observation", information: "Day / Night Operational Coverage" },
    { category: "Viewing", information: "Multiple Viewing & Image-Display Modes" },
    { category: "Fusion", information: "Thermal + Visible-Light Fusion" },
    { category: "Target Functions", information: "Target Detection & Recognition" },
    { category: "Measurement", information: "Distance Measurement Functionality" },
    { category: "Positioning", information: "Integrated Target Positioning" },
    { category: "Recording", information: "On-board Image & Video Capture" },
    { category: "Controls", information: "Ergonomic Field-Ready Interface" },
    { category: "Use", information: "Professional & Outdoor Applications" }
  ]
};
