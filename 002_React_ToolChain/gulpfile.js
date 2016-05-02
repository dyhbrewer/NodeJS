var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

// transpile jsx to js
gulp.task("bundle", function () {
    return browserify({
        entries: "./app/index.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("index.js"))
        .pipe(gulp.dest("app/public"))
});

// bundle assets together to the public folder
gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css"])
        .pipe(gulp.dest("app/public"));
});

gulp.task("default",["copy"],function(){
    console.log("Gulp completed...");
});
