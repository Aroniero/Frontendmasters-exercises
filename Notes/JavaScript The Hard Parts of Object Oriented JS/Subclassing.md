# Subclassing Solution 2 - Factory function approach

```javascript
function userCreator(name, score){
	const newUser = Object.create(userFunctions);
	newUser.name = name;
    newUser.score = score;
    return newUser;
}

userFunctions = {
    sayName: function(){
        console.log("I'm "+ this.name);
    }
    increment: function(){
        this.score++;
    }
}

const user1 = userCreator("Phil, 5");
user1.sayName();
```

1) userCreator: *function*
2) <span style="color: #feb236">userFunctions </span> : {
			sayName: *function*
   		 increment: *function*
		}
3) user1 : ....			<-------- now its uninitialized 
	user1 = userCreator("Phil, 5")
												Creating a New Execution Context	

|      | memory                                                       |
| ---- | ------------------------------------------------------------ |
|      | name : "Phil"<br />score: 5<br />newUser = {  <br />          name : "Phil"<br />          score: 5<br />          _ _ proto _ _:               it is a bond with userFunctions <------<br />} |

​	user1 : {  <br />          name : "Phil"<br />          score: 5<br />          <span style="color: #feb236">_ _ proto _ _:</span>  .......      
​	}								<--------------------- now user1 is object which was returned from execution context 

4) user1.sayName()											

```javascript
function paidUserCreator(paidName, paidScore, accountBalance){
	const newPaidUser = userCreator(paidName, paidScore);
	Object.setPrototypeOf(newPaidUser, paidUserFunctions);
	newPaidUser.accountBalance = accountBalance;
	return newPaidUser;
}
const paidUserFunctions = {
	increaseBalance: function(){
		this.accountBalance++;
	}
};
Object.setPrototypeOf(paidUserFunctions,userFunctions)
const paidUser1 = paidUserCreator("Alyssa", 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName();
```

5) paidUserCreator : *function*
6) <span style="color: #54a0ff">paidUserFunctions</span> : {
			increaseBalance: *function*
		}

7) Object.setPrototypeOf(<span style="color: #54a0ff">paidUserFunctions</span>, <span style="color: #feb236">userFunctions </span> )  
	Its creating a link in <span style="color: #54a0ff">paidUserFunctions</span>  _ _ proto _ _ to <span style="color: #feb236">userFunctions </span> object

8) paidUser1 = 							<-------- now its uninitialized 
paidUser1 = paidUserCreator("Alyssa", 8, 25)
														Creating a New Execution Context	

|                                                              | memory                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <br /><br /><br /><span style="color: #82b74b">newPaidUser</span>= userCreator(Alyssa, 8)<br />Creating an Execution Context:<br />Local Memory:<br />name : "Alyssa"<br />score : 8  <br /><span style="color: #82b74b">newPaidUser</span> :{  <br />          name : "Alyssa"<br />          score: 8<br />          _ _ proto _ _:  <br />}  <br />at this point <span style="color: #82b74b">newPaidUser</span> _ _ proto _ _ has bond with <span style="color: #feb236">userFunctions </span>but we gonna change it in next line ! | paidName: "Alyssa"<br />paidScore: 8<br />accountBalance : 25<br /><span style="color: #82b74b">newPaidUser</span>: {  <br />          name : "Alyssa"<br />          score: 8<br />          accountBalance: 25<br />          _ _ proto _ _:  <br />}  <br />setPrototypeOf is giving <span style="color: #82b74b">newPaidUser</span> _ _ proto _ _ a bond to the <span style="color: #54a0ff">paidUserFunctions</span> <br /> |

THIS WHOLE EXECUTION CONTEXT RETURN OBJECT t:

paidUser1  = {  <br />          name : "Alyssa"<br />          score: 8<br />          accountBalance: 25<br />          _ _ proto _ _:  		            has bond to <span style="color: #54a0ff">paidUserFunctions</span> and this has bond to <span style="color: #feb236">userFunctions </span> <br />  }  <br />

9) paidUser1.increaseBalance();
	-- first it looks for paidUser1 and it finds it in global memory (look at point 8, its object)
	-- next he looks for increaseBalance method but he cant find it in this object, so he check it in his _ _ proto _ _ which
		is refering to <span style="color: #54a0ff">paidUserFunctions</span>. In <span style="color: #54a0ff">paidUserFunctions</span>  he finds  increaseBalance() method and execute it. 

10) paidUser1.sayName();
	-- first it looks for paidUser1 and it finds it in global memory (look at point 8, its object)
	-- next he looks for sayName() method but he cant find it in this object (paidUser1), so he check it in his _ _ proto _ _ 
       which is refering to <span style="color: #54a0ff">paidUserFunctions</span>. In <span style="color: #54a0ff">paidUserFunctions</span>  he cant find sayName() method so JS is searching in
         <span style="color: #54a0ff">paidUserFunctions</span>  _ _ proto _ _  which is refering to <span style="color: #feb236">userFunctions </span>. In <span style="color: #feb236">userFunctions </span> he finds sayName() and 
        execute it.

# Interlude - We have another way of running a function that allow us to control the assignment of this

```javascript
const obj = {
     num: 3,
     increment: function(){this.num++;}
};
const otherObj = {
 	num: 10
};
obj.increment(); // obj.num now 4
obj.increment.call(otherObj); // otherObj.num now 11
// obj.increment.apply(otherObj);
```

this always refers to the object to the left of the dot on which the function (method) is being called - unless we override that by running the function using .call() or .apply() which lets us set the value of this inside of the increment function

1) obj : {
		num: 3,
		increment: *function*
	}
2) otherObj : {
		num: 10,
	}
3) obj.increment();
	Creating a New Execution Context	

|                              | memory           |
| ---------------------------- | ---------------- |
| this : num++<br />obj :num++ | this : obj<br /> |

now obj : {
	num: 4,
	increment: *function*
}

4) obj.increment.call(otherObj);
increment function (FUNCTION OBJECT COMBO) has _ _ proto _ _ inside so its linked to the Function.prototype where you can  find call() method

Creating a New Execution Context	

|                                    | memory          |
| ---------------------------------- | --------------- |
| this : num++<br />otherObj : num++ | this : otherObj |

now otherObj : {
	num: 4,
	increment: *function*
}

 

