// Divide and conquer to find a value in a sorted array
// Return index of value if found, else null

const arr = [2,4,5,7,9,10,11,15,23,29,30,45,48,52,61];

const divideAndConquer = (arr,target) => {

  if ( arr.length === 0 ) {
    return null
  }

  const search = (low,high) => {
    //console.log(arr.slice(low,high))
    // If search is one value, check it against target
    if ( high - low <= 1 ) {
      return arr[low] === target ? low : null;
    }

    const mid = Math.floor((high+low)/2);

    // Check if low, mid or high match target
    if ( arr[low] === target ) { return low }
    else if ( arr[mid] === target ) { return mid }
    else if ( arr[high] === target ) { return high }

    // We can check to see if the target is out of range: < low || > high
    else if ( arr[low] > target || arr[high] < target ) { return null }

    // If target is less than mid, search left half
    else if ( target < arr[mid] ) {
      return search(low,mid);
    }
    // If target is greater than mid, search right half
    else if ( target > arr[mid] ) {
      return search(mid,high)
    }
    // Otherwise return null
    else { return null }
  }

  return search(0,arr.length-1)
}

//console.log(arr);
//console.log(divideAndConquer(arr,1));
//console.log(divideAndConquer(arr,2));
//console.log(divideAndConquer(arr,5));
//console.log(divideAndConquer(arr,8));
//console.log(divideAndConquer(arr,15));
//console.log(divideAndConquer(arr,45));
//console.log(divideAndConquer(arr,50));
//console.log(divideAndConquer(arr,100));
// should print: null, 0, 2, null, 7, 11, null, null
