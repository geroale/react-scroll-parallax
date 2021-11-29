import { ValidEasingPresets } from 'parallax-controller';

export interface ParallaxProps {
  /**
   * A number to slowdown `n < 0` or speed up `n > 0` the scroll speed of an element
   *
   * Example:
   *
   * speed={-1}
   *
   */
  speed?: number;
  /**
   * Start and end translation on x-axis in % or px. If no unit is passed percent is assumed. Percent is based on the elements width.
   *
   * Example:
   *
   * translateX={[-100, 100]}
   *
   * First value is the starting translation
   * Second value is the ending translation
   */
  translateX?: string[] | number[];
  /**
   * Start and end translation on y-axis in % or px. If no unit is passed percent is assumed. Percent is based on the elements height.
   *
   * Example:
   *
   * translateY={[-100, 100]}
   *
   * First value is the starting translation
   * Second value is the ending translation
   */
  translateY?: string[] | number[];

  /**
   * Start and end rotation on z-axis in `deg`, `rad`, or `turn`. If no unit is passed `deg` is assumed.
   *
   * Example:
   *
   * rotate={['0deg', '360deg']}
   *
   * First value is the starting rotation
   * Second value is the ending rotation
   */
  rotate?: string[] | number[];
  /**
   * Start and end rotation on x-axis in `deg`, `rad`, or `turn`. If no unit is passed `deg` is assumed.
   *
   * Example:
   *
   * rotateX={['0deg', '360deg']}
   *
   * First value is the starting rotation
   * Second value is the ending rotation
   */
  rotateX?: string[] | number[];
  /**
   * Start and end rotation on y-axis in `deg`, `rad`, or `turn`. If no unit is passed `deg` is assumed.
   *
   * Example:
   *
   * rotateY={['0deg', '360deg']}
   *
   * First value is the starting rotation
   * Second value is the ending rotation
   */
  rotateY?: string[] | number[];
  /**
   * Start and end rotation on z-axis in `deg`, `rad`, or `turn`. If no unit is passed `deg` is assumed.
   *
   * Example:
   *
   * rotateZ={['0deg', '360deg']}
   *
   * First value is the starting rotation
   * Second value is the ending rotation
   */
  rotateZ?: string[] | number[];

  /**
   * Start and end scale on x-axis and y-axis.
   *
   * Example:
   *
   * scale={[0, 1]}
   *
   * First value is the starting scale
   * Second value is the ending scale
   */
  scale?: number[];
  /**
   * Start and end scale on x-axis
   *
   * Example:
   *
   * scaleX={[0, 1]}
   *
   * First value is the starting scale
   * Second value is the ending scale
   */
  scaleX?: number[];
  /**
   * Start and end scale on y-axis
   *
   * Example:
   *
   * scaleY={[0, 1]}
   *
   * First value is the starting scale
   * Second value is the ending scale
   */
  scaleY?: number[];
  /**
   * Start and end scale on z-axis
   *
   * Example:
   *
   * scaleZ={[0, 1]}
   *
   * First value is the starting scale
   * Second value is the ending scale
   */
  scaleZ?: number[];
  /**
   * Start and end opacity value
   *
   * Example:
   *
   * opacity={[0, 1]}
   *
   * First value is the starting opacity
   * Second value is the ending opacity
   */
  opacity?: number[];
  /**
   * Easing preset or custom params for a cubic bezier easing function.
   *
   * Example preset: 'easeInOut'
   * Example params: [0.42, 0, 0.58, 1]
   */
  easing?: number[] | ValidEasingPresets;
  /**
   * Optionally pass additional class names to be added to the outermost parallax element.
   */
  className?: string;
  /**
   * Disables parallax effects on individual elements when true.
   */
  disabled?: boolean;
  /**
   * Optionally pass a style object to be added to the innermost parallax element.
   */
  styleInner?: any;
  /**
   * Optionally pass a style object to be added to the outermost parallax element.
   */
  styleOuter?: any;
  /**
   * Optionally pass an element tag name to be applied to the innermost parallax element.
   */
  tagInner?: any;
  /**
   * Optionally pass an element tag name to be applied to the outermost parallax element.
   */
  tagOuter?: any;
}
