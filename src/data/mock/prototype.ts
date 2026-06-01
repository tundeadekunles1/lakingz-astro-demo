export type InvoiceStatus = 'DRAFT' | 'SENT' | 'OVERDUE' | 'PAID';
export type EngagementStatus = 'OPEN' | 'PENDING' | 'ON_HOLD' | 'CLOSED';
export type EngagementType =
  | 'PERSONAL_TAX'
  | 'CORPORATE_TAX'
  | 'BOOKKEEPING'
  | 'PAYROLL'
  | 'ADVISORY'
  | 'CRA_AUDIT';

export const firm = {
  name: 'Lakingz Services',
  tagline: 'Bespoke Accounting & Tax Advisory',
  email: 'hello@lakingzservices.ca',
  phone: '+1 (905) 555-0199',
  address: '16 Langholm Court, Brampton, ON L6S',
  hstNumber: 'HST # 123 456 789 RT0001',
};

export const clientUser = {
  name: 'Adaeze Okafor',
  initials: 'AO',
  role: 'Client account',
  email: 'adaeze.okafor@example.com',
};

export const staffUser = {
  name: 'Kemi Olugbade',
  initials: 'KO',
  role: 'Staff',
  email: 'kemi@lakingzservices.ca',
};

export const staffOptions = [
  { id: 'staff-kemi', name: 'Kemi Olugbade, CPA' },
  { id: 'staff-adaeze', name: 'Adaeze Nwosu, CPA' },
];

export const TYPE_LABEL: Record<EngagementType, string> = {
  PERSONAL_TAX: 'Personal Tax',
  CORPORATE_TAX: 'Corporate Tax',
  BOOKKEEPING: 'Bookkeeping',
  PAYROLL: 'Payroll',
  ADVISORY: 'Advisory',
  CRA_AUDIT: 'CRA Audit Support',
};

export interface LineItem {
  description: string;
  qty: number;
  rate: number;
}

export interface Engagement {
  id: string;
  title: string;
  type: EngagementType;
  status: EngagementStatus;
  clientName: string;
  fileNumber: string;
  owner: string;
  billedYtd: number;
  nextDeadline?: string;
  deadlineNote?: string;
  documentCount: number;
  lineItems?: LineItem[];
  notes?: string;
}

export interface ClientRecord {
  id: string;
  name: string;
  type: 'Corporate' | 'Individual' | 'Estate';
  primaryContact: string;
  email: string;
  phone: string;
  activeMatters: number;
  lifetimeBilled: number;
  onboarded: string;
}

export interface Invoice {
  id: string;
  number: string;
  description: string;
  engagementId?: string;
  engagementTitle?: string;
  issued: string | null;
  due: string | null;
  amount: number;
  status: InvoiceStatus;
  lineItems: LineItem[];
  notes?: string;
}

export interface Appointment {
  id: string;
  title: string;
  startAt: string;
  staffName: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
  meetingUrl?: string;
}

export interface Receipt {
  id: string;
  vendor: string;
  amount: number;
  tax: number;
  date: string;
  category: string;
  engagementId?: string;
  submittedBy: string;
  status: 'Processing' | 'Needs review' | 'Categorized' | 'Reimbursed';
  ocrConfidence: number;
}

export interface TimeEntry {
  id: string;
  date: string;
  engagementId: string;
  staff: string;
  hours: number;
  rate: number;
  description: string;
  billable: boolean;
}

export interface DocumentRecord {
  id: string;
  name: string;
  type: string;
  engagementId: string;
  author: string;
  updated: string;
  size: string;
}

export interface Submission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  practice: string;
  message: string;
  status: 'NEW' | 'ASSIGNED' | 'CONFLICTS_CLEARED' | 'RETAINER_SENT' | 'DECLINED';
  createdAt: string;
}

export interface CalendarEvent {
  id: string;
  date: string;
  time: string;
  title: string;
  type: 'Client' | 'Deadline' | 'Internal';
  engagementId?: string;
  location?: string;
}

