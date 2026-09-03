/**
 * Demo chatbot responses.
 * Swap `getForgeReply` with a real API call later.
 * Never put API keys in the frontend.
 */

export const chatbotIntro =
  "Hi! I'm Vivansh AI.\nHow can I help you today?"

export const suggestedQuestions = [
  'What are your membership plans?',
  'What are your timings?',
  'Do you offer personal training?',
  'How can I book a free trial?',
  'Where are you located?',
  'What classes do you run?',
]

const replies: Array<{ match: RegExp; reply: string }> = [
  {
    match: /plan|price|membership|cost|fee|₹|rs/i,
    reply:
      'We currently show three sample memberships: Starter at ₹1,999/month, Pro at ₹2,999/month, and Elite at ₹4,999/month. Pro includes group classes and a monthly review. These are demo prices — chat on WhatsApp and we can help you choose.',
  },
  {
    match: /timing|hours|open|close|when are you/i,
    reply:
      'Demo hours: Monday to Friday, 6:00 AM to 10:00 PM. Saturday and Sunday, 7:00 AM to 9:00 PM. Confirm live hours with the front desk before visiting.',
  },
  {
    match: /personal training|pt\b|trainer|coach/i,
    reply:
      'Yes. Personal training is available one-to-one, built around your goals and schedule. Elite memberships include PT sessions. You can also book a complimentary trial and request a coach.',
  },
  {
    match: /trial|free|book|demo session/i,
    reply:
      'You can book a complimentary trial from the Book a Free Trial page. Share your name, phone, goal and preferred slot. In production, that form can send leads straight to the gym’s admin dashboard.',
  },
  {
    match: /where|location|address|map|hyderabad|banjara/i,
    reply:
      'Demo location: Plot 18, Road No. 12, Banjara Hills, Hyderabad 500034. Replace this with the gym’s real address. WhatsApp us if you want directions.',
  },
  {
    match: /offer|promo|code|vivansh|guest session/i,
    reply:
      'Sample offer code VIVANSH adds a complimentary extra guest session on the trial form. Copy it from the announcement bar. Replace with a live campaign before launch.',
  },
  {
    match: /class|group|studio|timetable|schedule/i,
    reply:
      'Group training is on the sample timetable — Strength Lab, Vivansh Engine, Hypertrophy, Studio Vivansh and mobility sessions through the week. Open the Schedule page to reserve a demo spot. Live class software can replace this later.',
  },
  {
    match: /first visit|what to bring|wear|shoes|parking|arrive/i,
    reply:
      'Arrive ten minutes early. Bring training shoes, a bottle and a towel. Parking is listed as basement access on this demo — confirm with the desk. Book a complimentary trial and we will walk you through the floor.',
  },
  {
    match: /annual|year|discount/i,
    reply:
      'The demo shows annual billing as ten months paid once (two months complimentary). Toggle Monthly / Annual on the membership page. Replace this with the gym’s real contract.',
  },
  {
    match: /hello|hi|hey|help/i,
    reply:
      'Welcome to Vivansh. Ask me about memberships, timings, personal training, the free trial, or our location.',
  },
]

export function getForgeReply(input: string) {
  const trimmed = input.trim()
  if (!trimmed) {
    return 'Ask me about plans, timings, personal training, trials or location.'
  }
  const found = replies.find((item) => item.match.test(trimmed))
  return (
    found?.reply ??
    'I can help with memberships, gym hours, personal training, free trials and location. Try one of the suggested questions — or WhatsApp the team for a human reply.'
  )
}

export type ChatMessage = {
  id: string
  role: 'bot' | 'user'
  text: string
}
