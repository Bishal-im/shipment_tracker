🌐 Deployment
Deploy to Vercel: https://shipmenttracker-gold.vercel.app/

✨ Key Features Implementation:-

Authentication (Part 1):-
• Form validation for email and password
• Clean UI with clear error states
• Redirects to dashboard on successful login

Dashboard (Part 2)
• Overview cards showing key shipment statistics
• Fully featured table with:
– Search by ID or Product Name
– Sorting on ID, Product Name, Status, and Last Updated
– Pagination (5 items per page)

Shipment Details (Part 3)
• Dynamic routing (/shipment/[id])
• Visual timeline representing order progress
• Product image preview
• Last 5 activity logs
• Status badge with color-coded UI

API Integration (Part 4)
• Loading states with spinner
• Error handling with retry button
• Clean async/await data fetching
• Proper state management for smooth UI flow

UI/UX (Part 5)
• Fully responsive across all devices
• Modern, minimal, clean design
• Reusable components for scalability
• Professional folder structure
• Color-coded status badges for clarity

🎨 Design Highlights
• Color Scheme: Indigo primary with status-based colors
• Typography: Clean, legible font hierarchy
• Spacing: Consistent padding and margins
• Interactions: Smooth transitions and hover effects
• Status Colors:
– 🟢 Delivered
– 🟡 In Transit
– 🔴 Delayed
– 🔵 Ordered

📊 Performance
• Client-side rendering for fast interactions
• Optimized images with Next.js Image component
• Efficient state management with useMemo
• Fast page loads with App Router

🔧 Configuration
• Tailwind CSS pre-configured in tailwind.config.ts
• TypeScript strict mode enabled in tsconfig.json
• ESLint set up for code quality checks

🐛 Troubleshooting
Issue: Images not loading → Check next.config.js for correct image domains
Issue: Build errors → Run npm install and delete .next folder before rebuilding

📝 License
This project is created for the Snipe Blockchain Technical Assessment.

👨‍💻 Developer
Built with ❤️ for the Snipe Blockchain Frontend Developer Assessment
