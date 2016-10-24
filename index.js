/**
** Sort an array of JSON by a property.
* @param  {Array} `arr` The Array to be sorted.
* @param  {String} `prop` The Property based on what the array should be sorted.
* @param  {String} `order` The Property based on what the array should be sorted.
* @return {Array} Returns a sorted array.
*/
function sortjsonarray(arr,pops,order){

  if (arr == null) {
    return [];
  }

  if (!Array.isArray(arr)) {
    throw new TypeError('sort-json-array expects an array.');
  }

  if (arguments.length === 1) {
    return arr.sort();
  }

  if (arguments[2] == null || arguments[2] == "asc" ){
    return arr.sort(compare(pops,1));
  }
  else if (arguments[2] == "des"){
    return arr.sort(compare(pops,0));
  }
  else {
    throw new TypeError('Wrong argument.');
  }

};

function compare(attr,value){
  if(value){
    return function(a,b){
      return a[attr] < b[attr] ? -1 :(a[attr] > b[attr] ? 1 : 0)
    }
  }
  else {
    return function(a,b){
      return a[attr] < b[attr] ? 1 :(a[attr] > b[attr] ? -1 : 0)
    }
  }
}

module.exports = sortjsonarray; // let me be required
