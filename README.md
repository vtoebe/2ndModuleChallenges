
<h1 align="center"> Santander Coders | Let's Code </h1>
<h2 align="center"> II Module Challenges </h2>
<h4 align="center"> Coding Progression: </h4>
<div align="center" style="display: inline_block">
  <a href="https://vtoebe.notion.site/Matrix-fa739d39e81a4c2782530c55bd7ce6c6">Matrix</a>
  <a href="https://vtoebe.notion.site/Voters-Challenge-ec3a273994334ca49015cf61d72d18e6">Voters</a>
  <a href="https://vtoebe.notion.site/Calculator-Module-de6ad479cf6545e0a3fa195f827b1a9f">Caclculator</a>
</div>

## **Matrix**
Make an array of strings of the names saying whether or not they can go to The Matrix
```js
const people = [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]

//Result
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]
```
#### Suggested Test:
``console.log(whoCanGo(people))``

## **2. Voters**
### Given an array of potential voters, return an object representing the results of the vote
Include how many of the potential voters were in the ages **18-25**, how many from **26-35**, how many from **36-55**, and how many of each of those age ranges **actually voted**. The resulting object containing this data should have 6 properties. See the example output at the bottom.

```js
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// Result:
{ 
	MID: {people: 4, voted: 3}
	OLD: {people: 4, voted: 3}
	YOUNG: {people: 4, voted: 1}
}
```
#### Suggested Test:
``js console.log(getVotersResults(voters))``


## **3. Calculator Module**
Create a calculator as follows:
* Function "enter
* Function "equals"
* Function "list" - it should show all math operations already done, followed by its results
* Function "reset" - reset the list
* [x] (Optional) Control input entries / input validation <br/>
```
// Result
// Map(4) {'5+5' => 10, '23-13' => 10, '30/15' => 450, '7*4' => 28}
```
#### Suggested Test:
```js
calculator.enter(5)
calculator.enter('+')
calculator.enter(5)
calculator.equals()
calculator.enter(23)
calculator.enter('-')
calculator.enter(13)
calculator.equals()
calculator.enter(30)
calculator.enter('/')
calculator.enter(15)
calculator.equals()
calculator.enter(7)
calculator.enter('*')
calculator.enter(4)
calculator.equals()

calculator.list()
calculator.reset()
calculator.list()

//Testing invalid math operator
calculator.enter(7)
calculator.enter('g')
calculator.enter(4)

//Testing if it divides by zero
calculator.enter(14)
calculator.enter('/')
calculator.enter(0)
```
