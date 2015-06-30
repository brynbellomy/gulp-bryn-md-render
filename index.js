'use strict';

var path = require('path');
var through = require('through2');
var gutil = require('gulp-util');
var matter = require('gray-matter');
var md = require('bryn-md-render').getRenderer();
var _ = require('lodash');

module.exports = function (options) {
    return through.obj(function(file, enc, callback) {
        if (file.isNull()) {
            this.push(file);
            return callback();
        }
        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-bryn-md-render', 'Streaming not supported'));
            return callback();
        }

        try {
            // Extend the context
            var rendered = md.render(String(file.contents));
            file.contents = new Buffer(rendered);
            file.path = file.path.replace(/\.md$/, '.html')

        } catch (err) {
            this.emit('error', new gutil.PluginError('gulp-bryn-md-render', err));
        }

        this.push(file);
        callback();
    });
};
