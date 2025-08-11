# CardDefender - Advanced Card Security Solution

A modern React-based web application for advanced card security and protection services.

## 🚀 Features

- **Interactive Card Interface**: Modern, responsive card design with advanced animations
- **Fuzzy Text Effects**: Dynamic text animations for enhanced visual appeal
- **Hyperspeed Backgrounds**: Engaging background effects with customizable presets
- **Comprehensive Footer**: Detailed information sections including:
  - About CardDefender
  - Documentation
  - Careers
  - FAQs
  - Contact Support
  - News & Press
  - Our Mission
  - Team Information
- **Responsive Design**: Fully responsive layout for all device sizes
- **Modern UI/UX**: Clean, professional design with smooth transitions

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: CSS3 with modern flexbox/grid layouts
- **Animations**: Custom CSS animations and transitions
- **Icons**: React Icons
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: Vercel-ready configuration

## 📁 Project Structure

```
card/
├── public/
│   ├── carddefender.png
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Background/
│   │   ├── FuzzyText/
│   │   ├── Hyperspeed/
│   │   ├── navbar/
│   │   ├── targetcursor/
│   │   ├── texttype/
│   │   └── footer/
│   │       ├── Aboutcarddefender/
│   │       ├── careers/
│   │       ├── contactlayout/
│   │       ├── documentation/
│   │       ├── faqs/
│   │       ├── link/
│   │       ├── newpress/
│   │       ├── ourmission/
│   │       └── team/
│   ├── layout/
│   ├── Pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Surajk86808/Carddefender.git
cd Carddefender
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Deployment

### Vercel Deployment
The project is configured for easy deployment on Vercel:

1. Push your changes to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Build for Production
```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Colors
Primary colors can be customized in `src/index.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### Components
All components are modular and can be easily customized:
- Footer components are located in `src/components/footer/`
- Page components are in `src/Pages/`
- Reusable components are in `src/components/`

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices (320px - 768px)
- Tablets (768px - 1024px)
- Desktops (1024px and above)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For any questions or support, please reach out through the contact section on the website.

---

Built with ❤️ using React and Vite
