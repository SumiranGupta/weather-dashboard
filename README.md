# 🌦️ Weather Dashboard

A sleek and responsive weather dashboard built with React.js, Tailwind CSS, and the OpenWeatherMap API. It allows users to search for current weather conditions and view a 5-day forecast for any city worldwide.

---

## 🚀 Tech Stack Used

- ⚛️ **React.js** – Frontend framework
- 🎨 **Tailwind CSS** – Utility-first CSS styling
- 🌐 **HTML & CSS** – Base markup and styling
- 🟣 **Node.js** – Runtime environment (if used for tooling)
- 📱 **React Native** – *(if applicable, for mobile version)*
- 🟩 **Vue** – *(if applicable, for experimenting with alternate UI components)*

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js and npm installed
- OpenWeatherMap API key

### Steps

1. Clone the Repository**
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard

2. Install Dependencies
bash
Copy
Edit
npm install

3. Create Environment File Create a .env file in the root directory:
env
Copy
Edit
VITE_OPENWEATHER_API_KEY=your_api_key_here

4.Run Locally
bash
Copy
Edit
npm run dev

5.Build for Production
bash
Copy
Edit
npm run build

🔌 API Integration
🌀 API Used
OpenWeatherMap API – https://openweathermap.org/api

🔑 API Key
You must sign up for a free API key at OpenWeatherMap

Add it to your .env as:

env
Copy
Edit
VITE_OPENWEATHER_API_KEY=your_api_key
📉 Rate Limits
Free Tier: 60 API calls per minute

Paid Tiers: Higher limits depending on plan

🔍 Endpoints Used
Current Weather: https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}

5-Day Forecast: https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}

📦 Deployment
This project is deployed on Vercel.
If you face issues like package.json not found, make sure to upload the entire project folder (not just dist) or link your GitHub repo for seamless CI/CD.

📸 Preview
![Screenshot 2025-04-09 042500](https://github.com/user-attachments/assets/1f7d4251-abab-4bc7-aa8a-969164fb374a)
![Screenshot 2025-04-09 042938](https://github.com/user-attachments/assets/1b546384-9664-482c-bcee-4196960863b0)

