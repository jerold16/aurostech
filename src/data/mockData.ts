import {
  MetricItem,
  ServiceItem,
  IndustryItem,
  TrustItem,
  ProjectItem,
  TaskItemData,
  TeamMember,
  ClientAccount,
  MessageThread,
  DocumentItem,
  TestimonialItem
} from '../types';

export const METRICS: MetricItem[] = [
  {
    id: '1',
    iconName: 'CheckCircle2',
    value: 'Practical',
    label: 'Outcome-Driven',
    subtext: 'Built around real business requirements'
  },
  {
    id: '2',
    iconName: 'ThumbsUp',
    value: 'Scalable',
    label: 'Future-Ready Systems',
    subtext: 'Designed for today, ready for tomorrow'
  },
  {
    id: '3',
    iconName: 'Users',
    value: '6 Core',
    label: 'Service Domains',
    subtext: 'From custom software to cloud & AI'
  },
  {
    id: '4',
    iconName: 'Award',
    value: 'Long-Term',
    label: 'Dedicated Support',
    subtext: 'Continuous improvement as you grow'
  }
];

export const TRUST_ITEMS: TrustItem[] = [
  {
    id: 't1',
    title: 'Business-Focused Approach',
    description: 'We begin by understanding the business problem before deciding on the technology.',
    iconName: 'Target'
  },
  {
    id: 't2',
    title: 'Experienced Technical Team',
    description: 'Our team combines software development knowledge with practical problem-solving.',
    iconName: 'Users'
  },
  {
    id: 't3',
    title: 'Flexible Engagement',
    description: 'We work with businesses on individual projects, ongoing development or technology support.',
    iconName: 'Layers'
  },
  {
    id: 't4',
    title: 'Scalable Solutions',
    description: 'We consider future requirements so digital solutions can evolve as the business grows.',
    iconName: 'TrendingUp'
  },
  {
    id: 't5',
    title: 'Clear Communication',
    description: 'We aim to keep clients informed throughout planning, development and delivery.',
    iconName: 'MessageSquare'
  },
  {
    id: 't6',
    title: 'Long-Term Support',
    description: 'Our relationship does not end when a project goes live; we continue to support improvements.',
    iconName: 'Headphones'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'We build software solutions around specific business processes and requirements. From internal business applications to customer-facing platforms, our focus is on creating software that is practical, scalable and easy to use.',
    iconName: 'Code2',
    capabilities: [
      'Workflow-Tailored Systems',
      'Internal Business Applications',
      'Customer-Facing Platforms',
      'Scalable Architecture'
    ],
    techStack: ['Node.js', 'TypeScript', 'React', 'Go', 'PostgreSQL', 'Docker'],
    deliverables: [
      'Tailored Architecture Blueprint',
      'Production-Ready Codebase',
      'Quality Assurance & Testing',
      'Ongoing Evolution Support'
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'We develop modern, responsive web applications and business websites designed to provide a smooth experience across devices. We focus on performance, usability, security and a structure that can support future improvements.',
    iconName: 'Globe',
    capabilities: [
      'Corporate Websites & Portals',
      'Modern Dashboards',
      'Customer Web Platforms',
      'Performance & Usability'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST APIs'],
    deliverables: [
      'Responsive Web Application',
      'Device-Optimized UI/UX',
      'Security Best Practices',
      'Clean Code & Documentation'
    ]
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'We create mobile applications for businesses that want to reach customers, employees or partners through mobile devices. Our approach covers planning, interface design, development, testing and deployment.',
    iconName: 'Smartphone',
    capabilities: [
      'iOS & Android Engineering',
      'Cross-Platform Frameworks',
      'Intuitive Interface Design',
      'Testing & Store Deployment'
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    deliverables: [
      'Mobile App Builds',
      'App Store & Play Store Support',
      'Secure API Integration',
      'User-Friendly Mobile UI'
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'We help businesses adopt cloud technologies to improve flexibility, scalability and accessibility. Our cloud services support application hosting, infrastructure modernization, data management and ongoing operations.',
    iconName: 'Cloud',
    capabilities: [
      'Cloud Adoption & Migration',
      'Infrastructure Modernization',
      'Data Management & Storage',
      'Operational Scalability'
    ],
    techStack: ['AWS', 'Google Cloud', 'Terraform', 'Docker', 'Kubernetes'],
    deliverables: [
      'Cloud Environment Setup',
      'Scalable Hosting Structure',
      'Data & Backup Strategy',
      'Operational Monitoring'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'We help businesses identify repetitive processes and opportunities where artificial intelligence and automation can improve efficiency. We focus on using AI where it creates a clear business benefit rather than adding technology simply for the sake of it.',
    iconName: 'Cpu',
    capabilities: [
      'Workflow Automation',
      'Intelligent Data Processing',
      'AI-Assisted Applications',
      'Process Improvement'
    ],
    techStack: ['Python', 'FastAPI', 'Gemini AI', 'Automation Workflows', 'Vector Databases'],
    deliverables: [
      'Automated Workflow Pipelines',
      'AI Integration Modules',
      'Efficiency Benchmarks',
      'Operational Guidelines'
    ]
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Our technology consulting services help businesses make informed decisions about software, infrastructure, digital transformation and technology strategy aligned with business priorities and long-term growth.',
    iconName: 'Compass',
    capabilities: [
      'Digital Transformation Strategy',
      'Software & Stack Evaluation',
      'Current Environment Auditing',
      'Practical Technology Roadmaps'
    ],
    techStack: ['Architecture Design', 'Technology Audits', 'Cloud Strategy', 'Modernization Roadmaps'],
    deliverables: [
      'Technology Assessment Report',
      'Strategic Implementation Roadmap',
      'Modernization Plan',
      'Ongoing Advisory Support'
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    tagline: 'Improve workflows, manage information and deliver better digital experiences',
    description: 'Technology solutions that can help healthcare organizations improve workflows, manage information and deliver better digital experiences.',
    iconName: 'Activity',
    metrics: [
      { label: 'Patient Data Protection', value: 'High Standard' },
      { label: 'Workflow Efficiency', value: 'Optimized' },
      { label: 'System Accessibility', value: '24/7 Digital' }
    ],
    features: [
      'Healthcare Workflow Automation',
      'Secure Records & Information Flow',
      'Telehealth & Communication Portals',
      'Patient Engagement Interfaces'
    ]
  },
  {
    id: 'education',
    title: 'Education',
    tagline: 'Digital platforms supporting learning, administration & communication',
    description: 'Digital platforms and applications that support learning, administration, communication and engagement across educational institutions.',
    iconName: 'GraduationCap',
    metrics: [
      { label: 'Cross-Device Reach', value: 'Web & Mobile' },
      { label: 'Administrative Ease', value: 'Streamlined' },
      { label: 'Student Engagement', value: 'Interactive' }
    ],
    features: [
      'Digital Learning Platforms',
      'Administrative Management Systems',
      'Communication & Messaging Portals',
      'Student Progress Tracking'
    ]
  },
  {
    id: 'finance',
    title: 'Finance',
    tagline: 'Efficiency, reporting, data and secure digital processes',
    description: 'Technology solutions focused on efficiency, reporting, data and secure digital processes for financial organizations and modern fintech services.',
    iconName: 'Landmark',
    metrics: [
      { label: 'Data Integrity', value: 'Encrypted' },
      { label: 'Reporting Accuracy', value: 'Automated' },
      { label: 'Process Speed', value: 'Real-Time' }
    ],
    features: [
      'Secure Financial Reporting',
      'Data Processing & Aggregation',
      'Process Efficiency Automation',
      'Reliable Integration Gateways'
    ]
  },
  {
    id: 'retail',
    title: 'Retail',
    tagline: 'Digital experiences and business applications that improve operations',
    description: 'Digital experiences and business applications that help retailers improve operations, inventory visibility, and customer engagement across channels.',
    iconName: 'ShoppingBag',
    metrics: [
      { label: 'Customer Experience', value: 'Frictionless' },
      { label: 'Inventory Coordination', value: 'Connected' },
      { label: 'Multi-Device Support', value: 'Responsive' }
    ],
    features: [
      'E-Commerce & Digital Storefronts',
      'Inventory & Order Visibility',
      'Customer Loyalty & Engagement',
      'Omnichannel Business Applications'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    tagline: 'Operational efficiency, process visibility, automation & growth',
    description: 'Technology solutions that support operational efficiency, process visibility, automation and business growth across manufacturing operations.',
    iconName: 'Factory',
    metrics: [
      { label: 'Process Visibility', value: 'End-to-End' },
      { label: 'Operational Flow', value: 'Continuous' },
      { label: 'Scalability', value: 'Future-Ready' }
    ],
    features: [
      'Process Visibility Dashboards',
      'Operational Workflow Automation',
      'Production Data Tracking',
      'Equipment & Operations Coordination'
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: 'CloudSphere Enterprise', domain: 'Cloud & Infrastructure', ticker: 'CSPH' },
  { name: 'Nexus Global Health', domain: 'Biotech & HealthTech', ticker: 'NXGH' },
  { name: 'FinVenture Capital', domain: 'Fintech & Payments', ticker: 'FVNT' },
  { name: 'OmniRetail Labs', domain: 'Omnichannel Commerce', ticker: 'OMNI' },
  { name: 'Apex Robotics Corp', domain: 'Industrial IoT', ticker: 'APEX' },
  { name: 'Synapse EduTech', domain: 'Global Learning', ticker: 'SYNP' }
];

export const TRUSTED_BRANDS = [
  { name: 'Microsoft', logoText: 'Microsoft' },
  { name: 'AWS', logoText: 'aws' },
  { name: 'TATA', logoText: 'TATA' },
  { name: 'Infosys', logoText: 'Infosys' },
  { name: 'HCL', logoText: 'HCL' },
  { name: 'Wipro', logoText: 'wipro' },
  { name: 'Accenture', logoText: 'accenture' },
  { name: 'Capgemini', logoText: 'Capgemini' }
];

export const LEADERSHIP_TEAM = [
  {
    name: 'Arun Kumar Tula',
    role: 'Founder & CEO',
    bio: 'Guiding AureosTech with a focus on practical software engineering, client-centric delivery, and meaningful business outcomes. With a passion for building technology that solves real problems, Arun leads the company vision and strategy to help businesses grow through smart digital solutions.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    initials: 'AT',
    linkedin: '#'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Client Partner',
    role: 'Technology Director',
    company: 'Enterprise Financial Services',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'AureosTech understood what we were trying to achieve and helped us turn the requirement into a practical technology solution. The communication throughout the project made the process much easier.',
    projectDelivered: 'Custom Software & Digital Process Platform',
    metricHighlight: 'Practical Solution • Clear Communication',
    industry: 'Finance'
  },
  {
    id: 't-2',
    name: 'Client Partner',
    role: 'VP of Digital Operations',
    company: 'Healthcare Solutions Network',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'The team was responsive, professional and focused on solving the actual business problem. We appreciated the flexibility and the support provided during the project.',
    projectDelivered: 'Workflow Optimization & System Integration',
    metricHighlight: 'Responsive Team • Business Problem Solved',
    industry: 'Healthcare'
  },
  {
    id: 't-3',
    name: 'Client Partner',
    role: 'Head of Technology Strategy',
    company: 'Retail & Multi-Channel Group',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Working with AureosTech gave us a technology partner we could rely on. They took the time to understand our requirements and delivered a solution that fits our business needs.',
    projectDelivered: 'Modern Web & Cloud Architecture',
    metricHighlight: 'Dependable Partner • Scalable Fit',
    industry: 'Retail'
  }
];


export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    name: 'Quantum Health EHR Gateway',
    client: 'Nexus Global Health',
    status: 'In Progress',
    progress: 74,
    deadline: 'Oct 28, 2026',
    category: 'Healthcare',
    budget: '$180,000',
    team: [
      { name: 'Sarah Jenkins', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', role: 'Lead Architect' },
      { name: 'David Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', role: 'Cloud Engineer' },
      { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', role: 'Security Specialist' }
    ]
  },
  {
    id: 'p2',
    name: 'OmniChannel AI Recommendation Core',
    client: 'OmniRetail Labs',
    status: 'Completed',
    progress: 100,
    deadline: 'Sep 15, 2026',
    category: 'Retail & AI',
    budget: '$145,000',
    team: [
      { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80', role: 'ML Scientist' },
      { name: 'Amina Tariq', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80', role: 'Full Stack Dev' }
    ]
  },
  {
    id: 'p3',
    name: 'FinFlow High-Frequency Settlement Rail',
    client: 'FinVenture Capital',
    status: 'In Progress',
    progress: 58,
    deadline: 'Nov 12, 2026',
    category: 'Fintech',
    budget: '$230,000',
    team: [
      { name: 'Sarah Jenkins', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', role: 'Lead Architect' },
      { name: 'Kenji Sato', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80', role: 'Systems Dev' }
    ]
  },
  {
    id: 'p4',
    name: 'FactoryEdge Industrial IoT Platform',
    client: 'Apex Robotics Corp',
    status: 'Planning',
    progress: 22,
    deadline: 'Dec 05, 2026',
    category: 'Manufacturing',
    budget: '$195,000',
    team: [
      { name: 'David Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', role: 'Cloud Engineer' },
      { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', role: 'IoT Architect' }
    ]
  },
  {
    id: 'p5',
    name: 'Synapse Global EdTech Platform v4',
    client: 'Synapse EduTech',
    status: 'Completed',
    progress: 100,
    deadline: 'Aug 30, 2026',
    category: 'Education',
    budget: '$160,000',
    team: [
      { name: 'Amina Tariq', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80', role: 'Full Stack Dev' },
      { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80', role: 'Product Lead' }
    ]
  },
  {
    id: 'p6',
    name: 'CloudSync Distributed Storage Cluster',
    client: 'CloudSphere Enterprise',
    status: 'On Hold',
    progress: 40,
    deadline: 'Jan 15, 2027',
    category: 'Cloud Solutions',
    budget: '$310,000',
    team: [
      { name: 'Kenji Sato', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80', role: 'DevOps Lead' }
    ]
  }
];

export const TASKS: TaskItemData[] = [
  {
    id: 't-101',
    title: 'Audit HIPAA TLS 1.3 cryptographic cipher suites',
    project: 'Quantum Health EHR Gateway',
    dueDate: 'Today, 5:00 PM',
    priority: 'High',
    assignee: { name: 'Elena Rostova', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
    completed: false
  },
  {
    id: 't-102',
    title: 'Deploy microservice latency tracing with OpenTelemetry',
    project: 'FinFlow Settlement Rail',
    dueDate: 'Tomorrow',
    priority: 'High',
    assignee: { name: 'David Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
    completed: false
  },
  {
    id: 't-103',
    title: 'Benchmark vector database query index speed on Gemini Embeddings',
    project: 'OmniChannel AI Recommendation Core',
    dueDate: 'Oct 02',
    priority: 'Medium',
    assignee: { name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80' },
    completed: true
  },
  {
    id: 't-104',
    title: 'Draft OPC-UA sensor broker architecture document',
    project: 'FactoryEdge IoT Platform',
    dueDate: 'Oct 05',
    priority: 'Medium',
    assignee: { name: 'Kenji Sato', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80' },
    completed: false
  },
  {
    id: 't-105',
    title: 'Complete customer acceptance sign-off for EdTech v4 release',
    project: 'Synapse Global EdTech Platform',
    dueDate: 'Oct 08',
    priority: 'Low',
    assignee: { name: 'Amina Tariq', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80' },
    completed: true
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Sarah Jenkins',
    role: 'VP of Engineering & Lead Architect',
    department: 'Software Architecture',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
    status: 'online',
    activeProjects: 4
  },
  {
    id: 'tm-2',
    name: 'David Chen',
    role: 'Principal Cloud & SRE Engineer',
    department: 'Cloud Infrastructure',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    status: 'busy',
    activeProjects: 3
  },
  {
    id: 'tm-3',
    name: 'Elena Rostova',
    role: 'Chief Cybersecurity Specialist',
    department: 'InfoSec & Compliance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    status: 'online',
    activeProjects: 3
  },
  {
    id: 'tm-4',
    name: 'Marcus Vance',
    role: 'AI & Data Science Director',
    department: 'Applied Intelligence',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    status: 'online',
    activeProjects: 2
  },
  {
    id: 'tm-5',
    name: 'Amina Tariq',
    role: 'Senior Full Stack Specialist',
    department: 'Web & Mobile Applications',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80',
    status: 'offline',
    activeProjects: 2
  },
  {
    id: 'tm-6',
    name: 'Kenji Sato',
    role: 'Embedded & Distributed Systems Dev',
    department: 'IoT & Systems Engineering',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80',
    status: 'online',
    activeProjects: 3
  }
];

export const CLIENT_ACCOUNTS: ClientAccount[] = [
  {
    id: 'cl-1',
    name: 'Nexus Global Health',
    industry: 'Healthcare & Life Sciences',
    status: 'Enterprise',
    projectCount: 3,
    revenue: '$420,000',
    logoColor: '#0078FF'
  },
  {
    id: 'cl-2',
    name: 'FinVenture Capital',
    industry: 'Financial Services',
    status: 'Active',
    projectCount: 2,
    revenue: '$380,000',
    logoColor: '#10B981'
  },
  {
    id: 'cl-3',
    name: 'OmniRetail Labs',
    industry: 'E-Commerce & Retail',
    status: 'Active',
    projectCount: 2,
    revenue: '$290,000',
    logoColor: '#8B5CF6'
  },
  {
    id: 'cl-4',
    name: 'Apex Robotics Corp',
    industry: 'Industrial IoT',
    status: 'Onboarding',
    projectCount: 1,
    revenue: '$195,000',
    logoColor: '#06B6D4'
  },
  {
    id: 'cl-5',
    name: 'CloudSphere Enterprise',
    industry: 'Cloud Infrastructure',
    status: 'Enterprise',
    projectCount: 4,
    revenue: '$650,000',
    logoColor: '#3B82F6'
  }
];

export const CHART_PERFORMANCE_DATA = [
  { month: 'Apr', completed: 3, inProgress: 2, planned: 1 },
  { month: 'May', completed: 4, inProgress: 3, planned: 2 },
  { month: 'Jun', completed: 5, inProgress: 4, planned: 2 },
  { month: 'Jul', completed: 5, inProgress: 5, planned: 3 },
  { month: 'Aug', completed: 6, inProgress: 4, planned: 3 },
  { month: 'Sep', completed: 6, inProgress: 4, planned: 2 }
];

export const STATUS_CHART_DATA = [
  { name: 'Completed', value: 6, color: '#10B981' },
  { name: 'In Progress', value: 4, color: '#0078FF' },
  { name: 'Planning', value: 2, color: '#8B5CF6' },
  { name: 'On Hold', value: 1, color: '#F59E0B' }
];

export const MESSAGE_THREADS: MessageThread[] = [
  {
    id: 'm-1',
    sender: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    role: 'Lead Architect',
    preview: 'The EHR microservice load test sustained 22,000 concurrent requests without error.',
    time: '12m ago',
    unread: true,
    messages: [
      { id: '1', sender: 'Sarah Jenkins', text: 'Hi team, review the latest benchmark logs from staging cluster.', time: '10:45 AM', isUser: false },
      { id: '2', sender: 'You', text: 'Looking at them now. Latency curve is well below our 45ms SLA.', time: '10:48 AM', isUser: true },
      { id: '3', sender: 'Sarah Jenkins', text: 'The EHR microservice load test sustained 22,000 concurrent requests without error.', time: '10:52 AM', isUser: false }
    ]
  },
  {
    id: 'm-2',
    sender: 'David Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    role: 'Principal Cloud Engineer',
    preview: 'Kubernetes node pool autoscaling configuration has been applied in us-east-1.',
    time: '1h ago',
    unread: false,
    messages: [
      { id: '1', sender: 'David Chen', text: 'Kubernetes node pool autoscaling configuration has been applied in us-east-1.', time: '9:30 AM', isUser: false },
      { id: '2', sender: 'You', text: 'Confirmed. Terraform state matches production git tags.', time: '9:42 AM', isUser: true }
    ]
  },
  {
    id: 'm-3',
    sender: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    role: 'Chief Cybersecurity Specialist',
    preview: 'SOC 2 Type II external audit report signed off with zero non-conformances.',
    time: '3h ago',
    unread: false,
    messages: [
      { id: '1', sender: 'Elena Rostova', text: 'SOC 2 Type II external audit report signed off with zero non-conformances.', time: '7:15 AM', isUser: false }
    ]
  }
];

export const DOCUMENTS: DocumentItem[] = [
  {
    id: 'd-1',
    name: 'AUREOSTECH_Enterprise_Architecture_v3.pdf',
    project: 'Core Platform',
    type: 'pdf',
    size: '4.8 MB',
    date: 'Sep 18, 2026',
    owner: 'Sarah Jenkins'
  },
  {
    id: 'd-2',
    name: 'Quantum_Health_FHIR_HL7_Specs.docx',
    project: 'Quantum Health EHR Gateway',
    type: 'docx',
    size: '1.9 MB',
    date: 'Sep 15, 2026',
    owner: 'Elena Rostova'
  },
  {
    id: 'd-3',
    name: 'Design_Tokens_And_SaaS_Components.figma',
    project: 'Design System',
    type: 'figma',
    size: '28.4 MB',
    date: 'Sep 12, 2026',
    owner: 'Amina Tariq'
  },
  {
    id: 'd-4',
    name: 'FinFlow_Settlement_Kernel_Benchmarks.pdf',
    project: 'FinFlow Rail',
    type: 'pdf',
    size: '3.2 MB',
    date: 'Sep 08, 2026',
    owner: 'Kenji Sato'
  }
];
