import { 
  ProductKit, 
  AIAgentDefinition, 
  ResearchDocument, 
  CourseModule, 
  InternationalCourseComparison, 
  ViralScriptConcept,
  SubscriptionPlan
} from '../types';

export const LAB_HERO_IMAGE = '/src/assets/images/crisprmart_biotech_lab_1791488348227.jpg';
export const WHEAT_DROUGHT_IMAGE = '/src/assets/images/crispr_wheat_drought_1791488356752.jpg';
export const VET_DIAGNOSTIC_IMAGE = '/src/assets/images/veterinary_crispr_diagnostic_1791488364490.jpg';
export const AI_AGENT_IMAGE = '/src/assets/images/ai_genomics_agent_1791488373102.jpg';

export const ECOSYSTEM_DOMAINS = [
  {
    id: 'crisprmart',
    domain: 'crisprmart.ir',
    title: 'CRISPR Mart Marketplace',
    titleFa: 'سامانه تجارت زیست‌فناوری کریسپرمارت',
    subtitle: 'Official E-Namad Certified Marketplace',
    description: 'Procurement portal holding verified E-Namad (نماد اعتماد الکترونیکی) for research kits, molecular reagents, veterinary lateral flow strips, and offline PWA suite licenses.',
    complianceBadge: 'E-Namad 2-Star Verified & Biosafety Council Class-I Compliant',
    primaryColor: 'emerald',
    stats: { products: '48 Kits & Reagents', delivery: '24-48h Nationwide via Iran Post / Tipax', trustRating: '4.9/5' }
  },
  {
    id: 'aicrispr',
    domain: 'aicrispr.ir',
    title: 'AI CRISPR Agent Studio',
    titleFa: 'استودیوی ایجنت‌های هوشمند ژنومیک',
    subtitle: 'Dry-Lab Autonomous Agents & sgRNA Intelligence',
    description: 'Autonomous bio-computational agents engineered for complex polyploid Iranian cultivars (Hexaploid wheat, Afshari ovine breeds, Kermanshah drought genomes) with offline PWA export.',
    complianceBadge: 'Zero Data Leakage / Fully Client-Side Offline Engine',
    primaryColor: 'cyan',
    stats: { activeModels: '4 Specialized Agents', offlineCapability: '100% PWA Cached', precision: '99.4% PAM Specificity' }
  },
  {
    id: 'crisprtech',
    domain: 'crisprtech.ir',
    title: 'CRISPR Tech Digital Library',
    titleFa: 'مرکز اسناد و مقالات تخصصی کریسپرتک',
    subtitle: 'Scientific Archive & Biosafety Protocols',
    description: 'Centralized repository of peer-reviewed articles, bilingual bench SOPs, legal biotechnology frameworks under Islamic Republic of Iran biosafety statutes, and research monographs.',
    complianceBadge: 'National Biosafety Secretariat & Ministry of Science Monograph Index',
    primaryColor: 'indigo',
    stats: { documents: '320+ Peer-Reviewed Protocols', accessMode: 'Bilingual FA/EN Open & Subscribed', citationImpact: 'Q1 Biotech Tier' }
  }
];

export const PRODUCT_KITS: ProductKit[] = [
  {
    id: 'kit-01',
    title: 'Hexaploid Wheat Drought sgRNA Golden Gate Assembly Kit',
    titleFa: 'کیت تخصصی سرهم‌بندی گلدن گیت sgRNA گندم نان مقاوم به خشکی',
    domain: 'crisprmart',
    category: 'kits',
    priceToman: 4250000,
    originalPriceToman: 4800000,
    inStock: true,
    leadTimeDays: 2,
    description: 'Complete benchtop molecular assembly kit targeting TaDREB2A and TaWRKY19 genes in Iranian wheat cultivars (Chamran 2, Sirvan, and Pishtaz). Includes BsaI-HF enzyme, T4 ligase, verified sgRNA oligos, and plant transformation control plasmids.',
    specifications: [
      'Target Locus: TaDREB2A (Exon 2) & TaWRKY19',
      'Vector Backbone: pCAMBIA1300-Cas9-Ubiquitin',
      'Reactions: 25 assembly reactions',
      'Storage: -20°C with cold-chain shipping'
    ],
    applications: ['Wheat Drought Tolerance', 'Salinity Adaptation', 'Agronomic Dry-Lab Validation'],
    eNamadApproved: true,
    biosafetyCategory: 'Class-II Research',
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Best Seller',
    image: LAB_HERO_IMAGE
  },
  {
    id: 'kit-02',
    title: 'Veterinary Cas12a Lateral Flow Rapid Diagnostic Strips (Avian & Ruminant)',
    titleFa: 'نوارهای تست سریع تشخیصی دامپزشکی بر پایه کریسپر Cas12a',
    domain: 'crisprmart',
    category: 'diagnostic-strips',
    priceToman: 2850000,
    originalPriceToman: 3200000,
    inStock: true,
    leadTimeDays: 1,
    description: 'Field-deployable isothermal nucleic acid detection system for veterinary clinics and industrial poultry farms. Detects Avian Influenza (H9N2) and Bovine Viral Diarrhea (BVD) within 15 minutes at 37°C without thermocycler equipment.',
    specifications: [
      'Enzyme: Purified LbCas12a nuclease (100 pmol/µL)',
      'Detection Limit: 10 copies/µL target RNA/DNA',
      'Readout: Visual FAM-Biotin immunochromatographic strip',
      'Kit Contents: 50 test cassettes, buffer, extraction lysis swabs'
    ],
    applications: ['Field Poultry Screening', 'Veterinary Quarantine', 'Dairy Herd Biosecurity'],
    eNamadApproved: true,
    biosafetyCategory: 'Diagnostic Only',
    rating: 4.85,
    reviewsCount: 52,
    badge: 'Field Ready',
    image: VET_DIAGNOSTIC_IMAGE
  },
  {
    id: 'kit-03',
    title: 'Pistachio (P. vera) Fungal Wilt Gene Target Oligo & Cas9 Delivery Set',
    titleFa: 'مجموعه الیگو و حامل کریسپر مقاومت به پژمردگی آوندی پسته رفسنجان',
    domain: 'crisprmart',
    category: 'kits',
    priceToman: 5100000,
    inStock: true,
    leadTimeDays: 3,
    description: 'Engineered specifically for Iranian pistachio rootstocks (Badami-Zarand and Qazvini) targeting susceptibility alleles to Verticillium dahliae. Includes pre-annealed crRNA:tracrRNA duplexes and particle bombardment protocol.',
    specifications: [
      'Target Pathogen: Verticillium dahliae & Paecilomyces',
      'Purity: Desalted & HPLC purified oligonucleotides',
      'Host Tolerance: Validated in Kerman & Khorasan cultivars',
      'Protocol: Step-by-step Farsi & English bench handbook'
    ],
    applications: ['Pistachio Agro-Genomics', 'Rootstock Protection', 'Orchard Resilience'],
    eNamadApproved: true,
    biosafetyCategory: 'Class-II Research',
    rating: 4.95,
    reviewsCount: 24,
    badge: 'Specialized',
    image: WHEAT_DROUGHT_IMAGE
  },
  {
    id: 'kit-04',
    title: 'Standalone Offline PWA CRISPR BioSuite License (Annual Pro)',
    titleFa: 'مجوز سالانه نرم‌افزار آفلاین بیوسوئیت کریسپر (نسخه وب اپلیکیشن پیشرو)',
    domain: 'crisprmart',
    category: 'software-license',
    priceToman: 1850000,
    originalPriceToman: 2400000,
    inStock: true,
    leadTimeDays: 0,
    description: 'Instant digital delivery. Fully functional offline Progressive Web App (PWA) with zero internet dependence. Includes local micro-engines for Cas9/Cas12 PAM scanning, GC normalization, off-target scoring, and local FASTA database indexing.',
    specifications: [
      'Engine: 100% Client-Side WebAssembly & Web Worker execution',
      'Offline Storage: Local IndexedDB caching up to 500 MB genome data',
      'Platforms: Chrome, Edge, Safari, Firefox, Android, iOS PWA',
      'Updates: Cryptographically signed local cache refreshes'
    ],
    applications: ['Field Work with Zero Connectivity', 'Confidential Research', 'Sanctions-Immune Dry Lab'],
    eNamadApproved: true,
    biosafetyCategory: 'Class-I Exempt',
    rating: 5.0,
    reviewsCount: 114,
    badge: 'Zero-Latency',
    image: AI_AGENT_IMAGE
  }
];

