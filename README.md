# postxml-import-styles
[![npm version][npm-image]][npm-url]

> [PostXML] plugin replace `<link>` with `<style>` and import css-code/

## Installation
`npm i postxml-import-styles --save-dev`

## Usage
[Postxml]

## Options

### cwd
Type: `string`<br>
Default: `''`

## Example

### Input
```html
<link href="styles.css">
```

### styles.css
```css
body{
	display: none;
	overflow: hidden;
}
```

### Output
```html
<style>body{
	display: none;
	overflow: hidden;
}</style>
```

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/postxml-import-styles
[npm-image]: http://img.shields.io/npm/v/postxml-import-styles.svg?style=flat-square
