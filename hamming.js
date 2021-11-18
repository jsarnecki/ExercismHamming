
export const compute = (strandOne, strandTwo) => {
//Check if strand lengths are equal.  If not, throw error
  if (strandOne.length !== strandTwo.length){
   throw new Error('strands must be of equal length');
  };
 
//Split strand strings into arrays
  let strandArrOne = strandOne.split("");
  let strandArrTwo = strandTwo.split("");

/*Create function that compares two arrays index by index, 
pushing any elements that do not match into an empty array,
in order to return the length / the amount of uncommon strands
*/
  let uncommonStrand = [];

  const compareArrays = (arrOne, arrTwo) => {
    uncommonStrand;
    let stopL = arrOne.length - 1;
    let x = 0;
    while (x <= stopL) {
      if (arrOne[x] !== arrTwo[x]){
        uncommonStrand.push(arrOne[x]);
      };
      x++;
    };
 };
 
//Run the function on the two strand arrays
 compareArrays(strandArrOne, strandArrTwo);

//Return array.length
  return uncommonStrand.length;
};