export const AI_AGENTS: AIAgentDefinition[] = [
  {
    id: 'agent-wheat-polyploid',
    name: 'CasDesigner Hexaploid Agent',
    codeName: 'Triticum-Cas9-v2',
    specialty: 'Hexaploid Wheat & Polyploid Crop sgRNA Specificity',
    description: 'Handles the complex A, B, and D subgenomes of Bread Wheat (Triticum aestivum). Discriminates identical homeologs to execute either tri-genome simultaneous knockouts or single-subgenome precision edits with zero off-target cleavage.',
    targetOrganisms: ['Triticum aestivum (Wheat)', 'Hordeum vulgare (Barley)', 'Pistacia vera (Pistachio)'],
    offlinePwaSupport: true,
    tokenCostPerRun: 15,
    monthlySubscriptionTier: 'pro',
    capabilities: [
      'Subgenome A/B/D Homology Cross-Reference',
      'Secondary Hairpin Free-Energy (ΔG) Computation',
      'Non-Transgenic RNP Delivery Parameter Optimization',
      '1-Click Export to crisprmart.ir Oligo Order'
    ],
    systemPromptPreset: 'You are CasDesigner Hexaploid Agent, specializing in polyploid cereal genomics for arid Iranian agronomy. Focus on PAM optimization (SpCas9 NGG and Cas12a TTTV), avoiding off-target mutations across wheat chromosomes 1A to 7D.',
    sampleInput: 'Target locus TaDREB2A exon 2 for Chamran 2 cultivar drought tolerance. Find top 3 non-overlapping sgRNAs.',
    sampleOutput: 'Identified 3 top-scoring sgRNAs: sgRNA-1 (TaDREB2A-pos142, GC 55%, On-target 94.2, PAM: AGG), sgRNA-2 (TaDREB2A-pos218, GC 60%, On-target 91.8, PAM: CGG), sgRNA-3 (TaDREB2A-pos305, GC 50%, On-target 89.6, PAM: TGG). Zero off-target hits in D-subgenome homeologs.'
  },
  {
    id: 'agent-biopat-iran',
    name: 'BioPat-IR Compliance & Licensing Agent',
    codeName: 'BioPat-Legal-IR',
    specialty: 'National Biosafety & Iranian E-Commerce Patent Law',
    description: 'Navigates the Iranian National Biosafety Act (قانون ملی ایمنی زیستی), Ministry of Agriculture Jihad guidelines, and E-Namad requirements for gene-edited non-transgenic agricultural products and commercialization.',
    targetOrganisms: ['All Agronomic & Animal Biotechnology Innovations'],
    offlinePwaSupport: true,
    tokenCostPerRun: 10,
    monthlySubscriptionTier: 'free',
    capabilities: [
      'SDN-1 / SDN-2 vs GMO Classification under Iranian Law',
      'E-Namad Biotechnology Selling Permissions Audit',
      'National Intellectual Property Center (اداره ثبت اختراعات) Filing Templates',
      'Advertising Code Compliance Verification (Health & Agro)'
    ],
    systemPromptPreset: 'You are BioPat-IR, expert legal analyst in Iranian biotechnology law, E-Namad e-commerce regulations, and National Biosafety Secretariat statutory requirements.',
    sampleInput: 'Does an SDN-1 Cas9 point deletion in Iranian wheat require GMO environmental release clearance under current Iranian law?',
    sampleOutput: 'Under the Iranian National Biosafety Council (شورای ملی ایمنی زیستی) modern regulatory guidelines, SDN-1 edits lacking foreign DNA fragments (transgene-free, RNP delivered) are classified as conventional mutagenesis products rather than GMOs, significantly shortening regulatory field trial approval from 7 years to 18 months.'
  },
  {
    id: 'agent-vet-diagnostic',
    name: 'VetDiag CRISPR Probe Synthesizer',
    codeName: 'VetCas12-Sensor-IR',
    specialty: 'Cas12a / Cas13a Isothermal Lateral Flow & SHERLOCK Design',
    description: 'Designs custom crRNA sensors and quench-fluorophore cleavage probes for livestock pathogens prevalent in Iran, including Foot-and-Mouth Disease (FMD) and Brucella abortus.',
    targetOrganisms: ['Bovine', 'Ovine (Afshari Sheep)', 'Poultry (Broiler/Layer)'],
    offlinePwaSupport: true,
    tokenCostPerRun: 20,
    monthlySubscriptionTier: 'pro',
    capabilities: [
      'Collateral Cleavage Velocity Modeling',
      'Multiplex crRNA Compatibility Verification',
      'RPA / LAMP Primer Co-Design',
      'Direct Synthesis Quote Generation for crisprmart.ir'
    ],
    systemPromptPreset: 'You are VetDiag CRISPR Agent, calculating collateral ssDNA trans-cleavage rates for LbCas12a diagnostics in livestock herd health surveillance across Iran.',
    sampleInput: 'Design a Cas12a crRNA sensor for Brucella abortus IS711 insertion sequence to run on lateral flow paper strips.',
    sampleOutput: 'Probe crRNA-IS711-v1 selected. PAM site: TTTA at nt 412. Collateral trans-cleavage activity predicted at 98.2% max velocity. Cross-reactivity with B. melitensis eliminated via 3-bp mismatch in the seed region (nt 1-8 from PAM).'
  }
];

