import viteSvgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/styles/index.scss'],
  vite: {
    plugins: [viteSvgLoader({
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupIds: false,
              },
            },
          },
        ],
      }
    })]
  }
})
