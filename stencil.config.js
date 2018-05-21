const sass = require('@stencil/sass');

exports.config = {
  bundles: [
    {
      components: [
        'cv-page',
        'cv-header',
        'cv-header-link',
        'cv-header-meta',
        'cv-section',
        'cv-tag-cloud',
        'cv-tag-cloud-header'
      ]
    }
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
