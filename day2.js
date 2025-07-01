/*
Write a program to print 10 odd number using loop 
Write a program to print 10 even number using loop
Create a array of 10 odd numbers using loop
comparing 3 numbers
write a program to swap two given numbers
*/

for(i=1;i<=10;i++){
    console.log("Ten odd number",i*2-1)
}
for(a=1;a<=10;a++){
    let b = a*2
    console.log("10 even number",b)
}
// for(i=1;i<=10;i++){
//    let c = i*2-1
//    console.log("[")
let c = 10
let b = 20 
let d = 40
if(b>c & b>d){
console.log(    b ,"is the greater number")
}
else if ( d>b & d>c){
    console.log( d,"is the greater number")
}
else(
        console.log(c,"is the greater number")
)
let e = 20
let f = 50
console.log("before swapping the number ",e,f)
let g = e
e=f
f=g
console.log("After the number is swapped",e,f)

