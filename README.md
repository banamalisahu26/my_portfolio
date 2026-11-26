# Banamali Sahu — Electronics & Communication Engineering Portfolio

Modern dark-themed engineering portfolio built with **React.js**, **Vite**, **Framer Motion**, and **Lucide React**, tailored for VLSI, Semiconductor, Embedded Systems, and Biomedical Electronics roles.

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Customization Checklist

- **Resume PDF**: Place your actual resume at `public/resume.pdf`.
- **Profile Photo**: Replace the placeholder in `src/components/Hero.jsx` with your photo (e.g., `public/profile.jpg`).
- **Certificate Images**: Add certificate images to `public/certificates/` and set `imagePath` in `src/data/portfolioData.js`.
- **GitHub, LinkedIn & Email**: Update `personalInfo.contact` and each project's `githubUrl` in `src/data/portfolioData.js`.
- **Contact Form Backend**: Set `CONTACT_ENDPOINT` in `src/components/Contact.jsx` to your Formspree, EmailJS, or Vercel serverless endpoint.

## Deployment (Vercel)

This project includes `vercel.json` and is ready for zero-config deployment on Vercel (`npm run build` -> `dist`).
