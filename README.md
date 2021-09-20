# htc-css

SCSS/ CSS Implementation of the Ignite Design System for Hennepin Technical College

## Usage

The CSS Library is available via jsDelivr 

```
https://cdn.jsdelivr.net/gh/hennepin-tech/htc-css/dist/style.css
```

To Embed the Library into your HTML, use this markup

```html
<link src="https://cdn.jsdelivr.net/gh/hennepin-tech/htc-css/dist/style.css" rel="stylesheet" />
```

## Guidelines

This SCSS pipeline is carefully orchestrated to accomplish three things

1. Create a Vanilla CSS implimentation of the Ignite Design System consisting of utility classes
2. Generate a documentation website for the implimentation - [Vanilla CSS Documentation Site](https://ignite-lib-docs.netlify.app/)
3. Generate a documentation website for the SCSS source code of this implimentation - [Source Documentation Site](https://ignite-src-docs.netlify.app/)

To keep this system functioning, the following rules apply to all contributions to this code base...

- All SCSS entities including variables, mixins, functions and any other code that is not valid CSS, should be commented using [SassDoc Syntax](http://sassdoc.com/)
  - Existing entities should not be removed from the source code, rather they should be commented with the [@deprecated annotation](http://sassdoc.com/annotations/#deprecated)
- All utility classes and any other valid CSS entities should be commented with [MDCSS Syntax](https://github.com/csstools/mdcss#readme)

## Getting Started

### Prerequisites

Make sure you have Node.js and NPM installed by running

```shell
node -v
# v.16.1.0
npm -v
# 7.11.2
```

Install these Node packages globally on your machine

```shell
npm i -g sass gulp 
```

### Local Dev

Clone the repo, cd into it and run

```shell
npm i
```

To build the source into Vanilla CSS and/ or generate the documentation for the source SCSS, run

```shell
npm run compile
```

To generate the documentation for the Vanilla CSS Library, run

```shell
npm run generate
```

