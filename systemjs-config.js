(function (global) {
  
    System.config({
      defaultExtension: 'js',
      map: {
        'app': 'src/apps/demo/bundle.js',
  
        '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.js',
        '@angular/animations/browser': 'node_modules/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
        '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
        '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
      }
    });
  })(this);