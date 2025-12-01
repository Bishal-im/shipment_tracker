## 🌐 Deployment

### **Deploy to Vercel**
https://shipment-tracker-chi.vercel.app/
---

## 📚 Libraries Used

| Library        | Purpose |
|----------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety and better DX |
| **Tailwind CSS** | Utility-first styling |
| **Lucide React** | Modern, clean icon set |
| **React Hooks** | State & lifecycle management (`useState`, `useEffect`, `useMemo`) |

---

## ✨ Key Features Implementation

### **🔐 Authentication**
- Email & password form validation  
- Clean UI with helpful error states  
- Automatic redirect to dashboard after successful login  

### **📊 Dashboard**
- Overview cards showing shipment statistics  
- Fully functional data table with:  
  - Search (by ID or Product Name)  
  - Sorting (ID, Product Name, Status, Last Updated)  
  - Pagination (5 items/page)  

### **📦 Shipment Details**
- Dynamic routing: `/shipment/[id]`  
- Visual timeline showing order progress  
- Product image preview  
- Last 5 activity logs  
- Color-coded status badge  

### **🔗 API Integration**
- Loading states with spinner  
- Error handling + retry flow  
- Clean async/await data fetching  
- Proper state management using hooks  

### **💎 UI/UX**
- Fully responsive layout  
- Modern, minimalistic design  
- Reusable components  
- Professional folder structure  
- Status-based color badges  

---

## 📁 Project Structure

├── app/
│   ├── dashboard/          # Dashboard page
│   ├── shipment/[id]/      # Dynamic shipment details
│   ├── signup/             # Signup page
│   ├── page.tsx            # Login page
│   └── layout.tsx          # Root layout
├── components/
│   ├── dashboard/          # Dashboard components
│   └── Navbar.tsx          # Navigation
├── lib/
│   └── AuthContext.tsx     # Authentication context
└── public/
    └── data/
        └── shipments.json  # Mock API data


---

## 🎨 Design Highlights

- **Color Scheme:** Indigo primary + status colors  
- **Typography:** Clean, readable, structured  
- **Spacing:** Consistent margins & padding  
- **Interactions:** Smooth hover transitions  

### **Status Colors**
- 🟢 **Delivered**
- 🟡 **In Transit**
- 🔴 **Delayed**
- 🔵 **Ordered**

---

## ⚡ Performance

- Fast page loads with App Router  
- Client-side rendering for interactive parts  
- Optimized images using Next.js Image  
- Efficient memoization with `useMemo`  

---
## 🖼️ Screenshots

- Login page :-
   <img width="1669" height="811" alt="Screenshot 2025-12-01 145945" src="https://github.com/user-attachments/assets/11747a6b-0e2b-4b36-96dc-71aa37bfa416" />

- Dashboard ( shipment tables ) :- 
  <img width="1716" height="880" alt="Screenshot 2025-12-01 150007" src="https://github.com/user-attachments/assets/33f4d64b-ef72-4ed9-bf11-18d932c1e633" />

- Shipment Details :-
   <img width="1679" height="849" alt="Screenshot 2025-12-01 150030" src="https://github.com/user-attachments/assets/8faf3489-9eca-4359-ae1f-446fba912181" />

---
## 🔧 Configuration

### **Tailwind CSS**
- Preconfigured in `tailwind.config.ts`

### **TypeScript**
- Strict mode enabled in `tsconfig.json`

### **ESLint**
- Ready-to-use code quality rules  

---

## 🐛 Troubleshooting

**Images not loading?**  
- Check allowed domains in `next.config.js`

**Build errors?**  
- Run `npm install` to restore dependencies  
- Delete `.next/` folder and rebuild  

---

## 📝 License
Created exclusively for the **Snipe Blockchain Technical Assessment**.

---

## 👨‍💻 Developer
Built with ❤️ for the **Snipe Blockchain Frontend Developer Assessment**.

