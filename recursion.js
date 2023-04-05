/** product: calculate the product of an array of numbers. */

function product(nums) {
  // base case
  if(nums.length === 1){
    return nums[0]
  } else {
    // recursive case
    return nums[0] * product(nums.slice(1))
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // base case
  if(words.length === 1){
    return words[0].length
  }
  // recursive case
  if(words[0].length > words[1].length){
    return longest([words[0], ...words.slice(2)])
  } else {
    return longest(words.slice(1))
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // base case
  if(str.length === 0){
    return str
  }
  // recursive case
  return str[0] + everyOther(str.slice(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // base case
  if(str.length === 1 || str.length === 0){
    return true
  }
  // recursive case
  if(str[0] === str[str.length - 1]){
    return isPalindrome(str.slice(1, str.length - 1))
  } else {
    return false
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // base case
  if(arr.length === 0){
    return -1
  }
  // recursive case
  if(arr[0] === val){
    return 0
  } else {
    let result = findIndex(arr.slice(1), val)
    return result === -1 ? -1 : result + 1
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // base case
  if(str.length === 1){
    return str
  }
  // recursive case
  return str[str.length - 1] + revString(str.slice(0, str.length - 1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // base case
  if(Object.keys(obj).length === 0){
    return []
  }
  // recursive case
  let result = []
  for(let key in obj){
    if(typeof obj[key] === 'string'){
      result.push(obj[key])
    } else if(typeof obj[key] === 'object'){
      result = [...result, ...gatherStrings(obj[key])]
    }
  }
  return result
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  // base case
  if(arr.length === 0){
    return -1
  }
  // recursive case
  let midIdx = Math.floor(arr.length / 2)
  if(arr[midIdx] === val){
    return midIdx
  } else if(arr[midIdx] > val){
    return binarySearch(arr.slice(0, midIdx), val)
  } else {
    let result = binarySearch(arr.slice(midIdx + 1), val)
    return result === -1 ? -1 : result + midIdx + 1
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
