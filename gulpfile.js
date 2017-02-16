//  Gulp Configuration (CREWLINK_MEAN_API)
var outputPath = "public";
var inputPath = "public_development";


var output = outputPath + '/';
var input = inputPath + '/';


var gulp                = require("gulp");
var cssnano             = require('gulp-cssnano');
var merge               = require('merge-stream');
var browserSync         = require('browser-sync').create();
var runSequence         = require('run-sequence');
var gulp                = require('gulp'); 
var concat              = require('gulp-concat');
var del                 = require('del');

 var useref             = require('gulp-useref');

//gulp.task('clean:' + outputPath, function() {
  ///  return del.sync(outputPath);
//});

// Clean everything
gulp.task('cache:clear', function(callback) {
    return cache.clearAll(callback);
});

gulp.task('styleSheetsTasks', function() {

var cssStream = gulp.src(input + 'styles/**/*.css')
        .pipe(concat('css-files.css'));

        var scssStream = gulp.src(input + 'scss/**/*.scss')
        .pipe(concat('scss-files.scss'));

    var mergedStream = merge(cssStream,scssStream)
        .pipe(concat('main.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(output + 'styles'));

    return mergedStream;    

});


// Minify Css and JS 
gulp.task('useref', function() {

    if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV === undefined) {
        console.log('in development');
        return gulp.src(input + '*.html')
            .pipe(useref())
            .pipe(gulp.dest(output));
    }  else {
        console.log('iin production');
        console.log(process.env.NODE_ENV);
        return gulp.src(input + '*.html')
            .pipe(useref())
            .pipe(gulp.dest(output));
    }
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: output
        },
    });
});

gulp.task('build', function(callback) {
    runSequence('clean:' + outputPath,['styleSheetsTasks','scriptsTask','useref'],
        callback
    );
});

gulp.task('scriptsTask', function() {
    console.log("Script is updating");
    return gulp.src(input + 'scripts/**/*')
        .pipe(gulp.dest(output + 'scripts'));
});

gulp.task('default', function(callback) {
    runSequence(['styleSheetsTasks','scriptsTask','browserSync','watch','useref'],
        callback
    );
});

gulp.task('watch', ['browserSync', 'styleSheetsTasks','scriptsTask'], function() {
   
    gulp.watch(input + 'styles/**/*.css', ['styles']);
    gulp.watch(input + 'scss/**/*.scss', ['styles']);
    gulp.watch(input + 'scripts/**/*', ['scriptsTask']);
    gulp.watch(input + '**/*.html', ['useref']);
    gulp.watch(input + '**/*', browserSync.reload);
   
});