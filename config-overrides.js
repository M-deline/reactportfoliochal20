// const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
//   const path = require('path');

  module.exports = function override(config, env) {
    // Make sure the config object exists
    config.resolve = config.resolve || {};
    
    // Add fallbacks for Node.js core modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
      "process": require.resolve("process/browser")
    };
  
    return config;
}