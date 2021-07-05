const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts }
    } = await getDefaultConfig(__dirname);
    return {
        transformer: {
            babelTransformerPath: require.resolve("react-native-svg-transformer")
        },
        resolver: {
            assetExts: assetExts.filter(ext => ext !== "svg"),
            sourceExts: [...sourceExts, "svg"]
        },
        expo: {
            packagerOpts: {
                config: "metro.config.js",
                sourceExts: ["js", "jsx", "ts", "tsx", "svg"]
            }
        }
    };
})();