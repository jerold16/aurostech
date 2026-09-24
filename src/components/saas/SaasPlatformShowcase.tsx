import React, { useState, useMemo } from 'react';
import {
  PROJECTS,
  TASKS,
  TEAM_MEMBERS,
  CLIENT_ACCOUNTS,
  CHART_PERFORMANCE_DATA,
  STATUS_CHART_DATA,
  MESSAGE_THREADS,
  DOCUMENTS
} from '../../data/mockData';
import { ProjectItem, TaskItemData, TeamMember, ClientAccount, MessageThread, DocumentItem } from '../../types';
import { Button } from '../ui/Button';
import { AureosLogo } from '../ui/AureosLogo';
import { motion } from 'motion/react';
import { AnimatedParagraph, RevealFromBottom } from '../ui/AnimatedText';
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Building2,
  Calendar as CalendarIcon,
  MessageSquare,
  FileText,
  BarChart3,
  Settings,
  Search,
  Bell,
  Plus,
  ArrowUpRight,
  MoreVertical,
  Clock,
  Send,
  Download,
  Filter,
  Check,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface SaasPlatformShowcaseProps {
  onOpenContact: () => void;
}

export const SaasPlatformShowcase: React.FC<SaasPlatformShowcaseProps> = ({
  onOpenContact
}) => {
  // Current active SaaS view
  const [activeTab, setActiveTab] = useState<'dashboard' | 'projects' | 'tasks' | 'team' | 'clients' | 'messages' | 'documents' | 'reports' | 'settings'>('dashboard');

  // Interactive state
  const [searchQuery, setSearchQuery] = useState('');
  const [taskList, setTaskList] = useState<TaskItemData[]>(TASKS);
  const [projectList, setProjectList] = useState<ProjectItem[]>(PROJECTS);
  const [chartRange, setChartRange] = useState<'30D' | '90D' | '1Y'>('30D');
  const [projectFilter, setProjectFilter] = useState<'All' | 'Completed' | 'In Progress' | 'Planning'>('All');
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [quickNewModal, setQuickNewModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');

  // Active message thread
  const [selectedThreadId, setSelectedThreadId] = useState(MESSAGE_THREADS[0].id);
  const [newMessageText, setNewMessageText] = useState('');
  const [threads, setThreads] = useState<MessageThread[]>(MESSAGE_THREADS);

  // Toggle task completion
  const handleToggleTask = (taskId: string) => {
    setTaskList((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  // Add new task
  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const createdTask: TaskItemData = {
      id: `t-${Date.now()}`,
      title: newTaskTitle.trim(),
      project: 'Global Infrastructure',
      priority: newTaskPriority,
      completed: false,
      dueDate: 'In 3 days',
      assignee: {
        name: 'Sarah Jenkins',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80'
      }
    };
    setTaskList([createdTask, ...taskList]);
    setNewTaskTitle('');
    setQuickNewModal(false);
  };

  // Send message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;
    setThreads((prev) =>
      prev.map((t) => {
        if (t.id === selectedThreadId) {
          return {
            ...t,
            preview: newMessageText,
            time: 'Just now',
            messages: [
              ...t.messages,
              {
                id: `m-${Date.now()}`,
                sender: 'You (Sarah)',
                text: newMessageText,
                time: 'Just now',
                isUser: true
              }
            ]
          };
        }
        return t;
      })
    );
    setNewMessageText('');
  };

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectList.filter((p) => {
      const matchFilter = projectFilter === 'All' || p.status === projectFilter;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [projectList, projectFilter, searchQuery]);

  // Sidebar navigation items
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban className="w-4 h-4" />, badge: projectList.length },
    { id: 'tasks', label: 'Tasks', icon: <CheckSquare className="w-4 h-4" />, badge: taskList.filter((t) => !t.completed).length },
    { id: 'team', label: 'Team', icon: <Users className="w-4 h-4" /> },
    { id: 'clients', label: 'Clients', icon: <Building2 className="w-4 h-4" /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare className="w-4 h-4" />, badge: '3' },
    { id: 'documents', label: 'Documents', icon: <FileText className="w-4 h-4" /> },
    { id: 'reports', label: 'Reports', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> }
  ];

  const currentThread = threads.find((t) => t.id === selectedThreadId) || threads[0];

  return (
    <section id="technologies" className="py-20 bg-[#F8FAFC] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with scroll-triggered entrance & word-by-word paragraph */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#007BFF] uppercase tracking-wider mb-3"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#007BFF]" />
              AUREOSTECH DIGITAL ECOSYSTEM
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight"
            >
              Enterprise SaaS Product Suite
            </motion.h2>
            <AnimatedParagraph
              text="Experience the unified engineering and operations cockpit designed for distributed product squads, stakeholders, and enterprise governance."
              className="text-base text-slate-600 mt-2 max-w-2xl"
              delay={0.3}
              wordDelay={0.03}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <Button
              size="sm"
              variant="outline"
              onClick={() => setQuickNewModal(true)}
              icon={<Plus className="w-4 h-4 text-[#007BFF]" />}
            >
              Quick Task
            </Button>
            <Button
              size="sm"
              withArrow
              onClick={onOpenContact}
            >
              Request SaaS Demo
            </Button>
          </motion.div>
        </div>

        {/* Master SaaS Application Shell Container - comes from the bottom with smooth spring/ease when visible */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden flex flex-col min-h-[760px]"
        >
          {/* Top Application Header */}
          <div className="h-16 px-4 sm:px-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
            {/* Left: Branding */}
            <div className="flex items-center gap-4">
              <AureosLogo size="sm" showDescriptor={false} />
              <span className="text-xs px-2 py-0.5 rounded-md bg-blue-50 text-[#007BFF] font-mono border border-blue-200 hidden md:inline font-bold">
                CORE v4.2-PROD
              </span>
            </div>

            {/* Center: Global Search Input */}
            <div className="flex-1 max-w-md relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, clients, tasks, or telemetry..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-white border border-slate-300 rounded-xl text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] shadow-2xs"
              />
            </div>

            {/* Right: Notifications & Profile Avatar */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setNotificationOpen(!notificationOpen)}
                  className="p-2 text-slate-500 hover:text-[#0F172A] rounded-lg hover:bg-slate-200/60 relative cursor-pointer"
                  aria-label="View notifications"
                >
                  <Bell className="w-4 h-4" />
                  <span className="w-2 h-2 rounded-full bg-[#007BFF] absolute top-1.5 right-1.5" />
                </button>

                {/* Notifications Dropdown */}
                {notificationOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-3 z-30 space-y-2">
                    <div className="text-xs font-bold text-[#0F172A] pb-2 border-b border-slate-200">
                      System Notifications (2)
                    </div>
                    <div className="text-xs text-slate-700 p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-semibold text-[#0F172A]">Quantum Health</span> load tests passed with 0 errors.
                    </div>
                    <div className="text-xs text-slate-700 p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-semibold text-[#0F172A]">Security Audit</span> completed by Elena Rostova.
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Avatar & Name */}
              <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Sarah Jenkins"
                  className="w-8 h-8 rounded-full ring-2 ring-[#007BFF]/40 object-cover"
                />
                <div className="hidden sm:flex flex-col leading-tight text-left">
                  <span className="text-xs font-bold text-[#0F172A]">Sarah Jenkins</span>
                  <span className="text-[10px] text-slate-500 font-medium">Lead Architect</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Shell Grid: Sidebar + Main Content */}
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Desktop Sidebar (224px) */}
            <aside className="w-full md:w-56 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-3 flex md:flex-col justify-between overflow-x-auto md:overflow-y-auto no-scrollbar flex-shrink-0">
              {/* Navigation links */}
              <div className="flex md:flex-col gap-1 w-full">
                {sidebarItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as any)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-blue-50 text-[#007BFF] border border-blue-200/80 shadow-xs'
                          : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-200/60'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={isActive ? 'text-[#007BFF]' : 'text-slate-500'}>
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </div>
                      {item.badge !== undefined && (
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                            isActive ? 'bg-[#007BFF] text-white' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Support / Cloud Cluster Status */}
              <div className="hidden md:block pt-4 border-t border-slate-200 mt-4 space-y-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-slate-500 font-semibold">CLUSTER REGION</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="font-bold text-[#0F172A] text-[11px]">us-east-1a (Active)</div>
                  <div className="text-[10px] text-[#007BFF] font-semibold mt-0.5">Kubernetes v1.31</div>
                </div>

                <div className="flex items-center justify-between px-2 text-[11px] text-slate-500 font-medium">
                  <span>Help & Runbooks</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-white flex flex-col justify-between">
              {/* VIEW 1: DASHBOARD */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  {/* Greeting / Hero Panel */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/60 via-slate-50 to-purple-50/40 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                        Welcome back, Sarah
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Here's your real-time engineering telemetry and project portfolio summary.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveTab('projects')}
                        className="px-3 py-1.5 rounded-xl bg-white text-slate-700 border border-slate-300 text-xs font-semibold hover:border-[#007BFF] hover:text-[#007BFF] transition-colors shadow-2xs cursor-pointer"
                      >
                        All Projects ({projectList.length})
                      </button>
                      <button
                        onClick={() => setQuickNewModal(true)}
                        className="px-3.5 py-1.5 rounded-xl brand-gradient text-white text-xs font-semibold hover:brightness-105 transition-all flex items-center gap-1 shadow-xs cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" /> New Action
                      </button>
                    </div>
                  </div>

                  {/* 4 KPI Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 flex flex-col justify-between shadow-2xs hover:border-[#007BFF]/40 transition-colors">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-semibold text-slate-600">Total Projects</span>
                        <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#007BFF] flex items-center justify-center">
                          <FolderKanban className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-extrabold text-[#0F172A]">{projectList.length}</div>
                      <div className="flex items-center gap-1 text-[11px] text-emerald-600 mt-2 font-bold">
                        <ArrowUpRight className="w-3 h-3" />
                        <span>+20% vs last quarter</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 flex flex-col justify-between shadow-2xs hover:border-[#007BFF]/40 transition-colors">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-semibold text-slate-600">Active Tasks</span>
                        <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center">
                          <CheckSquare className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-extrabold text-[#0F172A]">
                        {taskList.filter((t) => !t.completed).length + 18}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-emerald-600 mt-2 font-bold">
                        <ArrowUpRight className="w-3 h-3" />
                        <span>92% on schedule</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 flex flex-col justify-between shadow-2xs hover:border-[#007BFF]/40 transition-colors">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-semibold text-slate-600">Team Velocity</span>
                        <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                          <Users className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-extrabold text-[#0F172A]">94%</div>
                      <div className="flex items-center gap-1 text-[11px] text-emerald-600 mt-2 font-bold">
                        <ArrowUpRight className="w-3 h-3" />
                        <span>+5% sprint velocity</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 flex flex-col justify-between shadow-2xs hover:border-[#007BFF]/40 transition-colors">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-xs font-semibold text-slate-600">Client CSAT</span>
                        <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                          <Sparkles className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-extrabold text-[#0F172A]">98.6%</div>
                      <div className="flex items-center gap-1 text-[11px] text-emerald-600 mt-2 font-bold">
                        <ArrowUpRight className="w-3 h-3" />
                        <span>Top quartile industry</span>
                      </div>
                    </div>
                  </div>

                  {/* Charts Row: Project Performance (Line) + Project Status (Donut) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Line Chart (8 cols) */}
                    <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div>
                          <h4 className="text-sm font-bold text-[#0F172A]">Project Performance Velocity</h4>
                          <p className="text-xs text-slate-500">Delivery trajectory across operational milestones</p>
                        </div>

                        {/* Date Range controls */}
                        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                          {(['30D', '90D', '1Y'] as const).map((range) => (
                            <button
                              key={range}
                              onClick={() => setChartRange(range)}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                                chartRange === range
                                  ? 'bg-[#007BFF] text-white'
                                  : 'text-slate-600 hover:text-[#0F172A]'
                              }`}
                            >
                              {range}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Line Chart */}
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={CHART_PERFORMANCE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                            <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} tickLine={false} />
                            <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: '#FFFFFF',
                                borderColor: '#E2E8F0',
                                borderRadius: '12px',
                                color: '#0F172A',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                              }}
                            />
                            <Line
                              type="monotone"
                              dataKey="velocity"
                              name="Velocity Score"
                              stroke="#007BFF"
                              strokeWidth={3}
                              dot={{ r: 4, fill: '#007BFF' }}
                              activeDot={{ r: 6 }}
                            />
                            <Line
                              type="monotone"
                              dataKey="completion"
                              name="Completion Rate %"
                              stroke="#8B5CF6"
                              strokeWidth={2}
                              strokeDasharray="4 4"
                              dot={{ r: 3, fill: '#8B5CF6' }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Donut Chart (4 cols) */}
                    <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A]">Portfolio Status Allocation</h4>
                        <p className="text-xs text-slate-500">Distribution across release stages</p>
                      </div>

                      <div className="h-48 w-full my-2">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={STATUS_CHART_DATA}
                              innerRadius={50}
                              outerRadius={75}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {STATUS_CHART_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                backgroundColor: '#FFFFFF',
                                borderColor: '#E2E8F0',
                                borderRadius: '10px',
                                color: '#0F172A'
                              }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-slate-100">
                        {STATUS_CHART_DATA.map((item, idx) => (
                          <div key={idx}>
                            <div className="text-xs font-bold text-[#0F172A]">{item.value}%</div>
                            <div className="text-[10px] text-slate-500 font-medium truncate">{item.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Lower Row: Recent Projects & Active Tasks */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Projects Table (7 cols) */}
                    <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-bold text-[#0F172A]">Active Project Pipeline</h4>
                        <button
                          onClick={() => setActiveTab('projects')}
                          className="text-xs text-[#007BFF] hover:underline font-bold cursor-pointer"
                        >
                          View All
                        </button>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="text-slate-500 border-b border-slate-200 pb-2">
                              <th className="font-bold pb-2">Project Name</th>
                              <th className="font-bold pb-2">Client</th>
                              <th className="font-bold pb-2">Progress</th>
                              <th className="font-bold pb-2 text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {projectList.slice(0, 4).map((proj) => (
                              <tr key={proj.id} className="hover:bg-slate-50/80 transition-colors">
                                <td className="py-3 font-bold text-[#0F172A]">{proj.name}</td>
                                <td className="py-3 text-slate-600">{proj.client}</td>
                                <td className="py-3">
                                  <div className="w-24 bg-slate-200 h-2 rounded-full overflow-hidden">
                                    <div
                                      className="brand-gradient h-full rounded-full"
                                      style={{ width: `${proj.progress}%` }}
                                    />
                                  </div>
                                </td>
                                <td className="py-3 text-right">
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                      proj.status === 'Completed'
                                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                        : proj.status === 'In Progress'
                                        ? 'bg-blue-50 text-[#007BFF] border border-blue-200'
                                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                                    }`}
                                  >
                                    {proj.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Actionable Tasks (5 cols) */}
                    <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-bold text-[#0F172A]">Actionable Tasks</h4>
                          <span className="text-xs font-mono font-bold text-[#007BFF]">
                            {taskList.filter((t) => !t.completed).length} pending
                          </span>
                        </div>

                        <div className="space-y-2.5">
                          {taskList.slice(0, 4).map((task) => (
                            <div
                              key={task.id}
                              onClick={() => handleToggleTask(task.id)}
                              className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer ${
                                task.completed
                                  ? 'bg-slate-50 border-slate-200 opacity-60'
                                  : 'bg-slate-50/50 hover:bg-slate-50 border-slate-200 hover:border-[#007BFF]/50'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <div
                                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                                    task.completed
                                      ? 'bg-[#007BFF] border-[#007BFF] text-white'
                                      : 'border-slate-400 bg-white'
                                  }`}
                                >
                                  {task.completed && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                                <span
                                  className={`text-xs font-medium ${
                                    task.completed ? 'line-through text-slate-400' : 'text-slate-800'
                                  }`}
                                >
                                  {task.title}
                                </span>
                              </div>
                              <span
                                className={`text-[9px] px-2 py-0.5 rounded-md font-bold ${
                                  task.priority === 'High'
                                    ? 'bg-red-50 text-red-600 border border-red-200'
                                    : task.priority === 'Medium'
                                    ? 'bg-amber-50 text-amber-600 border border-amber-200'
                                    : 'bg-blue-50 text-blue-600 border border-blue-200'
                                }`}
                              >
                                {task.priority}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveTab('tasks')}
                        className="w-full mt-4 py-2 text-center text-xs font-bold text-[#007BFF] hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
                      >
                        Manage All Tasks →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 2: PROJECTS */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  {/* Filter bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A]">Enterprise Project Portfolio</h3>
                      <p className="text-xs text-slate-500">Track milestones, burn rates, and squad allocations</p>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                      {(['All', 'In Progress', 'Planning', 'Completed'] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setProjectFilter(filter)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                            projectFilter === filter
                              ? 'bg-[#007BFF] text-white shadow-xs'
                              : 'bg-slate-100 text-slate-600 hover:text-[#0F172A]'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredProjects.map((proj) => (
                      <div
                        key={proj.id}
                        className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#007BFF]/60 hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-[#007BFF] uppercase tracking-wider">
                              {proj.client}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                proj.status === 'Completed'
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : proj.status === 'In Progress'
                                  ? 'bg-blue-50 text-[#007BFF] border border-blue-200'
                                  : 'bg-amber-50 text-amber-700 border border-amber-200'
                              }`}
                            >
                              {proj.status}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-[#0F172A] mb-1">{proj.name}</h4>
                          <span className="text-xs text-slate-500 font-medium block mb-4">
                            Category: {proj.category}
                          </span>

                          {/* Team avatars */}
                          <div className="flex items-center gap-1.5 mb-4">
                            <span className="text-xs text-slate-500 mr-2 font-medium">Team:</span>
                            <div className="flex -space-x-2 overflow-hidden">
                              {proj.team.map((member, idx) => (
                                <img
                                  key={idx}
                                  src={member.avatar}
                                  alt={member.name}
                                  title={`${member.name} (${member.role})`}
                                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          {/* Progress bar */}
                          <div className="mb-4">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-slate-500 font-medium">Sprint Completion</span>
                              <span className="font-bold text-[#0F172A]">{proj.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                              <div
                                className="brand-gradient h-full rounded-full"
                                style={{ width: `${proj.progress}%` }}
                              />
                            </div>
                          </div>

                          {/* Footer details */}
                          <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>{proj.deadline}</span>
                            </div>
                            <span className="font-mono font-bold text-[#0F172A]">{proj.budget}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 3: TASKS */}
              {activeTab === 'tasks' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A]">Sprint Task Board</h3>
                      <p className="text-xs text-slate-500">Interactive sprint backlogs with instant state toggling</p>
                    </div>

                    <Button
                      size="sm"
                      onClick={() => setQuickNewModal(true)}
                      icon={<Plus className="w-4 h-4" />}
                    >
                      New Task
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {taskList.map((task) => (
                      <div
                        key={task.id}
                        className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                          task.completed
                            ? 'bg-slate-50/70 border-slate-200 opacity-60'
                            : 'bg-white border-slate-200 hover:border-[#007BFF]/50 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <button
                            onClick={() => handleToggleTask(task.id)}
                            className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                              task.completed
                                ? 'bg-[#007BFF] border-[#007BFF] text-white'
                                : 'border-slate-400 bg-white hover:border-[#007BFF]'
                            }`}
                          >
                            {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </button>

                          <div>
                            <div
                              className={`text-sm font-bold ${
                                task.completed ? 'line-through text-slate-400' : 'text-[#0F172A]'
                              }`}
                            >
                              {task.title}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5">
                              {task.project} • Due {task.dueDate}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 self-end sm:self-center">
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                              task.priority === 'High'
                                ? 'bg-red-50 text-red-600 border border-red-200'
                                : task.priority === 'Medium'
                                ? 'bg-amber-50 text-amber-600 border border-amber-200'
                                : 'bg-blue-50 text-blue-600 border border-blue-200'
                            }`}
                          >
                            {task.priority} Priority
                          </span>

                          <img
                            src={task.assignee.avatar}
                            alt={task.assignee.name}
                            title={task.assignee.name}
                            className="w-7 h-7 rounded-full ring-1 ring-slate-300 object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 4: TEAM */}
              {activeTab === 'team' && (
                <div className="space-y-6">
                  <div className="pb-4 border-b border-slate-200">
                    <h3 className="text-xl font-bold text-[#0F172A]">Squad Architecture & Leads</h3>
                    <p className="text-xs text-slate-500">Core engineering squads allocated to client platforms</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {TEAM_MEMBERS.map((member) => (
                      <div
                        key={member.id}
                        className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#007BFF]/60 hover:shadow-md transition-all text-center flex flex-col items-center"
                      >
                        <div className="relative mb-3">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover ring-2 ring-[#007BFF]/30"
                          />
                          <span
                            className={`w-3.5 h-3.5 rounded-full absolute bottom-0 right-0 border-2 border-white ${
                              member.status === 'online'
                                ? 'bg-emerald-500'
                                : member.status === 'busy'
                                ? 'bg-amber-500'
                                : 'bg-slate-400'
                            }`}
                          />
                        </div>
                        <h4 className="text-base font-bold text-[#0F172A]">{member.name}</h4>
                        <span className="text-xs font-semibold text-[#007BFF] mb-1">{member.role}</span>
                        <p className="text-xs text-slate-500 mb-4">{member.department}</p>

                        <div className="w-full pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                          <span>Active Projects</span>
                          <span className="font-bold text-[#0F172A] font-mono">{member.activeProjects}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 5: CLIENTS */}
              {activeTab === 'clients' && (
                <div className="space-y-6">
                  <div className="pb-4 border-b border-slate-200">
                    <h3 className="text-xl font-bold text-[#0F172A]">Enterprise Client Directory</h3>
                    <p className="text-xs text-slate-500">Tier-1 organizational accounts and SLA contracts</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {CLIENT_ACCOUNTS.map((client) => (
                      <div
                        key={client.id}
                        className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#007BFF]/60 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono font-bold text-[#007BFF] px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200">
                            {client.status}
                          </span>
                          <span className="text-xs font-bold text-emerald-600">Active Retainer</span>
                        </div>

                        <h4 className="text-lg font-bold text-[#0F172A]">{client.name}</h4>
                        <p className="text-xs text-slate-500 mb-4">{client.industry}</p>

                        <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
                          <div className="flex justify-between text-slate-600">
                            <span>Engagement Value</span>
                            <span className="font-bold text-[#0F172A] font-mono">{client.revenue}</span>
                          </div>
                          <div className="flex justify-between text-slate-600">
                            <span>Active Projects</span>
                            <span className="font-bold text-[#0F172A] font-mono">{client.projectCount}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 6: MESSAGES */}
              {activeTab === 'messages' && (
                <div className="h-[520px] bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xs">
                  {/* Left Threads Column */}
                  <div className="w-full md:w-72 bg-slate-50 border-r border-slate-200 flex flex-col">
                    <div className="p-3.5 border-b border-slate-200 font-bold text-xs text-[#0F172A] uppercase tracking-wider">
                      Direct Channels
                    </div>
                    <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
                      {threads.map((th) => (
                        <div
                          key={th.id}
                          onClick={() => setSelectedThreadId(th.id)}
                          className={`p-3.5 cursor-pointer transition-colors ${
                            selectedThreadId === th.id
                              ? 'bg-white border-l-4 border-l-[#007BFF] shadow-2xs'
                              : 'hover:bg-slate-100/80'
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-[#0F172A]">{th.sender}</span>
                            <span className="text-[10px] text-slate-400 font-mono">{th.time}</span>
                          </div>
                          <p className="text-xs text-slate-600 truncate">{th.preview}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Active Conversation Stage */}
                  <div className="flex-1 flex flex-col justify-between bg-white">
                    <div className="p-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                      <div>
                        <div className="text-xs font-bold text-[#0F172A]">{currentThread.sender}</div>
                        <div className="text-[10px] text-emerald-600 font-semibold">● {currentThread.role}</div>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">SOC 2 Encrypted</span>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-3">
                      {currentThread.messages.map((m) => (
                        <div
                          key={m.id}
                          className={`flex flex-col ${m.isUser ? 'items-end' : 'items-start'}`}
                        >
                          <span className="text-[10px] text-slate-400 mb-1">{m.sender}</span>
                          <div
                            className={`max-w-md p-3 rounded-2xl text-xs ${
                              m.isUser
                                ? 'brand-gradient text-white shadow-xs'
                                : 'bg-slate-100 text-slate-900 border border-slate-200'
                            }`}
                          >
                            {m.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-200 bg-slate-50 flex gap-2">
                      <input
                        type="text"
                        value={newMessageText}
                        onChange={(e) => setNewMessageText(e.target.value)}
                        placeholder="Type an architectural response..."
                        className="flex-1 px-3.5 py-2 text-xs bg-white border border-slate-300 rounded-xl text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#007BFF]"
                      />
                      <Button size="sm" type="submit" icon={<Send className="w-3.5 h-3.5" />}>
                        Send
                      </Button>
                    </form>
                  </div>
                </div>
              )}

              {/* VIEW 7: DOCUMENTS */}
              {activeTab === 'documents' && (
                <div className="space-y-6">
                  <div className="pb-4 border-b border-slate-200">
                    <h3 className="text-xl font-bold text-[#0F172A]">Artifacts & Blueprint Repository</h3>
                    <p className="text-xs text-slate-500">Architectural schematics, audit reports, and contracts</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {DOCUMENTS.map((doc) => (
                      <div
                        key={doc.id}
                        className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#007BFF]/50 hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono font-bold text-[#007BFF] uppercase">
                              {doc.type}
                            </span>
                            <span className="text-[11px] text-slate-500">{doc.size}</span>
                          </div>
                          <h4 className="text-sm font-bold text-[#0F172A] mb-1">{doc.name}</h4>
                          <p className="text-xs text-slate-600 mb-4">{doc.project}</p>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[10px] text-slate-400">Updated {doc.date}</span>
                          <button
                            onClick={() => alert(`Downloading ${doc.name}`)}
                            className="p-1.5 rounded-lg bg-blue-50 text-[#007BFF] hover:bg-[#007BFF] hover:text-white transition-colors cursor-pointer"
                            title="Download Document"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 8: REPORTS */}
              {activeTab === 'reports' && (
                <div className="space-y-6">
                  <div className="pb-4 border-b border-slate-200">
                    <h3 className="text-xl font-bold text-[#0F172A]">System Observability & Audits</h3>
                    <p className="text-xs text-slate-500">Automated performance indices and latency thresholds</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <div className="text-xs font-bold text-slate-600 mb-1">Average Global Latency</div>
                      <div className="text-2xl font-extrabold text-[#0F172A] font-mono">1.42 ms</div>
                      <div className="text-xs text-emerald-600 mt-2 font-bold">● 99.999% SLA Compliant</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <div className="text-xs font-bold text-slate-600 mb-1">Compute Efficiency</div>
                      <div className="text-2xl font-extrabold text-[#007BFF] font-mono">99.4%</div>
                      <div className="text-xs text-slate-500 mt-2">Elastic auto-scaling operational</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <div className="text-xs font-bold text-slate-600 mb-1">Security Score</div>
                      <div className="text-2xl font-extrabold text-[#8B5CF6] font-mono">100 / 100</div>
                      <div className="text-xs text-emerald-600 mt-2 font-bold">Zero CVE vulnerabilities</div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 9: SETTINGS */}
              {activeTab === 'settings' && (
                <div className="space-y-6 max-w-2xl">
                  <div className="pb-4 border-b border-slate-200">
                    <h3 className="text-xl font-bold text-[#0F172A]">Organization Settings</h3>
                    <p className="text-xs text-slate-500">Manage security certificates, API endpoints, and member roles</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Workspace Name</label>
                      <input
                        type="text"
                        defaultValue="AUREOSTECH Enterprise Cluster"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-[#0F172A]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Primary Region</label>
                      <select className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl text-[#0F172A]">
                        <option>US-East (N. Virginia)</option>
                        <option>EU-Central (Frankfurt)</option>
                        <option>AP-Southeast (Singapore)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Data Retention SLA</label>
                      <input
                        type="text"
                        defaultValue="7 Years (Immutable WORM Standard)"
                        readOnly
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-100 border border-slate-300 rounded-xl text-slate-500"
                      />
                    </div>
                    <Button size="md" onClick={() => alert('Settings saved')}>
                      Save Configuration
                    </Button>
                  </div>
                </div>
              )}
            </main>
          </div>
        </motion.div>

        {/* Quick Task Modal */}
        {quickNewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl space-y-4">
              <h4 className="text-lg font-bold text-[#0F172A]">Quick Dispatch Task</h4>
              <form onSubmit={handleCreateTask} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Task Title</label>
                  <input
                    type="text"
                    required
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="e.g. Audit Kubernetes ingress latency"
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl text-[#0F172A] focus:outline-none focus:border-[#007BFF]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Priority</label>
                  <select
                    value={newTaskPriority}
                    onChange={(e) => setNewTaskPriority(e.target.value as any)}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl text-[#0F172A]"
                  >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setQuickNewModal(false)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#0F172A] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <Button size="sm" type="submit">
                    Create Task
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
