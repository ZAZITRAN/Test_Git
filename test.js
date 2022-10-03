/* bai 1
let str = "hello"
for (let i = str.length - 1; i >= 0; i--) {
  str = str[i]
  
}console.log(str); */



 /*  //BAI 6

  let day = +prompt("nhap ngay")
  while (day >31 || day <0 || Number.isInteger(day)===false){
    day =+prompt  ( "moi nhap lai")
  }
  let month= +prompt ("nhap thang")
  while (month >12 || day <0 || Number.isInteger(month)===false){
    month =+prompt  ( "moi nhap lai")
  }
  let year = +prompt ("nhap nam")
  while (day >31 || day <0 || Number.isInteger(day)===false){
    day =+prompt  ( "moi nhap lai")
  }
if (month<=7) {
    if (month%2 !==0) {
        if (day>31){ 
            console.log("khong hop le");
        }else if (day ===31) {
            console.log(" hop le"  + "\n Ngay tiep theo la "+ 1+ " /" + (month+1) + "/"+ year);
        }else{
            console.log( "hop le"  + "\n Ngay tiep theo la "+ (day+1) + " /" + month +"/"+ year)
        }

    }else{
        if (month===2) {
            if ((year % 4===0 &&year%100 !==0 && year % 400 !==0)||(year%100===0 && year % 400===0)){
                if (day>29){
                 console.log("khong hop le");
                } else if(day ==29){
                    console.log(" hop le"  + "\n Ngay tiep theo la "+ 1+ " /" + (month+1) + "/"+year);
                }else{
                     console.log( "hop le"  + "\n Ngay tiep theo la "+ (day+1) + " /" + month+ "/"+year)               
                }
            }else{
                if (day>28){
                    console.log("khong hop le");
                   } else if(day ==28){
                    console.log(" hop le"  + "\n Ngay tiep theo la "+ 1+ " /" + (month+1) + "/"+year);
                }else{
                     console.log( "hop le"  + "\n Ngay tiep theo la "+ (day+1) + " /" + month+ "/"+year)               
                }
            }               
        }else{
            if (day>30){
                console.log("khong hop le");
               } else if(day ==30){
                console.log(" hop le"  + "\n Ngay tiep theo la "+ 1+ " /" + month+1 + "/"+year);
            }else{
                 console.log( "hop le"  + "\n Ngay tiep theo la "+ (day+1) + " /" + month+ "/"+year)               
            }
        }
        
    }
}else{
    if (month%2!==0) {
        if (day>30){
            console.log("khong hop le");
           } else if(day ==30){
            console.log(" hop le"  + "\n Ngay tiep theo la "+ 1+ " /" + (month+1) + "/"+year);
                }else{
                     console.log( "hop le"  + "\n Ngay tiep theo la "+ (day+1) + " /" + month+ "/"+year)               
                }
        if (month !==12) {
            if (day>31){
                console.log("khong hop le");
               } else if(day ==31){
                console.log(" hop le"  + "\n Ngay tiep theo la "+ 1+ " /" + (month+1) + "/"+year);
            }else{
                 console.log( "hop le"  + "\n Ngay tiep theo la "+ (day+1) + " /" + month+ "/"+year)               
            }
        }else {
            if (day>31){
                console.log("khong hop le");
               } else if(day ==31){
                   console.log(" hop le"  + "\n Ngay tiep theo la "+ 1+ " /" + (month+1)+ "/"+year);
               }else{
                    console.log( "hop le"  + "\n Ngay tiep theo la "+1 + " /" + month+ (year+1))               
               }
        }
    }
    } */



    /* bai 5*/
   /*  let array= ["Hung", "Hue", "Huong"]
 */
    /* READ */
    /* console.log(array); */

    /* CREATE */
    /* array[3]="Ha"
    console.log(array); */
   

   /* DELETE */
    /* delete array[1]
    console.log(array) */


   /*  bai 3*/
  
  /* 
    let  arr=["one","two","three","one","one","four","five","four","five","five"]
    let newArr= []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
}
      console.log(newArr);
 */

      /* BAI 4 */
      /* let array= [1,4,3,6]

      for (let i = 0; i < array.length - 1; i++) {
        let idmin = i;
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[idmin]) idmin = j;
        }
        let t = array[i];
    array[i] = array[idmin];
    array[idmin] = t;
      }
    console.log(array);
 */

/* Bai 2
    let str= "this is book"
    let newStr=str.charAt(0).toUpperCase() +str.slice(1)
    console.log(newStr);
 */
   