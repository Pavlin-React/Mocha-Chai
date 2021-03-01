function sumNum(arr, first, second) {
  if ( Array.isArray(arr) === false) {return NaN}
  if ( first < 0) {first = 0}
  if ( second > arr.length - 1 ) { second = arr.length - 1}
    return arr.slice(first, second + 1).reduce((acc, cur) => acc + Number(cur), 0)

}

console.log(sumNum([10, 20, 30, 40, 50, 60], 3, 300))