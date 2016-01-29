var swig = require('swig');
swig.setFilter('foobar', function (input) {
    return 'test'
});
