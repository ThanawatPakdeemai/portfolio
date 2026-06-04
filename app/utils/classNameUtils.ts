/**
 * Utility function for building conditional class names
 * Follows best practice: rendering-conditional-render
 * Reduces inline ternary operators and improves readability
 */

interface ClassMap {
  [key: string]: string;
}

/**
 * Returns a class string based on a condition
 * @param condition - Boolean condition
 * @param trueClass - Class when condition is true
 * @param falseClass - Class when condition is false (optional)
 */
export const conditionalClass = (
  condition: boolean,
  trueClass: string,
  falseClass = "",
): string => (condition ? trueClass : falseClass);

/**
 * Maps a value to specific classes
 * Useful for switch-like className logic
 * @param value - Current value
 * @param classMap - Map of values to classes
 * @param defaultClass - Default class if value not found
 */
export const mapToClass = (
  value: string | number,
  classMap: ClassMap,
  defaultClass = "",
): string => classMap[value] || defaultClass;

/**
 * Combines multiple conditional class expressions
 * @param conditions - Array of [boolean, class] tuples
 */
export const combineClasses = (conditions: Array<[boolean, string]>): string =>
  conditions
    .filter(([cond]) => cond)
    .map(([, cls]) => cls)
    .join(" ");
