# epub-skeleton

Skeletal AkashaEPUB document to serve as a starting point for creating eBooks using AkashaEPUB and EPUBTools.

To use this workspace start by installing Node.js 14.x or later.  That will give you `npm` which we use for driving the process to build and verify the EPUB.

# Building the skeleton EPUB

To build:

```
$ npm run build

> epub-skeleton@0.6.1 build /Volumes/Extra/akasharender/epub-skeleton
> npm-run-all build:*


> epub-skeleton@0.6.1 build:render /Volumes/Extra/akasharender/epub-skeleton
> epubrender render skeleton.epubtools


> epub-skeleton@0.6.1 build:mkmeta /Volumes/Extra/akasharender/epub-skeleton
> epubtools mkmeta skeleton.epubtools


> epub-skeleton@0.6.1 build:bundle /Volumes/Extra/akasharender/epub-skeleton
> epubtools package skeleton.epubtools
```

This results in two artifacts, the `out` directory containing the unpacked version of the EPUB, and `skeleton.epub` containing the actual EPUB.

# Validating the skeleton EPUB

The validation step requires getting EpubCheck.  This is a Java program that is the official tool for validating EPUB's.  Since it is implemented in Java, you must have the Java runtime installed on your laptop.

Built copies of EpubCheck are available through the Github project:  https://github.com/w3c/epubcheck   Click on the _Releases_ link, and find the latest bundle, where the file name is like `epubcheck-4.2.4.zip`.  Download that file by clicking on the link.  It is a ZIP archive, so use an Unzip program to unpack it.

The unpacked directory will contain `epubcheck.jar` which is runnable using the `java` command-line tool.  The unpacked directory can be moved anywhere on your laptop, like so:

```
$ mv ~/Downloads/epubcheck-4.2.4 ~/bin
```

Then notice that in `package.json` there are command scripts already setup to run the validation.  We just need to override the default configuration for the path to `epubcheck`.

```
$ npm config set epub-skeleton:epubcheckjar /path/to/epubcheck-4.2.4/epubcheck.jar
```

This command overrides the path baked into `package.json`.

To get rid of the override:

```
$ npm config delete epub-skeleton:epubcheckjar
```

To inspect the configuration settings use `npm run env` to see the environment variables that generated for the npm scripts.  To learn more about how this works, see: [How to use npm/yarn/Node.js package.json scripts as your build tool](https://techsparx.com/nodejs/tools/npm-build-scripts.html)

To validate the EPUB:

```
$ npm run check

> epub-skeleton@0.6.1 check /Volumes/Extra/akasharender/epub-skeleton
> npm-run-all check:*


> epub-skeleton@0.6.1 check:exp /Volumes/Extra/akasharender/epub-skeleton
> java -jar ${npm_package_config_epubcheckjar} -mode exp out

Validating using EPUB version 3.0.1 rules.
No errors or warnings detected.
epubcheck completed

> epub-skeleton@0.6.1 check:epub /Volumes/Extra/akasharender/epub-skeleton
> java -jar ${npm_package_config_epubcheckjar} skeleton.epub

Validating using EPUB version 3.0.1 rules.
No errors or warnings detected.
epubcheck completed
```

This validates that the EPUB was correctly built.

