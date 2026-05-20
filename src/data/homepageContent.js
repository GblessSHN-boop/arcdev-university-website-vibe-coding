export const homepageContent = {
  id: {
    lang: "id",
    title: "Universitas ARCDEV",
    description: "Website konseptual Universitas ARCDEV untuk profil kampus, fakultas, penerimaan mahasiswa baru, dan layanan digital akademik.",
    nav: [
      { label: "Tentang", href: "/id#about" },
      { label: "Fakultas", href: "/id#faculties" },
      { label: "Program", href: "/id#programs" },
      { label: "PMB", href: "/id#admissions" },
      { label: "Berita", href: "/id#newsroom" }
    ],
    cta: "Daftar Sekarang",
    ctaHref: "/id#admissions",
    hero: {
      eyebrow: "ARCDEV GLOBAL UNIVERSITY",
      code: "01",
      titleLines: ["Membangun", "Generasi Profesional", "Berkarakter,", "Siap Masa Depan."],
      lead: "Universitas ARCDEV menghadirkan pendidikan tinggi yang terarah melalui ekonomi, teknologi informasi, kesehatan, dan teologi dalam ekosistem kampus digital yang modern.",
      primary: "Mulai Pendaftaran",
      secondary: "Lihat Fakultas",
      panelTitle: "Akses Cepat PMB",
      panelText: "Pilih program studi, cek beasiswa, konsultasi biaya, dan mulai pendaftaran melalui kanal resmi ARCDEV.",
      panelMeta: "Tahun Akademik 2026",
      panelAction: "Konsultasi Admission"
    },
    stats: [
      { value: 4, suffix: "", label: "Fakultas utama", note: "Ekonomi, teknologi, kesehatan, dan teologi" },
      { value: 6, suffix: "+", label: "Program akademik", note: "Dirancang untuk kebutuhan profesional modern" },
      { value: 2, suffix: "", label: "Bahasa website", note: "Indonesia dan English" },
      { value: 24, suffix: "/7", label: "Akses digital", note: "Portal informasi dan layanan kampus" }
    ],
    faculties: [
      {
        code: "FE",
        title: "Fakultas Ekonomi",
        english: "Faculty of Economics",
        text: "Mempersiapkan lulusan yang memahami bisnis, manajemen, keuangan, dan dinamika ekonomi modern.",
        href: "/id/fakultas/ekonomi"
      },
      {
        code: "FSIK",
        title: "Fakultas Sistem Informasi dan Ilmu Komputer",
        english: "Faculty of Information Systems and Computer Science",
        text: "Mengembangkan kompetensi digital melalui sistem informasi, ilmu komputer, data, dan teknologi komputasi.",
        href: "/id/fakultas/sistem-informasi-ilmu-komputer"
      },
      {
        code: "FIKES",
        title: "Fakultas Kesehatan",
        english: "Faculty of Health Sciences",
        text: "Membentuk tenaga kesehatan yang kompeten, humanis, dan siap berkontribusi bagi masyarakat.",
        href: "/id/fakultas/kesehatan"
      },
      {
        code: "FT",
        title: "Fakultas Filsafat Teologi",
        english: "Faculty of Theology",
        text: "Mengembangkan pemikiran teologis, kepemimpinan pelayanan, etika, dan pembentukan karakter spiritual.",
        href: "/id/fakultas/teologi"
      }
    ],
    admissions: {
      label: "Admission Pathway",
      title: "Jalur Pendaftaran yang Jelas dan Terarah",
      text: "ARCDEV menempatkan informasi penerimaan mahasiswa baru sebagai pusat pengalaman pengguna agar calon mahasiswa dapat memahami pilihan program, biaya, beasiswa, dan tahapan pendaftaran tanpa kebingungan.",
      steps: ["Pilih Fakultas", "Konsultasi Program", "Lengkapi Berkas", "Finalisasi PMB"],
      primary: "Daftar Sekarang",
      secondary: "Unduh Brosur"
    },
    news: {
      label: "ARCDEV Newsroom",
      title: "Informasi Kampus dalam Format Editorial",
      items: [
        { category: "Akademik", date: "20 Mei 2026", title: "ARCDEV menyiapkan struktur fakultas berbasis kebutuhan profesional modern." },
        { category: "PMB", date: "18 Mei 2026", title: "Penerimaan mahasiswa baru dirancang dengan alur konsultasi dan informasi biaya yang transparan." },
        { category: "Digital Campus", date: "15 Mei 2026", title: "Portal digital ARCDEV dikembangkan untuk akses akademik, berita, dan layanan kampus." }
      ]
    }
  },

  en: {
    lang: "en",
    title: "ARCDEV University",
    description: "Conceptual ARCDEV University website for campus profile, faculties, admissions, academic programs, and digital services.",
    nav: [
      { label: "About", href: "/en#about" },
      { label: "Faculties", href: "/en#faculties" },
      { label: "Programs", href: "/en#programs" },
      { label: "Admissions", href: "/en#admissions" },
      { label: "News", href: "/en#newsroom" }
    ],
    cta: "Apply Now",
    ctaHref: "/en#admissions",
    hero: {
      eyebrow: "ARCDEV GLOBAL UNIVERSITY",
      code: "01",
      titleLines: ["Building", "Professional", "Character-Driven", "Future Leaders."],
      lead: "ARCDEV University presents a structured higher education ecosystem across economics, information technology, health sciences, and theology through a modern digital campus experience.",
      primary: "Start Admission",
      secondary: "Explore Faculties",
      panelTitle: "Admissions Access",
      panelText: "Choose your program, check scholarships, consult tuition options, and begin your application through ARCDEV official channels.",
      panelMeta: "Academic Year 2026",
      panelAction: "Admission Consultation"
    },
    stats: [
      { value: 4, suffix: "", label: "Core faculties", note: "Economics, technology, health sciences, and theology" },
      { value: 6, suffix: "+", label: "Academic programs", note: "Designed for modern professional pathways" },
      { value: 2, suffix: "", label: "Website languages", note: "Indonesian and English structure" },
      { value: 24, suffix: "/7", label: "Digital access", note: "Campus information and service portal" }
    ],
    faculties: [
      {
        code: "FE",
        title: "Faculty of Economics",
        english: "Business, Management, and Finance",
        text: "Preparing graduates with strong understanding of business, management, finance, and modern economic dynamics.",
        href: "/en/faculties/economics"
      },
      {
        code: "FSIC",
        title: "Faculty of Information Systems and Computer Science",
        english: "Information Systems and Computer Science",
        text: "Developing digital competencies through information systems, computer science, data, and computational technology.",
        href: "/en/faculties/information-systems-computer-science"
      },
      {
        code: "FHS",
        title: "Faculty of Health Sciences",
        english: "Nursing and Nutrition",
        text: "Preparing competent and human-centered health professionals who are ready to contribute to society.",
        href: "/en/faculties/health-sciences"
      },
      {
        code: "FT",
        title: "Faculty of Theology",
        english: "Theology, Ethics, and Leadership",
        text: "Advancing theological reflection, service leadership, ethics, and spiritual character formation.",
        href: "/en/faculties/theology"
      }
    ],
    admissions: {
      label: "Admission Pathway",
      title: "A Clear and Structured Enrollment Journey",
      text: "ARCDEV places admissions information at the center of the user experience, helping prospective students understand programs, tuition, scholarships, and application stages clearly.",
      steps: ["Choose Faculty", "Consult Program", "Submit Documents", "Finalize Admission"],
      primary: "Apply Now",
      secondary: "Download Brochure"
    },
    news: {
      label: "ARCDEV Newsroom",
      title: "Campus Information in Editorial Format",
      items: [
        { category: "Academic", date: "May 20, 2026", title: "ARCDEV prepares faculty structures for modern professional needs." },
        { category: "Admissions", date: "May 18, 2026", title: "The admissions pathway is designed around consultation, clarity, and transparent information." },
        { category: "Digital Campus", date: "May 15, 2026", title: "ARCDEV digital portal is developed for academic access, news, and campus services." }
      ]
    }
  }
};
