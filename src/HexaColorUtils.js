export function hexaColorValue(colorName) { // Named export ✅
    const div = document.createElement("div");
    div.style.color = colorName;
    document.body.appendChild(div);
  
    const computedColor = window.getComputedStyle(div).color;
    document.body.removeChild(div);
  
    const rgbValues = computedColor.match(/\d+/g);
    if (!rgbValues || rgbValues.length < 3) return null;
  
    const r = parseInt(rgbValues[0]).toString(16).padStart(2, "0");
    const g = parseInt(rgbValues[1]).toString(16).padStart(2, "0");
    const b = parseInt(rgbValues[2]).toString(16).padStart(2, "0");
  
    return `#${r}${g}${b}`.toUpperCase();
  }
  