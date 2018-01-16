function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array];
   return newArray;
}
return addElementToBeginningOfArray([1], "foo");

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);  
}
return destructivelyAddElementToBeginningOfArray([1], "foo");