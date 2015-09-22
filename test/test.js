var plugin = require('../');
var fs = require('fs');
var request = require('urllib-sync').request
var postxml = require('postxml');
var expect = require('chai').expect;

var testLocal = function (input, file, opts) {

   var proccesed = postxml(input, [plugin(opts)]);
   
   var path = process.cwd() + '/' + file;
   
   var output = '<style>' + String( fs.readFileSync(path) ) + '</style>';
   
   expect(proccesed).to.eql(output);
};

var testRemote = function (input, opts) {

    var processed = postxml(input, [plugin(opts)]);
    
    expect(processed).to.have.string('style');
}

describe('postxml-import-styles', function () {
    it('local styles', function () {
        testLocal(
            '<link href="styles.css">',
            'test/styles.css',
            'test/'
        );
    });
    it('remote styles', function () {
        testRemote(
            '<link href="//raw.githubusercontent.com/daneden/animate.css/master/animate.css">',
            ''
        );
    });
});