export const clientEngagements: Engagement[] = [
  {
    id: 'eng-2026-156',
    title: 'T1 personal — self-employed + rental',
    type: 'PERSONAL_TAX',
    status: 'OPEN',
    clientName: 'Adaeze Okafor',
    fileNumber: '26-0156',
    owner: 'Kemi Olugbade',
    billedYtd: 420,
    nextDeadline: '2026-04-30',
    deadlineNote: 'T1 filing deadline',
    documentCount: 6,
    lineItems: [
      { description: 'T1 personal tax return — self-employment income', qty: 1, rate: 225 },
      { description: 'Rental income schedule (T776)', qty: 1, rate: 96.09 },
    ],
    notes: 'Please e-transfer payment to hello@lakingzservices.ca with invoice number in the memo.',
  },
  {
    id: 'eng-2026-142',
    title: 'Catch-up bookkeeping: 2023 & 2024',
    type: 'BOOKKEEPING',
    status: 'PENDING',
    clientName: 'Adaeze Okafor',
    fileNumber: '26-0142',
    owner: 'Adaeze Nwosu',
    billedYtd: 4800,
    nextDeadline: '2026-03-15',
    deadlineNote: 'Reconciliation review',
    documentCount: 14,
  },
];

export const allEngagements: Engagement[] = [
  ...clientEngagements,
  {
    id: 'eng-2026-118',
    title: 'FY2025 year-end + T2 corporate return',
    type: 'CORPORATE_TAX',
    status: 'OPEN',
    clientName: 'Greenleaf Wellness Inc.',
    fileNumber: '26-0118',
    owner: 'Kemi Olugbade',
    billedYtd: 8400,
    nextDeadline: '2026-06-30',
    deadlineNote: 'T2 filing deadline',
    documentCount: 11,
  },
  {
    id: 'eng-2026-161',
    title: 'Bi-weekly payroll: 14 employees',
    type: 'PAYROLL',
    status: 'OPEN',
    clientName: 'Ridgeway Logistics Ltd.',
    fileNumber: '26-0161',
    owner: 'Adaeze Nwosu',
    billedYtd: 3900,
    documentCount: 4,
  },
  {
    id: 'eng-2026-170',
    title: 'CRA pre-assessment review: 2024 T1',
    type: 'CRA_AUDIT',
    status: 'ON_HOLD',
    clientName: 'Daniel Brown',
    fileNumber: '26-0170',
    owner: 'Kemi Olugbade',
    billedYtd: 1750,
    documentCount: 8,
  },
  {
    id: 'eng-2026-181',
    title: 'Owner-manager comp planning + T2',
    type: 'ADVISORY',
    status: 'OPEN',
    clientName: 'Vespera Tech Corp.',
    fileNumber: '26-0181',
    owner: 'Samuel Okafor',
    billedYtd: 2600,
    nextDeadline: '2026-03-31',
    deadlineNote: 'FY year-end',
    documentCount: 5,
  },
  {
    id: 'eng-2025-112',
    title: 'FY2024 NTR + T2 + HST filings',
    type: 'CORPORATE_TAX',
    status: 'CLOSED',
    clientName: 'Halton Community Childcare',
    fileNumber: '25-0112',
    owner: 'Kemi Olugbade',
    billedYtd: 11400,
    documentCount: 22,
  },
];

