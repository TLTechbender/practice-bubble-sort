
function bubbleSort(arr) {

    // Iterate through the array

      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
        
    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
  let len= arr.length;

  for(let i=0; i<len; i++){
    for(let j=0; j<len-1; j++){

	  if(arr[j]> arr[j+1]){
    let temp = arr[j];
	   arr[j] = arr[j+1];
        arr[j+1] = temp;
   console.log(arr.join(",")); 

          }
    }
  }



/*
	 let swaps = 0;

	  do {
	      // Iterate through the array
		       swaps = 0;
		           for (let i = 0; i < arr.length; i++) {
		                 if (arr[i] > arr[i+1]) {
		                         [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
		                                 swaps++;
		                                         console.log(arr.join(","));
		                                               
		                                                   }
		                                                     
			   }
	  } while (swaps > 0);
		  

	  return arr;
*/
}

module.exports = bubbleSort;
