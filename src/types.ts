export interface MetricItem {
  id: string;
  iconName: string;
  value: string;
  label: string;
  subtext?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  capabilities: string[];
  techStack: string[];
  deliverables: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  metrics: { label: string; value: string }[];
  features: string[];
}

export interface TrustItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ClientItem {
  id: string;
  name: string;
  category: string;
}

export type ProjectStatus = 'Completed' | 'In Progress' | 'Planning' | 'On Hold';
export type TaskPriority = 'High' | 'Medium' | 'Low';

export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  status: ProjectStatus;
  progress: number;
  deadline: string;
  team: { name: string; avatar: string; role: string }[];
  category: string;
  budget: string;
}

export interface TaskItemData {
  id: string;
  title: string;
  project: string;
  dueDate: string;
  priority: TaskPriority;
  assignee: { name: string; avatar: string };
  completed: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  status: 'online' | 'busy' | 'offline';
  activeProjects: number;
}

export interface ClientAccount {
  id: string;
  name: string;
  industry: string;
  status: 'Active' | 'Onboarding' | 'Enterprise';
  projectCount: number;
  revenue: string;
  logoColor: string;
}

export interface MessageThread {
  id: string;
  sender: string;
  avatar: string;
  role: string;
  preview: string;
  time: string;
  unread: boolean;
  messages: { id: string; sender: string; text: string; time: string; isUser: boolean }[];
}

export interface DocumentItem {
  id: string;
  name: string;
  project: string;
  type: 'pdf' | 'figma' | 'docx' | 'code';
  size: string;
  date: string;
  owner: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  projectDelivered: string;
  metricHighlight: string;
  industry: string;
}
