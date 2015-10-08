var fs = require('fs'),
    request = require('urllib-sync').request;

module.exports = function (cwd) {
    return function ($) {
        $('link[rel=stylesheet]').each(function () {
            var src = $(this).attr('href'),
                path = src,
                file = '',
                setFile = function (data) {
                    return '<style>' + data + '</style>';
                };
            if (src.indexOf('//') === -1) {
                
                path = process.cwd() + '/' + cwd + '/' + src;
                if (fs.existsSync(path)) {
                    file = setFile(String(fs.readFileSync(path)));
                }
            }else if (src.indexOf('//') != -1) {
                file = setFile(String(request(path).data));
            };
            $(this).replaceWith(file);
        });
    };
};
