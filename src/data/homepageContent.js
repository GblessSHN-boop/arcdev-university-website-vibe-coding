const facultiesId = [
  {
    code: "FASILKOM",
    title: "Fakultas Sistem Informasi dan Ilmu Komputer",
    english: "Faculty of Information Systems and Computer Science",
    text: "Fakultas yang berfokus pada sistem informasi, ilmu komputer, data, transformasi digital, enterprise system, dan tata kelola teknologi dalam organisasi.",
    programs: ["Sistem Informasi", "Ilmu Komputer", "Sains Data", "Informatika Bisnis", "Enterprise Information System"],
    dean: "Dr. Alexander Nathaniel Wijaya, S.Kom., M.Kom., Ph.D.",
    href: "/id/fakultas/fasilkom"
  },
  {
    code: "FRTI",
    title: "Fakultas Rekayasa Teknologi Informatika",
    english: "Faculty of Informatics Technology Engineering",
    text: "Fakultas yang berfokus pada teknik informatika, software engineering, cloud computing, cyber security, jaringan, IoT, dan platform engineering.",
    programs: ["Teknik Informatika", "Rekayasa Perangkat Lunak", "Keamanan Siber", "Teknologi Jaringan dan Cloud Computing", "IoT Engineering"],
    dean: "Dr. Sebastian Rafael Gunawan, S.Kom., M.Eng., Ph.D.",
    href: "/id/fakultas/frti"
  },
  {
    code: "FAIR",
    title: "Fakultas Artificial Intelligence dan Robotika",
    english: "Faculty of Artificial Intelligence and Robotics",
    text: "Fakultas futuristik yang berfokus pada artificial intelligence, machine learning, deep learning, robotika, automation, computer vision, NLP, dan generative AI.",
    programs: ["Artificial Intelligence Engineering", "Robotics and Intelligent Systems", "Machine Learning Engineering", "Computer Vision Technology", "Natural Language Processing"],
    dean: "Dr. Aiko Nakamura, B.Sc., M.Sc., Ph.D.",
    href: "/id/fakultas/fair"
  },
  {
    code: "FDKV",
    title: "Fakultas Desain Komunikasi Visual",
    english: "Faculty of Visual Communication Design",
    text: "Fakultas yang berfokus pada desain komunikasi visual, branding, ilustrasi, tipografi, fotografi, identitas visual, dan strategi komunikasi visual.",
    programs: ["Desain Komunikasi Visual", "Desain Grafis Profesional", "Branding dan Identitas Visual", "Ilustrasi Digital", "Fotografi dan Visual Storytelling"],
    dean: "Dr. Isabella Aurelia Santoso, S.Ds., M.Ds., Ph.D.",
    href: "/id/fakultas/fdkv"
  },
  {
    code: "FMDI",
    title: "Fakultas Media Digital dan Interaktif",
    english: "Faculty of Digital and Interactive Media",
    text: "Fakultas yang berfokus pada animasi, game, multimedia, film digital, broadcasting, VR, AR, dan produksi konten interaktif.",
    programs: ["Animasi dan Media Digital", "Teknologi Game", "Multimedia dan Broadcasting Digital", "Film Digital dan Sinematografi", "Virtual Reality dan Augmented Reality"],
    dean: "Dr. Lucas Emmanuel Hartadi, S.Kom., M.GameDesign., Ph.D.",
    href: "/id/fakultas/fmdi"
  },
  {
    code: "FDIUX",
    title: "Fakultas Desain Interaksi dan User Experience",
    english: "Faculty of Interaction Design and User Experience",
    text: "Fakultas yang berfokus pada UI/UX, human computer interaction, product design, design system, usability testing, dan strategi produk digital.",
    programs: ["Desain Produk Digital dan UI/UX", "Human Computer Interaction", "Product Design and Innovation", "Interaction Design"],
    dean: "Dr. Elena Victoria Mahendra, S.Ds., M.HCI., Ph.D.",
    href: "/id/fakultas/fdiux"
  },
  {
    code: "FBKD",
    title: "Fakultas Bisnis Kreatif Digital",
    english: "Faculty of Digital Creative Business",
    text: "Fakultas yang menggabungkan bisnis digital, startup, digital marketing, e-commerce, creative business, dan technopreneurship.",
    programs: ["Bisnis Digital", "Digital Marketing Technology", "Startup dan Technopreneurship", "E-Commerce dan Platform Bisnis", "Creative Business Management"],
    dean: "Dr. Gabriel Mahesa Anderson, S.E., M.DigBus., Ph.D.",
    href: "/id/fakultas/fbkd"
  },
  {
    code: "FTBW",
    title: "Fakultas Teknologi Blockchain dan Web3",
    english: "Faculty of Blockchain Technology and Web3",
    text: "Fakultas yang berfokus pada blockchain, Web3, smart contract, decentralized finance, digital asset system, token economy, dan keamanan aset digital.",
    programs: ["Blockchain and Web3 Engineering", "Smart Contract Engineering", "Crypto Technology and Digital Asset Systems", "Decentralized Finance Technology", "Digital Trust and Identity Systems"],
    dean: "Prof. Dr. Marcus Elian Putra, S.Kom., M.CyberSec., Ph.D.",
    href: "/id/fakultas/ftbw"
  },
  {
    code: "FKKS",
    title: "Fakultas Komputasi Kuantum dan Kriptografi Siber",
    english: "Faculty of Quantum Computing and Cyber Cryptography",
    text: "Fakultas yang berfokus pada quantum computing, cryptographic systems, post-quantum security, AI security, secure communication, dan mathematical computing.",
    programs: ["Quantum Computing Engineering", "Cryptographic Systems Engineering", "Post-Quantum Security", "AI Security Engineering", "Secure Digital Communication"],
    dean: "Prof. Dr. Theodore Alaric Nugroho, S.Kom., M.CyberLaw., Ph.D.",
    href: "/id/fakultas/fkks"
  },
  {
    code: "FSTA",
    title: "Fakultas Space Technology dan Aerospace Informatics",
    english: "Faculty of Space Technology and Aerospace Informatics",
    text: "Fakultas yang berfokus pada teknologi antariksa, sistem satelit, aerospace software, remote sensing, geospatial intelligence, dan autonomous drone systems.",
    programs: ["Space Technology and Satellite Systems", "Satellite Communication Technology", "Aerospace Software Engineering", "Remote Sensing and Geospatial Intelligence", "Autonomous Drone Systems"],
    dean: "Prof. Dr. Ethan Alaric Morrison, B.Comp.Sc., M.Tech., Ph.D.",
    href: "/id/fakultas/fsta"
  },
  {
    code: "FSRCH",
    title: "Fakultas Semikonduktor dan Rekayasa Chip",
    english: "Faculty of Semiconductor and Chip Engineering",
    text: "Fakultas yang berfokus pada semiconductor engineering, chip design, microelectronics, embedded systems, processor architecture, dan AI chip engineering.",
    programs: ["Semiconductor Engineering", "Chip Design Engineering", "Microelectronics and Embedded Systems", "AI Chip and Hardware Acceleration", "IoT Hardware Engineering"],
    dean: "Prof. Dr. Benjamin Raka Morrison, S.T., M.Microelectronics., Ph.D.",
    href: "/id/fakultas/fsrch"
  },
  {
    code: "FDTII",
    title: "Fakultas Digital Twin dan Teknologi Industri Cerdas",
    english: "Faculty of Digital Twin and Intelligent Industry Technology",
    text: "Fakultas yang berfokus pada digital twin, simulasi industri, smart manufacturing, industrial AI, cyber-physical system, predictive maintenance, dan industrial IoT.",
    programs: ["Digital Twin Engineering", "Industrial AI and Smart Manufacturing", "Simulation Engineering", "Cyber-Physical Systems Engineering", "Predictive Maintenance Technology"],
    dean: "Prof. Dr. Daniel Arvian Prakoso, S.T., M.IndustrialAI., Ph.D.",
    href: "/id/fakultas/fdtii"
  }
];