export const RESEARCH_DOCUMENTS: ResearchDocument[] = [
  {
    id: 'doc-01',
    title: 'CRISPR-Cas9 Mediated Mutagenesis of TaDREB2 in Hexaploid Wheat for Enhanced Osmotic Stress Tolerance in Arid Iranian Plateaus',
    titleFa: 'جهش‌زایی هدفمند ژن TaDREB2 در گندم نان با استفاده از کریسپر جهت ارتقای مقاومت به تنش اسمزی در فلات ایران',
    authors: ['Farhadi, M.', 'Rezaei, K.', 'Mirzaei, S.', 'Ahmadi, B.'],
    journal: 'Iranian Journal of Crop Biotechnology & Gene Editing',
    year: 2025,
    doi: '10.22059/ijcbge.2025.1094',
    category: 'agricultural-genetics',
    abstractEn: 'Drought and soil salinization in central Iran jeopardize cereal self-sufficiency. Here we report an efficient transgene-free RNP delivery of Cas9 into hexaploid wheat immature embryos targeting the negative regulatory domain of TaDREB2A. Regenerated T1 lines exhibited a 34% increase in photosynthetic rate under -1.2 MPa water deficit.',
    abstractFa: 'خشکسالی و شوری خاک در فلات مرکزی ایران خودکفایی غلات را به مخاطره انداخته است. در این پژوهش با تحویل کمپلکس RNP فاقد ترانس‌ژن، دامنه تنظیمی ژن TaDREB2A جهش‌یافته و خطوط نسلی T1 تا ۳۴٪ حفظ فتوسنتز در تنش شدید آب را نشان دادند.',
    keyFindings: [
      '34% higher grain yield retention under drought conditions',
      'Zero transgenic marker integration confirmed via whole-genome sequencing',
      'Completely compliant with Iranian Biosafety Secretariat SDN-1 guidelines'
    ],
    offlineAvailable: true,
    downloadUrl: '/docs/CRISPR_Wheat_TaDREB2_Iran.pdf'
  },
  {
    id: 'doc-02',
    title: 'Field-Deployable Cas12a Lateral Flow Biosensor for Rapid Detection of Avian Influenza Virus (H9N2) in Commercial Flocks across Northern Iran',
    titleFa: 'زیست‌حسگر نوار تشخیصی سریع Cas12a برای پایش ویروس آنفلوآنزای پرندگان (H9N2) در مزارع پرورشی شمال کشور',
    authors: ['Ghasemi, H.', 'Soltani, E.', 'Ebrahimi, N.'],
    journal: 'Archives of Razi Vaccine and Serum Research Institute',
    year: 2025,
    doi: '10.22092/ari.2025.8821',
    category: 'veterinary-crispr',
    abstractEn: 'Avian influenza causes severe economic damage to Iranian poultry industries. We developed an RT-RPA-Cas12a lateral flow assay capable of identifying viral HA gene copies at room temperature within 18 minutes with 100% concordance against laboratory RT-qPCR.',
    abstractFa: 'آنفلوآنزای طیور خسارات سنگینی به صنعت پرورش طیور کشور وارد می‌کند. در این طرح، روش تلفیقی ایزوترمال RT-RPA و کریسپر Cas12a طراحی شد که در کمتر از ۱۸ دقیقه بدون نیاز به ترموسایکلر با دقت ۱۰۰٪ همخوان با RT-qPCR عمل می‌کند.',
    keyFindings: [
      '18-minute detection window without electrical grid or thermocycler',
      'Cost per strip 75% lower than imported commercial diagnostic assays',
      'Commercialized through crisprmart.ir with full veterinary health clearances'
    ],
    offlineAvailable: true,
    downloadUrl: '/docs/Cas12a_Avian_Flu_Mazandaran.pdf'
  },
  {
    id: 'doc-03',
    title: 'Legal and Regulatory Roadmap for Commercialization of Gene-Edited Agricultural Products under Iranian E-Commerce and Biosafety Statutes',
    titleFa: 'نقشه راه حقوقی و نظارتی تجاری‌سازی محصولات ژنتیکی ویرایش‌شده در چارچوب قوانین تجارت الکترونیک و ایمنی زیستی ایران',
    authors: ['Karimi, D.', 'Mousavi, T.', 'Rahmani, H.'],
    journal: 'National Journal of Bioethics and Biotechnology Law',
    year: 2024,
    doi: '10.22034/njbbl.2024.4102',
    category: 'regulatory-biosafety',
    abstractEn: 'A comprehensive operational manual evaluating the convergence of E-Namad digital trust seals, Ministry of Industry licensing, and National Biosafety Council protocols for launching online biotechnology marketplaces and diagnostic tool suites.',
    abstractFa: 'راهنمای اجرایی برای کسب‌وکارهای زیست‌فناوری آنلاین، تبیین نحوه دریافت اینماد، مجوزهای وزارت صنعت، معدن و تجارت و الزامات نظارتی دبیرخانه شورای ملی ایمنی زیستی برای فروش کیت‌ها و خدمات تحلیلی.',
    keyFindings: [
      'Clarification of advertising constraints: Prohibition of misleading clinical claims',
      'Streamlined E-Namad 2-Star compliance checklist for online biological reagent sales',
      'Digital rights management and data residency within national network infrastructure'
    ],
    offlineAvailable: true,
    downloadUrl: '/docs/Iranian_Biotech_Ecommerce_Law.pdf'
  }
];

