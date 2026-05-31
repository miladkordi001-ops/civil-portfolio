/* ==========================================================================
   JavaScript Interactions - Civil Engineering & Management Portfolio
   Logic Features: Navigation Scroll, Mobile Menu, Project Filters,
                   Dynamic Structural Estimator, Contact Form Animations,
                   Trilingual Support (EN, DE, FA) with RTL/LTR Switcher.
   ========================================================================== */

// 0. Trilingual Dictionaries
const civilTranslations = {
    en: {
        nav_home: "Home",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_estimator: "Estimator",
        nav_timeline: "Timeline",
        nav_contact: "Contact",
        hero_badge: "M.Sc. Student @ University of Duisburg-Essen",
        hero_title: 'Milad Kordi <br><span class="text-glow">Civil Engineer</span>',
        hero_desc: "Master's student specializing in Construction Management (Baubetrieb) and Economics. Over 5 years of engineering experience including major infrastructure projects (Roghun Dam & Hydropower), technical office operations, and project control.",
        btn_view_projects: "View My Projects",
        btn_contact_me: "Contact Me",
        skills_sub: "Excellence Areas",
        skills_title: "Core Competencies",
        skill_1_title: "Construction Management",
        skill_1_sub: "Baubetrieb & Controlling",
        skill_1_b1: "Project Control & Scheduling (MS Project)",
        skill_1_b2: "Cost Estimation & Controlling",
        skill_1_b3: "Contract Management (BGB / VOB/B)",
        skill_2_title: "Digital Drafting & CAD",
        skill_2_sub: "Engineering Graphics & Design",
        skill_2_b1: "AutoCAD 2D/3D Drafting",
        skill_2_b2: "BIM Modeling (Revit workflows)",
        skill_2_b3: "Photoshop & CorelDraw Graphic Design",
        skill_3_title: "Language Capabilities",
        skill_3_sub: "Bilingual Professional",
        skill_3_b1: "German: C1 (Professional working proficiency)",
        skill_3_b2: "Russian / Tajik: B1 / C1 (Fluent)",
        skill_3_b3: "English: A2 (Technical terminology)",
        skill_3_b4: "Persian: Native",
        skill_4_title: "Structural Engineering",
        skill_4_sub: "Tragwerksplanung",
        skill_4_b1: "Industrial and Civil Buildings (IBB)",
        skill_4_b2: "Concrete & Metal Structures analysis",
        skill_4_b3: "Geodetic surveying and geological assessments",
        proj_sub: "Portfolio",
        proj_title: "Key Projects",
        filter_all: "All Projects",
        filter_mgmt: "Management & Control",
        filter_bim: "BIM & CAD",
        filter_structural: "Structural / Field",
        p1_tag: "Project Control",
        p1_title: "Roghun Dam & Hydropower Project",
        p1_desc: "Served as Technical Office Engineer and Project Control specialist for Maroon Civil Engineers. Managed technical documentation, reporting, and engineering graphics for the Roghun Dam construction in Tajikistan (one of the tallest clay-core dams in the world).",
        p1_link: "Read Case Study",
        p2_tag: "Structural / CAD",
        p2_title: "Industrial & Civil Construction Thesis",
        p2_desc: "Completed structural design and reinforcement calculations for civil buildings, majoring in Industrial and Civil Construction. Performed site calculations, designed structural drawings in AutoCAD, and handled metal frame calculations.",
        p2_link: "View Design Drawings",
        p3_tag: "Spatial Planning",
        p3_title: "Regional Science Research",
        p3_desc: "Conducted academic research in regional science and spatial planning at the Karlsruhe Institute of Technology (KIT). Modeled development frameworks and infrastructure network distributions for regional sustainability.",
        p3_link: "View Research",
        calc_sub: "Engineering Tool",
        calc_title: "Concrete Estimator & Cost Utility",
        calc_in_title: "Structure Parameters",
        lbl_struct_type: "Structure Type",
        opt_slab: "Slab / Foundation Plate",
        opt_beam: "Beam / Column",
        lbl_length: "Length (m)",
        lbl_width: "Width (m)",
        lbl_thickness: "Thickness (m)",
        lbl_thickness_beam: "Height / Depth (m)",
        lbl_grade: "Concrete Grade (Eurocode 2)",
        opt_grade_1: "C20/25 (Standard structural concrete)",
        opt_grade_2: "C25/30 (High durability slab)",
        opt_grade_3: "C30/37 (High load capacity columns)",
        opt_grade_4: "C35/45 (Heavy industrial foundations)",
        lbl_unit_cost: "Estimated Material Cost (€/m³)",
        btn_calc: "Calculate Volume & Costs",
        calc_out_title: "Calculation Outputs",
        res_vol_unit: "m³ of Concrete",
        res_mass_lbl: "Total Material Mass:",
        res_cost_lbl: "Material Cost Estimate:",
        res_strength_lbl: "Characteristic Strength:",
        res_mass_suffix: " tons",
        res_strength_standard: "Standard Strength",
        res_strength_c20: "20 N/mm² (Cylinder) / 25 N/mm² (Cube)",
        res_strength_c25: "25 N/mm² (Cylinder) / 30 N/mm² (Cube)",
        res_strength_c30: "30 N/mm² (Cylinder) / 37 N/mm² (Cube)",
        res_strength_c35: "35 N/mm² (Cylinder) / 45 N/mm² (Cube)",
        calc_disclaimer: '<i class="fa-solid fa-info-circle"></i> Calculation assumes concrete density is 2.5 t/m³ (reinforced). Costs exclude labor, transport, formwork, and reinforcement steel.',
        time_sub: "Milestones",
        time_title: "Education & Career Journey",
        t1_title: "M.Sc. Civil Engineering (Bauingenieurwesen)",
        t1_loc: "Universität Duisburg-Essen, Germany",
        t1_desc: "Specializing in Construction Management (Baubetrieb) and Economics. Focus areas: corporate goals strategy, cost estimation, project development, and controlling.",
        t2_title: "Postgraduate Studies in Spatial Planning",
        t2_loc: "Karlsruhe Institute of Technology (KIT), Germany",
        t2_desc: "Investigated regional development plans, spatial planning parameters, and infrastructure distribution grids.",
        t3_title: "Technical Office Engineer & Project Control",
        t3_loc: "Maroun Bauingenieure, Roghun Dam Project (Tajikistan)",
        t3_desc: "Prepared design specifications, site quantity monitoring reports, and coordinated technical office graphical structures for a major dam and hydropower development.",
        t4_title: "B.Sc. Civil Engineering (Bauingenieurwesen)",
        t4_loc: "Tajik National Technical University, Dushanbe",
        t4_desc: "Specialization: Industrial and Civil Construction (Industrieller und bürgerliches Bauwesen). Finished internships in Geodesy and Geology.",
        t5_title: "Sales Manager",
        t5_loc: "Naghsh Peyvande Omid Construction Company, Iran",
        t5_desc: "Managed client relationships and sales pipelines in the commercial real estate and construction material sector.",
        cont_sub: "Get In Touch",
        cont_title: "Contact & Cooperation",
        cont_info_title: "Milad Kordi",
        cont_info_desc: "Ready for professional engineering opportunities, project controlling roles, or BIM coordination projects in Germany and internationally. Send a message to start working together.",
        form_name_lbl: "Name",
        form_name_placeholder: "Your Name",
        form_email_lbl: "Email Address",
        form_email_placeholder: "name@domain.com",
        form_subj_lbl: "Subject",
        form_subj_placeholder: "Project, Job, Cooperation...",
        form_msg_lbl: "Message",
        form_msg_placeholder: "How can we cooperate?",
        form_submit_btn: "Send Message",
        form_success_title: "Message Sent Successfully!",
        form_success_desc: "Thank you, Milad Kordi will review your message and reply shortly.",
        footer_copy: "&copy; 2026 Milad Kordi. Civil Engineering & Construction Management. All Rights Reserved.",
        footer_tag: "Designed with Premium Glassmorphism & Precise Engineering Aesthetics",
        btn_sending: "Sending..."
    },
    de: {
        nav_home: "Startseite",
        nav_skills: "Kompetenzen",
        nav_projects: "Projekte",
        nav_estimator: "Kalkulator",
        nav_timeline: "Werdegang",
        nav_contact: "Kontakt",
        hero_badge: "M.Sc. Student @ Universität Duisburg-Essen",
        hero_title: 'Milad Kordi <br><span class="text-glow">Bauingenieur</span>',
        hero_desc: "Masterstudent mit den Schwerpunkten Baubetrieb, Projektsteuerung und Bauwirtschaft. Über 5 Jahre Berufserfahrung im Bauwesen, u. a. bei Großinfrastrukturprojekten (Rogun-Staudamm), im technischen Büro und in der Projektsteuerung.",
        btn_view_projects: "Projekte ansehen",
        btn_contact_me: "Kontakt aufnehmen",
        skills_sub: "Kompetenzbereiche",
        skills_title: "Kernkompetenzen",
        skill_1_title: "Baubetrieb & Controlling",
        skill_1_sub: "Projektsteuerung & Bauwirtschaft",
        skill_1_b1: "Projektsteuerung & Terminplanung (MS Project)",
        skill_1_b2: "Baukalkulation & Kostencontrolling",
        skill_1_b3: "Vertragsmanagement (BGB / VOB/B)",
        skill_2_title: "Digitales Zeichnen & CAD",
        skill_2_sub: "Konstruktion & Visualisierung",
        skill_2_b1: "AutoCAD 2D/3D Konstruktion",
        skill_2_b2: "BIM-Modellierung (Revit-Workflows)",
        skill_2_b3: "Photoshop & CorelDraw Grafikdesign",
        skill_3_title: "Sprachen",
        skill_3_sub: "Mehrsprachiges Profil",
        skill_3_b1: "Deutsch: C1 (Verhandlungssicher)",
        skill_3_b2: "Russisch / Tadschikisch: B1 / C1 (Fließend)",
        skill_3_b3: "Englisch: A2 (Fachterminologie)",
        skill_3_b4: "Persisch: Muttersprache",
        skill_4_title: "Tragwerksplanung",
        skill_4_sub: "Baustatik & Konstruktion",
        skill_4_b1: "Industrie- und Hochbau (IBB)",
        skill_4_b2: "Tragwerksanalyse (Beton- & Stahlbau)",
        skill_4_b3: "Geodätische Vermessung & Baugrundbeurteilung",
        proj_sub: "Referenzen",
        proj_title: "Wichtigste Projekte",
        filter_all: "Alle Projekte",
        filter_mgmt: "Projektmanagement",
        filter_bim: "BIM & CAD",
        filter_structural: "Tragwerksplanung",
        p1_tag: "Projektsteuerung",
        p1_title: "Rogun-Staudamm & Wasserkraftwerk",
        p1_desc: "Tätig als Ingenieur im technischen Büro und Spezialist für Projektsteuerung bei Maroon Civil Engineers. Verantwortlich für technische Dokumentation, Berichterstattung und CAD-Zeichnungen beim Bau des Rogun-Staudamms in Tadschikistan (einer der höchsten Erdschüttdämme der Welt).",
        p1_link: "Fallstudie lesen",
        p2_tag: "Tragwerksplanung / CAD",
        p2_title: "Bachelorarbeit: Industrie- und Hochbau",
        p2_desc: "Tragwerksplanung und Bewehrungsberechnungen für Hochbauten mit dem Schwerpunkt Industrie- und Hochbau. Durchführung von statischen Berechnungen vor Ort, Erstellung von Konstruktionszeichnungen in AutoCAD und Stahlrahmenberechnungen.",
        p2_link: "Zeichnungen ansehen",
        p3_tag: "Raumplanung",
        p3_title: "Regionalwissenschaftliche Forschung",
        p3_desc: "Akademische Forschung im Bereich Regionalwissenschaften und Raumplanung am Karlsruher Institut für Technologie (KIT). Modellierung von Entwicklungsrahmen und Infrastrukturnetzverteilungen für regionale Nachhaltigkeit.",
        p3_link: "Forschung ansehen",
        calc_sub: "Ingenieur-Tool",
        calc_title: "Beton- & Kostenkalkulator",
        calc_in_title: "Bauteilparameter",
        lbl_struct_type: "Bauteiltyp",
        opt_slab: "Bodenplatte / Fundament",
        opt_beam: "Träger / Stütze",
        lbl_length: "Länge (m)",
        lbl_width: "Breite (m)",
        lbl_thickness: "Dicke (m)",
        lbl_thickness_beam: "Höhe / Tiefe (m)",
        lbl_grade: "Betongüte (Eurocode 2)",
        opt_grade_1: "C20/25 (Normalbeton)",
        opt_grade_2: "C25/30 (Hochfester Plattenbeton)",
        opt_grade_3: "C30/37 (Hochbelastbarer Stützenbeton)",
        opt_grade_4: "C35/45 (Schwerer Industriebeton)",
        lbl_unit_cost: "Geschätzte Materialkosten (€/m³)",
        btn_calc: "Volumen & Kosten berechnen",
        calc_out_title: "Berechnungsergebnisse",
        res_vol_unit: "m³ Beton",
        res_mass_lbl: "Gesamtgewicht Material:",
        res_cost_lbl: "Geschätzte Materialkosten:",
        res_strength_lbl: "Charakteristische Festigkeit:",
        res_mass_suffix: " Tonnen",
        res_strength_standard: "Standardfestigkeit",
        res_strength_c20: "20 N/mm² (Zylinder) / 25 N/mm² (Würfel)",
        res_strength_c25: "25 N/mm² (Zylinder) / 30 N/mm² (Würfel)",
        res_strength_c30: "30 N/mm² (Zylinder) / 37 N/mm² (Würfel)",
        res_strength_c35: "35 N/mm² (Zylinder) / 45 N/mm² (Würfel)",
        calc_disclaimer: '<i class="fa-solid fa-info-circle"></i> Die Berechnung basiert auf einer Rohdichte von 2,5 t/m³ für Stahlbeton. Kosten exklusive Schalung, Bewehrungsstahl, Transport und Einbau.',
        time_sub: "Meilensteine",
        time_title: "Werdegang & Ausbildung",
        t1_title: "M.Sc. Bauingenieurwesen",
        t1_loc: "Universität Duisburg-Essen, Deutschland",
        t1_desc: "Vertiefung: Baubetrieb und Baubetriebswirtschaft. Schwerpunkte: Unternehmensziele, Arbeitsvorbereitung, Kostenrechnung und Controlling.",
        t2_title: "Aufbaustudium Raumplanung",
        t2_loc: "Karlsruher Institut für Technologie (KIT), Deutschland",
        t2_desc: "Untersuchung von Regionalentwicklungsplänen, raumordnerischen Parametern und Infrastrukturverteilungsnetzen.",
        t3_title: "Projektingenieur & Projektsteuerung",
        t3_loc: "Maroun Bauingenieure, Rogun-Staudamm (Tadschikistan)",
        t3_desc: "Erstellung von Planvorgaben, Baustellen-Mengenermittlung und Koordination der technischen Bürodaten für ein monumentales Talsperrenprojekt.",
        t4_title: "B.Sc. Bauingenieurwesen",
        t4_loc: "Tajik National Technical University, Duschanbe",
        t4_desc: "Spezialisierung: Industrieller und ziviler Hochbau. Absolvierung von Praktika im Bereich Geodäsie und Geologie.",
        t5_title: "Sales Manager",
        t5_loc: "Naghsh Peyvande Omid Baufirma, Iran",
        t5_desc: "Kundenbetreuung und Vertriebssteuerung im Bereich Gewerbeimmobilien und Baustoffe.",
        cont_sub: "Kontakt",
        cont_title: "Kooperation & Anfragen",
        cont_info_title: "Milad Kordi",
        cont_info_desc: "Verfügbar für anspruchsvolle Ingenieuraufgaben, Projektsteuerung oder BIM-Koordination in Deutschland und international. Schreiben Sie eine Nachricht für eine Zusammenarbeit.",
        form_name_lbl: "Name",
        form_name_placeholder: "Ihr Name",
        form_email_lbl: "E-Mail-Adresse",
        form_email_placeholder: "name@domain.com",
        form_subj_lbl: "Betreff",
        form_subj_placeholder: "Projekt, Stelle, Kooperation...",
        form_msg_lbl: "Nachricht",
        form_msg_placeholder: "Wie können wir zusammenarbeiten?",
        form_submit_btn: "Nachricht senden",
        form_success_title: "Nachricht erfolgreich gesendet!",
        form_success_desc: "Vielen Dank! Milad Kordi wird Ihre Nachricht prüfen und sich in Kürze bei Ihnen melden.",
        footer_copy: "&copy; 2026 Milad Kordi. Bauingenieurwesen & Baubetrieb. Alle Rechte vorbehalten.",
        footer_tag: "Entworfen mit modernem Glassmorphismus & präziser Ingenieur-Ästhetik",
        btn_sending: "Wird gesendet..."
    },
    fa: {
        nav_home: "خانه",
        nav_skills: "مهارت‌ها",
        nav_projects: "پروژه‌ها",
        nav_estimator: "تخمین‌گر",
        nav_timeline: "رزومه و سوابق",
        nav_contact: "تماس",
        hero_badge: "دانشجوی کارشناسی ارشد مهندسی عمران @ دانشگاه دویسبورگ-اسن",
        hero_title: 'میلاد کردی <br><span class="text-glow">مهندس عمران</span>',
        hero_desc: "دانشجوی کارشناسی ارشد عمران با گرایش مدیریت ساخت (Baubetrieb) و اقتصاد. دارای بیش از ۵ سال تجربه مهندسی از جمله پروژه سد و نیروگاه برق‌آبی راغون، عملیات دفتر فنی و کنترل پروژه.",
        btn_view_projects: "مشاهده پروژه‌ها",
        btn_contact_me: "ارتباط با من",
        skills_sub: "حوزه‌های تخصص",
        skills_title: "مهارت‌های کلیدی",
        skill_1_title: "مدیریت ساخت و کنترل پروژه",
        skill_1_sub: "Baubetrieb & Controlling",
        skill_1_b1: "کنترل پروژه و برنامه‌ریزی زمان‌بندی (MS Project)",
        skill_1_b2: "برآورد هزینه و کنترل هزینه‌ها (Controlling)",
        skill_1_b3: "مدیریت قراردادهای ساختمانی (قوانین BGB / VOB/B)",
        skill_2_title: "ترسیم دیجیتال و CAD",
        skill_2_sub: "گرافیک مهندسی و طراحی نقشه",
        skill_2_b1: "نقشه‌کشی دو بعدی و سه بعدی AutoCAD",
        skill_2_b2: "مدلسازی اطلاعات ساختمان BIM (روند کاری Revit)",
        skill_2_b3: "طراحی گرافیکی با Photoshop و CorelDraw",
        skill_3_title: "توانایی‌های زبانی",
        skill_3_sub: "پروفایل چندزبانه حرفه‌ای",
        skill_3_b1: "آلمانی: سطح C1 (تسلط کامل کاری)",
        skill_3_b2: "روسی / تاجیکی: سطوح B1 / C1 (روان)",
        skill_3_b3: "انگلیسی: سطح A2 (اصطلاحات تخصصی مهندسی)",
        skill_3_b4: "فارسی: زبان مادری",
        skill_4_title: "مهندسی سازه",
        skill_4_sub: "طراحی و محاسبات سازه",
        skill_4_b1: "طراحی ساختمان‌های صنعتی و مسکونی (IBB)",
        skill_4_b2: "آنالیز سازه‌های بتنی و فلزی",
        skill_4_b3: "نقشه‌برداری ژئودتیک و ارزیابی‌های زمین‌شناسی",
        proj_sub: "نمونه کارها",
        proj_title: "پروژه‌های شاخص",
        filter_all: "همه پروژه‌ها",
        filter_mgmt: "مدیریت و کنترل",
        filter_bim: "BIM و CAD",
        filter_structural: "سازه و کارگاهی",
        p1_tag: "کنترل پروژه",
        p1_title: "پروژه بزرگ سد و نیروگاه راغون",
        p1_desc: "به عنوان مهندس دفتر فنی و متخصص کنترل پروژه برای Maroon Civil Engineers. مدیریت مستندات فنی، گزارش‌دهی و نقشه‌کشی گرافیکی برای ساخت سد راغون در تاجیکستان (یکی از بلندترین سدهای هسته رسی جهان).",
        p1_link: "مطالعه مورد پژوهی",
        p2_tag: "طراحی سازه / CAD",
        p2_title: "پایان‌نامه ساخت ساختمان‌های صنعتی و مسکونی",
        p2_desc: "انجام محاسبات طراحی سازه و میلگردگذاری برای ساختمان‌های عمران با تخصص ساختمان‌های صنعتی و مسکونی. محاسبات میدانی کارگاه، طراحی نقشه‌های سازه در اتوکد و محاسبات اسکلت فلزی.",
        p2_link: "مشاهده نقشه‌های طراحی",
        p3_tag: "برنامه‌ریزی شهری و منطقه‌ای",
        p3_title: "پژوهش‌های برنامه‌ریزی فضایی و منطقه‌ای",
        p3_desc: "انجام تحقیقات علمی در علوم منطقه‌ای و برنامه‌ریزی فضایی در انستیتو فناوری کارلسروهه (KIT). مدلسازی چارچوب‌های توسعه و توزیع شبکه‌های زیرساختی برای پایداری منطقه‌ای.",
        p3_link: "مشاهده پژوهش‌ها",
        calc_sub: "ابزار مهندسی",
        calc_title: "ماشین حساب حجم بتن و تخمین هزینه",
        calc_in_title: "پارامترهای سازه",
        lbl_struct_type: "نوع سازه",
        opt_slab: "دال بتنی / فونداسیون رادیه",
        opt_beam: "تیر بتنی / ستون",
        lbl_length: "طول (متر)",
        lbl_width: "عرض (متر)",
        lbl_thickness: "ضخامت (متر)",
        lbl_thickness_beam: "ارتفاع / عمق (متر)",
        lbl_grade: "رده بتن (بر اساس Eurocode 2)",
        opt_grade_1: "C20/25 (بتن سازه‌ای استاندارد)",
        opt_grade_2: "C25/30 (دال بتنی با دوام بالا)",
        opt_grade_3: "C30/37 (ستون‌های با ظرفیت باربری بالا)",
        opt_grade_4: "C35/45 (فونداسیون‌های صنعتی سنگین)",
        lbl_unit_cost: "هزینه تخمینی مصالح (یورو/مترمکعب)",
        btn_calc: "محاسبه حجم و هزینه‌ها",
        calc_out_title: "خروجی‌های محاسبه",
        res_vol_unit: "مترمکعب بتن",
        res_mass_lbl: "جرم کل مصالح:",
        res_cost_lbl: "هزینه تخمینی مصالح:",
        res_strength_lbl: "مقاومت مشخصه بتن:",
        res_mass_suffix: " تن",
        res_strength_standard: "مقاومت استاندارد",
        res_strength_c20: "۲۰ نیوتن بر میلی‌مترمربع (استوانه) / ۲۵ (مکعب)",
        res_strength_c25: "۲۵ نیوتن بر میلی‌مترمربع (استوانه) / ۳۰ (مکعب)",
        res_strength_c30: "۳۰ نیوتن بر میلی‌مترمربع (استوانه) / ۳۷ (مکعب)",
        res_strength_c35: "۳۵ نیوتن بر میلی‌مترمربع (استوانه) / ۴۵ (مکعب)",
        calc_disclaimer: '<i class="fa-solid fa-info-circle"></i> در محاسبات چگالی بتن مسلح ۲.۵ تن بر مترمکعب فرض شده است. هزینه‌ها شامل نیروی کار، ترابری، قالب‌بندی و میلگرد فولادی نمی‌شود.',
        time_sub: "نقاط عطف",
        time_title: "سفر تحصیلی و شغلی",
        t1_title: "کارشناسی ارشد مهندسی عمران (Bauingenieurwesen)",
        t1_loc: "دانشگاه دویسبورگ-اسن، آلمان",
        t1_desc: "تخصص در مدیریت ساخت (Baubetrieb) و اقتصاد. حوزه‌های تمرکز: استراتژی اهداف شرکت، برآورد هزینه، توسعه پروژه و کنترل پروژه (Controlling).",
        t2_title: "تحصیلات تکمیلی در برنامه‌ریزی شهری و منطقه‌ای",
        t2_loc: "انستیتو فناوری کارلسروهه (KIT)، آلمان",
        t2_desc: "بررسی و مدل‌سازی طرح‌های توسعه منطقه‌ای، پارامترهای برنامه‌ریزی فضایی و شبکه‌های توزیع زیرساختی.",
        t3_title: "مهندس دفتر فنی و کنترل پروژه",
        t3_loc: "Maroun Bauingenieure، پروژه سد راغون (تاجیکستان)",
        t3_desc: "تهیه مشخصات طراحی، گزارش‌های مانیتورینگ مقادیر کارگاه و هماهنگی ساختارهای گرافیکی دفتر فنی برای یک سد بزرگ و نیروگاه برق‌آبی.",
        t4_title: "کارشناسی مهندسی عمران (Bauingenieurwesen)",
        t4_loc: "دانشگاه ملی فنی تاجیکستان، دوشنبه",
        t4_desc: "گرایش: ساختمان‌های صنعتی و مسکونی (Industrieller und bürgerliches Bauwesen). گذراندن دوره‌های کارآموزی ژئودزی و زمین‌شناسی.",
        t5_title: "مدیر فروش",
        t5_loc: "شرکت ساختمانی نقش پیوند امید، ایران",
        t5_desc: "مدیریت ارتباط با مشتریان و خط لوله فروش در حوزه املاک تجاری و مصالح ساختمانی.",
        cont_sub: "ارتباط با من",
        cont_title: "تماس و همکاری",
        cont_info_title: "میلاد کردی",
        cont_info_desc: "آماده برای فرصت‌های مهندسی حرفه‌ای، موقعیت‌های مدیریت ساخت و کنترل پروژه یا مدیریت و هماهنگی بیم (BIM) در آلمان و سراسر جهان. برای شروع همکاری پیام ارسال کنید.",
        form_name_lbl: "نام",
        form_name_placeholder: "نام شما",
        form_email_lbl: "آدرس ایمیل",
        form_email_placeholder: "name@domain.com",
        form_subj_lbl: "موضوع",
        form_subj_placeholder: "پروژه، موقعیت شغلی، همکاری...",
        form_msg_lbl: "پیام",
        form_msg_placeholder: "چگونه می‌توانیم با هم همکاری کنیم؟",
        form_submit_btn: "ارسال پیام",
        form_success_title: "پیام شما با موفقیت ارسال شد!",
        form_success_desc: "با تشکر، میلاد کردی پیام شما را بررسی کرده و به زودی پاسخ خواهد داد.",
        footer_copy: "&copy; ۲۰۲۶ میلاد کردی. مهندسی عمران و مدیریت ساخت. تمامی حقوق محفوظ است.",
        footer_tag: "طراحی شده با زیبایی‌شناسی مدرن شیشه‌ای (Glassmorphism) و دقت مهندسی سازه",
        btn_sending: "در حال ارسال..."
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active Navigation Link on Scroll
        highlightNavLink();
    });

    // 2. Mobile Menu Toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navNavigation = document.getElementById('nav-navigation');
    
    if (mobileNavToggle && navNavigation) {
        mobileNavToggle.addEventListener('click', () => {
            navNavigation.classList.toggle('mobile-open');
            const icon = mobileNavToggle.querySelector('i');
            if (navNavigation.classList.contains('mobile-open')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });
        
        // Close mobile menu when clicking nav items
        const navItems = navNavigation.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navNavigation.classList.remove('mobile-open');
                mobileNavToggle.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }

    // Highlight active link helper
    function highlightNavLink() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-item');
        
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    }

    // 3. Category Filtering for Projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active to current
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                
                if (filter === 'all' || categories.includes(filter)) {
                    // Smooth reveal
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Smooth hide
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 4. Concrete Volume & Cost Estimator (Calculator)
    const structureTypeSelect = document.getElementById('calc-structure-type');
    const labelThickness = document.getElementById('label-thickness');
    
    const inputLength = document.getElementById('calc-length');
    const inputWidth = document.getElementById('calc-width');
    const inputThickness = document.getElementById('calc-thickness');
    const selectConcrete = document.getElementById('calc-concrete-class');
    const inputCost = document.getElementById('calc-unit-cost');
    
    const btnCalculate = document.getElementById('calc-submit-btn');
    
    // Outputs
    const resVolume = document.getElementById('res-volume');
    const resMass = document.getElementById('res-mass');
    const resCost = document.getElementById('res-cost');
    const resStrength = document.getElementById('res-strength');

    // Dynamically update labels based on current language and type
    function updateCalculatorLabels(type) {
        const dict = civilTranslations[currentLang];
        if (type === 'slab') {
            labelThickness.innerText = dict.lbl_thickness;
        } else if (type === 'beam') {
            labelThickness.innerText = dict.lbl_thickness_beam;
        }
    }

    // Adapt label text and default values based on structure type selection
    if (structureTypeSelect) {
        structureTypeSelect.addEventListener('change', () => {
            const type = structureTypeSelect.value;
            if (type === 'slab') {
                inputLength.value = '12.0';
                inputWidth.value = '8.0';
                inputThickness.value = '0.25';
                inputCost.value = '160';
            } else if (type === 'beam') {
                inputLength.value = '6.0';
                inputWidth.value = '0.4';
                inputThickness.value = '0.5';
                inputCost.value = '180';
            }
            updateCalculatorLabels(type);
            performCalculation();
        });
    }

    if (btnCalculate) {
        btnCalculate.addEventListener('click', (e) => {
            e.preventDefault();
            performCalculation();
        });
    }

    function performCalculation() {
        const length = parseFloat(inputLength.value) || 0;
        const width = parseFloat(inputWidth.value) || 0;
        const thickness = parseFloat(inputThickness.value) || 0;
        const unitCost = parseFloat(inputCost.value) || 0;
        const concreteGrade = selectConcrete.value;

        // Formula: Volume = L * W * H
        const volume = length * width * thickness;
        
        // Concrete Density: 2.5 t/m3 (reinforced concrete standard)
        const mass = volume * 2.5;
        
        // Total material cost
        const cost = volume * unitCost;

        // Characteristic Strengths (Eurocode 2: f_ck / f_ck_cube)
        let strengthText = '';
        const dict = civilTranslations[currentLang];
        switch(concreteGrade) {
            case 'C20/25':
                strengthText = dict.res_strength_c20;
                break;
            case 'C25/30':
                strengthText = dict.res_strength_c25;
                break;
            case 'C30/37':
                strengthText = dict.res_strength_c30;
                break;
            case 'C35/45':
                strengthText = dict.res_strength_c35;
                break;
            default:
                strengthText = dict.res_strength_standard;
        }

        // Apply smooth transition values
        animateValue(resVolume, parseFloat(resVolume.innerText), volume, 500, 2);
        animateValue(resMass, parseFloat(resMass.innerText.split(' ')[0]), mass, 500, 2, dict.res_mass_suffix);
        animateValue(resCost, parseFloat(resCost.innerText.replace(/[^\d.]/g, '')), cost, 500, 2, '€', true);
        
        resStrength.innerText = strengthText;
    }

    // Count-up helper animation
    function animateValue(obj, start, end, duration, decimals = 0, suffix = '', prefixSymbol = false) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = progress * (end - start) + start;
            
            let formattedValue = current.toFixed(decimals);
            
            // Format currency if required
            if (prefixSymbol) {
                formattedValue = suffix + parseFloat(formattedValue).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            } else {
                formattedValue = formattedValue + suffix;
            }
            
            obj.innerHTML = formattedValue;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // 5. Contact Form Submission Animation
    const contactForm = document.getElementById('portfolio-contact-form');
    const successAlert = document.getElementById('form-success-alert');

    if (contactForm && successAlert) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulating form sending animation
            const btn = document.getElementById('btn-submit-contact');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${civilTranslations[currentLang].btn_sending}`;
            btn.disabled = true;

            setTimeout(() => {
                // Hide form elements smoothly
                contactForm.style.transition = 'opacity 0.3s ease';
                contactForm.style.opacity = '0';
                
                setTimeout(() => {
                    contactForm.style.display = 'none';
                    successAlert.style.display = 'block';
                }, 300);
            }, 1200);
        });
    }

    // 6. Scroll Reveal Animation (Intersection Observer)
    const animScrollItems = document.querySelectorAll('.animate-on-scroll');
    
    // Add same-class animation properties to other sections
    const sectionsToAnimate = ['#skills', '#projects', '#calculator', '#timeline', '#contact'];
    sectionsToAnimate.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.classList.add('animate-on-scroll');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, {
        threshold: 0.15
    });

    // Observe newly added scroll animations
    document.querySelectorAll('.animate-on-scroll').forEach(item => {
        revealObserver.observe(item);
    });

    // 7. i18n Language Switcher Logic
    function switchLanguage(lang) {
        currentLang = lang;
        const dict = civilTranslations[lang];
        localStorage.setItem('civil_portfolio_lang', lang);

        // Toggle active button style
        document.querySelectorAll('#civil-lang-switcher .lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Set direction & html lang tag
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('lang', lang);
        if (lang === 'fa') {
            htmlElement.setAttribute('dir', 'rtl');
        } else {
            htmlElement.setAttribute('dir', 'ltr');
        }

        // Translate HTML elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Translate placeholders
        const inputName = document.getElementById('form-name');
        if (inputName) inputName.placeholder = dict.form_name_placeholder;
        const inputEmail = document.getElementById('form-email');
        if (inputEmail) inputEmail.placeholder = dict.form_email_placeholder;
        const inputSubj = document.getElementById('form-subject');
        if (inputSubj) inputSubj.placeholder = dict.form_subj_placeholder;
        const txtMsg = document.getElementById('form-message');
        if (txtMsg) txtMsg.placeholder = dict.form_msg_placeholder;

        // Update calculator labels & inputs
        if (structureTypeSelect) {
            updateCalculatorLabels(structureTypeSelect.value);
        }

        // Update calculation outputs immediately
        performCalculation();
    }

    // Bind language buttons
    document.querySelectorAll('#civil-lang-switcher .lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            switchLanguage(selectedLang);
        });
    });

    // Initial language load
    const savedLang = localStorage.getItem('civil_portfolio_lang') || 'en';
    switchLanguage(savedLang);
});
