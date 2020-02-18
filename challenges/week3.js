function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  return nums.map(num => num * num);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  const arr = [];
  words.forEach(word => {
    if (word === words[0]) arr.push(word);
    else arr.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return arr.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let count = 0;
  people.forEach(person => count += person.subjects.length);
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  const arr = [];
  menu.forEach(obj => obj.ingredients.forEach(ing => { if (ing === ingredient) arr.push(ing) }));
  return arr.length > 0;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  return [...new Set((arr1.filter(val => arr2.includes(val)).sort()))];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
