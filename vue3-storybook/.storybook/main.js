module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
          test: /\.(less)$/,
          use: [
              require.resolve('style-loader'),
              require.resolve('css-loader'),
              require.resolve('less-loader'),
          ],
      });
        return config;
    },
};
