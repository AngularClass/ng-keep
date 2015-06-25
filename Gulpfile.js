var gulp        = require('gulp'),
    webpack     = require('webpack-stream'),
    serve       = require('browser-sync'),
    sync        = require('run-sequence');


var paths = {
  entry: './client/app/app.js',
  output: './client',
  app: './client/app/**/*.{js,html,styl}'
};

/**
 * This task will call the webpack
 * plugin that will call webpack
 * using our webpack config file.
 */
gulp.task('build', function() {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
});

/**
 * This task will start a server
 * on port 4500 and serve our app
 */
gulp.task('serve', function() {
  serve({
    open: false,
    port: 4500,
    server: {
      baseDir: 'client'
    }
  });
});

/**
 * This task will watch all files
 * in our app. On any saved change
 * it will re bundle with webpack
 * then reload the browser
 */
gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', serve.reload]);
});


/**
 *
 */
gulp.task('dev', function(done) {
  sync('build', 'serve', 'watch', done)
});
