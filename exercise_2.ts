//write a code to display the multiplication table of a given integer 

let _number: number = 9
for (let i: number = 1; i <= 10; i++) {
    console.log(_number + "x" + i + "=" + (_number * i))
}

// SOAL NOMER 2 BELUM PAHAM

// SOAL NOMER 3 BELUM PAHAM

// SOAL NOMER 4 BELUM PAHAM

// write a code to remove the first occurrence of a given "search string" from a string 
// exemple string : "Hello World" ,  search string = "ell"  

let _string: string = "Hello World";
let _Tempstring = _string.slice (1, 4);
console.log(_Tempstring);

// write a code to capitalize the first letter of each word in string
// bisanya di jadiin huruf besar semua

console.log(_string.toLocaleUpperCase())