const facultiesEn = facultiesId.map((faculty) => ({
  ...faculty,
  title: faculty.english,
  english: faculty.title,
  href: faculty.href.replace("/id/fakultas/", "/en/faculties/")
}));

const rectorId = {
  name: "Gland Jermano Blessed Siahaan, S.Kom., M.Kom., Ph.D., S.H., S.Ds., S.Psi., S.T.",
  role: "Rektor Universitas ARCDEV",
  photo: "/images/people/rector-gland-siahaan.png",
  summary: "Rektor multidisipliner yang memadukan sistem informasi, teknik informatika, artificial intelligence, hukum digital, desain komunikasi visual, psikologi, dan teknik. Kepemimpinannya menempatkan ARCDEV sebagai universitas teknologi kreatif yang menghubungkan coding, design, intelligence, dan global innovation.",
  education: [
    "S1 Sistem Informasi, UASN Universitas Advent Surya Nusantara",
    "S2 Computer Science and Engineering, National University of Singapore",
    "Ph.D. Artificial Intelligence and Machine Learning, Harvard University",
    "Advanced Executive Studies in Digital Strategy, Stanford University",
    "Advanced Creative Technology and Design Leadership, Massachusetts Institute of Technology",
    "Global Leadership in Technology and Innovation, University of Oxford"
  ],
  career: [
    "AI Engineer, ChatGPT-based Generative AI Systems",
    "Software Engineer, Adobe, Meta, Microsoft, and NVIDIA Technology Ecosystems",
    "Data Engineer, Bloomberg, Alibaba Cloud, and DCI Indonesia Digital Infrastructure Ecosystems",
    "Director of Microsoft Indonesia Digital Transformation Profile",
    "Creative Technology Strategist for IT, DKV, UI/UX, and Product Innovation",
    "Enterprise AI and Cloud Architecture Advisor for global digital industry"
  ],
  expertise: [
    "Artificial Intelligence Engineering",
    "Software Engineering",
    "Data Engineering",
    "Digital Product Design",
    "UI/UX and Design System",
    "Visual Communication Design",
    "Cloud and Enterprise System",
    "AI Product Strategy",
    "Digital Law and Technology Ethics"
  ]
};

