var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  var arrayNew = [element, ...array]
  return arrayNew
}

function destructivelyAddElementToBegginingOfArray(array,element) {
  return array.unshift(element)
}

function addElementToEndOfArray(array,element) {
  var arrayNew = [...array, element]
  return arrayNew
}

function destructivelyAddElementToEndOfArray(array,element) {
  return array.push(element)
}