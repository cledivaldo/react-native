const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push("ttf"); // Adiciona suporte a fontes TTF
config.transformer.enableBabelRCLookup = true;
config.watchFolders = ["./src/"]; // Garante que toda a pasta do projeto seja monitorada

module.exports = config;
