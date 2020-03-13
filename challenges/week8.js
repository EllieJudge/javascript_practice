const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
    if (nums.indexOf(n) === nums.length-1 || nums.indexOf(n) === -1) return null
  return nums[nums.indexOf(n) + 1];     
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let os = 0;
  let zs = 0;
 
  for (let i = 0; i < str.length; i++) {
    str[i] == 0 ? zs++ : os++;
  }

  return {1: os, 0: zs }
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return Number(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  
  //return arrs.flat().reduce((a, b) => a + b);
  return arrs.map(arr => arr.reduce((a, b) => a + b)).reduce((a, b) => a + b);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length < 2) return arr;
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!

  //   let count = 0;
  //  Object.entries(haystack).forEach(el => {
  //    if (el[1].toString().toLowerCase().search(searchTerm.toLowerCase()) !== -1) count++;
  //  });
  //   return count > 0;

  let count = 0;
  for(let key in haystack) {
    if(haystack[key].toString().toLowerCase().search(searchTerm.toLowerCase()) !== -1)
    count++
  }
  return count > 0;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  
  const puncless = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
  const fs = puncless.replace(/\s{2,}/g," ").toLowerCase();
  const arr = fs.split(' ');
  
  const freq = {};
    
    // for(let i = 0; i < arr.length; i++) {
    //   const char = arr[i];
    //   if (freq[char] === undefined) freq[char] = 1
    //   else freq[char] += 1;
    // }

    arr.forEach(el => {
      freq[el] === undefined ? freq[el] = 1 : freq[el] += 1;
    });
    return freq;
    
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
