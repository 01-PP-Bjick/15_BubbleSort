

/* Bubble Sort is an algorithm to sort an array. It
*  compares adjacent element and swaps their position
*  The big O on bubble sort in worst and best case is O(N^2).
*  Not efficient.
*  Somehow if the array is sorted or nearly sorted then we can optimize bubble sort by adding a flag.
*
*  In bubble sort, we keep iterating while something was swapped in
*  the previous inner-loop iteration. By swapped I mean, in the
*  inner loop iteration, we check each number if the number proceeding
*  it is greater than itself, if so we swap them.
*
*  Wikipedia: https://en.wikipedia.org/wiki/Bubble_sort
*  Animated Visual: https://www.toptal.com/developers/sorting-algorithms/bubble-sort
*/


// output(bubbleSort([0,1]))
// output(bubbleSort([1,0]))
//output(bubbleSort([10,5,4,8]))
output(bubbleSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]))
function bubbleSort (arr) {

    let swapped = true
  
    while (swapped) {
      swapped = false
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          output("to be swapped: " + arr[i] + "," + arr[i + 1]);
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
          swapped = true
        }
        output("loop: " + "index: " + i + " | " + arr);
        output("-----------------");
      }
    }
  
    return arr
  }


// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}
