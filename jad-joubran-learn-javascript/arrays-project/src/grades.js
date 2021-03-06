/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
  return grades.length;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
  let sum = 0;
  grades.forEach((grade) => (sum += grade));
  return Math.round(sum / grades.length);
}

/** @param {number[]} grades */
export function getLowestValue(grades) {
  return Math.min(...grades);
}

/** @param {number[]} grades */
export function getHighestValue(grades) {
  return Math.max(...grades);
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
  return grades.filter((grade) => grade >= 10).join(", ");
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
  return grades.filter((grade) => grade < 10).join(", ");
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
  return grades
    .map((grade) => {
      if (grade + 2 > 20) {
        return 20;
      }
      return grade + 2;
    })
    .join(", ");
}
