const withImages = require('next-images');

module.exports = withImages({
    webpack(config, options) {
        config.module.rules.push({
            test: /(\.webmanifest|browserconfig\.xml)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: '/',
                    },
                },
                {
                    loader: 'app-manifest-loader',
                },
            ],
        });
        return config;
    },
});
