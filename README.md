tailwind-color-shades-js is a simple JavaScript library for generating color shades from TailwindCSS color objects. It provides an easy-to-use interface for generating darker or lighter shades of a given TailwindCSS color.

## Installation
The library can be installed via NPM. Run the following command in your terminal:

```bash
npm install tailwind-color-shades-js
```

## Usage
The tailwind-color-shades-js library provides a single ColorShades class with a generateColorShades method that takes a single argument, a TailwindCSS color object.

Importing the Library

```js
import ColorShades from 'tailwind-color-shades-js';
```

### Generating Color Shades
The generateColorShades method generates an array of darker and lighter shades of the input color. The output shades range from 50 (lightest) to 900 (darkest).


```js
const colorShades = new ColorShades();

const shades = colorShades.generateColorShades('red');

console.log(shades);
// ['#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828']
```

### Generating Custom Number of Shades
The generateColorShades method also takes an optional second argument, an object that specifies the number of lighter and darker shades to generate. The object should have two properties: light and dark, which specify the number of lighter and darker shades to generate, respectively.

```js
const colorShades = new ColorShades();

const shades = colorShades.generateColorShades('blue', { light: 2, dark: 3 });

console.log(shades);
// ['#E3F2FD', '#BBDEFB', '#64B5F6', '#2196F3', '#1E88E5', '#1976D2']
````

### Contributing
Contributions are welcome! 

### License
This package is licensed under the MIT License.

### Credits
This library was created and maintained by  **Tito Amoo**
