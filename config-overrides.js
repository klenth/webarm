module.exports = {
    webpack: function(config, env) {
        config.resolve.fallback = {
            fs: false
        };

        // Uncomment to show Webpack config on build/start
        // console.log(config);

        return config;
    }
}