export const clients: ClientRecord[] = [
  {
    id: 'c-001',
    name: 'Greenleaf Wellness Inc.',
    type: 'Corporate',
    primaryContact: 'Noah Brennan, Owner',
    email: 'noah@greenleafwellness.ca',
    phone: '(905) 555-0119',
    activeMatters: 2,
    lifetimeBilled: 28900,
    onboarded: '2021-05-18',
  },
  {
    id: 'c-003',
    name: 'Adaeze Okafor',
    type: 'Individual',
    primaryContact: 'Adaeze Okafor',
    email: 'adaeze.okafor@example.com',
    phone: '(647) 555-0188',
    activeMatters: 2,
    lifetimeBilled: 5220,
    onboarded: '2024-11-01',
  },
  {
    id: 'c-002',
    name: 'Ridgeway Logistics Ltd.',
    type: 'Corporate',
    primaryContact: 'Harriet Vance, Owner',
    email: 'hvance@ridgewaylogistics.ca',
    phone: '(905) 555-0141',
    activeMatters: 3,
    lifetimeBilled: 64200,
    onboarded: '2020-02-03',
  },
  {
    id: 'c-005',
    name: 'Daniel Brown',
    type: 'Individual',
    primaryContact: 'Daniel Brown',
    email: 'dbrown@protonmail.com',
    phone: '(416) 555-0152',
    activeMatters: 1,
    lifetimeBilled: 1750,
    onboarded: '2025-03-22',
  },
  {
    id: 'c-006',
    name: 'Vespera Tech Corp.',
    type: 'Corporate',
    primaryContact: 'Devon Park, Founder',
    email: 'devon@vespera.io',
    phone: '(416) 555-0176',
    activeMatters: 1,
    lifetimeBilled: 2600,
    onboarded: '2026-01-05',
  },
];

export const invoices: Invoice[] = [
  {
    id: 'inv-0044',
    number: '2026-0044',
    description: 'Q2 GST/HST remittance prep',
    engagementTitle: 'Q2 GST/HST remittance prep',
    issued: null,
    due: null,
    amount: 185,
    status: 'DRAFT',
    lineItems: [{ description: 'Q2 GST/HST remittance preparation & filing', qty: 1, rate: 185 }],
  },
  {
    id: 'inv-0043',
    number: '2026-0043',
    description: 'T1 personal — self-employed + rental',
    engagementId: 'eng-2026-156',
    engagementTitle: 'T1 personal — self-employed + rental',
    issued: '2026-05-18',
    due: '2026-06-18',
    amount: 321.09,
    status: 'SENT',
    lineItems: [
      { description: 'T1 personal tax return — self-employment income', qty: 1, rate: 225 },
      { description: 'Rental income schedule (T776)', qty: 1, rate: 96.09 },
    ],
    notes: 'Please e-transfer payment to hello@lakingzservices.ca with invoice number in the memo.',
  },
  {
    id: 'inv-0042',
    number: '2026-0042',
    description: 'Bookkeeping retainer — Mar/Apr',
    engagementId: 'eng-2026-142',
    engagementTitle: 'Bookkeeping retainer — Mar/Apr',
    issued: '2026-04-12',
    due: '2026-05-12',
    amount: 850,
    status: 'OVERDUE',
    lineItems: [
      { description: 'Monthly bookkeeping retainer — March 2026', qty: 1, rate: 425 },
      { description: 'Monthly bookkeeping retainer — April 2026', qty: 1, rate: 425 },
    ],
    notes: 'This invoice is now past due. Please contact us if you have any questions.',
  },
  {
    id: 'inv-0041',
    number: '2026-0041',
    description: 'Newcomer tax orientation + first-year T1',
    engagementId: 'eng-2026-156',
    engagementTitle: 'Newcomer tax orientation + first-year T1',
    issued: '2026-02-08',
    due: '2026-03-10',
    amount: 440,
    status: 'PAID',
    lineItems: [
      { description: 'Newcomer tax orientation session (60 min)', qty: 1, rate: 150 },
      { description: 'First-year Canadian T1 personal tax return', qty: 1, rate: 290 },
    ],
    notes: 'Thank you for your payment.',
  },
  {
    id: 'inv-0040',
    number: '2026-0040',
    description: 'Corporate year-end billing',
    engagementId: 'eng-2026-118',
    engagementTitle: 'FY2025 year-end + T2 corporate return',
    issued: '2026-02-01',
    due: '2026-03-03',
    amount: 4720,
    status: 'SENT',
    lineItems: [{ description: 'Year-end accounting and T2 preparation', qty: 1, rate: 4720 }],
  },
];

export const clientInvoices = invoices.filter((inv) =>
  ['2026-0044', '2026-0043', '2026-0042', '2026-0041'].includes(inv.number),
);

