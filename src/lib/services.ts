import diagnosticsImg from "@/assets/service-diagnostics.jpg";
import ecuImg from "@/assets/service-ecu.jpg";
import trainingImg from "@/assets/service-training.jpg";
import partsImg from "@/assets/service-parts.jpg";
import equipmentImg from "@/assets/service-equipment.jpg";
import aboutImg from "@/assets/about-workshop.jpg";
import fleetImg from "@/assets/cta-fleet.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  image: string;
  alt: string;
  intro: string;
  highlights: { title: string; body: string }[];
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "diagnosis-troubleshooting-repair",
    title: "Diagnosis, Troubleshooting & Repair",
    short: "Diagnosis, Troubleshooting & Repair",
    body: "We provide diagnosis, troubleshooting, and repair for heavy-duty commercial vehicles to keep your fleet running smoothly. Our skilled technicians use advanced tools to find and fix problems quickly and efficiently. From engines and transmissions to electrical and hydraulic systems, we take care of every part of your vehicle. With a focus on reliability, safety, and minimal downtime, we help businesses get the best performance and longer life from their commercial vehicles.",
    image: aboutImg,
    alt: "Technician diagnosing a heavy-duty commercial vehicle engine",
    intro:
      "Fast, accurate fault-finding for trucks, buses, trailers and construction equipment — backed by dealer-level tooling and engineers who repair what they diagnose.",
    highlights: [
      {
        title: "Full-vehicle coverage",
        body: "Engines, transmissions, aftertreatment, electrical, pneumatic and hydraulic systems on all major commercial brands.",
      },
      {
        title: "Evidence-based diagnosis",
        body: "Live data, actuator tests and component-level measurement instead of parts-swapping guesswork.",
      },
      {
        title: "Downtime first",
        body: "Clear findings, a repair plan and realistic timelines so your operations team can plan around the vehicle.",
      },
    ],
    deliverables: [
      "Fault-code reading and interpretation with live data logging",
      "Component-level electrical and sensor testing",
      "Engine, gearbox and driveline troubleshooting",
      "Repair execution with genuine or OE-quality parts",
      "Post-repair verification and road testing",
    ],
  },
  {
    slug: "dealer-level-diagnostic-tools",
    title: "Dealer-Level Diagnostic Tools & Support",
    short: "Dealer-Level Diagnostic Tools & Support",
    body: "We offer dealer-level diagnostic tools along with full technical support, helping automotive professionals accurately diagnose and repair vehicles. Our range of advanced tools is designed for precision, efficiency, and reliability, ensuring technicians can quickly identify and resolve issues. With expert guidance and ongoing support, we empower workshops and service centers to maintain high standards of vehicle performance and customer satisfaction.",
    image: diagnosticsImg,
    alt: "Dealer-level diagnostic equipment connected to a commercial truck",
    intro:
      "Genuine dealer diagnostic platforms supplied, licensed, configured and supported — so independent workshops work at manufacturer level.",
    highlights: [
      {
        title: "Genuine platforms",
        body: "Authorised multi-brand and OEM diagnostic solutions, including Jaltest, with valid licensing and updates.",
      },
      {
        title: "Setup & configuration",
        body: "Installation, interface pairing and workshop network setup handled by our engineers.",
      },
      {
        title: "Ongoing support",
        body: "Remote and on-site assistance when a job needs a second technical opinion.",
      },
    ],
    deliverables: [
      "Tool selection advice matched to your vehicle mix",
      "Supply, licensing and activation",
      "On-site installation and technician onboarding",
      "Software updates and renewals",
      "Technical helpdesk support",
    ],
  },
  {
    slug: "ecu-remapping-file-tuning",
    title: "ECU Remapping Tools & File Tuning",
    short: "ECU Remapping Tools & File Tuning",
    body: "We provide ECU remapping tools and file tuning services to enhance the performance, efficiency, and drivability of vehicles. Our advanced tools allow precise adjustments to engine control parameters, while our expert team offers professional file tuning tailored to each vehicle's needs. Whether it's for improved power, fuel efficiency, or smoother performance, our solutions ensure optimal results while maintaining reliability and safety.",
    image: fleetImg,
    alt: "Commercial truck fleet optimised for efficiency and performance",
    intro:
      "Professional remapping hardware and calibrated file work for measurable gains in power, drivability and fuel efficiency — without compromising engine reliability.",
    highlights: [
      {
        title: "Authorised hardware",
        body: "Magic Motorsport tooling for reading and writing ECUs safely across commercial platforms.",
      },
      {
        title: "Tailored calibration",
        body: "Files developed per vehicle, duty cycle and load profile rather than generic off-the-shelf maps.",
      },
      {
        title: "Safety margins kept",
        body: "Changes stay within component tolerances so durability and emissions hardware are respected.",
      },
    ],
    deliverables: [
      "ECU reading and secure original file backup",
      "Custom file tuning for economy or performance",
      "Bench and OBD writing support",
      "Tool supply, licensing and training",
      "Post-tune verification and data logging",
    ],
  },
  {
    slug: "ecu-repair-reprogramming",
    title: "ECU Repair & Reprogramming",
    short: "ECU Repair & Reprogramming",
    body: "Our highly skilled technicians specialize in ECU repairs and reprogramming for all types of engines and gearboxes. We ensure accurate diagnostics, reliable solutions, and professional service to get your vehicles back on the road with optimal performance.",
    image: ecuImg,
    alt: "Engineer repairing a vehicle electronic control unit circuit board",
    intro:
      "Component-level electronics repair and reprogramming for engine, gearbox and body control units — a fraction of the cost and lead time of replacement.",
    highlights: [
      {
        title: "Board-level repair",
        body: "Driver stages, power supplies, communication lines and connector damage repaired in-house.",
      },
      {
        title: "Cloning & coding",
        body: "Unit cloning, immobiliser alignment and parameter coding for a plug-and-drive result.",
      },
      {
        title: "All major brands",
        body: "Engine and gearbox ECUs for European, Japanese and American commercial platforms.",
      },
    ],
    deliverables: [
      "Bench testing and fault confirmation",
      "Component-level electronic repair",
      "Reprogramming, cloning and adaptation",
      "Water- and heat-damage recovery where possible",
      "Fitment support and post-repair validation",
    ],
  },
  {
    slug: "advanced-training-programs",
    title: "Advanced Training Programs",
    short: "Advanced Training Programs",
    body: "We deliver advanced training programs for engineers and technicians, designed to enhance skills and keep professionals up-to-date with the latest automotive technologies. Our hands-on courses cover diagnostics, repair techniques, ECU tuning, and the use of modern tools, providing practical knowledge that can be applied directly in the workshop. With expert instructors and real-world training scenarios, we empower technicians to improve efficiency, accuracy, and overall performance in their work.",
    image: trainingImg,
    alt: "Automotive technicians attending an AutoDome technical training session",
    intro:
      "Hands-on technical training for workshop teams and fleet engineers, taught on live commercial vehicles and real diagnostic equipment.",
    highlights: [
      {
        title: "Practical, not theoretical",
        body: "Every module is delivered on real vehicles, real faults and the tools your team uses daily.",
      },
      {
        title: "Structured levels",
        body: "From electrical fundamentals through advanced ECU tuning and network diagnostics.",
      },
      {
        title: "On-site or in our centre",
        body: "Courses delivered at our Sharjah facility or at your own workshop.",
      },
    ],
    deliverables: [
      "Electrical and CAN network diagnostics",
      "Diagnostic tool mastery workshops",
      "ECU tuning and file handling",
      "Aftertreatment and emissions systems",
      "Certificates of completion for participants",
    ],
  },
  {
    slug: "heavy-duty-parts-supply",
    title: "Heavy Duty Vehicle Parts Supply",
    short: "Heavy Duty Vehicle Parts Supply",
    body: "We maintain a large inventory of electronic control units, electronic components, and mechanical parts for all major commercial vehicle brands. In addition, our experienced team can source special or hard-to-find parts for any brand of commercial vehicles and construction equipment, ensuring timely delivery and reliable support.",
    image: partsImg,
    alt: "Warehouse shelving stocked with genuine heavy-duty vehicle parts",
    intro:
      "Genuine and OE-quality parts for commercial vehicles and construction equipment, plus a sourcing team for the hard-to-find items.",
    highlights: [
      {
        title: "Deep electronics stock",
        body: "ECUs, sensors, actuators and electronic components held for fast turnaround.",
      },
      {
        title: "Special sourcing",
        body: "Obsolete and hard-to-find parts located through our supplier network.",
      },
      {
        title: "Order online",
        body: "Everyday items available through our ADL Automotive e-commerce storefront.",
      },
    ],
    deliverables: [
      "Electronic control units and modules",
      "Sensors, actuators and wiring components",
      "Mechanical and driveline parts",
      "Construction equipment spares",
      "UAE delivery and export shipping",
    ],
  },
  {
    slug: "workshop-tools-equipment",
    title: "Workshop Tools & Equipment Trading",
    short: "Workshop Tools & Equipment Trading",
    body: "We specialize in trading workshop tools and equipment, offering a wide range of high-quality products for automotive and industrial workshops. From hand tools and power tools to diagnostic equipment and specialized machinery, we provide reliable solutions to meet every workshop's needs. Our focus is on quality, durability, and affordability, ensuring that professionals have the right tools to work efficiently and maintain high standards of service.",
    image: equipmentImg,
    alt: "Professional workshop tools and equipment supplied by AutoDome",
    intro:
      "Equip or upgrade a complete commercial vehicle workshop — from hand tools to specialised machinery — with advice from engineers who use them.",
    highlights: [
      {
        title: "Complete fit-outs",
        body: "Plan and supply an entire workshop, or add a single specialised station.",
      },
      {
        title: "Quality and value",
        body: "Durable, professional-grade brands selected for heavy daily use.",
      },
      {
        title: "After-sales backing",
        body: "Commissioning, operator guidance and spares support after delivery.",
      },
    ],
    deliverables: [
      "Hand and power tools",
      "Diagnostic and measurement equipment",
      "Lifting, pressing and specialised machinery",
      "Workshop layout and equipment consulting",
      "Delivery, installation and commissioning",
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
