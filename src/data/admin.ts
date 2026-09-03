/**
 * Admin dashboard demo data.
 * Replace with API-backed records in production.
 */

export const adminStats = [
  { key: 'leads', label: 'Total leads', value: '128', hint: 'Last 90 days' },
  { key: 'trials', label: 'Trial bookings', value: '24', hint: 'This month' },
  { key: 'enquiries', label: 'New enquiries', value: '86', hint: 'WhatsApp + form' },
  { key: 'conversion', label: 'Conversion rate', value: '18.7%', hint: 'Trial → membership' },
]

export const leadStatuses = ['New', 'Contacted', 'Follow-up', 'Converted', 'Lost'] as const
export type LeadStatus = (typeof leadStatuses)[number]

export const leads = [
  { id: 'L-1042', name: 'Aisha Khan', phone: '+91 98111 22334', interest: 'Pro membership', date: '19 Aug 2026', status: 'New' as LeadStatus },
  { id: 'L-1041', name: 'Rahul Iyer', phone: '+91 98222 33445', interest: 'Personal training', date: '18 Aug 2026', status: 'Contacted' as LeadStatus },
  { id: 'L-1040', name: 'Meenakshi Rao', phone: '+91 98333 44556', interest: 'Free trial', date: '18 Aug 2026', status: 'Follow-up' as LeadStatus },
  { id: 'L-1039', name: 'Kabir Shah', phone: '+91 98444 55667', interest: 'Elite membership', date: '17 Aug 2026', status: 'Converted' as LeadStatus },
  { id: 'L-1038', name: 'Diya Menon', phone: '+91 98555 66778', interest: 'Fat loss program', date: '16 Aug 2026', status: 'Contacted' as LeadStatus },
  { id: 'L-1037', name: 'Harsh Patel', phone: '+91 98666 77889', interest: 'Group training', date: '15 Aug 2026', status: 'Lost' as LeadStatus },
  { id: 'L-1036', name: 'Tara Singh', phone: '+91 98777 88990', interest: 'Starter plan', date: '14 Aug 2026', status: 'New' as LeadStatus },
  { id: 'L-1035', name: 'Nikhil Bose', phone: '+91 98888 99001', interest: 'Free trial', date: '13 Aug 2026', status: 'Converted' as LeadStatus },
]

export const trialBookings = [
  { id: 'T-220', name: 'Aisha Khan', phone: '+91 98111 22334', goal: 'Strength', date: '21 Aug 2026', time: '07:00 AM', status: 'Scheduled' },
  { id: 'T-219', name: 'Meenakshi Rao', phone: '+91 98333 44556', goal: 'Fat Loss', date: '20 Aug 2026', time: '06:30 PM', status: 'Scheduled' },
  { id: 'T-218', name: 'Diya Menon', phone: '+91 98555 66778', goal: 'General Fitness', date: '19 Aug 2026', time: '09:00 AM', status: 'Completed' },
  { id: 'T-217', name: 'Tara Singh', phone: '+91 98777 88990', goal: 'Muscle Building', date: '18 Aug 2026', time: '08:00 AM', status: 'No-show' },
  { id: 'T-216', name: 'Nikhil Bose', phone: '+91 98888 99001', goal: 'Personal Training', date: '12 Aug 2026', time: '05:00 PM', status: 'Converted' },
  { id: 'T-215', name: 'Omar Qureshi', phone: '+91 98999 00112', goal: 'Strength', date: '11 Aug 2026', time: '07:00 AM', status: 'Completed' },
]

export const members = [
  { id: 'M-881', name: 'Kabir Shah', plan: 'Elite', start: '17 Aug 2026', renewal: '17 Sep 2026', status: 'Active' },
  { id: 'M-880', name: 'Nikhil Bose', plan: 'Pro', start: '13 Aug 2026', renewal: '13 Sep 2026', status: 'Active' },
  { id: 'M-879', name: 'Ananya R.', plan: 'Pro', start: '02 Jul 2026', renewal: '02 Sep 2026', status: 'Active' },
  { id: 'M-878', name: 'Dev P.', plan: 'Elite', start: '18 Jun 2026', renewal: '18 Sep 2026', status: 'Active' },
  { id: 'M-877', name: 'Nisha M.', plan: 'Starter', start: '09 May 2026', renewal: '09 Sep 2026', status: 'Expiring' },
  { id: 'M-876', name: 'Vikram S.', plan: 'Pro', start: '22 Mar 2026', renewal: '22 Aug 2026', status: 'Paused' },
]

export const offers = [
  { id: 'O-12', title: 'Complimentary trial week', type: 'Trial', status: 'Live', window: 'Aug 2026' },
  { id: 'O-11', title: 'Refer a friend — one guest session', type: 'Referral', status: 'Live', window: 'Ongoing' },
  { id: 'O-10', title: 'Quarterly Elite upgrade', type: 'Membership', status: 'Scheduled', window: 'Sep 2026' },
]

export const analyticsSeries = [
  { month: 'Mar', leads: 18, trials: 6, members: 4 },
  { month: 'Apr', leads: 22, trials: 8, members: 5 },
  { month: 'May', leads: 19, trials: 7, members: 3 },
  { month: 'Jun', leads: 28, trials: 11, members: 7 },
  { month: 'Jul', leads: 31, trials: 9, members: 6 },
  { month: 'Aug', leads: 24, trials: 8, members: 5 },
]
