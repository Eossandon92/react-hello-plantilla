export default defineConfig({
  base: "/react-hello-plantilla/",
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
  }
})