export const INTERNATIONAL_COURSE_COMPARISONS: InternationalCourseComparison[] = [
  {
    courseName: 'Principles of Biochemistry and Genome Editing Masterclass',
    institution: 'Harvard University / edX',
    platform: 'edX',
    costUsd: 299,
    iranianAccessibilityScore: 2.8,
    strengths: [
      'Top-tier Ivy League academic prestige',
      'Rigorous mathematical modeling of enzyme kinetics',
      'High-quality animated 3D protein crystal structures'
    ],
    criticalLimitationsForIran: [
      'Payment Gateway Blockade: Iranian students cannot pay $299 USD via Shetab or local banks.',
      'Sanction-Restricted Certificates: edX frequently withholds identity-verified certificates for Iranian IPs.',
      'Zero Practical Wet-Lab Link: Pure dry video lectures with zero access to physical reagents in Iran.',
      'Disregard for Arid Polyploid Crops: Focuses on human medical therapeutics; ignores Iranian wheat or pistachio agro-genomics.'
    ]
  },
  {
    courseName: 'CRISPR Technology: Applications and Innovations',
    institution: 'UC Berkeley / Innovative Genomics Institute',
    platform: 'Coursera',
    costUsd: 199,
    iranianAccessibilityScore: 3.2,
    strengths: [
      'Foundational curriculum directly from Nobel laureate Doudna lab ecosystem',
      'In-depth review of Cas9, Cas12a, Cas13, and prime editing chemistries',
      'Cutting-edge therapeutic case studies'
    ],
    criticalLimitationsForIran: [
      'Zero Offline PWA Capability: Requires high-speed stable streaming inaccessible during Iranian network throttling.',
      'Prohibitive Pricing in Tomans: $199 USD equals over 18 million Tomans—exceeding two months of a graduate student stipend.',
      'Language Barrier: Fast-paced technical English without localized terminology or Farsi companion documentation.',
      'Unusable Laboratory References: Protocols rely on ThermoFisher/NEB reagents that cannot be legally imported into Iran.'
    ]
  },
  {
    courseName: 'Synthetic Biology & Agricultural Gene Editing',
    institution: 'Wageningen University / edX',
    platform: 'edX',
    costUsd: 249,
    iranianAccessibilityScore: 3.5,
    strengths: [
      'Strong European agronomic agronomy context',
      'Focus on crop disease resistance and climate resilience',
      'Plant tissue culture transformation overviews'
    ],
    criticalLimitationsForIran: [
      'European Regulatory Bias: Focuses entirely on EU GMO Directive rather than Iranian National Biosafety laws.',
      'Lack of Localized Cultivars: Teaches diploid models (Arabidopsis, Rice) rather than hexaploid Iranian bread wheat or date palms.',
      'Zero Micro-Tools or PWA Integration: No downloadable offline computational tools or ready-to-order local oligo packages.'
    ]
  }
];

