
var akasha = require('../akashacms');
var akashaEPUB = require('../akashacms-epub');

module.exports = function(grunt) {
    
    grunt.initConfig({
        root_assets: [ 'assets' ],
        root_layouts: [ 'layouts' ],
        root_partials: [ ],
        root_out: 'out',
        root_docs: [ 'documents'],
        headerScripts: {
            stylesheets: [
                { id: "stylesheet", href: "css/style.css", type: "text/css" },
            ]
        },
        akashacms: akasha,
        akashaEPUB: akashaEPUB,
        book: grunt.file.readYAML("book.yml")
    });
    
    grunt.loadTasks('../akashacms/tasks');
    grunt.loadTasks('../akashacms-epub/tasks');
    
    grunt.registerTask("doepub", [
        'akashacmsEPUBstart',
        'emptyRootOut', 'copyAssets', 'ePubConfigCheck',
        'gatherDocuments', 'scanForBookMetadata',
        'makeMetaInfDir', 'makeMimetypeFile', 'makeContainerXml',
        'makeCoverFiles', 'makeTOC',
        'assetManifestEntries',
        'makeOPF',
        'renderDocuments',
        'bundleEPUB'
    ] );
    
    // grunt.registerTask('epubcheck', [ 'EPUBcheck' ]);
    
};