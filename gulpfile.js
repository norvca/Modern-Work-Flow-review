var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('default', function() {

})

gulp.task('html', function() {

})

gulp.task('style', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport, autoprefixer, nested, cssvars]))
    .pipe(gulp.dest('./app/temp/styles'));
})

gulp.task('watch', function() {
  // 监听 html 文件
  watch('./app/index.html', function() {
    gulp.start('html');
  })

  // 监听 css 文件
  watch('./app/assets/styles/**/*', function() {
    gulp.start('style');
  })

})