export const IRANIAN_MARKET_PAIN_POINTS = [
  {
    id: 'pain-1',
    title: 'The Reagent Embargo & The Wet-Lab Chasm',
    titleFa: 'تحریم تامین آنزیم‌ها و شکاف عمیق میان تئوری و آزمایشگاه عملی',
    description: 'Iranian researchers have solid theoretical knowledge from universities, but 90% of students graduate without ever executing a real CRISPR reaction because importing Cas9 enzymes or commercial vectors takes 6–9 months through third-party intermediaries at 400% inflated prices.',
    solution: 'crisprmart.ir provides locally stocked, E-Namad verified Golden Gate assembly kits and Cas12 reagents with 24-48h courier delivery and payment directly through Iranian Shetab bank cards in Tomans.'
  },
  {
    id: 'pain-2',
    title: 'Payment Gateway Blockade & Cert Exclusions',
    titleFa: 'انسداد درگاه‌های ارزی بین‌المللی و محرومیت از گواهینامه‌های معتبر',
    description: 'Coursera and edX require Visa/Mastercard, charging $200–$400 USD (~18–36 million Tomans). Furthermore, OFAC compliance frequently leads to sudden account terminations or refusal to verify Iranian national IDs.',
    solution: 'Our ecosystem operates with transparent Toman pricing, Shetab/Shaparak banking integration, and provides cryptographically signed verifiable certificates recognized by national agricultural and veterinary faculties.'
  },
  {
    id: 'pain-3',
    title: 'Network Throttling & Lack of Offline Dry-Lab Tools',
    titleFa: 'اختلالات اینترنت و عدم دسترسی به ابزارهای بیوانفورماتیک پایدار',
    description: 'Cloud bioinformatics tools (Benchling, NCBI, CRISPOR) frequently hang or timeout when Iranian internet connectivity faces severe latency or international gateway throttling, halting university laboratory work.',
    solution: 'Our tools are built as Progressive Web Apps (PWA) with 100% offline client-side WebAssembly computation. Once cached, sgRNA design, PAM calculation, and off-target screening run with zero internet connection in remote research fields.'
  },
  {
    id: 'pain-4',
    title: 'Polyploid Crop Complexity Neglected by Global Courses',
    titleFa: 'پیچیدگی ژنوم پلی‌پلوئید محصولات بومی ایران و غفلت دوره‌های خارجی',
    description: 'International courses focus almost exclusively on simple diploid human or Arabidopsis models. Bread wheat grown in Iran is hexaploid (AABBDD, 17 Gb genome), requiring specialized multi-homeolog targeting algorithms that foreign platforms do not teach.',
    solution: 'aicrispr.ir features custom AI agents specifically trained on hexaploid wheat (TaDREB2, TaWRKY) and Iranian livestock genetics (Afshari sheep fecundity genes) to guarantee biological accuracy.'
  },
  {
    id: 'pain-5',
    title: 'Regulatory Hesitation & Biosafety Law Ignorance',
    titleFa: 'ترس و بلاتکلیفی حقوقی در تجاری‌سازی محصولات دست‌ورزی‌شده در ایران',
    description: 'Biotech researchers fear their innovations will be banned under anti-GMO laws because they do not understand the difference between transgenesis and SDN-1 gene editing under the Iranian National Biosafety Council regulations.',
    solution: 'crisprtech.ir provides clear legal templates, compliance checklists for non-transgenic classification, and guidance on securing E-Namad trust seals for biotech micro-SaaS and diagnostic products.'
  }
];

export const PROPOSED_COURSE_MODULES: CourseModule[] = [
  {
    number: 1,
    title: 'Foundations of CRISPR-Cas Systems & Hexaploid Cereal Architecture',
    titleFa: 'مبانی سیستم‌های کریسپر و ساختار ژنومی غلات هگزاپلوئید',
    durationHours: 8,
    learningOutcomes: [
      'Master the molecular biochemistry of Cas9, Cas12a, and Cas13 nucleases',
      'Deconstruct the 17 Gb hexaploid genome of Bread Wheat across subgenomes A, B, and D',
      'Identify target loci responsible for drought tolerance (TaDREB2A) and salinity (TaHKT1;5)'
    ],
    practicalDeliverable: 'Genome coordinate mapping and homeolog alignment matrix for Iranian cultivar Chamran-2',
    dryLabTool: 'aicrispr.ir Polyploid Align Engine (Offline PWA)',
    wetLabKitLink: 'crisprmart.ir Starter Wheat Genomic DNA Extraction Kit'
  },
  {
    number: 2,
    title: 'Dry-Lab sgRNA Design, Secondary Structure & AI Off-Target Screening',
    titleFa: 'طراحی بیوانفورماتیک sgRNA، ساختار ثانویه و فیلتر خطاهای آف‌تارگت با هوش مصنوعی',
    durationHours: 10,
    learningOutcomes: [
      'Calculate GC content, seed-region penalties, and minimum free energy (ΔG) for sgRNA folding',
      'Execute client-side offline PAM scanning using the PWA BioSuite',
      'Filter and eliminate off-target cleavage across 21 wheat chromosomes'
    ],
    practicalDeliverable: 'Validated forward/reverse oligonucleotide design ready for direct synthesis order',
    dryLabTool: 'aicrispr.ir CasDesigner-IR Agent (Offline)',
    wetLabKitLink: 'crisprmart.ir Verified Oligo Duplex Synthesis Service'
  },
  {
    number: 3,
    title: 'Golden Gate Assembly & Ribonucleoprotein (RNP) Vector Engineering',
    titleFa: 'سرهم‌بندی گلدن گیت و مهندسی وکتورهای کمپلکس ریبونوکلئوپروتئین (RNP)',
    durationHours: 12,
    learningOutcomes: [
      'Design Type IIS restriction enzyme overhangs (BsaI/BsmBI) for scarless cloning',
      'Assemble polycistronic tRNA-gRNA cassettes for multiplex trait targeting',
      'Formulate in vitro transcribed sgRNA with recombinant Cas9 protein for non-transgenic delivery'
    ],
    practicalDeliverable: 'Assembled plasmid verified via restriction digest and Sanger sequencing chromatogram',
    dryLabTool: 'crisprtech.ir Interactive Golden Gate Simulator',
    wetLabKitLink: 'crisprmart.ir Golden Gate Assembly Master Mix Kit'
  },
  {
    number: 4,
    title: 'Agro-Trait Engineering: Drought, Salinity & Pistachio Fungal Resistance',
    titleFa: 'مهندسی صفات کشاورزی: خشکی، شوری و مقاومت به بیماری‌های پسته و گندم',
    durationHours: 14,
    learningOutcomes: [
      'Target transcription factors modulating stomatal aperture and osmotic adjustment',
      'Knock out susceptibility genes (S-genes) to fungal pathogens in Pistacia vera rootstocks',
      'Measure physiological resilience (water use efficiency, photosynthetic stability) in callus regenerants'
    ],
    practicalDeliverable: 'Callus regeneration protocol and PCR-RFLP genotyping assay for targeted insertion/deletion (InDel)',
    dryLabTool: 'aicrispr.ir Agro-Trait Yield Simulator',
    wetLabKitLink: 'crisprmart.ir Plant Callus Culture & Particle Bombardment Pack'
  },
  {
    number: 5,
    title: 'Veterinary CRISPR: Cas12a/Cas13 Isothermal Rapid Diagnostic Strips',
    titleFa: 'کریسپر در دامپزشکی: نوارهای تشخیصی سریع ایزوترمال Cas12a و Cas13',
    durationHours: 10,
    learningOutcomes: [
      'Harness the collateral non-specific single-stranded DNase activity of LbCas12a',
      'Coupling Recombinase Polymerase Amplification (RPA) with CRISPR sensors for 37°C isothermal testing',
      'Manufacture lateral flow test strips with FAM-Biotin reporters for Avian Influenza and Bovine BVD'
    ],
    practicalDeliverable: 'Field-validated 15-minute test strip showing visible test line at 10 copies/µL sensitivity',
    dryLabTool: 'aicrispr.ir VetDiag Sensor Synthesizer',
    wetLabKitLink: 'crisprmart.ir Cas12a Lateral Flow Cassette Pack (50 tests)'
  },
  {
    number: 6,
    title: 'Iranian Biosafety Law, E-Namad Commercialization & IP Patent Protection',
    titleFa: 'قوانین ایمنی زیستی ایران، اخذ نماد اعتماد الکترونیکی و تجاری‌سازی مالکیت فکری',
    durationHours: 8,
    learningOutcomes: [
      'Prepare regulatory dossier for the Iranian National Biosafety Council to confirm SDN-1 status',
      'Secure E-Namad 2-Star digital trust seal for selling biotech tools and diagnostic packages online',
      'Draft national patent claims protecting novel guide RNAs and diagnostic formulations in Iran'
    ],
    practicalDeliverable: 'Complete regulatory submission file and commercialization compliance audit ready for E-Namad verification',
    dryLabTool: 'crisprtech.ir BioPat Compliance Dossier Generator',
    wetLabKitLink: 'crisprmart.ir Institutional Commercialization Consulting Package'
  }
];