export const appointments: Appointment[] = [
  {
    id: 'appt-1',
    title: 'T1 review call',
    startAt: '2026-06-05T14:00:00',
    staffName: 'Kemi Olugbade, CPA',
    status: 'SCHEDULED',
    meetingUrl: 'https://zoom.us/j/example',
  },
  {
    id: 'appt-2',
    title: 'Bookkeeping check-in',
    startAt: '2026-06-12T10:30:00',
    staffName: 'Adaeze Nwosu, CPA',
    status: 'SCHEDULED',
  },
  {
    id: 'appt-3',
    title: 'New client orientation',
    startAt: '2026-04-20T11:00:00',
    staffName: 'Kemi Olugbade, CPA',
    status: 'COMPLETED',
  },
];

export const clientAppointments = appointments;

export const receipts: Receipt[] = [
  {
    id: 'r-4812',
    vendor: 'Costco Wholesale',
    amount: 487.92,
    tax: 56.16,
    date: '2026-02-03',
    category: 'Supplies',
    engagementId: 'eng-2026-142',
    submittedBy: 'Client upload',
    status: 'Categorized',
    ocrConfidence: 0.98,
  },
  {
    id: 'r-4811',
    vendor: 'The Keg Steakhouse',
    amount: 342.15,
    tax: 39.31,
    date: '2026-02-02',
    category: 'Meals & Entertainment',
    engagementId: 'eng-2026-181',
    submittedBy: 'Client upload',
    status: 'Needs review',
    ocrConfidence: 0.82,
  },
  {
    id: 'r-4810',
    vendor: 'Staples Business Depot',
    amount: 128.44,
    tax: 14.76,
    date: '2026-01-31',
    category: 'Office Supplies',
    engagementId: 'eng-2026-118',
    submittedBy: 'Client upload',
    status: 'Categorized',
    ocrConfidence: 0.99,
  },
];

export const timeEntries: TimeEntry[] = [
  {
    id: 't-9120',
    date: '2026-02-10',
    engagementId: 'eng-2026-118',
    staff: 'K. Olugbade',
    hours: 3.2,
    rate: 200,
    description: 'Year-end adjusting entries; review of GIFI mapping; draft T2 schedules.',
    billable: true,
  },
  {
    id: 't-9119',
    date: '2026-02-10',
    engagementId: 'eng-2026-142',
    staff: 'A. Nwosu',
    hours: 5.8,
    rate: 95,
    description: 'Reconciled 14 months of bank & credit-card transactions.',
    billable: true,
  },
  {
    id: 't-9118',
    date: '2026-02-10',
    engagementId: 'eng-2026-181',
    staff: 'S. Okafor',
    hours: 2.4,
    rate: 140,
    description: 'Owner-manager salary-vs-dividend modelling for FY2025.',
    billable: true,
  },
];

export const documents: DocumentRecord[] = [
  {
    id: 'd-2201',
    name: 'T1 Worksheet — Adaeze Okafor.pdf',
    type: 'Worksheet',
    engagementId: 'eng-2026-156',
    author: 'K. Olugbade',
    updated: '2026-02-09',
    size: '482 KB',
  },
  {
    id: 'd-2200',
    name: 'Rental statement 2025.pdf',
    type: 'Client upload',
    engagementId: 'eng-2026-156',
    author: 'Adaeze Okafor',
    updated: '2026-02-08',
    size: '128 KB',
  },
  {
    id: 'd-2199',
    name: 'Bank statements Q4 2025.zip',
    type: 'Client upload',
    engagementId: 'eng-2026-142',
    author: 'Adaeze Okafor',
    updated: '2026-02-07',
    size: '3.2 MB',
  },
];