const rectorEn = {
  ...rectorId,
  role: "Rector of ARCDEV University",
  summary: "A multidisciplinary rector combining information systems, informatics engineering, artificial intelligence, digital law, visual communication design, psychology, and engineering. His leadership positions ARCDEV as a creative technology university connecting coding, design, intelligence, and global innovation."
};

const centersId = [
  { name: "ARCDEV NVIDIA AI Innovation Center", faculty: "FAIR", focus: "AI, GPU computing, deep learning, generative AI, computer vision, NLP" },
  { name: "ARCDEV Microsoft Cloud and Software Academy", faculty: "FRTI", focus: "Cloud computing, software engineering, DevOps, enterprise solution" },
  { name: "ARCDEV Adobe Creative Digital Lab", faculty: "FDKV, FMDI, FDIUX", focus: "Design, animation, motion graphic, UI/UX, digital content production" },
  { name: "ARCDEV Web3 and Blockchain Research Center", faculty: "FTBW", focus: "Blockchain, smart contract, DeFi, digital asset" },
  { name: "ARCDEV Quantum and Cryptographic Intelligence Lab", faculty: "FKKS", focus: "Quantum computing, cryptography, post-quantum security" },
  { name: "ARCDEV Space and Satellite Innovation Center", faculty: "FSTA", focus: "Satellite systems, remote sensing, geospatial AI, drone" },
  { name: "ARCDEV Semiconductor and AI Chip Laboratory", faculty: "FSRCH", focus: "Chip design, AI hardware, embedded system" },
  { name: "ARCDEV Digital Twin and Smart Industry Center", faculty: "FDTII", focus: "Industrial simulation, digital twin, industrial AI" }
];

const centersEn = centersId;

