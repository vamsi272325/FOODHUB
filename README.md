# 🍛 Indian Recipe Hub

Indian Recipe Hub is a sleek, interactive web application showcasing delicious South Indian and Biryani recipes. Built with pure **HTML**, **CSS**, and **JavaScript**, it allows users to search, filter, and view detailed recipe instructions in a smooth, modern interface.

---

## 🔥 Features

- **Search** recipes by name with instant filtering  
- **Filter** recipes by category (Biryani, South Indian, Veg, Chicken)  
- Responsive **grid layout** showcasing recipe cards with images  
- **Modal popup** to display detailed recipe information (ingredients, steps, tips, and more)  
- Accessible and user-friendly design with keyboard and click controls  

---

## 🖼️ Demo Screenshot

![Demo Screenshot](screenshot.png)

---

## 📁 Project Structure

IndianRecipeHub/
├── index.html # Main HTML page with app structure
├── style.css # Stylish, responsive CSS with glassmorphism and dark theme
├── script.js # JavaScript handling data, filtering, search, and modal

---

## 🛠️ Technologies Used

- **HTML5** — Semantic structure and accessibility  
- **CSS3** — Custom properties, grid layout, glassmorphism effect, and responsive design  
- **JavaScript (ES6)** — DOM manipulation, event handling, filtering, and modal functionality  

---

## 💡 How It Works

1. **Recipes Data:** Stored as an array of objects in `script.js`, each containing all recipe details like title, category, image URL, ingredients, steps, and tips.

2. **Rendering:**  
   - The `renderList()` function dynamically creates clickable recipe cards inside a responsive grid.  
   - Clicking a card opens a modal with the full recipe details, images, and instructions.

3. **Filtering & Searching:**  
   - Category filter chips allow users to toggle between recipe types.  
   - The search input filters recipes by title text.  
   - Both filters work together to show matching recipes in real-time.

4. **Modal:**  
   - Shows detailed recipe info and closes when clicking outside or on the close button.  
   - Includes proper ARIA roles for accessibility.

---

## 🧑‍💻 Usage Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/indian-recipe-hub.git
   🎨 Styling Notes

Uses CSS variables (custom properties) for easy theming and customization.

Background is a fixed, darkened food-themed photo for visual appeal.

Glassmorphism effect on cards and modal creates a modern look.

Responsive design ensures usability on mobile and desktop.

Filter chips and search input have interactive hover and active states with accent colors.

To customize, modify CSS variables in style.css under the :root selector.

📄 License

This project is licensed under the MIT License
.

🙌 Acknowledgments

Recipe inspiration from traditional South Indian and Hyderabadi cuisine

Background images from Unsplash

Icons and UI inspiration from open-source design patterns
