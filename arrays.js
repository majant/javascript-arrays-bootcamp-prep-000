var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  arrayNew = [element, ...array]
  return arrayNew
}

function destructivelyAddElementToBegginingOfArray(array,element) {
  return unshift.array(element)
}