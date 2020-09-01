// Sort an unordered array with quick sort
// O(nlogn)

let nums = [23,64,2,34,73,32,1,45,90,4,12];
let len2 = [32,53];
let len1 = [43];
let empty = [];

const quickSort = arr => {

  //console.log('Running quick sort on array:')
  //console.log(arr)

  const swap = (arr,a,b) => {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  const pivot = (arr,left,right) => {

      const pivot = arr[Math.floor((right+left)/2)]
      //console.log('Running sort on indices ' + left + " and " + right + ". Pivot Element: " + pivot)

      while ( left <= right ) {
        while ( arr[left] < pivot ) {
          left++
        }

        while ( arr[right] > pivot ) {
          right--
        }

        if ( left <= right ) {
          //console.log('Swapping ' + arr[left] + ' and ' + arr[right])
          swap(arr,left,right);
          left++;
          right--;
        }
      }
      return left;
    }

  const runSort = (arr,left,right) => {
    if ( arr.length > 1 ) {

      const index = pivot(arr,left,right);

      if ( left < index - 1 ) {
        runSort(arr, left, index - 1)
      }

      if ( index < right ) {
        runSort(arr, index, right)
      }
    }
    return arr
  }
  return runSort(arr,0,arr.length-1)
}

// Find index at which to insert an element into an array. If element exists, resturn its index;
// Recursive divide and conquer in O(log n) time;

const findInsertIndex = (arr, target) => {
  if ( arr.length === 0 ) { return 0 }

  //console.log("Finding insert index for " + target + " in array:")
  //console.log(arr)

  const search = (arr,target,left,right) => {
    //console.log("Searching for " + target + ' between indices ' + left + ", " + right)
    //console.log(arr.slice(left,right))
    if ( right - left > 1 ) {
      let mid = Math.floor((left+right) / 2);
      //console.log('mid: ' + mid, arr[mid])
      // Looking for the condition where target >= mid-1 and <= mid-1 || mid = target
      // We will also use the values availible at the left and right pointers to improve best case response;

      //console.log("mid: " + arr[mid], mid)
      if ( arr[mid] === target
        || (arr[mid-1] < target && arr[mid] > target)
        || (arr[mid] < target && arr[mid+1] > target)
      ) {
        return arr[mid] === target ? mid : mid+1
      }
      else if ( arr[right] <= target ) {
        return arr[right] === target ? right : right + 1
      }
      else if ( arr[left] >= target ) {
        return arr[left] === target || left === 0 ? left : left + 1
      }
      else if ( arr[mid] > target ) {
        return search(arr,target,left,mid-1)
      }
      else if ( arr[mid] < target) {
        return search(arr,target,mid+1,right)
      }
    }
    else if ( right - left === 1 ) {
      return arr[left] >= target ?
        left : arr[right] < target ?
        right + 1 : right
    }
    else {
      return arr[left] >= target ? left : left + 1
    }
  }

  if ( arr.length === 0 ) {
    return 0
  }
  else {
    const idx = search(arr,target,0,arr.length-1);
    return idx
  }
}

let sortedNums = quickSort(nums);
