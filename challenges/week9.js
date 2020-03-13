/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("array is required");
  if (Array.isArray(arr) === false) throw new Error ("array is required")

  let total = 0;
  arr.forEach(n => n % 3 === 0 || n % 5 === 0 ? total += n : '');
  return total;
};

/**
 * This function will receive a string of characters and should return true/false 
 * depending on whether it is a valid DNA string. A valid DNA string may contain 
 * characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("str is required");

  let dna = 0;
  let notDNA = 0;
  for (let i = 0; i < str.length; i++) {
   if (str[i] === "A" || str[i] === "T" || str[i] === "C" || str[i] === "G") dna++;
    else notDNA ++;
  }
 return dna === 4 && notDNA === 0;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string 
 * of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. 
 * So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("string is required");
  if (typeof str !== "string") throw new Error("string is required");
  if (isValidDNA(str) === false) throw new Error("valid DNA string is required");

  let complementaryDNA = "";

  for(let i = 0; i < str.length; i++) {
    if (str[i] === "T") complementaryDNA += "A";
    else if (str[i] === "A") complementaryDNA += "T";
    else if (str[i] === "C") complementaryDNA += "G";
    else if (str[i] === "G") complementaryDNA += "C";
  };
  return complementaryDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a 
 * prime number or not. A prime number is a number that can only be divided evenly by 1 and 
 * itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("number is required");
  if (typeof n !== "number") throw new Error("number is required");

  if (n <= 1) return false;
  if (n === 2) return true;
  
  for(let i = 2; i < n; i++) {
    if(n % i === 0) return false;
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. 
 * The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and 
 *"foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (typeof n !== "number") throw new Error("first argument must be a number");
  
  let contArr = [];
  let newArr = [];
  
  for(let i = 0; i < n; i++) {
    newArr.push(fill);
    contArr.push(newArr);
  };
  return contArr;
};

/**
 *This function takes an array of staff objects in the format:
 * [
 *{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *{ name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. 
 * The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let tally = 0;
  staff.forEach(person => person.rota.forEach(d => d === day ? tally++ : ''));
  return tally >= 3;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
