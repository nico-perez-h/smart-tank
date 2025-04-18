module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@utils": "./src/utils",
            "@services": "./src/services",
            "@constants": "./src/constants",
            "@types": "./src/types",
            "@assets": "./src/assets",
            "@config": "./src/config",
          },
        },
      ],
    ],
  };
};
