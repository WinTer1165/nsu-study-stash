/* NSU Study Stash — course dataset
 * Each entry: code, name, faculty, dept, year, provider, project (repo URL | null), drive (Drive link)
 * provider: name string when shared by the maintainer, otherwise null (shown as N/A).
 */
const PROVIDER = "WinTer1165";

const COURSES = [
  // ---------------- CSE ----------------
  {
    code: "CSE115",
    name: "Programming Language I (+ Lab)",
    dept: "CSE",
    faculty: "NvA",
    year: "2023",
    provider: PROVIDER,
    project: "https://github.com/WinTer1165/Basic-C-projects",
    drive:
      "https://drive.google.com/file/d/1aR9yfTVNqpS_z2rVCJ11eQCdZeUsavPB/view?usp=drive_link",
  },
  {
    code: "CSE173",
    name: "Discrete Mathematics",
    dept: "CSE",
    faculty: "SfT",
    year: "2024",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/15gG6atYb99RSeHmsVrt2Im2xM-jYLEN5/view?usp=drive_link",
  },
  {
    code: "CSE215",
    name: "Programming Language II (+ Lab)",
    dept: "CSE",
    faculty: "RRn",
    year: "2024",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/1YPkAirgDIMPKFILF5oRXt_8NIl0kXpiJ/view?usp=drive_link",
  },
  {
    code: "CSE225",
    name: "Data Structures and Algorithms",
    dept: "CSE",
    faculty: "IQn",
    year: "2024",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/19Z_-ZHYkPOWbsgYGhiQ2pl6-mpqKgCfA/view?usp=drive_link",
  },
  {
    code: "CSE231",
    name: "Digital Logic Design (+ Lab)",
    dept: "CSE",
    faculty: "KDA1",
    year: "2024",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/1-h1L9-qhjR9VlZ7l8JSsWnMvsWfsX90u/view?usp=drive_link",
  },
  {
    code: "CSE311",
    name: "Database Management System",
    dept: "CSE",
    faculty: "STI",
    year: "2025",
    provider: PROVIDER,
    project:
      "https://github.com/WinTer1165/NSU-Linkup-Faculty-Student-University-Research-Service-Portal",
    drive:
      "https://drive.google.com/file/d/1Nc2nb7b6RlPufqA05OsC8Mo4G9zlNCDM/view?usp=sharing",
  },
  {
    code: "CSE323",
    name: "Operating Systems Design",
    dept: "CSE",
    faculty: "NvA",
    year: "2025",
    provider: PROVIDER,
    project: "https://github.com/WinTer1165/Digital-Inhaler",
    drive:
      "https://drive.google.com/file/d/1Lbtu8R0DpJxLdVOS1WSsAUOs3Lx7Fvhb/view?usp=drive_link",
  },
  {
    code: "CSE327",
    name: "Software Engineering",
    dept: "CSE",
    faculty: "AUQ",
    year: "2025",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/1bdwS0OMXf7db8EZ6LZho17egQ6sDLwb1/view?usp=drive_link",
  },
  {
    code: "CSE331",
    name: "Microprocessor & Embedded Systems",
    dept: "CSE",
    faculty: "ACQ",
    year: "2026",
    provider: PROVIDER,
    project:
      "https://github.com/WinTer1165/Multi-Gas-Safety-System-with-Voice-Alerts-Web-Dashboard",
    drive:
      "https://drive.google.com/file/d/1qmOde9Eva7ccHOxmEg_9mPNiOY0EOkVQ/view?usp=drive_link",
  },
  {
    code: "CSE332",
    name: "Computer Organization and Architecture",
    dept: "CSE",
    faculty: "MAQm",
    year: "2025",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/1HqS8lvGmpS5fgZrKa_xZ67C-V9skhmCf/view?usp=drive_link",
  },
  {
    code: "CSE373",
    name: "Design and Analysis of Algorithms",
    dept: "CSE",
    faculty: "Ekd",
    year: "2024",
    provider: PROVIDER,
    project: "https://github.com/WinTer1165/CSE332-MIPS-CPU-Design-and-Testing",
    drive:
      "https://drive.google.com/file/d/1bSr_-6cLq2S26uKVYORsvOD0LpyVx9MJ/view?usp=drive_link",
  },
  {
    code: "CSE438",
    name: "Data Communication & Networking",
    dept: "CSE",
    faculty: "HzR",
    year: "2025",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/1yCKcdhnmJ9MZWJIiyWYKoB1KH3gCCsJw/view?usp=drive_link",
  },
  {
    code: "CSE468",
    name: "Computer Vision",
    dept: "CSE",
    faculty: "AFE",
    year: "2025",
    provider: PROVIDER,
    project:
      "https://github.com/WinTer1165/Visual-Question-Answering-on-Mobile-UI-Screenshots",
    drive:
      "https://drive.google.com/file/d/14Oy4FSwmUaHrUz2V8X1objGJX07Nwu-M/view?usp=drive_link",
  },
  {
    code: "CSE482",
    name: "Internet and Web Technology",
    dept: "CSE",
    faculty: "NQH",
    year: "2024",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/182_-9E-EpGvPAztcUPNM-2v7BGxBvqnU/view?usp=drive_link",
  },
  {
    code: "EEE141",
    name: "Electrical Circuits I",
    dept: "CSE",
    faculty: "KMM",
    year: "2026",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/1Oi-qw0Olli65NFZlUao_9wMuNcJWPSij/view?usp=drive_link",
  },

  // ---------------- GED ----------------
  {
    code: "BIO103",
    name: "Biology I",
    dept: "GED",
    faculty: "Prof. Salequl Islam",
    year: "2024",
    provider: null,
    project: null,
    drive:
      "https://drive.google.com/file/d/1LZVzpxiaytPOHdWMjV9mQh_-MD8iBdrm/view?usp=sharing",
  },
  {
    code: "CHE101",
    name: "General Chemistry (Lecture Notes)",
    dept: "GED",
    faculty: "ABI",
    year: "2024",
    provider: null,
    project: null,
    drive:
      "https://drive.google.com/file/d/1gyL8kYKjumuv4sEZiNJwpbfftnwaI4K2/view?usp=drive_link",
  },
  {
    code: "CHE101",
    name: "General Chemistry (Slides)",
    dept: "GED",
    faculty: "N/A",
    year: "2023",
    provider: null,
    project: null,
    drive:
      "https://drive.google.com/file/d/1ytgvdQbSCgVaz_s8rK8p9Ub1nM4s5XGG/view?usp=drive_link",
  },
  {
    code: "BUS112",
    name: "Introduction to Business Mathematics",
    dept: "GED",
    faculty: "JeR",
    year: "2023",
    provider: null,
    project: null,
    drive:
      "https://drive.google.com/file/d/17UTck9aRu1Ztoaf8U5_YX070KEsDPecw/view?usp=drive_link",
  },
  {
    code: "ENG102",
    name: "Introduction to Composition",
    dept: "GED",
    faculty: "N/A",
    year: "2023",
    provider: null,
    project: null,
    drive:
      "https://drive.google.com/file/d/1KdyejjF4BjroViC8u_JtZB-F1UulAEUA/view?usp=drive_link",
  },
  {
    code: "ENG103",
    name: "Intermediate Composition",
    dept: "GED",
    faculty: "NM",
    year: "2023",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/1t7fZPTg7X4gZnhxsGHtLFsSc6bdaAOTY/view?usp=drive_link",
  },
  {
    code: "ENV107",
    name: "Introduction to Environmental Science",
    dept: "GED",
    faculty: "N/A",
    year: "2023",
    provider: null,
    project: null,
    drive:
      "https://drive.google.com/file/d/1RzMJUANTjz7Jb83qGqiAGvKwN-Y9jmGe/view?usp=drive_link",
  },
  {
    code: "ENV203",
    name: "Environment and Development",
    dept: "GED",
    faculty: "Mpr",
    year: "2024",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/1_2doj162edbDKccJp3uvSQAcP_eRQXir/view?usp=drive_link",
  },
  {
    code: "MIS107",
    name: "Information System and Computing",
    dept: "GED",
    faculty: "N/A",
    year: "2023",
    provider: null,
    project: null,
    drive:
      "https://drive.google.com/file/d/1jLSK3v27PBsU5z0GnaMS01T0oO4ANE5N/view?usp=sharing",
  },

  // ---------------- MAT ----------------
  {
    code: "MAT116",
    name: "Pre-Calculus",
    dept: "MAT",
    faculty: "MAlm",
    year: "2023",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/1HQlhUbij9IgLSTKdaAlFtfir9tTJY9z9/view?usp=drive_link",
  },
  {
    code: "MAT120",
    name: "Calculus and Analytic Geometry I",
    dept: "MAT",
    faculty: "MtM",
    year: "2023",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/1dUTaLijLEQiOu4eDdp4ZaQ3SIK5J6FM8/view?usp=drive_link",
  },
  {
    code: "MAT120",
    name: "Calculus and Analytic Geometry I (Spring 2025)",
    dept: "MAT",
    faculty: "kkar",
    year: "2025",
    provider: PROVIDER,
    project: null,
    drive:
      "https://drive.google.com/file/d/1qs5bOxVAgSHCeVGqFE1dmMOHHIGyLcad/view?usp=drive_link",
  },
  {
    code: "MAT125",
    name: "Linear Algebra",
    dept: "MAT",
    faculty: "kkar",
    year: "2024",
    provider: null,
    project: null,
    drive:
      "https://drive.google.com/file/d/1Dg2NANdUPQanG4ksEEgqAMgTNZSm14On/view?usp=drive_link",
  },
];

if (typeof module !== "undefined") module.exports = { COURSES, PROVIDER };
