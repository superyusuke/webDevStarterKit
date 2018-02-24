import test from './test'

const props = {
  id: 1,
  name: 'nakanishi',
}

const obj1 = {test: 'test'}

const newObject = {
  ...props,
  ...obj1,
}
test(newObject)

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]

const newArray = [...arr1, ...arr2]
console.log(newArray)
