Double the numbers in an array: [1, 2, 3, 4, 5] → [2, 4, 6, 8, 10]
arr=[1,2,3,4,5];
x=arr.map((a,b)=>{return a*2})
console.log(x)

Get even numbers from an array: [1, 2, 3, 4, 5] → [2, 4]
arr=[1,2,3,4,5];
x=arr.filter((a)=>{return a%2==0})
console.log(x)
arr1= ["hello", "world", "abc"] 
y=arr1.filter((a)=>{return a.length>=5})
console.log(y)

 Log each number in an array: [1, 2, 3, 4, 5] → console logs each number
arr=[1,2,3,4,5];
x=arr.forEach((a,b,c)=>console.log(a,b,c))

arr1= ["hello", "world"] 
console.log(arr1.forEach((x)=>{console.log(x+"!")}))

 Check if all numbers in an array are positive: [1, 2, 3, 4, 5] → true
arr=[1,2,3,4,5];
x=arr.every((a)=>{console.log(a>0)})

arr1=["hello", "world", "abc"]
y=arr1.every((a)=>{console.log(a.length>5)})

 Check if any number in an array is even: [1, 2, 3, 4, 5] → true

arr=[1,2,3,4,5];
x=arr.some((a)=>{return (a>0)})
console.log(x)

arr1=["hello", "world", "max"]
y=arr1.some((a)=>{return (a.includes('x'))})
console.log(y)

 Find the first even number in an array: [1, 2, 3, 4, 5] → 2
arr=[1, 2, 3, 4, 5]
