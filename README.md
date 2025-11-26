# Sam Wilk - Portfolio Website

A modern, minimalist portfolio website built with React and Vite, featuring a warm neutral color scheme and full mobile responsiveness.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Clean & Minimalist**: Warm neutral color palette (cream, beige, warm browns)
- **Interactive Elements**: Smooth scrolling navigation and subtle hover effects
- **Sections Include**:
  - Hero/Introduction
  - About Me
  - Professional Experience
  - Technical Skills
  - Featured Projects
  - Contact Information & Form

## Tech Stack

- React 18
- Vite (Build Tool)
- CSS3 (Custom styling, no frameworks)
- Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js version 20.19+ or 22.12+ (required for latest Vite)
- npm 8.0+ or yarn

### Installation

1. Navigate to the project directory:

   ```bash
   cd portfolio
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

### Running the Development Server

**Note**: Due to Node.js version requirements (20.19+ or 22.12+), you may need to upgrade Node.js first.

To run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx/css    # Fixed navigation bar
│   │   ├── Hero.jsx/css          # Landing section
│   │   ├── About.jsx/css         # About section
│   │   ├── Experience.jsx/css    # Work history
│   │   ├── Skills.jsx/css        # Technical skills
│   │   ├── Projects.jsx/css      # Featured projects
│   │   └── Contact.jsx/css       # Contact form & info
│   ├── App.jsx                   # Main application
│   ├── App.css                   # Global styles
│   ├── index.css                 # Base styles
│   └── main.jsx                  # Entry point
├── public/                        # Static assets
└── package.json
```

## Color Palette

- **Cream**: #FAF7F0 (Background)
- **Beige**: #E8DCC4 (Secondary backgrounds)
- **Warm Brown**: #C8B99C (Borders, subtle elements)
- **Dark Brown**: #6B5D4F (Text)
- **Deep Brown**: #3D3427 (Headers, dark text)
- **Accent**: #A67C52 (Buttons, links, highlights)

## Customization

To customize the content:

1. **Personal Information**: Update components with your own details
2. **Colors**: Modify CSS variables in `App.css`
3. **Sections**: Add/remove sections in `App.jsx`
4. **Contact Form**: Currently logs to console - integrate with backend/email service

## Mobile Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

Sam Wilk  
Email: samwilk18@yahoo.com  
Phone: (904) 599-3512  
GitHub: [github.com/SamWilk](https://github.com/SamWilk)  
Location: Jacksonville, FL

## License

This project is open source and available for personal use.