export const homepageContent = {
  id: {
    lang: "id",
    title: "Universitas ARCDEV",
    description: "Website konseptual Universitas ARCDEV sebagai kampus teknologi kreatif, artificial intelligence, desain digital, bisnis digital, dan inovasi global.",
    nav: [
      { label: "Tentang", href: "/id#about" },
      { label: "Rektor", href: "/id#rector" },
      { label: "Fakultas", href: "/id#faculties" },
      { label: "Pusat Unggulan", href: "/id#centers" },
      { label: "PMB", href: "/id#admissions" }
    ],
    cta: "Daftar Sekarang",
    ctaHref: "/id#admissions",
    hero: {
      eyebrow: "BUILD THE FUTURE THROUGH CODE, DESIGN, INTELLIGENCE, AND INNOVATION",
      code: "01",
      titleLines: ["Kampus", "Teknologi Kreatif", "untuk Generasi", "Masa Depan."],
      lead: "Universitas ARCDEV dirancang sebagai ekosistem pendidikan tinggi berbasis teknologi, desain, artificial intelligence, industri kreatif, bisnis digital, dan inovasi global.",
      primary: "Mulai Pendaftaran",
      secondary: "Lihat Fakultas",
      panelTitle: "Ekosistem ARCDEV",
      panelText: "Dua belas fakultas strategis disiapkan untuk membangun talenta digital, AI engineer, software engineer, designer, founder startup, dan inovator teknologi masa depan.",
      panelMeta: "Est. 2026",
      panelAction: "Jelajahi ARCDEV"
    },
    stats: [
      { value: 12, suffix: "", label: "Fakultas strategis", note: "Teknologi, AI, desain, bisnis digital, Web3, quantum, space, chip, dan digital twin" },
      { value: 120, suffix: "+", label: "Program akademik", note: "Jenjang S1, S2, dan S3 berbasis kebutuhan industri masa depan" },
      { value: 8, suffix: "", label: "Pusat unggulan", note: "AI, cloud, creative digital, blockchain, quantum, satellite, chip, dan smart industry" },
      { value: 2, suffix: "", label: "Bahasa website", note: "Indonesia dan English untuk identitas akademik global" }
    ],
    faculties: facultiesId,
    rector: rectorId,
    centers: centersId,
    admissions: {
      label: "Admission Pathway",
      title: "Jalur Pendaftaran untuk Talenta Digital Masa Depan",
      text: "ARCDEV menempatkan penerimaan mahasiswa baru sebagai pengalaman digital yang jelas, terarah, dan informatif agar calon mahasiswa dapat memilih fakultas, program studi, jalur pembiayaan, dan peluang karier secara lebih rasional.",
      steps: ["Pilih Fakultas", "Konsultasi Program", "Lengkapi Berkas", "Finalisasi PMB"],
      primary: "Daftar Sekarang",
      secondary: "Unduh Brosur"
    },
    news: {
      label: "ARCDEV Newsroom",
      title: "Informasi Kampus dalam Format Editorial",
      items: [
        { category: "Academic", date: "20 Mei 2026", title: "ARCDEV memperluas struktur akademik menjadi dua belas fakultas teknologi kreatif dan inovasi global." },
        { category: "AI Center", date: "18 Mei 2026", title: "ARCDEV NVIDIA AI Innovation Center disiapkan sebagai pusat unggulan kecerdasan buatan dan GPU computing." },
        { category: "Digital Campus", date: "15 Mei 2026", title: "ARCDEV mengembangkan portal digital kampus untuk profil fakultas, PMB, newsroom, dan layanan akademik." }
      ]
    }
  },

  en: {
    lang: "en",
    title: "ARCDEV University",
    description: "Conceptual ARCDEV University website for creative technology, artificial intelligence, digital design, digital business, and global innovation.",
    nav: [
      { label: "About", href: "/en#about" },
      { label: "Rector", href: "/en#rector" },
      { label: "Faculties", href: "/en#faculties" },
      { label: "Centers", href: "/en#centers" },
      { label: "Admissions", href: "/en#admissions" }
    ],
    cta: "Apply Now",
    ctaHref: "/en#admissions",
    hero: {
      eyebrow: "BUILD THE FUTURE THROUGH CODE, DESIGN, INTELLIGENCE, AND INNOVATION",
      code: "01",
      titleLines: ["A Creative", "Technology Campus", "for Future", "Innovators."],
      lead: "ARCDEV University is designed as a higher education ecosystem for technology, design, artificial intelligence, creative industry, digital business, and global innovation.",
      primary: "Start Admission",
      secondary: "Explore Faculties",
      panelTitle: "ARCDEV Ecosystem",
      panelText: "Twelve strategic faculties are prepared to develop digital talents, AI engineers, software engineers, designers, startup founders, and future technology innovators.",
      panelMeta: "Est. 2026",
      panelAction: "Explore ARCDEV"
    },
    stats: [
      { value: 12, suffix: "", label: "Strategic faculties", note: "Technology, AI, design, digital business, Web3, quantum, space, chip, and digital twin" },
      { value: 120, suffix: "+", label: "Academic programs", note: "Undergraduate, master, and doctoral pathways for future industry needs" },
      { value: 8, suffix: "", label: "Centers of excellence", note: "AI, cloud, creative digital, blockchain, quantum, satellite, chip, and smart industry" },
      { value: 2, suffix: "", label: "Website languages", note: "Indonesian and English for a global academic identity" }
    ],
    faculties: facultiesEn,
    rector: rectorEn,
    centers: centersEn,
    admissions: {
      label: "Admission Pathway",
      title: "An Enrollment Journey for Future Digital Talent",
      text: "ARCDEV positions admissions as a clear, structured, and informative digital experience, helping prospective students choose faculties, programs, funding pathways, and career directions more rationally.",
      steps: ["Choose Faculty", "Consult Program", "Submit Documents", "Finalize Admission"],
      primary: "Apply Now",
      secondary: "Download Brochure"
    },
    news: {
      label: "ARCDEV Newsroom",
      title: "Campus Information in Editorial Format",
      items: [
        { category: "Academic", date: "May 20, 2026", title: "ARCDEV expands its academic structure into twelve faculties for creative technology and global innovation." },
        { category: "AI Center", date: "May 18, 2026", title: "ARCDEV NVIDIA AI Innovation Center is prepared as a center of excellence for artificial intelligence and GPU computing." },
        { category: "Digital Campus", date: "May 15, 2026", title: "ARCDEV develops a digital campus portal for faculty profiles, admissions, newsroom, and academic services." }
      ]
    }
  }
};
