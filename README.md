---

# ⚽ Football Team Cards

This project is a dynamic and responsive web application that displays a football team's details and players using HTML, CSS, and JavaScript. Users can filter players based on their position (Forward, Midfielder, Defender, or Goalkeeper).

---

## 📁 Project Structure

```
football-team-cards/
│
├── index.html         # Main HTML structure
├── styles.css         # Styling for layout and design
└── script.js          # Dynamic functionality and interactivity
```

---

## 🚀 Features

* Displays key information about the football team (name, year founded, head coach).
* Lists all players with their name and position.
* Identifies the team captain.
* Allows users to filter players by their positions using a dropdown.
* Responsive design for both desktop and mobile screens.

---

## 🧠 Technologies Used

* **HTML5** – Structure and content.
* **CSS3** – Styling and responsive layout.
* **Vanilla JavaScript** – DOM manipulation and interactivity.

---

## 🧪 How It Works

* Team and player data are stored in a JavaScript object.
* On page load, the team details and all players are rendered dynamically.
* When a user selects a position from the dropdown, only players with the matching position are displayed.
* The captain is clearly marked with `(Captain)` in the player card.

---

## 📱 Responsive Design

* Utilizes flexbox to arrange elements.
* Layout adapts for smaller screen sizes with a media query for widths less than `768px`.

---

## 🔧 How to Use Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/football-team-cards.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd football-team-cards
   ```

3. **Open `index.html` in your browser:**

   You can double-click the file or use a local server like VS Code Live Server.

---

## 📝 Customization

* **Add more players:** Update the `players` array inside `script.js`.
* **Change team details:** Modify the `footballTeam` object properties (`team`, `year`, `headCoach`).
* **Improve UI:** Modify `styles.css` to match your design preference.

---