export const VIRAL_SCRIPTS: ViralScriptConcept[] = [
  {
    id: 'script-wheat-drought',
    topicTitle: 'How CRISPR Can Save Iranian Wheat from Central Plateau Drought',
    topicTitleFa: 'چگونه قیچی ژنتیکی کریسپر نان سفره ایرانی را از خشکسالی نجات می‌دهد؟',
    targetAudience: 'Farmers, Agri-Tech Students, Biology Enthusiasts, General Iranian Public',
    persianMetaphor: 'کاروانسراهای کویر و ذخیره قطره‌های آب، نان سنگک و برکت سفره ایرانی',
    hookEn: 'Why could 80% of central Iran\'s wheat fields wither in the next 5 years? But scientists found a microscopic pair of scissors that saves every drop of water!',
    hookFa: 'چرا ۸۰ درصد گندم‌زارهای فلات ایران تا پنج سال دیگه در خطر نابودین؟ ولی دانشمندان با یک قیچی نامرئی، راه زنده موندن گندم در بیابون رو پیدا کردن!',
    problemEn: 'From Isfahan to Fars, groundwater is drying up. Traditional wheat needs tons of water, and bread prices are climbing. Conventional breeding takes 12 years—we don’t have that time.',
    problemFa: 'از اصفهان تا فارس و خوزستان، سفره‌های آب زیرزمینی دارن خشک میشن. گندم معمولی روزبه‌روز تشنه‌تره و نان سنگک سفره‌هامون گرون‌تر! اصلاح سنتی بذر هم ۱۲ سال طول می‌کشه... ولی ما وقت نداریم!',
    solutionEn: 'Enter CRISPR! Not a GMO, not foreign DNA. We just edit one single "thirst switch" gene (TaDREB2) in native Iranian wheat. The plant naturally locks in moisture like a cactus while producing full golden grain with 40% less water.',
    solutionFa: 'راه‌حل چیه؟ کریسپر! نه تراریخته‌ست، نه ژن خارجی وارد گیاه میشه. فقط کافیه ژن تنظیم‌کننده عطش (TaDREB2) در گندم بومی ایرانی با دقت نانومتری فعال بشه. بوته گندم با ۴۰٪ آب کمتر، خوشه‌های طلایی سنگین می‌ده!',
    ctaEn: 'Want to design this gene in 3 minutes on your own phone without internet? Go to aicrispr.ir for free offline AI tools, and get the lab testing kit on crisprmart.ir with full E-Namad trust!',
    ctaFa: 'می‌خوای همین الان حتی بدون اینترنت این ژن رو روی گوشیت طراحی کنی؟ برو توی aicrispr.ir با هوش مصنوعی رایگان طراحی کن، و کیت آزمایشگاهیش رو با نماد اعتماد الکترونیکی از crisprmart.ir تهیه کن!',
    visualDirections: [
      {
        timestamp: '0:00 - 0:03',
        visual: 'Close-up of parched, cracked earth in central Iran. Dramatic camera zoom into a single golden wheat stalk that stays vibrant green.',
        textOverlay: '«خطر بیابان‌زایی برای نان ایران!»',
        audioCue: 'Sudden deep bass drop, ticking clock heartbeat effect'
      },
      {
        timestamp: '0:03 - 0:15',
        visual: 'Fast montage: Dry riverbed of Zayandeh Rood, baker taking out hot Sangak bread, farmer wiping sweat under blazing desert sun.',
        textOverlay: 'آب کمه، وقت نداریم! ۱۲ سال یا ۱ سال؟',
        audioCue: 'Tense ambient synthesizer, rapid whoosh sound effects'
      },
      {
        timestamp: '0:15 - 0:35',
        visual: '3D glowing animation of DNA double helix. A clean laser scalpel (CRISPR-Cas9) snips one tiny letter without adding foreign genes. Wheat roots grow deep into dry soil.',
        textOverlay: 'قیچی هوشمند CRISPR: نه تراریخته، بلکه جهش دقیق!',
        audioCue: 'Crisp electrical laser slice sound, uplifting energetic beat kick-in'
      },
      {
        timestamp: '0:35 - 0:45',
        visual: 'Split screen: Left side shows withered wild wheat, right side shows lush heavy golden ears of gene-edited Iranian Chamran cultivar with yield metrics.',
        textOverlay: '۴۰٪ صرفه‌جویی در آب + ۳۴٪ افزایش عملکرد',
        audioCue: 'Upbeat techno-synth crescendo'
      },
      {
        timestamp: '0:45 - 1:00',
        visual: 'Creator holds smartphone showing aicrispr.ir offline PWA interface, then shows official crisprmart.ir box with verified E-Namad badge and QR code.',
        textOverlay: 'همین الان طراحی کن: aicrispr.ir | کیت رسمی: crisprmart.ir',
        audioCue: 'Punchy call-to-action chime, memorable brand sonic logo'
      }
    ]
  },
  {
    id: 'script-pistachio-rot',
    topicTitle: 'Stopping Rafsanjan Pistachio Fungal Wilt with Precision Gene Editing',
    topicTitleFa: 'پایان کابوس پژمردگی پسته رفسنجان با شلیک مولکولی کریسپر',
    targetAudience: 'Orchard Owners, Agricultural Investors, Biotech Students',
    persianMetaphor: 'طلای سبز ایران در چنگال قارچ پنهان، زنده کردن باغ‌های اجدادی',
    hookEn: 'Why are centuries-old pistachio trees in Rafsanjan drying up overnight? A microscopic soil fungus is stealing billions in exports, but this Iranian lab solved it.',
    hookFa: 'چرا درختان کهنسال پسته رفسنجان یک‌شبه خشک میشن؟ قارچ خاکزی داره میلیاردها تومان صادرات طلای سبز رو می‌سوزونه، اما راه حلش زیر میکروسکوپه!',
    problemEn: 'Chemical fungicides no longer work. Once Verticillium infects the xylem, the tree is doomed. Whole orchards across Kerman and Khorasan are cut down.',
    problemFa: 'سموم شیمیایی دیگه اثری ندارن! وقتی قارچ وارد آوندهای درخت پسته بشه، کار تمومه. باغداران مجبور میشن درختان ۵۰ ساله رو از ریشه دربیارن!',
    solutionEn: 'With CRISPR, researchers turned off the specific root receptor gene that the fungus uses as a doorway. The pistachio tree becomes totally invisible to the fungus without chemical sprays!',
    solutionFa: 'با کریسپر، پژوهشگران ایرانی دروازه ورود قارچ (ژن گیرنده آوندی) رو قفل کردن. درخت پسته در برابر بیماری کاملاً نفوذناپذیر میشه، بدون حتی یک قطره سم شیمیایی!',
    ctaEn: 'Order the validated pistachio CRISPR delivery set on crisprmart.ir and consult our AI agro-agent on aicrispr.ir today.',
    ctaFa: 'کیت تخصصی و الیگوهای مقاوم‌سازی پسته رو با مجوز اینماد از crisprmart.ir بگیرید و مقالاتش رو در crisprtech.ir مطالعه کنید!',
    visualDirections: [
      {
        timestamp: '0:00 - 0:03',
        visual: 'Dramatic aerial drone shot of vast Rafsanjan pistachio orchards, abruptly cutting to a wilting tree branch with blackened vessels.',
        textOverlay: '«خطر مرگ طلای سبز ایران!»',
        audioCue: 'Sharp sting effect, tense cinematic rumble'
      },
      {
        timestamp: '0:03 - 0:20',
        visual: 'Macro footage of fungal hyphae choking root tissue under a microscope. Farmer looking at withered pistachio clusters.',
        textOverlay: 'قارچ آوندی: سموم شیمیایی دیگر پاسخگو نیستند',
        audioCue: 'Fast suspense percussion'
      },
      {
        timestamp: '0:20 - 0:42',
        visual: 'Microscopic 3D animation showing Cas9 neutralizing the receptor gene. Plant tissue regenerates healthy sap flow.',
        textOverlay: 'قفل کردن دروازه نفوذ بیماری با دقت کریسپر',
        audioCue: 'High-tech activation hum, inspiring musical resolve'
      },
      {
        timestamp: '0:42 - 1:00',
        visual: 'Healthy green pistachio clusters in sunlight. Screen recording of crisprmart.ir store page showing the research kit with E-Namad seal.',
        textOverlay: 'خرید کیت از crisprmart.ir | مقالات علمی در crisprtech.ir',
        audioCue: 'Warm energetic outro chords'
      }
    ]
  },
  {
    id: 'script-avian-flu',
    topicTitle: 'Saving Iranian Poultry: 10-Minute CRISPR Strip Test for Bird Flu in Mazandaran',
    topicTitleFa: 'نجات مرغداری‌های کشور: تست ۱۰ دقیقه‌ای آنفلوآنزای طیور با کاغذ کریسپری',
    targetAudience: 'Veterinarians, Poultry Farmers, Livestock Industry Leaders',
    persianMetaphor: 'سنگر بهداشتی در برابر طوفان ویروس در تالاب‌های شمال',
    hookEn: 'How can a single drop of chicken saliva and a 50,000 Toman paper strip stop a multi-billion Toman poultry disaster in just 10 minutes?',
    hookFa: 'چطور با یک قطره بزاق مرغ و یک تکه کاغذ ۵۰ هزار تومانی، جلوی نابودی میلیاردها تومان سرمایه مرغداری رو در ۱۰ دقیقه بگیریم؟',
    problemEn: 'Avian flu strikes without warning. By the time lab PCR results arrive 3 days later, 50,000 birds are infected and quarantined.',
    problemFa: 'آنفلوآنزای فوق‌حاد پرندگان بی‌صدا میاد. تا جواب آزمایشگاه PCR بعد ۳ روز بیاد، کل گله ۵۰ هزارتایی آلوده شده و معدوم میشه!',
    solutionEn: 'Our Cas12a lateral flow strip works right inside the poultry house. Dip the swab, wait 10 minutes, and see the purple line appear with 99.8% molecular accuracy!',
    solutionFa: 'کیت کاغذی کریسپر Cas12a داخل خود مرغداری کار می‌کنه. بدون برق، بدون دستگاه گران‌قیمت. در ۱۰ دقیقه خط بنفش رو ببینید با دقت ۹۹.۸٪!',
    ctaEn: 'Get veterinary test cassettes directly from crisprmart.ir with full E-Namad guarantee and nationwide express delivery.',
    ctaFa: 'بسته‌های تشخیصی آماده را از crisprmart.ir سفارش بدید و پروتکل‌های فنی را در crisprtech.ir مشاهده کنید.',
    visualDirections: [
      {
        timestamp: '0:00 - 0:03',
        visual: 'Red alarm light flashing inside modern poultry farm. A veterinarian holding a small diagnostic strip in hand.',
        textOverlay: '«تست ۱۰ دقیقه‌ای نجات مرغداری!»',
        audioCue: 'Emergency siren pulse dropping into rapid rhythmic beat'
      },
      {
        timestamp: '0:03 - 0:18',
        visual: 'Vet taking sample with a soft swab. Dropping buffer into a tiny vial without any centrifuge or thermocycler.',
        textOverlay: 'بدون نیاز به دستگاه PCR و آزمایشگاه تخصصی',
        audioCue: 'Dynamic driving techno pace'
      },
      {
        timestamp: '0:18 - 0:40',
        visual: 'Strip placed on bench: two sharp purple lines appear crisply within seconds. Close-up of Cas12a molecular detection graphic.',
        textOverlay: 'حسگر مولکولی Cas12a: سریع‌تر، ارزان‌تر، دقیق‌تر',
        audioCue: 'Satisfying positive chime'
      },
      {
        timestamp: '0:40 - 1:00',
        visual: 'App on phone checking batch verification QR code. Verified crisprmart.ir logistics box arriving with refrigerated seal.',
        textOverlay: 'سفارش آنلاین با اینماد: crisprmart.ir',
        audioCue: 'Upbeat concluding flourish'
      }
    ]
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'plan-free',
    name: 'Researcher Freemium',
    nameFa: 'پژوهشگر آزاد (رایگان)',
    priceTomanMonthly: 0,
    priceTomanAnnual: 0,
    description: 'Perfect for undergraduate biology and veterinary students exploring CRISPR guide design and reading public research articles.',
    targetUser: 'Students & Independent Learners',
    features: [
      'Basic Cas9 PAM (NGG) scanning tool',
      'Access to 3 AI Agent queries per month',
      'Read public research papers on crisprtech.ir',
      'Bilingual community discussion forum access',
      'Downloadable course syllabus and study guides'
    ],
    apiTokensPerMonth: 25,
    pwaOfflineAccess: false,
    crisprmartKitDiscountPct: 0
  },
  {
    id: 'plan-pro',
    name: 'Professional Laboratory PWA',
    nameFa: 'حرفه‌ای آزمایشگاهی (اشتراک ویژه PWA)',
    priceTomanMonthly: 1850000,
    priceTomanAnnual: 18500000, // 2 months free
    description: 'The premier choice for university laboratories, private plant breeding centers, and veterinary diagnostic clinics requiring offline speed.',
    targetUser: 'Graduate Researchers, Lab Managers & Breeders',
    popular: true,
    features: [
      '100% Offline PWA BioSuite with client-side WebAssembly execution',
      'Hexaploid Wheat & Pistachio specialized AI Agent access',
      'Cas12a & Cas13a diagnostic probe design studio',
      '500 AI Agent bio-compute runs per month',
      '10% direct discount on all physical kits at crisprmart.ir',
      'Verifiable cryptographic course certificate of completion',
      'Dedicated telephone and Telegram technical support'
    ],
    apiTokensPerMonth: 500,
    pwaOfflineAccess: true,
    crisprmartKitDiscountPct: 10
  },
  {
    id: 'plan-enterprise',
    name: 'Commercial Agri-Enterprise',
    nameFa: 'سازمانی و هلدینگ کشاورزی',
    priceTomanMonthly: 8900000,
    priceTomanAnnual: 89000000,
    description: 'For corporate seed breeders, poultry conglomerates, pharmaceutical companies, and university faculties seeking custom workflows.',
    targetUser: 'Agro-Holdings, Seed Companies, Universities',
    features: [
      'Multi-seat license (up to 15 concurrent team members)',
      'Unlimited offline PWA deployments with private local DB sync',
      'Priority synthesis turnaround for oligos and Cas9 master mixes',
      'Custom fine-tuned AI Agent trained on proprietary cultivar sequences',
      '20% institutional discount on bulk physical orders on crisprmart.ir',
      'Official Iranian Biosafety Secretariat Dossier drafting assistance',
      'Official corporate VAT tax invoice (صورتحساب رسمی ارزش افزوده)'
    ],
    apiTokensPerMonth: 5000,
    pwaOfflineAccess: true,
    crisprmartKitDiscountPct: 20
  }
];

export const LEGAL_COMPLIANCE_INFO = {
  eNamadStarRating: 2,
  eNamadCode: 'ENAMAD-98214-CRISPRMART-IR',
  registrationNumber: 'Reg-584920-Tehran',
  nationalId: '14012938472',
  ministryOfIndustryApproval: 'Approved under E-Commerce Law of the Islamic Republic of Iran',
  biosafetySecretariatStatus: 'Compliant with National Biosafety Council Statute (Articles 2, 4, 7)',
  advertisingCodeStatus: 'Strict adherence to Food & Drug Administration (سازمان غذا و دارو) guidelines: Zero unverified clinical claims, research/veterinary labeling only.',
  hostingInfrastructure: 'National Information Network (NIN) local servers with SSL/TLS 256-bit encryption',
  paymentGateway: 'Shaparak (شاپرک) authorized routing through Bank Mellat & Saman Bank'
};
