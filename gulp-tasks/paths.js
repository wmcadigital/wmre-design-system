module.exports = {
  output: 'docs/', // Default output location for code docs
  server: {
    port: 3000,
    baseDir: './docs/',
    root: './docs/'
  },
  styles: {
    src: ['src/**/*.scss'], // src of styles to watch
    minifySrc: [
      'src/wmre/assets/sass/wmre.scss',
      'src/www/wmre-website.scss',
      'src/www/pages/templates/templates.scss'
    ], // List of scss file(s) which should be processed, linted & minified
    output: 'docs/css/', // output location of minified styles
    reactNativeSrc: 'src/wmre/assets/sass/wmre.scss'
  },
  scripts: {
    src: ['src/**/*.js'], // Src of JS files to watch
    // List of JS folders to concatenate, lint and minified to one file (DON'T LINT ASSETS AS IT WILL TAKE TOO LONG TO SCAN MINIFIED LIBS)
    minifySrc: [
      {
        src: 'src/www/wmre-website.js',
        minName: 'wmre-website.min.js',
        lint: true
      }
    ],
    output: 'docs/js/' // Output location of minified JS files
  },
  fonts: {
    src: 'src/wmre/assets/fonts/**/*',
    output: 'docs/fonts/'
  },
  nunjucks: {
    src: 'src/**/*.{njk,md,html}', // Used for watching njk files
    websiteSrc: 'src/www/pages/**/*.{njk,md,html}',
    componentSrc: 'src/wmre/**/*.{njk,md,html}',
    output: 'docs/',
    componentOutput: 'docs/njk'
  },
  njkData: {
    src: 'src/**/*.njk.json',
    output: 'docs/json/'
  },
  svgs: {
    src: 'src/wmre/assets/icon/**/*.svg',
    dest: 'docs/img/'
  },
  images: {
    src: ['src/wmre/assets/img/**/*.{png,gif,jpg}'],
    output: 'src/wmre/assets/img/**/*',
    dest: 'docs/img/'
  },
  config: {
    src: 'src/www/assets/config/**/*',
    output: 'docs/config/'
  },
  logs: {
    sourcemaps: '_sourcemaps/'
  },
  clean: {
    a11y: './src/www/pages/**/a11y-report.json',
    tmp: './src/www/pages/**/.tmp'
  }
};
