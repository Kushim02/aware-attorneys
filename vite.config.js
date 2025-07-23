import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'georgia': ['"Georgia", serif'],
      },
     colors: {
        'custom-gold': {
          200: '#d4af37',
          100: "rgb(166, 139, 51)", // rgb(212, 175, 55)
        }
      },
      },
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})
