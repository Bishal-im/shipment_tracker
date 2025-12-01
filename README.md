🌐 Deployment
Deploy to Vercel
https://shipmenttracker-gold.vercel.app/


✨ Key Features Implementation:-

Authentication (Part 1):-

Form validation for email and password
Clean UI with error states
Redirects to dashboard on successful login

Dashboard (Part 2)

Overview cards showing shipment statistics
Fully featured table with:

Search by ID or Product Name
Sorting on ID, Product Name, Status, and Last Updated
Pagination (5 items per page)



Shipment Details (Part 3)

Dynamic routing (/shipment/[id])
Visual timeline showing order progress
Product image display
Last 5 activity logs
Status badge with color coding

API Integration (Part 4)

Loading states with spinner
Error handling with retry option
Clean data fetching with async/await
Proper state management

UI/UX (Part 5)

Fully responsive on all devices
Modern, clean design
Reusable components
Professional folder structure
Color-coded status badges

🎨 Design Highlights

Color Scheme: Indigo primary with status-specific colors
Typography: Clean, readable fonts with proper hierarchy
Spacing: Consistent padding and margins
Interactions: Smooth hover effects and transitions
Status Colors:

🟢 Green: Delivered
🟡 Yellow: In Transit
🔴 Red: Delayed
🔵 Blue: Ordered



📊 Performance

Client-side rendering for interactive components
Optimized images with Next.js Image component
Efficient state management with useMemo
Fast page loads with App Router

🔧 Configuration
Tailwind CSS
Pre-configured in tailwind.config.ts
TypeScript
Strict mode enabled in tsconfig.json
ESLint
Code quality checks configured
🐛 Troubleshooting
Issue: Images not loading

Check next.config.js has correct image domains

Issue: Build errors

Run npm install to ensure all dependencies are installed
Clear .next folder and rebuild

📝 License
This project is created for the Snipe Blockchain technical assessment.
👨‍💻 Developer
Built with ❤️ for Snipe Blockchain Frontend Developer Assessment

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# Shipment-Tracker" 
