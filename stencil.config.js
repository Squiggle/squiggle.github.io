const sass = require('@stencil/sass');

exports.config = {
  bundles: [
    { components: [
      'cv-page',
      'cv-header'
    ] }
  ],
  collections: [],
  plugins: [
    sass({
      includePaths: ['/components/**']
    })
  ]
};

exports.devServer = {
  root: '.',
  watchGlob: '**/**'
};
