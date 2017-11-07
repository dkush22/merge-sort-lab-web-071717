function findMinAndRemoveSorted(array) {

let min = array[0]
let minIndex
for (let i = 0; i < array.length; i++) {
	if (array[i] < min) {
		min = array[i]
		minIndex = i
	}
}
array.splice(minIndex, 1)
return min
}

function findMinAndRemove(firstArray, secondArray) {
	let minFirst = firstArray[0]
	let minSecond = secondArray[0]

	if (minFirst < minSecond) {
		return firstArray.shift() 
	}
	else {
		return secondArray.shift()
	}
}


function merge(firstArray, secondArray) {
let sorted = []
let currentMin
while (firstArray.length != 0 && secondArray.length != 0) {
	let currentMin = findMinAndRemove(firstArray, secondArray)
	sorted.push(currentMin)
}
return sorted.concat(firstArray).concat(secondArray)
}



function mergeSort(array) {
let midpoint = (array.length / 2)
let firstHalf = array.slice(0, midpoint)
let secondHalf = array.slice(midpoint, array.length)

if (array.length < 2) {
	return array
} else {
	return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}
}