var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

// gulp.task('styles', function() {
//   console.log("Imagine Sass or PostCSS tasks running here.");
// });

function styles(done) {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([autoprefixer])) 
        .pipe(gulp.dest('./app/temp/styles'));
    done();
}

function watchhtml(done) {
  watch('./app/index.html', function() {
    console.log("html changed");
  });
done();
}

function watchcss(done) {
  watch('./app/assets/styles/**/*.css', function() {
    console.log("css changed");
  });
done();
}
gulp.task('watch',gulp.series(watchhtml,watchcss));



//   watch('./app/assets/styles/**/*.css', function() {
//     console.log("html");
//   });

// });