// Get all permutations of a string

const permuteData = 'abc';

const getPermutations = str => {
  const res = [];

  /*
    Function to be called recursively,
    Take in array, which will represent characters not already accouted for in current permutation
    On each cycle, add from arr to perm and recurse until arr is empty
  */
  const permute = (arr,perm=[]) => {
    // If arr is empty, perm will contain a full permutation, so push it into res
    if ( arr.length === 0 ) {
      //console.log('permutation complete');
      //console.log(perm)
      res.push(perm);
    }
    // Each cycle will begin with one character from input data, loop over rest
    for ( let i in arr ) {
      // Create copy of arr, splice out the current index
      let current = [...arr];
      let next = current.splice(i,1);

      // Call permute with arr == array less arr[i] and perm = prev perm + spliced out character
      permute([...current], perm.concat(next))
    }
  }

  permute(Array.from(str));

  console.log('Permuations complete with ' + res.length + ' results.')
  return res;
}

//getPermutations(permuteData);
