export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  whatWeDeliver: string[];
  benefits: ServiceBenefit[];
  whoNeedsThis: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  tagline: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'hr-consulting',
    title: 'HR Consulting',
    shortTitle: 'HR Consulting',
    description:
      'Strategic human resource solutions that align people with business goals — from policy design to talent acquisition.',
    tagline: 'Build the workforce that drives your business forward.',
    services: [
      {
        slug: 'hr-strategy-development',
        title: 'HR Strategy Development',
        tagline: 'Align your people strategy with your business direction.',
        overview:
          'A well-defined HR strategy is the foundation of a high-performing organisation. MEDSS works with your leadership team to audit your current HR function, identify capability gaps, and design a strategic roadmap that links workforce planning to business objectives. Whether you are scaling up, entering new markets, or restructuring, we ensure your HR function is positioned to deliver measurable results.\n\nOur approach is grounded in Malaysian employment law, industry benchmarking, and practical execution — not just theory. We produce actionable frameworks your managers can implement immediately.',
        whatWeDeliver: [
          'HR function audit and gap analysis',
          'Strategic HR roadmap (12–36 months)',
          'Workforce planning model aligned to business targets',
          'KPI and performance measurement framework',
          'HR policy architecture review',
          'Presentation-ready deliverables for leadership sign-off',
        ],
        benefits: [
          {
            title: 'Strategic alignment',
            description: 'HR decisions connected directly to business KPIs and growth plans.',
          },
          {
            title: 'Reduced talent risk',
            description: 'Proactive workforce planning prevents critical capability shortfalls.',
          },
          {
            title: 'Leadership confidence',
            description: 'Clear HR roadmap gives directors and managers a shared direction.',
          },
        ],
        whoNeedsThis:
          'Companies scaling rapidly, undergoing restructuring, entering new markets, or with an HR function that has grown reactively without a strategic foundation.',
      },
      {
        slug: 'hr-technology-solutions',
        title: 'HR Technology Solutions',
        tagline: 'Choose and implement the right HRMS for your organisation.',
        overview:
          'Manual HR processes create errors, compliance risk, and unnecessary administrative burden. MEDSS helps you evaluate, select, and implement Human Resource Management Systems (HRMS) and Human Capital Management (HCM) platforms that match your operational scale and budget.\n\nWe are vendor-neutral — our recommendations are based on your specific needs, not commissions. From payroll integration and leave management to performance tracking and analytics dashboards, we ensure your HR technology investment delivers real efficiency gains.',
        whatWeDeliver: [
          'Current-state process mapping and pain-point identification',
          'HRMS requirements specification document',
          'Vendor evaluation and shortlisting (3 options with comparison)',
          'Implementation project management support',
          'Data migration and go-live assistance',
          'Manager and staff training sessions',
        ],
        benefits: [
          {
            title: 'Time savings',
            description: 'Automate payroll, leave approvals, and reporting — freeing HR for strategic work.',
          },
          {
            title: 'Compliance confidence',
            description: 'Statutory reporting (PCB, EPF, SOCSO) handled accurately and on time.',
          },
          {
            title: 'Data-driven decisions',
            description: 'Real-time dashboards for headcount, turnover, and productivity metrics.',
          },
        ],
        whoNeedsThis:
          'SMEs moving off spreadsheets, growing companies needing integrated HR data, and organisations with manual payroll or leave management processes.',
      },
      {
        slug: 'workplace-policies-compliance',
        title: 'Workplace Policies and Compliance',
        tagline: 'Employment Act compliant policies that protect your business.',
        overview:
          'Malaysian employment law has undergone significant changes, including major amendments to the Employment Act 1955 in 2022. MEDSS reviews your existing policies and procedures against current legal requirements and best practice, then drafts or updates your employee handbook, HR manual, and standard operating procedures.\n\nProper policies reduce your exposure to unfair dismissal claims, Industrial Court referrals, and DOSH or JTKSM penalties — while giving employees clear, fair rules to work by.',
        whatWeDeliver: [
          'Employment Act 2022 compliance audit',
          'Employee handbook drafting and updating',
          'HR procedures manual (hiring to exit)',
          'Disciplinary and grievance procedure design',
          'Leave policy alignment (maternity, paternity, flexible work)',
          'Employment contract templates (executive, non-executive, contract)',
        ],
        benefits: [
          {
            title: 'Legal protection',
            description: 'Documented policies are your first line of defence in tribunal or court proceedings.',
          },
          {
            title: 'Consistency',
            description: 'All managers apply the same standards — reducing favouritism complaints.',
          },
          {
            title: 'Employee clarity',
            description: 'Staff know exactly what is expected, reducing misunderstandings and disputes.',
          },
        ],
        whoNeedsThis:
          'All Malaysian employers — especially those who have never had a formal HR audit, are growing beyond 50 employees, or have recently experienced employee disputes.',
      },
      {
        slug: 'labour-manpower-planning',
        title: 'International Labour and Manpower Planning',
        tagline: 'Compliant workforce planning for local and foreign talent.',
        overview:
          'Managing foreign worker quotas, levy payments, permit renewals, and regulatory compliance is a complex and time-sensitive responsibility. MEDSS provides end-to-end advisory for Malaysian employers who depend on migrant labour — covering JTKSM requirements, sector-specific quotas, and levy management.\n\nWe also support local manpower planning: aligning your headcount, skills, and succession pipeline to 3–5 year business projections.',
        whatWeDeliver: [
          'Foreign worker quota analysis and application advisory',
          'Levy compliance and management guidance',
          'Permit renewal process support',
          'Manpower planning model for 1–5 year projections',
          'Skills gap and training needs analysis',
          'Organisational structure review and recommendations',
        ],
        benefits: [
          {
            title: 'Regulatory compliance',
            description: 'Avoid JTKSM penalties and immigration violations with proactive management.',
          },
          {
            title: 'Workforce predictability',
            description: 'Know your headcount needs 12–24 months in advance.',
          },
          {
            title: 'Cost control',
            description: 'Optimise levy spend and avoid over or under-hiring.',
          },
        ],
        whoNeedsThis:
          'Manufacturing, construction, agriculture, and hospitality businesses relying on foreign workers, and any organisation planning significant headcount changes.',
      },
      {
        slug: 'talent-acquisition-recruitment',
        title: 'Talent Acquisition and Recruitment',
        tagline: 'Hire better candidates, faster and more consistently.',
        overview:
          'A structured recruitment process directly impacts the quality of your workforce. MEDSS designs and improves your end-to-end talent acquisition function — from job analysis and sourcing strategy to structured interviews and onboarding — so every hiring decision is evidence-based and legally defensible.\n\nWe can also support specific high-volume or senior-level hiring campaigns as an outsourced recruitment partner.',
        whatWeDeliver: [
          'Job analysis and competency-based job description templates',
          'Recruitment process mapping and SOP',
          'Interview question bank (competency and behavioural)',
          'Candidate assessment and scoring framework',
          'Offer and negotiation process guidelines',
          '30/60/90-day onboarding programme design',
        ],
        benefits: [
          {
            title: 'Better hires',
            description: 'Structured interviews and scoring reduce bias and improve prediction of success.',
          },
          {
            title: 'Faster time-to-fill',
            description: 'A defined process eliminates delays from unclear ownership or ad-hoc steps.',
          },
          {
            title: 'Lower attrition',
            description: 'Good onboarding increases retention in the critical first 90 days.',
          },
        ],
        whoNeedsThis:
          'Companies experiencing high turnover, scaling hiring volumes, or relying on unstructured interviews and gut-feel selection.',
      },
      {
        slug: 'compensation-benchmarking',
        title: 'Compensation and Benchmarking',
        tagline: 'Pay structures that attract talent and control cost.',
        overview:
          'Paying below market rates drives turnover. Paying above market without structure creates cost inefficiency and internal inequity. MEDSS conducts market benchmarking against Malaysian salary surveys and industry data, then designs grading systems, pay bands, and incentive schemes that are both competitive and financially sustainable.\n\nWe ensure your compensation framework complies with statutory minimums and supports your talent strategy.',
        whatWeDeliver: [
          'Market salary benchmarking (by role, level, industry)',
          'Job grading and job evaluation framework',
          'Pay band design and salary range setting',
          'Variable pay and incentive scheme design',
          'Benefits review and competitiveness analysis',
          'Compensation communication toolkit for managers',
        ],
        benefits: [
          {
            title: 'Talent retention',
            description: 'Competitive pay bands reduce flight risk for key performers.',
          },
          {
            title: 'Internal equity',
            description: 'Consistent job grading eliminates unfair pay complaints.',
          },
          {
            title: 'Cost control',
            description: 'Pay bands prevent ad-hoc salary escalation during negotiations.',
          },
        ],
        whoNeedsThis:
          'Companies preparing for headcount growth, experiencing pay-related attrition, or with legacy salary structures that have grown inconsistent over time.',
      },
      {
        slug: 'employee-relations-conflict-resolution',
        title: 'Employee Relations and Conflict Resolution',
        tagline: 'Resolve workplace disputes before they reach the Industrial Court.',
        overview:
          'Employee relations issues — from disciplinary matters and domestic inquiries to constructive dismissal claims — can be costly and damaging if handled incorrectly. MEDSS provides advisory support and direct facilitation for IR cases, ensuring your processes follow the Employment Act and Industrial Relations Act requirements.\n\nWe also train your managers and HR team in conducting domestic inquiries, managing performance issues, and handling grievances — so your team is equipped to handle disputes internally and correctly.',
        whatWeDeliver: [
          'Domestic inquiry (DI) facilitation and advisory',
          'Show cause and warning letter drafting',
          'Grievance procedure design and mediation support',
          'Industrial Court advisory and preparation support',
          'Manager training: disciplinary process and IR fundamentals',
          'Employee relations policy and procedure documentation',
        ],
        benefits: [
          {
            title: 'Legal compliance',
            description: 'Correct procedures protect you from Industrial Court awards and reinstatement orders.',
          },
          {
            title: 'Manager capability',
            description: 'Trained managers handle early-stage issues before they escalate.',
          },
          {
            title: 'Workplace harmony',
            description: 'Fair, consistent processes maintain employee trust.',
          },
        ],
        whoNeedsThis:
          'Any employer facing disciplinary issues, high grievance rates, or unfair dismissal risks — especially those without a dedicated HR team.',
      },
      {
        slug: 'succession-planning',
        title: 'Succession Planning',
        tagline: 'Ensure business continuity by building your leadership pipeline.',
        overview:
          'Over-reliance on a few key individuals is one of the most common and dangerous vulnerabilities for Malaysian SMEs and family businesses. MEDSS works with your leadership team to identify critical roles, assess internal talent readiness, and build structured development plans that prepare successors at every level.\n\nOur succession planning framework integrates with your performance management and learning and development functions to create a sustainable leadership pipeline.',
        whatWeDeliver: [
          'Critical role identification and succession risk mapping',
          'Talent assessment and readiness evaluation (9-box methodology)',
          'Individual development plans (IDPs) for high-potential employees',
          'Succession planning policy and governance framework',
          'Knowledge transfer planning for key role vacancies',
          'Leadership pipeline dashboard and review cycle design',
        ],
        benefits: [
          {
            title: 'Business continuity',
            description: 'Critical operations are not disrupted when key people resign, retire, or are promoted.',
          },
          {
            title: 'Talent retention',
            description: 'High-potential employees stay when they see a clear path to advancement.',
          },
          {
            title: 'Stakeholder confidence',
            description: 'Investors and boards see a management team with depth and resilience.',
          },
        ],
        whoNeedsThis:
          'Family businesses managing generational transitions, SMEs dependent on founder-directors, and corporations preparing for executive retirements or restructuring.',
      },
    ],
  },
  {
    slug: 'management-system',
    title: 'Management System Consulting',
    shortTitle: 'Management Systems',
    description:
      'ISO certification and management system implementation to raise quality, safety, and operational standards across your organisation.',
    tagline: 'Achieve certification. Build systems that last.',
    services: [
      {
        slug: 'iso-9001',
        title: 'ISO 9001:2015 Quality Management Systems',
        tagline: 'Achieve ISO 9001 certification and embed a culture of quality.',
        overview:
          "ISO 9001:2015 is the world's most recognised quality management standard. Certification signals to customers, procurement teams, and regulators that your organisation consistently meets customer and regulatory requirements. MEDSS guides you through the full certification journey — from gap analysis and documentation to internal audit readiness and certification body liaison.\n\nWe focus on building a practical QMS that your team owns and maintains, not just a paper system built to pass the audit.",
        whatWeDeliver: [
          'Gap analysis against ISO 9001:2015 requirements',
          'QMS documentation (quality manual, procedures, work instructions)',
          'Process mapping and risk-based thinking framework',
          'Internal audit programme design and conduct',
          'Management review facilitation',
          'Corrective action and continual improvement system setup',
          'Certification body selection and audit preparation',
        ],
        benefits: [
          {
            title: 'Customer confidence',
            description: 'ISO 9001 certification is a prerequisite for many tenders and procurement contracts.',
          },
          {
            title: 'Process efficiency',
            description: 'Documented, standardised processes reduce errors and rework.',
          },
          {
            title: 'Competitive advantage',
            description: 'Differentiate from uncertified competitors in B2B markets.',
          },
        ],
        whoNeedsThis:
          'Manufacturers, service providers, and contractors targeting government tenders, GLCs, or multinational supply chains that require ISO 9001 certification.',
      },
      {
        slug: 'iso-45001',
        title: 'ISO 45001:2018 Occupational Health and Safety',
        tagline: 'Build a certified OH&S management system that protects your people.',
        overview:
          "ISO 45001:2018 is the international standard for Occupational Health and Safety Management Systems (OHSMS), replacing OHSAS 18001. Certification demonstrates your commitment to worker safety and helps satisfy DOSH, client, and regulatory requirements in Malaysia.\n\nMEDSS supports organisations in building a risk-based OHSMS that integrates with existing management systems and meets the requirements of the Occupational Safety and Health Act 1994.",
        whatWeDeliver: [
          'ISO 45001 gap analysis and compliance review',
          'Hazard identification, risk assessment and control (HIRARC)',
          'OH&S documentation suite (manual, procedures, safe work instructions)',
          'Legal register and compliance obligation tracking',
          'Emergency preparedness and response planning',
          'Internal auditor training and audit programme',
          'Certification audit preparation and support',
        ],
        benefits: [
          {
            title: 'Worker protection',
            description: 'Systematic risk controls reduce incidents, injuries, and fatalities.',
          },
          {
            title: 'Regulatory compliance',
            description: 'Demonstrates due diligence to DOSH and satisfies client contractor requirements.',
          },
          {
            title: 'Reduced liability',
            description: 'Documented safety management reduces legal exposure in incident investigations.',
          },
        ],
        whoNeedsThis:
          'Manufacturers, construction firms, oil and gas contractors, and logistics operators required to demonstrate safety management to clients or regulators.',
      },
      {
        slug: 'iso-14001',
        title: 'ISO 14001:2015 Environmental Management Systems',
        tagline: 'Manage your environmental impact and achieve EMS certification.',
        overview:
          "ISO 14001:2015 provides a framework for organisations to manage environmental responsibilities systematically. As sustainability requirements grow across Malaysian supply chains — particularly for export markets and multinational customers — EMS certification is increasingly a commercial necessity.\n\nMEDSS designs an Environmental Management System that meets ISO 14001 requirements while aligning with DOE regulations and your organisation's sustainability commitments.",
        whatWeDeliver: [
          'Environmental aspect and impact identification and evaluation',
          'ISO 14001 gap analysis',
          'EMS documentation suite (policy, manual, procedures)',
          'Environmental legal register and compliance monitoring',
          'Environmental objectives and performance metrics',
          'Internal audit programme for EMS',
          'Certification preparation and body liaison',
        ],
        benefits: [
          {
            title: 'Supply chain access',
            description: 'Many MNC and export customers require ISO 14001 from their suppliers.',
          },
          {
            title: 'Regulatory readiness',
            description: 'Systematic compliance tracking reduces DOE penalty risk.',
          },
          {
            title: 'Cost reduction',
            description: 'Identifying waste and energy use inefficiencies typically delivers measurable savings.',
          },
        ],
        whoNeedsThis:
          'Manufacturers, chemical handlers, and service providers whose customers require environmental certification or who face DOE scrutiny.',
      },
      {
        slug: 'integrated-management-systems',
        title: 'Integrated Management Systems',
        tagline: 'Combine ISO 9001, 45001 and 14001 into one unified system.',
        overview:
          "Running separate management systems for quality, safety, and environment creates duplication, confusion, and audit fatigue. An Integrated Management System (IMS) consolidates ISO 9001, ISO 45001, and ISO 14001 into a single coherent framework — sharing common processes, documentation, and internal audit cycles.\n\nMEDSS designs IMS frameworks that eliminate redundancy while maintaining full compliance with each standard's requirements.",
        whatWeDeliver: [
          'IMS architecture design and document integration plan',
          'Unified policy, manual and procedures documentation',
          'Combined risk register (quality, safety, environmental)',
          'Integrated internal audit programme',
          'Consolidated management review process',
          'Staff training on the integrated system',
          'Multi-standard certification coordination',
        ],
        benefits: [
          {
            title: 'Reduced overhead',
            description: 'One audit cycle, one document control system, one management review.',
          },
          {
            title: 'Consistency',
            description: 'Common processes for corrective actions, audits, and objectives across all standards.',
          },
          {
            title: 'Faster certification',
            description: 'Combined audit scope reduces cost and time for multi-standard certification.',
          },
        ],
        whoNeedsThis:
          'Organisations already certified in one ISO standard looking to add others, or those pursuing multiple certifications simultaneously.',
      },
      {
        slug: 'tapa-consultancy',
        title: 'TAPA Consultancy',
        tagline: 'Achieve TAPA FSR or TSR certification for your facility or transport operation.',
        overview:
          'The Transported Asset Protection Association (TAPA) sets security standards for supply chains handling high-value freight. TAPA Facility Security Requirements (FSR) and Trucking Security Requirements (TSR) are mandatory for many logistics and warehousing providers serving technology, pharmaceutical, and electronics sectors.\n\nMEDSS supports Malaysian logistics and warehousing companies through the TAPA requirements assessment, gap remediation, and certification process.',
        whatWeDeliver: [
          'TAPA FSR/TSR gap assessment against current facility and transport operations',
          'Security improvement action plan with prioritised remediation steps',
          'Physical security, CCTV, and access control specification support',
          'Security procedure documentation (TAPA-compliant SOPs)',
          'Staff security awareness training',
          'TAPA audit preparation and mock assessment',
        ],
        benefits: [
          {
            title: 'Customer access',
            description: 'TAPA certification is a prerequisite for handling high-value freight from major shippers.',
          },
          {
            title: 'Cargo loss reduction',
            description: 'TAPA-compliant controls systematically reduce theft and tampering.',
          },
          {
            title: 'Insurance benefits',
            description: 'Certified facilities may qualify for improved cargo insurance terms.',
          },
        ],
        whoNeedsThis:
          'Freight forwarders, 3PLs, warehousing operators, and trucking companies handling high-value electronics, pharmaceuticals, or luxury goods.',
      },
      {
        slug: 'authorized-economic-operator',
        title: 'Authorized Economic Operator Advisory',
        tagline: 'Streamline customs clearance with AEO authorisation.',
        overview:
          'The Authorized Economic Operator (AEO) programme, administered by Royal Malaysian Customs (RMC), provides approved traders with expedited customs clearance, reduced examination rates, and access to mutual recognition arrangements with other countries.\n\nMEDSS supports importers, exporters, and logistics providers through the AEO application process — from eligibility assessment and supply chain security gap analysis to documentation preparation and customs engagement.',
        whatWeDeliver: [
          'AEO eligibility assessment and readiness evaluation',
          'Supply chain security self-assessment against AEO criteria',
          'Internal controls review (customs compliance, financial solvency, security)',
          'AEO application documentation preparation',
          'Staff training on AEO obligations and customs compliance',
          'Liaison support with Royal Malaysian Customs during review process',
        ],
        benefits: [
          {
            title: 'Faster clearance',
            description: 'AEO-approved shipments are prioritised at customs — reducing dwell time and storage costs.',
          },
          {
            title: 'Reduced examinations',
            description: 'Lower physical inspection rates reduce cargo delays and handling costs.',
          },
          {
            title: 'Global recognition',
            description: 'AEO status is mutually recognised by trading partners, facilitating international trade.',
          },
        ],
        whoNeedsThis:
          'Regular importers and exporters, customs brokers, freight forwarders, and warehouse operators with significant customs interaction volumes.',
      },
      {
        slug: 'gdp-medical-devices',
        title: 'Good Distribution Practice for Medical Devices',
        tagline: 'GDP-MD compliance for medical device distributors in Malaysia.',
        overview:
          'Good Distribution Practice for Medical Devices (GDP-MD) is a mandatory requirement for medical device distributors registered with the Medical Device Authority (MDA) in Malaysia. Non-compliance can result in licence cancellation and enforcement action.\n\nMEDSS supports medical device distributors in building GDP-MD compliant quality systems, preparing for MDA inspections, and maintaining ongoing compliance as the regulatory landscape evolves.',
        whatWeDeliver: [
          'GDP-MD gap assessment against MDA requirements',
          'Quality Management System documentation for distribution',
          'Temperature and cold chain management procedures',
          'Product recall and return procedure design',
          'Staff training on GDP-MD requirements and handling',
          'Mock MDA inspection preparation',
          'CAPA system for non-conformances',
        ],
        benefits: [
          {
            title: 'Regulatory compliance',
            description: 'Maintain your MDA establishment licence and avoid enforcement actions.',
          },
          {
            title: 'Patient safety',
            description: 'Proper distribution controls ensure product integrity throughout the supply chain.',
          },
          {
            title: 'Audit readiness',
            description: 'Documented systems allow you to demonstrate compliance confidently during MDA inspections.',
          },
        ],
        whoNeedsThis:
          'Medical device importers, distributors, and wholesalers registered or applying for establishment licences with the Medical Device Authority Malaysia.',
      },
      {
        slug: 'smeta-rba',
        title: 'SMETA and RBA Support',
        tagline: 'Prepare for SMETA and RBA audits from your global customers.',
        overview:
          'Sedex Members Ethical Trade Audit (SMETA) and Responsible Business Alliance (RBA) audits are commonly required by multinational buyers to verify ethical labour practices, health and safety, environmental responsibility, and business ethics across their supply chains.\n\nMEDSS prepares Malaysian suppliers for these audits — conducting pre-assessments, identifying corrective actions, and ensuring your documented practices match on-the-ground operations.',
        whatWeDeliver: [
          'SMETA (2-pillar or 4-pillar) pre-assessment and gap analysis',
          'RBA self-assessment questionnaire (SAQ) support',
          'Labour practice review (wages, working hours, forced labour, freedom of association)',
          'Health and safety compliance check',
          'Documentation preparation and corrective action planning',
          'Management system alignment with SMETA/RBA criteria',
          'Audit preparation coaching for management and workers',
        ],
        benefits: [
          {
            title: 'Buyer qualification',
            description: 'Pass SMETA/RBA audits required by MNC customers to maintain supply contracts.',
          },
          {
            title: 'Ethical risk reduction',
            description: 'Identify and remediate labour and safety practices before they become regulatory issues.',
          },
          {
            title: 'ESG readiness',
            description: 'Demonstrate supply chain responsibility to investors and stakeholders.',
          },
        ],
        whoNeedsThis:
          'Malaysian manufacturers and suppliers with MNC customers requiring SMETA or RBA compliance as a condition of doing business.',
      },
    ],
  },
  {
    slug: 'security',
    title: 'Security Consulting',
    shortTitle: 'Security Consulting',
    description:
      'Comprehensive security advisory services for facilities, supply chains, and electronic security systems.',
    tagline: 'Protect your people, assets, and operations.',
    services: [
      {
        slug: 'security-incident-investigation',
        title: 'Security Incident Investigation Analysis',
        tagline: 'Understand what happened, why, and how to prevent recurrence.',
        overview:
          'When a security incident occurs — whether theft, intrusion, workplace violence, or supply chain compromise — the quality of the investigation determines whether you learn from it or experience it again. MEDSS conducts structured security incident investigations using forensic methodology: preserving evidence, interviewing witnesses, identifying root causes, and producing reports that can withstand legal or insurance scrutiny.\n\nWe also provide post-incident analysis and recommendations that address systemic vulnerabilities, not just isolated events.',
        whatWeDeliver: [
          'Incident scene documentation and evidence preservation guidance',
          'Structured witness interview methodology and facilitation',
          'Root cause analysis (RCA) using security-specific frameworks',
          'Incident investigation report (suitable for insurance, legal, and management purposes)',
          'Corrective and preventive action (CAPA) recommendations',
          'Security improvement action plan based on findings',
        ],
        benefits: [
          {
            title: 'Legal defensibility',
            description: 'Professional investigation reports withstand scrutiny from police, insurers, and courts.',
          },
          {
            title: 'Recurrence prevention',
            description: 'Root cause analysis targets the real vulnerabilities — not just surface symptoms.',
          },
          {
            title: 'Insurance support',
            description: 'Documented investigations support loss claims and demonstrate due diligence.',
          },
        ],
        whoNeedsThis:
          'Any organisation that has experienced a significant security incident and needs an objective, professional investigation beyond what internal staff can provide.',
      },
      {
        slug: 'physical-facility-security',
        title: 'Physical and Facility Security Requirements',
        tagline: 'Assess and strengthen your physical security posture.',
        overview:
          "Physical security — the controls that protect your buildings, assets, and people from unauthorised access, theft, and harm — is often the weakest link in an organisation's overall security. MEDSS conducts structured physical security assessments against international frameworks and Malaysian regulatory requirements, identifying gaps and designing layered control measures.\n\nOur recommendations are graded by risk and budget, giving you a prioritised implementation roadmap.",
        whatWeDeliver: [
          'Physical security risk assessment (perimeter, access points, interior)',
          'Threat and vulnerability assessment for your facility and location',
          'Security control gap analysis against TAPA, ISO 28000, or client requirements',
          'Layered security control design (deterrence, detection, delay, response)',
          'Guard force management and post order review',
          'Physical security improvement plan with prioritised recommendations',
        ],
        benefits: [
          {
            title: 'Risk reduction',
            description: 'Identify and address physical vulnerabilities before they are exploited.',
          },
          {
            title: 'Standards compliance',
            description: 'Meet customer, client, and regulatory physical security requirements.',
          },
          {
            title: 'Cost optimisation',
            description: 'Prioritised recommendations ensure security spend targets the highest-risk gaps first.',
          },
        ],
        whoNeedsThis:
          'Warehouses, manufacturing plants, data centres, financial institutions, and any facility handling high-value assets or sensitive operations.',
      },
      {
        slug: 'security-audit',
        title: 'Security Audit Support',
        tagline: 'Prepare for and pass customer or regulatory security audits.',
        overview:
          'Supply chain customers, certification bodies, and regulators increasingly require formal security audits of their suppliers and partners. MEDSS helps organisations prepare for and pass security audits — whether TAPA, ISO 28000, customer-specific, or regulatory — by conducting pre-audit assessments, developing corrective action plans, and coaching your team through the audit process.\n\nWe also conduct independent security audits for organisations wanting objective assurance of their own security posture.',
        whatWeDeliver: [
          'Pre-audit security assessment against relevant standard or customer requirement',
          'Audit gap report with prioritised corrective actions',
          'Corrective action plan development and tracking',
          'Security documentation review and improvement',
          'Audit day management support and coordination',
          'Post-audit corrective action verification',
        ],
        benefits: [
          {
            title: 'Audit success',
            description: 'Structured preparation dramatically improves first-time pass rates.',
          },
          {
            title: 'Continuous improvement',
            description: 'Audit findings become structured improvement programmes, not just compliance checkboxes.',
          },
          {
            title: 'Management assurance',
            description: 'Independent audit results give boards and leadership objective security performance data.',
          },
        ],
        whoNeedsThis:
          'Organisations facing customer, certification body, or regulatory security audits, and those wanting independent assurance of their security management effectiveness.',
      },
      {
        slug: 'supply-chain-security',
        title: 'Supply Chain Security and Trade Compliance',
        tagline: 'Secure your supply chain from source to customer.',
        overview:
          'Global supply chains face threats including cargo theft, product tampering, smuggling, sanctions violations, and forced labour risks. MEDSS supports Malaysian exporters, importers, and logistics providers in assessing and strengthening supply chain security — from supplier verification and inbound cargo control to export compliance and trade sanctions screening.\n\nOur advisory integrates with AEO, TAPA, and ISO 28000 requirements where applicable.',
        whatWeDeliver: [
          'Supply chain security risk mapping and vulnerability assessment',
          'Supplier security assessment framework and questionnaire',
          'Inbound and outbound cargo security procedures',
          'Trade compliance programme framework (export controls, sanctions)',
          'Supply chain security training for logistics and procurement teams',
          'C-TPAT and AEO-aligned security procedures',
        ],
        benefits: [
          {
            title: 'Cargo integrity',
            description: 'Controls that prevent tampering, substitution, and theft throughout the supply chain.',
          },
          {
            title: 'Trade compliance',
            description: 'Reduce risk of sanctions violations, export control breaches, and customs penalties.',
          },
          {
            title: 'Customer qualification',
            description: 'Meet supply chain security requirements of MNC and government customers.',
          },
        ],
        whoNeedsThis:
          'Freight forwarders, manufacturers, importers/exporters, and 3PLs handling regulated goods, serving MNC customers, or operating in high-risk trade lanes.',
      },
      {
        slug: 'cctv-alarm-access-control',
        title: 'CCTV, Alarm and Access Control Advisory',
        tagline: 'Specify the right electronic security systems for your facility.',
        overview:
          "The wrong CCTV system, a poorly zoned alarm, or an access control system that does not match your operational flow wastes money and leaves security gaps. MEDSS provides vendor-neutral advisory for electronic security system selection and design — specifying camera coverage, alarm zones, access control architecture, and system integration requirements before you engage contractors.\n\nWe ensure your specifications meet TAPA, customer, or regulatory requirements where applicable.",
        whatWeDeliver: [
          'Facility security survey and camera coverage analysis',
          'CCTV system specification (resolution, coverage, retention requirements)',
          'Alarm system zoning and specification',
          'Access control architecture and credential management design',
          'System integration requirements (VMS, access control, alarms)',
          'Contractor briefing documentation and tender specification support',
        ],
        benefits: [
          {
            title: 'Right specification',
            description: 'Correct specifications before procurement prevent costly rework and system failures.',
          },
          {
            title: 'Vendor independence',
            description: 'Unbiased specifications protect you from contractors recommending expensive or unsuitable systems.',
          },
          {
            title: 'Standards compliance',
            description: 'Systems designed to meet TAPA FSR, customer, or regulatory requirements from the start.',
          },
        ],
        whoNeedsThis:
          'Organisations planning new facilities, upgrading security infrastructure, or failing security audits due to inadequate electronic surveillance and access controls.',
      },
      {
        slug: 'electronic-security-support',
        title: 'Electronic Security System Support',
        tagline: 'Optimise and maintain your existing electronic security systems.',
        overview:
          'Electronic security systems degrade over time — cameras develop blind spots, alarms develop faults, access logs go unreviewed, and system passwords remain unchanged. MEDSS provides ongoing advisory support for organisations needing to maintain, optimise, and periodically review their electronic security systems.\n\nWe also support organisations troubleshooting specific failures or preparing systems for customer or certification audits.',
        whatWeDeliver: [
          'Electronic security system health check and performance review',
          'Camera coverage and image quality assessment',
          'Access control log audit and anomaly review',
          'System maintenance schedule and checklist development',
          'Security control room procedures and SOP review',
          'Staff training on system operation and monitoring',
        ],
        benefits: [
          {
            title: 'System effectiveness',
            description: 'Regular reviews ensure systems are actually providing the coverage they were designed for.',
          },
          {
            title: 'Audit readiness',
            description: 'Well-maintained, documented systems pass customer and certification audits more reliably.',
          },
          {
            title: 'Incident response',
            description: 'Properly functioning systems provide usable evidence when incidents occur.',
          },
        ],
        whoNeedsThis:
          'Organisations with existing CCTV, alarm, and access control systems that want assurance they are working as intended and meeting required standards.',
      },
    ],
  },
  {
    slug: 'osh-monitoring',
    title: 'OSH & Environmental Monitoring',
    shortTitle: 'OSH & Monitoring',
    description:
      'Accredited workplace monitoring services and health risk assessments to keep your workforce safe and your business compliant.',
    tagline: 'Measure, protect, and comply with confidence.',
    services: [
      {
        slug: 'noise-exposure-monitoring',
        title: 'Noise Exposure Monitoring',
        tagline: 'Measure workplace noise exposure and protect worker hearing.',
        overview:
          'Excessive occupational noise exposure causes permanent hearing loss — and is one of the most common causes of DOSH enforcement action in Malaysian manufacturing. Under the Occupational Safety and Health (Noise Exposure) Regulations 2019, employers must monitor noise exposure where levels are likely to exceed 85 dB(A) and implement controls to protect workers.\n\nMEDSS conducts noise exposure assessments using calibrated instruments, producing DOSH-compliant reports that identify workers at risk and recommend engineering and administrative controls.',
        whatWeDeliver: [
          'Area noise survey (sound level mapping of the workplace)',
          'Personal noise dosimetry for workers in high-noise areas',
          'DOSH-format noise exposure assessment report',
          'Comparison against OHD Regulations permissible exposure limits',
          'Noise control recommendations (engineering, administrative, PPE)',
          'Hearing Conservation Programme (HCP) design recommendations',
        ],
        benefits: [
          {
            title: 'Worker protection',
            description: 'Identify and control noise hazards before workers develop occupational deafness.',
          },
          {
            title: 'DOSH compliance',
            description: 'Documented noise monitoring demonstrates compliance with OSH (Noise Exposure) Regulations.',
          },
          {
            title: 'Cost avoidance',
            description: 'Prevent DOSH penalties and compensation claims from noise-induced hearing loss.',
          },
        ],
        whoNeedsThis:
          'Manufacturers, factories, construction sites, power generation facilities, and any workplace with noisy machinery or processes.',
      },
      {
        slug: 'local-exhaust-ventilation',
        title: 'Local Exhaust Ventilation Assessment',
        tagline: 'Validate your LEV systems are working effectively.',
        overview:
          "Local Exhaust Ventilation (LEV) systems capture and remove hazardous dust, fumes, vapours, and gases at the point of generation — before they can reach workers' breathing zones. However, LEV systems that are poorly designed, incorrectly positioned, or inadequately maintained often fail to provide the protection employers assume they do.\n\nMEDSS conducts LEV performance assessments and design reviews to verify your systems are providing the capture velocity and airflow needed to protect workers from chemical, dust, and fume hazards.",
        whatWeDeliver: [
          'LEV system inspection and performance measurement',
          'Capture velocity and face velocity measurements',
          'Duct transport velocity and system pressure testing',
          'LEV examination report (in line with DOSH requirements)',
          'System deficiency identification and corrective action recommendations',
          'LEV design review for new installations',
        ],
        benefits: [
          {
            title: 'Worker health protection',
            description: 'Confirm LEV systems actually prevent hazardous substance exposure.',
          },
          {
            title: 'Regulatory compliance',
            description: 'Regular LEV examination is required under the USECHH Regulations.',
          },
          {
            title: 'Maintenance prioritisation',
            description: 'Identify which LEV systems need immediate repair versus ongoing monitoring.',
          },
        ],
        whoNeedsThis:
          'Workplaces using or generating hazardous dust, welding fumes, chemical vapours, or other airborne contaminants controlled by LEV systems.',
      },
      {
        slug: 'chemical-exposure-monitoring',
        title: 'Chemical Exposure Monitoring',
        tagline: "Measure workers' actual chemical exposure against permissible limits.",
        overview:
          'The OSH (Use and Standards of Exposure of Chemicals Hazardous to Health) Regulations 2000 (USECHH) require employers to assess and, where necessary, monitor workers\' exposure to chemicals hazardous to health. Exposure monitoring involves collecting air samples from workers\' breathing zones and analysing them against USECHH permissible exposure limits.\n\nMEDSS conducts USECHH-compliant chemical exposure monitoring, providing defensible data on actual worker exposure and recommendations for control improvements where limits are exceeded.',
        whatWeDeliver: [
          'Exposure monitoring strategy and sampling plan development',
          'Personal air sampling (breathing zone) during representative work activities',
          'Area air sampling for contaminant mapping',
          'Laboratory analysis by accredited laboratory',
          'USECHH-format exposure assessment report',
          'Comparison against Malaysia OHD permissible exposure limits',
          'Recommendations for engineering, administrative, and PPE controls',
        ],
        benefits: [
          {
            title: 'USECHH compliance',
            description: 'Meet the monitoring requirements of the USECHH Regulations and DOSH inspection expectations.',
          },
          {
            title: 'Worker protection',
            description: 'Evidence-based data on actual exposure enables proportionate and effective controls.',
          },
          {
            title: 'Legal defence',
            description: 'Documented monitoring records demonstrate employer due diligence in occupational disease claims.',
          },
        ],
        whoNeedsThis:
          'Workplaces using chemicals listed in the USECHH schedule, including manufacturers, paint shops, laboratories, cleaning operations, and any facility using solvents or reactive chemicals.',
      },
      {
        slug: 'chemical-health-risk-assessment',
        title: 'Chemical Health Risk Assessment (CHRA)',
        tagline: 'The USECHH Regulations mandatory assessment for chemical-using workplaces.',
        overview:
          'The Chemical Health Risk Assessment (CHRA) is a mandatory requirement under the USECHH Regulations 2000 for workplaces using chemicals hazardous to health. The CHRA must be conducted by a DOSH-registered Occupational Health Doctor (OHD) or a team that includes one, and must be reviewed every five years or when significant changes occur.\n\nMEDSS coordinates and supports the CHRA process — from chemical inventory compilation and exposure pathway analysis to the formal assessment and DOSH-compliant report.',
        whatWeDeliver: [
          'Chemical inventory compilation and SDS review',
          'Exposure pathway and task analysis',
          'CHRA methodology and risk characterisation',
          'CHRA report (USECHH Regulations compliant)',
          'Recommended health surveillance programme design',
          'Control measure adequacy review and recommendations',
          'CHRA review scheduling and management',
        ],
        benefits: [
          {
            title: 'Legal compliance',
            description: 'CHRA is a legal requirement — failure to conduct one exposes employers to DOSH enforcement.',
          },
          {
            title: 'Health surveillance basis',
            description: 'The CHRA determines which workers need biological monitoring and medical surveillance.',
          },
          {
            title: 'Control effectiveness',
            description: 'CHRA findings identify where existing controls are inadequate and workers remain at risk.',
          },
        ],
        whoNeedsThis:
          'Any Malaysian workplace using chemicals hazardous to health as defined by the USECHH Regulations — including manufacturers, laboratories, automotive, printing, and cleaning operations.',
      },
      {
        slug: 'noise-boundary-assessment',
        title: 'Noise Boundary Assessment',
        tagline: 'Measure and manage industrial noise impact on surrounding communities.',
        overview:
          'Industrial facilities generating significant noise must demonstrate that noise levels at their property boundary comply with Department of Environment (DOE) permissible limits under the Environmental Quality (Noise) Regulations. Boundary noise exceedances can result in DOE enforcement action, community complaints, and licence conditions.\n\nMEDSS conducts boundary noise assessments using calibrated instruments and DOE-recognised methodology, producing reports that demonstrate compliance or identify control measures needed to achieve it.',
        whatWeDeliver: [
          'Boundary noise measurement survey (day and night periods)',
          'Background noise level measurement',
          'DOE-format boundary noise assessment report',
          'Comparison against Environmental Quality (Noise) Regulations limits',
          'Noise source identification and contribution analysis',
          'Noise attenuation and control recommendations for exceedances',
        ],
        benefits: [
          {
            title: 'DOE compliance',
            description: 'Documented boundary noise assessment demonstrates regulatory compliance.',
          },
          {
            title: 'Neighbour relations',
            description: 'Proactive noise management reduces community complaints and regulatory escalation.',
          },
          {
            title: 'Licence protection',
            description: 'Evidence of compliance protects operating licences subject to environmental conditions.',
          },
        ],
        whoNeedsThis:
          'Industrial facilities, quarries, power generation plants, and manufacturing operations located near residential areas or subject to DOE licence conditions on noise.',
      },
      {
        slug: 'workplace-safety-inspection',
        title: 'Workplace Safety and Health Inspection Support',
        tagline: 'Identify hazards and strengthen your safety management system.',
        overview:
          'Regular workplace safety inspections are a fundamental requirement of any effective Safety and Health Management System (SHMS) and are expected by DOSH during audits and incident investigations. MEDSS conducts structured workplace safety inspections and provides the tools and training your Safety and Health Officer (SHO) or Safety and Health Committee (SHC) needs to sustain them independently.\n\nOur inspections are risk-rated and produce actionable corrective action plans, not just observation lists.',
        whatWeDeliver: [
          'Structured workplace safety inspection against OSHA 1994 requirements',
          'Hazard identification, risk rating, and corrective action report',
          'HIRARC review and update support',
          'Safety and health committee inspection programme design',
          'Inspection checklist development (by work area and task type)',
          'Safety officer coaching and inspection competency development',
          'Regulatory compliance gap assessment (OSHA, FMA, specific regulations)',
        ],
        benefits: [
          {
            title: 'Hazard control',
            description: 'Regular inspections identify and eliminate hazards before they cause incidents.',
          },
          {
            title: 'DOSH readiness',
            description: 'Documented inspection records demonstrate proactive safety management to DOSH inspectors.',
          },
          {
            title: 'Internal capability',
            description: 'Your team learns to conduct and act on inspections independently.',
          },
        ],
        whoNeedsThis:
          'All Malaysian employers subject to OSHA 1994 — particularly those preparing for DOSH audits, implementing a new SHMS, or with a history of incidents or near-misses.',
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getServiceBySlug(
  categorySlug: string,
  serviceSlug: string
): { category: ServiceCategory; service: ServiceItem } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const service = category.services.find((s) => s.slug === serviceSlug);
  if (!service) return undefined;
  return { category, service };
}
