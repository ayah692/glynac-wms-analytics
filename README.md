# 🧭 Glynac WMS Analytics Dashboard

A modern **Wealth Management System (WMS) analytics suite** built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Recharts**.  
It provides interactive dashboards for **Advisors**, **Operations**, and **Compliance** teams — designed for real-time insights and future backend integration.

---

## 📊 Features

| Area | Highlights |
|------|-------------|
| **Advisor Dashboard** | Portfolio summary, top clients list, performance insights chart |
| **Operations Dashboard** | Process metrics line chart, resource utilization bars, system health uptime area |
| **Compliance Dashboard** | Regulatory status table, risk assessment pie chart, audit tracking list |
| **Landing Page** | `/` route with clean cards linking to all dashboards |
| **Reusable Layout** | Shared `DashboardLayout` component with consistent header & styling |
| **Responsive Design** | Fully optimized for mobile, tablet, and desktop |
| **Charts** | Built with [`recharts`](https://recharts.org/en-US) for smooth animations and tooltips |

---

## 🧱 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org)
- **Language:** TypeScript + React 19
- **Styling:** Tailwind CSS 4
- **Charts:** Recharts
- **Icons:** Lucide React

---

## 📂 Project Structure

app/
├─ page.tsx → Landing page with dashboard links
└─ dashboard/
├─ advisor/ → Advisor Dashboard
├─ operations/ → Operations Dashboard
└─ compliance/ → Compliance Dashboard
components/
├─ layout/ → Shared DashboardLayout
├─ ui/ → Card and base UI elements
└─ dashboard/ → Section components per dashboard

yaml
Copy code

---

## 🚀 Getting Started

```bash
# Clone repository
git clone https://github.com/ayah692/glynac-wms-analytics.git
cd glynac-wms-analytics

# Install dependencies
npm install

# Start development server
npm run dev
Then open http://localhost:3000 in your browser.

🧭 Available Routes
Route	Description
/	Landing page with links to dashboards
/dashboard/advisor	Advisor dashboard (portfolio & clients)
/dashboard/operations	Operations dashboard (metrics & system health)
/dashboard/compliance	Compliance dashboard (regulatory & audit)

🧑‍💻 Development Notes
All dashboards use realistic mock data to simulate backend-ready structures.

The project follows a modular structure — each dashboard is a self-contained page with its own sub-components.

Future improvements:

Connect to real API/backend for live data.

Add authentication and user roles.

Deploy on Vercel.
