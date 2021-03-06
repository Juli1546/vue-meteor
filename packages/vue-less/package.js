Package.describe({
  name: 'akryum:vue-less',
  version: '0.0.5',
  summary: 'Add less support for vue components',
  git: 'https://github.com/Akryum/meteor-vue-component',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "vue-component-less",
  use: [
    'ecmascript@0.4.3'
  ],
  sources: [
      'vue-less.js'
  ],
  npmDependencies: {
    'less': '2.7.1'
  }
});

Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});
