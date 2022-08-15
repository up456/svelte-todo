module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: ['@snowpack/plugin-svelte'],
  alias: {
    '~': './src',
  },
  devOptions: {
    port: 8080,
    open: 'none',
  },
};
