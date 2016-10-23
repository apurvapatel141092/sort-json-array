/**
 ** Sort an array of JSON by a property.
 * @param  {Array} `arr` The Array to be sorted.
 * @param  {String} `prop` The Property based on what the array should be sorted.
 * @return {Array} Returns a sorted array.
 */
function sortjsonarray(arr,pops){

  if (arr == null) {
    return [];
  }

  if (!Array.isArray(arr)) {
    throw new TypeError('sort-json-array expects an array.');
  }

  if (arguments.length === 1) {
    return arr.sort();
  }

  return arr.sort(compare(pops));
};

function compare(attr){
  return function(a,b){
    if( a[attr] > b[attr]){
      return 1;
    }else if( a[attr] < b[attr] ){
      return -1;
    }
    return 0;
  }
}

module.exports = sortjsonarray; // let me be required
