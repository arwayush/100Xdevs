//map, filter and arrow function

**map**
[1,2,3,4,5] -> [2,4,6,8,10]

given an initial arr and transformation function
map(arr, f) -> array and transformation function is given to the map funtion

const ip = [1,2,3,4,5]; -> input array
function transform(){ -> transformation function
return i\*2;
}

const ans = ip.map(transform); -> map function using both
conosole.log(ans); -> to give answer

-> whenever array need to be transformed use this

-> ip.map(function(){

}) -> transformation function can also be assigned inside the main function

----> **assignment** create an map function that takes 2 inputs an array and a transformation callback function and transforms the array into a new using the transformation function

**filtering**

- to search and findout the things
- takes all of the elements one-by-one and will return either true or false
-
