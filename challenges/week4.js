function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  // return nums.filter(num => num < 1);

  const lessThan1 = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) lessThan1.push(nums[i]);
  }
  return lessThan1;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here

  // return names.filter(name => name.charAt(0) === char);

  const namesWith = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === char) namesWith.push(names[i]);
  }
  return namesWith;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

  // return words.filter(word => word.split(' ')[0] === 'to');

  const verbs = [];
  for (let i = 0; i < words.length; i++) {
    words[i].split(' ')[0] === 'to' ? verbs.push(words[i]) : '';
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  // return nums.filter(num => !num.toString().includes('.'));

  // return nums.filter(num => num % 1 === 0);

  const ints = [];
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] % 1 === 0) ints.push(nums[i])
  }
  return ints;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here

  // return users.map(user => user.data.city.displayName);

  const cities = [];
  for(let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  // return nums.map(num => Number(Math.sqrt(num).toFixed(2)));

  const sRoots = [];
  for (let i = 0; i < nums.length; i++) {
    sRoots.push(Number(Math.sqrt(nums[i]).toFixed(2)));
  }
  return sRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here

  // return sentences.filter(s => s.toLowerCase().includes(str.toLowerCase()));

  const sContaining = [];
  for(let i = 0; i < sentences.length; i++) {
    if(sentences[i].toLowerCase().includes(str.toLowerCase()));
    sContaining.push(sentences[i]);
  }
  return sContaining;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here

  // return triangles.map(t => t.sort((a, b) => a - b)[2]);

  const lSide = [];
  for(let i = 0; i < triangles.length; i++) {
    lSide.push(triangles[i].sort((a, b) => a - b)[2]);
  }
  return lSide;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
