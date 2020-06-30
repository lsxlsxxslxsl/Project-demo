module.exports = {
  apps: [
    {
      name: 'upgrade',
      script: './main.js',
      instances: 'max',
      watch: true,
      env: {
        PORT: 8001,
        NODE_ENV: 'test',
      },
      env_production: {
        PORT: 8002,
        NODE_ENV: 'production',
      },
    },
  ],
};
