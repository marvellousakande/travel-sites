var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(done) {
  console.log("Hooray - you created a Gulp task.");
  done();
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

function styles(done) {
    return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
    done();
}

gulp.task('styles',styles);
// gulp.task('watch', function(done) {

//   watch('./app/index.html', function() {
//     gulp.start('html');
//   });

//   watch('./app/assets/styles/**/*.css', function() {
//     gulp.start('styles');
//   });   
//     done();
// });

// gulp.task('watch',function(done){
//     gulp.watch('app/index.html', ['scripts'] );
//     done();
// });


gulp.task('testing', testing);
function testing(done) {
  console.log("Imagine something useful being done to your HTML here.");
  done();
}



function a(done){
    done();
}


function b(done){
    done();
}

gulp.task("default",gulp.parallel(a,b));




function watchhtml(done){
    watch('./app/index.html', function(){
        console.log("Hey");
    });
    done();
}

gulp.task('watch',watchhtml);