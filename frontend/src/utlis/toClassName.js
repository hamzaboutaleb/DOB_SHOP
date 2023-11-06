/**
 * @description function convert list of classes to string using css modules
 * @example ['btn', 'block] => 'btn block'
 */
export function toClassName(classesList, styles) {
  return classesList
    .map((classEl) => {
      if (classEl in styles) return styles[classEl];
      return classEl;
    })
    .join(" ");
}
