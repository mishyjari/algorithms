// Impliment mergesort
let data = []
for ( let i=0; i < 100; i++ ) {
  data.push(Math.floor(Math.random() * 1000))
}

const mergeSort = nums => {

  let res = [];
  let tmp = [];

  const split = arr => {
    if ( arr.length === 1 ) {
      tmp.push(arr)
    }
    else {
      const right = arr.splice(Math.floor(arr.length/2));
      split(arr);
      split(right);
    }
  }

  const merge = (left,right, merged=[]) => {
      let leftIndex = 0;
      let rightIndex = 0;

      while ( right[rightIndex] > left[leftIndex] && rightIndex < right.length ) {
        rightIndex++
      }
      if ( right[rightIndex] < left[leftIndex] ) {
        merged.push(right.splice(rightIndex,1))
      }
      else {
        merged.push(left.splice(leftIndex,1))
      }

      return merged
  }

  split(nums)


  for ( let i = 0; i < tmp.length-1; i+= 2 ) {
    res.push(merge(tmp[i],tmp[i+1]))
  }


  console.log(tmp)
  console.log(res)
}

//mergeSort(data)
