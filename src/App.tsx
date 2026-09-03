import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProgramsPage } from './pages/ProgramsPage'
import { TrainersPage } from './pages/TrainersPage'
import { MembershipPage } from './pages/MembershipPage'
import { GalleryPage } from './pages/GalleryPage'
import { ContactPage } from './pages/ContactPage'
import { TrialPage } from './pages/TrialPage'
import { SchedulePage } from './pages/SchedulePage'
import { NotFoundPage } from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'programs', element: <ProgramsPage /> },
      { path: 'schedule', element: <SchedulePage /> },
      { path: 'trainers', element: <TrainersPage /> },
      { path: 'membership', element: <MembershipPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'trial', element: <TrialPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: '/admin-demo',
    lazy: async () => ({
      Component: (await import('./layouts/AdminLayout')).AdminLayout,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminDashboardPage,
        }),
      },
      {
        path: 'leads',
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminLeadsPage,
        }),
      },
      {
        path: 'trials',
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminTrialsPage,
        }),
      },
      {
        path: 'memberships',
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminMembershipsPage,
        }),
      },
      {
        path: 'trainers',
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminTrainersPage,
        }),
      },
      {
        path: 'programs',
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminProgramsPage,
        }),
      },
      {
        path: 'gallery',
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminGalleryPage,
        }),
      },
      {
        path: 'testimonials',
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminTestimonialsPage,
        }),
      },
      {
        path: 'offers',
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminOffersPage,
        }),
      },
      {
        path: 'analytics',
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminAnalyticsPage,
        }),
      },
      {
        path: 'settings',
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminSettingsPage,
        }),
      },
      {
        path: 'classes',
        lazy: async () => ({
          Component: (await import('./pages/admin/AdminPages')).AdminClassesPage,
        }),
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
