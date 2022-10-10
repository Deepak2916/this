// global scope
this.table="window table"
   // console.log(window.table)
   this.garage={
     cable:'garage table'
   }
// local scope
// inside an object 
     let deepak={
          table:"deepak table"
     }
     console.log(this.jdeepak.table)
// inside method
let dpk={
     table:"dpk table",
     cleanTable(){
        console.log(`cleaning ${this.table}`) 

     }
}
// inside a function
const cleanTable=function(){
     const innerFunction=function(){
     console.log(`clean ${this.table}`)
 }
//  bind
 innerFunction.bind(this)()
}
// call
cleanTable.call(this)

// inside an arrow function
const student=function(){
     const section =(a)=>{
          console.log(`section-${a}`)
     }
     section('A')
}
student.call(this)
