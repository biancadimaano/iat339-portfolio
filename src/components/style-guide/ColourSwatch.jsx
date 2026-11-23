/*
    References:
        - React Props: https://www.w3schools.com/react/react_props.asp
        - JavaScript Backticks: https://www.geeksforgeeks.org/javascript/how-to-use-backticks-in-javascript/
*/

import '../../css/variables.css'
import '../../css/style-guide.css'

function ColourSwatch ({colour_name, hexcode, text_colour}) {
    return (
        <div class={`colour-swatch bg-${colour_name}`}>
            <p class={`hexcode text-${text_colour}`}>{hexcode}</p>
            <p class={`redaction text-${text_colour}`}>{colour_name}</p>
        </div>
    );
}

export default ColourSwatch;