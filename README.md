🌐 Deployment

🔗 Live Demo: https://shipmenttracker-gold.vercel.app/

✨ Key Features & Implementation
Authentication (Part 1)

Robust form validation for email & password

Clean, user-friendly UI with proper error states

Automatic redirection to the dashboard upon successful login

Dashboard (Part 2)
📌 Overview Cards

Displays key shipment statistics at a glance

📌 Advanced Table Features

Search shipments by ID or Product Name

Sorting enabled for:

Shipment ID

Product Name

Status

Last Updated

Pagination (5 items per page) for smooth navigation

Shipment Details (Part 3)

Dynamic routing: /shipment/[id]

Visual timeline showing real-time order progress

High-quality product image display

Recent 5 activity logs

Status badges with meaningful color coding

API Integration (Part 4)

Smooth loading states with animated spinner

Full error handling + retry option

Clean async/await data fetching flow

Organized state management for reliability

UI/UX (Part 5)

100% responsive layout for mobile, tablet, and desktop

Modern, minimalistic design

Reusable, modular components

Professional folder structure

Status color badges for quick insights

🎨 Design Highlights
Color Scheme

Indigo primary theme

Status-specific colors

Status Colors

🟢 Green: Delivered

🟡 Yellow: In Transit

🔴 Red: Delayed

🔵 Blue: Ordered

Typography & Spacing

Clean, readable font hierarchy

Consistent spacing across layout

Smooth hover animations & transitions

📊 Performance Optimizations

Client-side rendering for fast interactions

Image optimization using Next.js Image component

Efficient state management with useMemo

Faster page loads using Next.js App Router

🔧 Configuration

Tailwind CSS fully configured (tailwind.config.ts)

TypeScript with strict mode enabled

ESLint set up for code quality and standards

🐛 Troubleshooting
Images not loading?

Check next.config.js and ensure correct image domains are added.

Build errors?

Run npm install to confirm all dependencies

Delete the .next folder and rebuild your project

📝 License

This project is developed for the Snipe Blockchain Technical Assessment.

👨‍💻 Developer

Built with ❤️ for the Snipe Blockchain Frontend Developer Assessment.
