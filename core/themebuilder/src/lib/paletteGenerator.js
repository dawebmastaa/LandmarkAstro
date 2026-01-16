import Color from 'colorjs.io';

/**
 * Generate a monochromatic scale (50-950) from a base color
 */
export function generateMonochromaticScale(baseColor) {
  const color = new Color(baseColor);
  const [lightness, chroma, hue] = color.oklch;

  const lightnessMap = {
    50: 0.97, 100: 0.94, 200: 0.90, 300: 0.85, 400: 0.80,
    500: lightness, 600: 0.65, 700: 0.55, 800: 0.40, 900: 0.25, 950: 0.15
  };

  const scale = {};
  for (const [key, targetLightness] of Object.entries(lightnessMap)) {
    const scaledColor = new Color('oklch', [targetLightness, chroma * 0.8, hue]);
    scale[key] = scaledColor.to('oklch').toString({ precision: 4 });
  }

  return scale;
}

/**
 * Helper: Generate color at hue offset
 */
function colorAtHue(baseColor, hueOffset) {
  const color = new Color(baseColor);
  const [lightness, chroma, hue] = color.oklch;
  return new Color('oklch', [lightness, chroma, (hue + hueOffset) % 360]);
}

function generateNeutralScale(hue = 280, baseChroma = 0.02, isDark = false) {
    const scale = {};

    const lightnessMap = isDark ? {
        '0': 0.18, '100': 0.24, '200': 0.30, '300': 0.38, '400': 0.46,
        '500': 0.56, '600': 0.66, '700': 0.76, '800': 0.86, '900': 0.96
    } : {
        '0': 1.00, '100': 0.98, '200': 0.95, '300': 0.90, '400': 0.70,
        '500': 0.50, '600': 0.35, '700': 0.30, '800': 0.20, '900': 0.25
    };

    for (const [shade, lightness] of Object.entries(lightnessMap)) {
        const chroma = baseChroma * (1 - Math.abs(lightness - 0.5) * 0.5);
        scale[shade] = `oklch(${(lightness * 100).toFixed(0)}% ${chroma.toFixed(4)} ${hue})`;
    }

    return scale;
}

/**
 * Main palette generator - handles all types
 */
export function generatePalette(baseColor, type = 'complete') {
  switch(type) {
    case 'monochromatic':
      return { primary: generateMonochromaticScale(baseColor) };

    case 'analogous':
      return {
        primary: generateMonochromaticScale(baseColor),
        secondary: generateMonochromaticScale(colorAtHue(baseColor, -30)),
        accent: generateMonochromaticScale(colorAtHue(baseColor, 30))
      };

    case 'complementary':
      return {
        primary: generateMonochromaticScale(baseColor),
        secondary: generateMonochromaticScale(colorAtHue(baseColor, 180))
      };

    case 'triadic':
      return {
        primary: generateMonochromaticScale(baseColor),
        secondary: generateMonochromaticScale(colorAtHue(baseColor, 120)),
        accent: generateMonochromaticScale(colorAtHue(baseColor, 240))
      };

    case 'tetradic':
      return {
        primary: generateMonochromaticScale(baseColor),
        secondary: generateMonochromaticScale(colorAtHue(baseColor, 90)),
        accent: generateMonochromaticScale(colorAtHue(baseColor, 180)),
        neutral: generateMonochromaticScale(colorAtHue(baseColor, 270))
      };

    case 'splitComplementary':
      return {
        primary: generateMonochromaticScale(baseColor),
        secondary: generateMonochromaticScale(colorAtHue(baseColor, 150)),
        accent: generateMonochromaticScale(colorAtHue(baseColor, 210))
      };

    default: // 'complete'
      return {
        primary: generateMonochromaticScale(baseColor),
        secondary: generateMonochromaticScale(colorAtHue(baseColor, 180)),
        accent: generateMonochromaticScale(colorAtHue(baseColor, 60)), // Add accent (60°)
        neutral: generateNeutralScale(280, 0.02, false), // Add neutral scale
        info: generateMonochromaticScale(colorAtHue(baseColor, -30)),
        success: generateMonochromaticScale(colorAtHue(baseColor, 30)),
        warning: generateMonochromaticScale(colorAtHue(baseColor, 120)),
        error: generateMonochromaticScale(colorAtHue(baseColor, 240))
      };
  }
}

// Keep these for backward compatibility if needed
export function generateCompletePalette(baseColor) {
  return generatePalette(baseColor, 'complete');
}

export function generateMonochromaticPalette(baseColor) {
  return generatePalette(baseColor, 'monochromatic');
}

export function generateAnalogousPalette(baseColor) {
  return generatePalette(baseColor, 'analogous');
}

export function generateComplementaryPalette(baseColor) {
  return generatePalette(baseColor, 'complementary');
}

export function generateTriadicPalette(baseColor) {
  return generatePalette(baseColor, 'triadic');
}

export function generateTetradicPalette(baseColor) {
  return generatePalette(baseColor, 'tetradic');
}

export function generateSplitComplementaryPalette(baseColor) {
  return generatePalette(baseColor, 'splitComplementary');
}
