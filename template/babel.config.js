module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@navigation': './src/navigation',
          '@elements': './src/elements',
          '@hooks': './src/hooks',
          '@components': './src/components',
          '@store': './src/store',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
