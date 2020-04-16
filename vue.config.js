module.exports = {
    publicPath: '/',

    outputDir: 'dist',

    assetsDir: 'src/assets/',

    filenameHashing: true,

    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Search Component',
            description: 'Vue search component for Sovkombank',
            url: '/',
            themeColor: '#e6f2fe'
        }
    },

    lintOnSave: true,

    productionSourceMap: true,

    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = {
                    video: ['src', 'poster'],
                    source: 'src',
                    img: 'src',
                    image: 'xlink:href'
                };
                return options;
            });
    },

    css: {
        sourceMap: true
    }
};
