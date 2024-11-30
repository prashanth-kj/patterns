let inverseRightAngle=(rows)=>{
 
  for (let i = rows; i>=1; i--) {
      let row=''
      for (let j = i; j >=1; j--) {
         row +='*'
      }
      console.log(row)
  }
 

}

let invertedPyramid=(rows)=>{
      
  for (let i = rows; i >=1; i--) {
     let row=''
     let space=''
     for (let k = 1; k<=rows-i; k++) {
        space += ' '
     }
     for(let j=1;j<=2*i-1;j++){
          row +='*'
     }
     console.log(space + row)

  }
     
}

let squre =(rows)=>{

  for (let i = 0; i < rows; i++) {
     let row=' ';
     for (let j = 0; j < rows; j++) {
          row +='*' 
     }
     console.log(row)
  }
  
}

let hollowsqure =(rows)=>{

   for (let i = 0; i <rows; i++) {
        let row=' ';
      for (let j = 0; j < rows; j++) {
          if(i==0 || i==rows-1 || j==0 || j==rows-1){
               row +='*'
          }else{
            row +=' '
          }
      }
     console.log(row)
   }
   
}



let rows=5
invertedPyramid(rows)
inverseRightAngle(rows)
squre(rows)
hollowsqure(rows)






