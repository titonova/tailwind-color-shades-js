/**
 * ColorShadesJS
 * A simple JavaScript library for generating color shades specifically for TailwindCSS color objects and to be used in the TailwindCSS configuration file (tailwind.config.js)
 * @author Tito Amoo
 * @license MIT
 * @version 1.0.0-beta
 * @link https://github.com/titonova/ColorShadesJs
*/

const Color = require('color');
class ColorShades {
    /**
     * Generates color shades based on the given colors and shade values.
     *
     * @param {object} colors - An object containing the colors to generate shades from.
     * @param {array} [colorShadeValues=[100, 200, 300, 400, 500, 600, 700, 800, 900]] - An array of shade values to use when generating color shades.
     * @returns {object} An object containing the generated color shades.
     */
    generateColorShades(colors, colorShadeValues = [100, 200, 300, 400, 500, 600, 700, 800, 900]) {
        // Get the names of the colors
        const colorNames = Object.keys(colors);

        // Loop through the color names
        for (let colorName of colorNames) {
            // Get the current color
            const color = Color(colors[colorName]);

            // Loop through the shade values
            colorShadeValues.forEach(shadeValue => {
                let colorShade;

                // If shadeValue is greater than 500, darken the color
                if (shadeValue > 500) {
                    const shadeFactor = ((shadeValue * 2) / 1000) - 1;
                    colorShade = color.darken(shadeFactor);
                }
                // If shadeValue is less than 500, lighten the color
                else if (shadeValue < 500) {
                    const shadeFactor = ((500 - shadeValue) * 2) / 1000;
                    colorShade = color.lighten(shadeFactor);
                }
                // If shadeValue is equal to 500, return the color
                else {
                    colorShade = color;
                }

                // Add the generated color shade to the colors object
                colors[`${colorName}-${shadeValue}`] = colorShade.rgb().string();
            });
        }

        // Log the generated colors
        console.log(colors);

        return colors;
    }
}

module.exports = ColorShades;
