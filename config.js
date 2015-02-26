var fs   = require('fs');
var path = require('path');

module.exports = {
    root_assets: [ 'assets' ],
    root_layouts: [ 'layouts' ],
    root_partials: [ ],
    root_out: 'out',
    root_docs: [ 'documents'],
    
    root_url: 'http://epub-guide.akashacms.com',
    
    doMinimize: false,
    
    akashacmsEPUB: {
        
        files2generate: {
            opf: "ebook.opf",
            ncx: "toc.ncx",
            toc: "toc",
            epub: "guide.epub"
        },
        
        metadata: {
            title: "AkashaCMS EPUB creators guide",
            languages: [ "en" ],
            ISBN: "urn:isbn:123456789X",
            identifier: "urn:isbn:123456789X",
            creators: [
                { name: "David Herron", nameReversed: "Herron, David" },
            ],
            publisher: "Amazon.com",
            subjects: [ "Reference" ],
            date: "2015-02-21",
            modified: "2015-02-26T00:00:00Z",
            cover: "ebook-cover-image",
            rights: "None"
        },
        
        manifest: [
            {
                id: "cover",
                title: "Cover",
                href: "cover.html",
                type: "application/xhtml+xml",
                spineorder: 1
            },
            {
                id: "toc",
                title: "Table of Contents",
                href: "toc.html",
                path: "toc.html.ejs",
                type: "application/xhtml+xml",
                spineorder: 2,
                navclass: "toc",
                toclayout: "page.html.ejs",
                properties: "nav"
            },
            {
                id: "ncx",
                href: "toc.ncx",
                type: "application/x-dtbncx+xml",
                spinetoc: true,
                navclass: "toc"
            },
            {
                id: "chapter1",
                title: "Introduction to AkashaEPUB",
                href: "1-introduction.html",
                type: "application/xhtml+xml",
                spineorder: 3,
                navclass: "book"
            },
            {
                id: "chapter1a",
                title: "Installing Node.js, AkashaCMS and AkashaEPUB",
                href: "1a-installation.html",
                type: "application/xhtml+xml",
                spineorder: 4,
                navclass: "book"
            },
            {
                id: "chapter1b",
                title: "AkashaCMS Directory structure and how it's used in AkashaEPUB",
                href: "1b-akashacms-directory.html",
                type: "application/xhtml+xml",
                spineorder: 5,
                navclass: "book"
            },
            {
                id: "chapter2",
                title: "Creating content for an AkashaEPUB",
                href: "2-creating-content.html",
                type: "application/xhtml+xml",
                spineorder: 6,
                navclass: "book"
            },
            {
                id: "chapter2a",
                title: "Summary of HTML5 markup in AkashaEPUB Documents",
                href: "2a-html5-structure.html",
                type: "application/xhtml+xml",
                spineorder: 7,
                navclass: "book"
            },
            {
                id: "chapter3",
                title: "Configuration",
                href: "3-configuration.html",
                type: "application/xhtml+xml",
                spineorder: 8,
                navclass: "book"
            },
            { id: "stylesheet", href: "css/style.css", type: "text/css" },
            {
                id: "ebook-cover-image",
                properties: "cover-image",
                href: "images/epub-guide-cover.png",
                type: "image/png"
            }, // properties: "cover-image",
            { id: "epub.embedded.font.1", href: "fonts/UbuntuMono-B.ttf", type: "application/vnd.ms-opentype" },
            { id: "epub.embedded.font.2", href: "fonts/UbuntuMono-BI.ttf", type: "application/vnd.ms-opentype" },
            { id: "epub.embedded.font.3", href: "fonts/UbuntuMono-R.ttf", type: "application/vnd.ms-opentype" },
            { id: "epub.embedded.font.4", href: "fonts/UbuntuMono-RI.ttf", type: "application/vnd.ms-opentype" },
            { id: "epub.embedded.font.5", href: "fonts/FreeSerif.otf", type: "application/vnd.ms-opentype" },
            { id: "epub.embedded.font.6", href: "fonts/FreeSansBold.otf", type: "application/vnd.ms-opentype" },
        ],
        
        toc: [
            { id: "cover" },
            { id: "toc" },
            {
                id: "chapter1",
                subtoc: [
                    { id: "chapter1a" },
                    { id: "chapter1b" }
                ]
            },
            {
                id: "chapter2",
                subtoc: [
                    { id: "chapter2a" }/* ,
                    { id: "chapter2b" } */
                ]
            },
            {
                id: "chapter3"
            }
        ],
        
        stylesheets: [
            { href: "css/style.css" }
        ]
    },
    
    data: {
    },
    
	google: {
	},
    
    headerScripts: {
        stylesheets: [ ],
        javaScriptTop: [ ],
        javaScriptBottom: [ ]
    },
	
    funcs: {
    },

    cheerio: {
        recognizeSelfClosing: true,
        recognizeCDATA: true,
        xmlMode: true
    },
    
    builtin: {
        suppress: {
            layouts: true,
            // partials: true,
            assets: true,
            sitemap: true,
            extlink: true
        }
    },
	
    config: function(akasha) {
		akasha.registerPlugins(module.exports, [
            { name: 'akashacms-epub', plugin: require('../../Node.js/akashacms-epub') },
		]);
    }
};
