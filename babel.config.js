module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const enableFastRefresh = !api.env("production") && !api.env("test");

  return {
    presets: [
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          corejs: 3,
          modules: false,
          useBuiltIns: "usage",
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [
      [
        "relay",
        {
          schema: "./data/schema.json",
        },
      ],
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-export-namespace-from",
      // Applies the react-refresh Babel plugin on non-production modes only
      ...(enableFastRefresh ? ["react-refresh/babel"] : []),
    ],
  };
};
