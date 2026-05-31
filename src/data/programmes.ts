export interface Programme {
  title: string;
  description: string;
}

export interface ProgrammeCategory {
  id: 'safety' | 'security' | 'hr' | 'development';
  label: string;
  programmes: Programme[];
}

export const programmeCategories: ProgrammeCategory[] = [
  {
    id: 'safety',
    label: 'Safety & Health',
    programmes: [
      {
        title: 'Basic Chemical Safe Handling',
        description:
          'Chemical hazards, SDS interpretation, PPE selection and safe storage for USECHH workplace compliance.',
      },
      {
        title: 'Energy Isolation LOTO',
        description:
          'Lockout/tagout procedures to prevent accidental machine energisation during maintenance work.',
      },
      {
        title: 'Fire Safety, Fire Extinguisher and ERP',
        description:
          'Fire prevention principles, extinguisher operation and emergency response plan activation.',
      },
      {
        title: 'Hazard Identification, Risk Assessment and Risk Control',
        description:
          'Systematic tools to identify, assess and implement controls for workplace hazards (HIRAC methodology).',
      },
      {
        title: 'Manual Handling',
        description:
          'Ergonomic lifting and carrying techniques to reduce musculoskeletal injury risk in the workplace.',
      },
      {
        title: 'Road Safety Awareness Program',
        description:
          'Defensive driving, road risk awareness and fleet safety best practice for employees who drive for work.',
      },
      {
        title: 'Forklift Safe Handling',
        description:
          'Safe operation, pre-use inspection and hazard awareness for forklift operators in warehouse and manufacturing environments.',
      },
      {
        title: 'Safety and Health Committee',
        description:
          'SHC roles, responsibilities, meeting procedures and legal requirements under OSHA 1994.',
      },
      {
        title: 'Electrical Safety',
        description:
          'Safe working practices around electrical hazards, isolation procedures and arc flash awareness.',
      },
      {
        title: 'Project Safety Management',
        description:
          'Safety planning, contractor management and incident prevention for construction and project site environments.',
      },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    programmes: [
      {
        title: 'Mastering World and Malaysia Customs Organization AEO Pillar',
        description:
          'AEO framework, customs compliance obligations and authorised economic operator requirements for traders.',
      },
      {
        title: 'Facility Security Compliance',
        description:
          'TAPA-aligned physical security controls, threat assessment methodology and compliance reporting procedures.',
      },
      {
        title: 'CTPAT Awareness and Risk-Based Compliance Training',
        description:
          'US Customs Trade Partnership Against Terrorism requirements and risk-based security procedures for exporters.',
      },
      {
        title: 'Supply Chain Security, Trade Compliance and Risk Management',
        description:
          'End-to-end supply chain security controls, trade compliance frameworks and cargo risk management.',
      },
    ],
  },
  {
    id: 'hr',
    label: 'Human Resources',
    programmes: [
      {
        title: 'HR for Beginners',
        description:
          'Foundational HR concepts, employment law basics and HR function overview for new practitioners.',
      },
      {
        title: 'HR for Non-HR Managers',
        description:
          'Employment Act essentials, people management skills and HR processes for line managers and supervisors.',
      },
      {
        title: 'Conducting an Effective Domestic Inquiry',
        description:
          'Legally sound DI procedures, evidence handling and decision-making for HR teams and management.',
      },
      {
        title: 'Mastering Payroll Management and Calculations',
        description:
          'EPF, SOCSO, PCB calculations, statutory deductions and accurate payroll processing under Malaysian law.',
      },
      {
        title: 'Labour Law and IR Law',
        description:
          'Deep-dive into the Employment Act 1955, Industrial Relations Act 1967 and termination procedures in Malaysia.',
      },
      {
        title: 'KPI for HR Team',
        description:
          'Setting, measuring and reporting HR KPIs aligned to business objectives and performance management cycles.',
      },
      {
        title: 'Training and Development',
        description:
          'Training needs analysis, L&D programme design and evaluation frameworks for HR and L&D practitioners.',
      },
      {
        title: 'Recruitment and Selection',
        description:
          'Competency-based job profiling, structured interview design and evidence-based selection best practice.',
      },
      {
        title: 'Supervisory Management',
        description:
          'Leadership skills, team communication and performance management tools for front-line supervisors.',
      },
      {
        title: 'Compensation and Benefits',
        description:
          'Pay structure design, market benchmarking, grading systems and statutory benefit compliance.',
      },
    ],
  },
  {
    id: 'development',
    label: 'Self Development',
    programmes: [
      {
        title: 'Basic English at Workplace',
        description:
          'Everyday English communication skills for non-native speakers in professional workplace settings.',
      },
      {
        title: 'Basic English for Customer Service',
        description:
          'Customer-facing communication skills, handling complaints and professional service language.',
      },
      {
        title: 'Understanding Business Vocabulary',
        description:
          'Key business and industry terminology for clear communication in professional and corporate contexts.',
      },
      {
        title: 'Recognizing and Managing Work Stress',
        description:
          'Stress identification techniques and practical coping strategies to support employee wellbeing.',
      },
      {
        title: 'Basic Phone Etiquette',
        description:
          'Professional telephone manner, message taking and call handling best practice for frontline staff.',
      },
      {
        title: 'NLP Communication and Influence Programmes',
        description:
          'Neuro-linguistic programming techniques for effective communication, rapport building and workplace influence.',
      },
      {
        title: 'Positive Self-Talk and Confidence Programmes',
        description:
          'Building self-confidence, resilience and a positive mindset for improved workplace performance.',
      },
      {
        title: 'Professional Email Writing',
        description:
          'Clear, professional email structure, tone and formatting for business correspondence and internal communication.',
      },
    ],
  },
];
