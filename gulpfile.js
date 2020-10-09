const gulp = require('gulp');
const serve = require('./Test-Landing/gulp/tasks/serve');
const style = require('./Test-Landing/gulp/tasks/style');
const script = require('./Test-Landing/gulp/tasks/script');
const clean = require('./Test-Landing/gulp/tasks/clean');
const images = require('./Test-Landing/gulp/tasks/images');
const html = require('./Test-Landing/gulp/tasks/html');
const fonts = require('./Test-Landing/gulp/tasks/fonts');

function setMode(isProduction = false) {
    return cb => {
        process.env.NODE_ENV = isProduction ? 'production' : 'development';
        cb()
    }
}

const dev = gulp.parallel(html, style, script, images, fonts);

const build = gulp.series(clean, dev);

module.exports.start = gulp.series(setMode(), build, serve);
module.exports.build = gulp.series(setMode(true), build);
