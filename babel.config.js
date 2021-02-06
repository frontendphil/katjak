module.exports = {
  plugins: ['lodash'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
}
