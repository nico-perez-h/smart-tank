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
          root: ["./"],
          alias: {
            "@components": "./components",
            "@hooks": "./hooks",
            "@utils": "./utils",
            "@services": "./services",
            "@constants": "./constants",
            "@types": "./types",
            "@assets": "./assets",
            "@root": "./",
          },
        },
      ],
    ],
  };
};
