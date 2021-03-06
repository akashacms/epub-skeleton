// Demonstrates configuring an EPUB project using an AkakashaCMS configuration.

'use strict';

const util    = require('util');
const akasha  = require('akasharender');
const async   = require('async');
const path    = require('path');

const log    = require('debug')('epubtools-guide:configuration');
const error  = require('debug')('epubtools-guide:error-configuration');

const config = new akasha.Configuration();

config
    .addAssetsDir('assets')
    .addLayoutsDir('layouts')
    .addDocumentsDir('documents')
    .addPartialsDir('partials');

config
    .use(require('akasharender-epub'))
    .use(require('akashacms-footnotes'));
config.addStylesheet({ href: "/css/style.css" });

config.setMahabhutaConfig({
    recognizeSelfClosing: true,
    recognizeCDATA: true,
    xmlMode: true
});

config.prepare();

module.exports = config;
