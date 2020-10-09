const del = require('del/index');

module.exports = function clean(cb) {
    return del('build').then(() => {
        cb()
    })
};
