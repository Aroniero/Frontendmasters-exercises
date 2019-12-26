```javascript
const numbers = [4,5,6]
for (let i = 0; i < numbers.length; i++){
 console.log(numbers[i])
} 
```

Steps:
1) numbers: [4,5,6]
2) <u>Check this</u>	i < numbers.length
						0 < 3
	<u>Do this</u>		console.log(numbers[i])
						i++				[4,5,6]  [0]



```javascript
function createNewFunction() {
 function add2 (num){
 return num+2;
 }
 return add2;
}
const newFunction = createNewFunction()
const result = newFunction(3)
```

Steps:
1) createNewFunction: *function*;
2) newFunction: *function*;
3) result: **

