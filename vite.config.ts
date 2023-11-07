import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@models': '/src/types', // Asegúrate de que coincida con la configuración de alias en tsconfig.json
      '@utils': '/src/utils'
    },
  },
})
