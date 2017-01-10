import baseFlatten from './_baseFlatten.js';

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  const length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

export default flatten;