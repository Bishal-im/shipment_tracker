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

