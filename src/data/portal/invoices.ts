export type InvoiceStatus = 'DRAFT' | 'SENT' | 'OVERDUE' | 'PAID';

export interface LineItem {
  description: string;
  qty: number;
  rate: number;
}

export interface Invoice {
  number: string;
  description: string;
  issued: string | null;
  due: string | null;
  amount: number;      // pre-tax subtotal
  status: InvoiceStatus;
  pdfUrl: string;
  lineItems: LineItem[];
  notes?: string;
}

export interface ClientProfile {
  name: string;
  initials: string;
  role: string;
  remittanceEmail: string;
  address: string;
}

export interface FirmProfile {
  name: string;
  tagline: string;
  address: string;
  email: string;
  phone: string;
  hstNumber: string;
}

export const client: ClientProfile = {
  name: 'Adaeze Okafor',
  initials: 'AO',
  role: 'CLIENT ACCOUNT',
  remittanceEmail: 'hello@lakingzservices.ca',
  address: 'Brampton, ON',
};

export const firm: FirmProfile = {
  name: 'Lakingz Services',
  tagline: 'Bespoke Accounting & Tax Advisory',
  address: '16 Langholm Court, Brampton, ON L6S',
  email: 'hello@lakingzservices.ca',
  phone: '+1 (905) 555-0199',
  hstNumber: 'HST # 123 456 789 RT0001',
};

const HST_RATE = 0.13;

export const invoices: Invoice[] = [
  {
    number: '2026-0044',
    description: 'Q2 GST/HST remittance prep',
    issued: null,
    due: null,
    amount: 185.0,
    status: 'DRAFT',
    pdfUrl: '#',
    lineItems: [
      { description: 'Q2 GST/HST remittance preparation & filing', qty: 1, rate: 185.0 },
    ],
  },
  {
    number: '2026-0043',
    description: 'T1 personal — self-employed + rental',
    issued: 'May 18, 2026',
    due: 'Jun 18, 2026',
    amount: 321.09,
    status: 'SENT',
    pdfUrl: '/portal/invoice/2026-0043',
    lineItems: [
      { description: 'T1 personal tax return — self-employment income', qty: 1, rate: 225.0 },
      { description: 'Rental income schedule (T776)', qty: 1, rate: 96.09 },
    ],
    notes: 'Please e-transfer payment to hello@lakingzservices.ca with invoice number in the memo.',
  },
  {
    number: '2026-0042',
    description: 'Bookkeeping retainer — Mar/Apr',
    issued: 'Apr 12, 2026',
    due: 'May 12, 2026',
    amount: 850.0,
    status: 'OVERDUE',
    pdfUrl: '/portal/invoice/2026-0042',
    lineItems: [
      { description: 'Monthly bookkeeping retainer — March 2026', qty: 1, rate: 425.0 },
      { description: 'Monthly bookkeeping retainer — April 2026', qty: 1, rate: 425.0 },
    ],
    notes: 'This invoice is now past due. Please contact us if you have any questions.',
  },
  {
    number: '2026-0041',
    description: 'Newcomer tax orientation + first-year T1',
    issued: 'Feb 8, 2026',
    due: 'Mar 10, 2026',
    amount: 440.0,
    status: 'PAID',
    pdfUrl: '/portal/invoice/2026-0041',
    lineItems: [
      { description: 'Newcomer tax orientation session (60 min)', qty: 1, rate: 150.0 },
      { description: 'First-year Canadian T1 personal tax return', qty: 1, rate: 290.0 },
    ],
    notes: 'Thank you for your payment. It was a pleasure working with you.',
  },
];

const sumBy = (list: Invoice[], predicate: (i: Invoice) => boolean) =>
  list.filter(predicate).reduce((acc, i) => acc + i.amount, 0);

export const summary = {
  outstanding: sumBy(invoices, (i) => i.status === 'SENT' || i.status === 'OVERDUE'),
  onFile: invoices.length,
  paidToDate: sumBy(invoices, (i) => i.status === 'PAID'),
};

export const formatCurrency = (n: number): string =>
  new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    currencyDisplay: 'symbol',
  }).format(n);

export const calcTax = (subtotal: number) =>
  Math.round(subtotal * HST_RATE * 100) / 100;

export const calcTotal = (subtotal: number) =>
  Math.round((subtotal + calcTax(subtotal)) * 100) / 100;

export { HST_RATE };