export const submissions: Submission[] = [
  {
    id: 'sub-1',
    firstName: 'Priya',
    lastName: 'Mehta',
    email: 'priya.mehta@example.com',
    practice: 'Personal tax',
    message: 'New to Canada in 2025. Need help with first T1 and understanding RRSP room.',
    status: 'NEW',
    createdAt: '2026-05-28T09:14:00',
  },
  {
    id: 'sub-2',
    firstName: 'Marcus',
    lastName: 'Chen',
    email: 'marcus@wavefern.ca',
    practice: 'Corporate tax',
    message: 'Looking for a CPA to handle our Ontario CCPC year-end and HST filings.',
    status: 'ASSIGNED',
    createdAt: '2026-05-27T16:42:00',
  },
  {
    id: 'sub-3',
    firstName: 'Hannah',
    lastName: 'Mellor',
    email: 'hmellor@bluevale.com',
    practice: 'Bookkeeping',
    message: 'Two years of catch-up bookkeeping for a wellness studio with Square POS.',
    status: 'RETAINER_SENT',
    createdAt: '2026-05-26T11:05:00',
  },
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: 'e-01',
    date: '2026-06-05',
    time: '14:00',
    title: 'Client review: Adaeze T1',
    type: 'Client',
    engagementId: 'eng-2026-156',
    location: 'Zoom',
  },
  {
    id: 'e-02',
    date: '2026-06-12',
    time: '10:30',
    title: 'Bookkeeping check-in',
    type: 'Client',
    engagementId: 'eng-2026-142',
    location: 'Zoom',
  },
  {
    id: 'e-03',
    date: '2026-06-18',
    time: '16:00',
    title: 'HST filing: Bellwood Dental (Q2)',
    type: 'Deadline',
    engagementId: 'eng-2026-118',
  },
  {
    id: 'e-04',
    date: '2026-06-20',
    time: '09:00',
    title: 'Team check-in: tax season pacing',
    type: 'Internal',
  },
];

export const engagementDocuments: Record<string, DocumentRecord[]> = {
  'eng-2026-156': documents.filter((d) => d.engagementId === 'eng-2026-156'),
  'eng-2026-142': documents.filter((d) => d.engagementId === 'eng-2026-142'),
};

export const HST_RATE = 0.13;

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(amount);
}

export function formatDate(iso: string | null, style: 'short' | 'long' = 'short'): string {
  if (!iso) return '—';
  const date = new Date(iso.includes('T') ? iso : `${iso}T12:00:00`);
  if (style === 'long') {
    return date.toLocaleDateString('en-CA', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }
  return date.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString('en-CA', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function calcTax(subtotal: number): number {
  return Math.round(subtotal * HST_RATE * 100) / 100;
}

export function calcTotal(subtotal: number): number {
  return Math.round((subtotal + calcTax(subtotal)) * 100) / 100;
}

export function getEngagement(id: string): Engagement | undefined {
  return allEngagements.find((e) => e.id === id);
}

export function getInvoice(number: string): Invoice | undefined {
  return invoices.find((inv) => inv.number === number);
}

export function invoiceSummary(list: Invoice[]) {
  const outstanding = list
    .filter((i) => i.status === 'SENT' || i.status === 'OVERDUE')
    .reduce((sum, i) => sum + i.amount, 0);
  const paid = list
    .filter((i) => i.status === 'PAID')
    .reduce((sum, i) => sum + i.amount, 0);
  return { outstanding, paid, count: list.length };
}

export function adminBadges() {
  return {
    openEngagements: allEngagements.filter((e) => e.status === 'OPEN').length,
    receiptsNeedingReview: receipts.filter((r) => r.status === 'Needs review').length,
    newSubmissions: submissions.filter((s) => s.status === 'NEW').length,
  };
}

export const bookingSlots = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:30 PM',
  '3:00 PM',
];

export const newsletterCampaigns = [
  {
    id: 'ca-q1',
    subject: 'Tax Season 2026 Survival Guide',
    status: 'Sent',
    sent: '2026-02-01',
    openRate: 0.62,
    recipients: 1284,
  },
  {
    id: 'ca-q4',
    subject: 'Year-End Owner-Manager Checklist for Ontario CCPCs',
    status: 'Sent',
    sent: '2025-11-04',
    openRate: 0.58,
    recipients: 1210,
  },
  {
    id: 'ca-q2d',
    subject: 'Spring 2026 Dispatch',
    status: 'Draft',
    recipients: 0,
  },
];
