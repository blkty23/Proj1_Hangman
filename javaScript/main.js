let words = [{
wrdCh: "Rose",
wrdSpcs: 4,
wrdltr1: "R",
Wrdltr2: "o",
Wrdltr3: "s",
wrdltr4: "e",
wrddsply: function() {
    let strgdsply = "_ _ _ _"
    return(strgdsply);
  }
},];

// , "Boss","Poop","Registration","Drizzy","HYFR","Humble","Love","DNA","Papa","Brooklyn","Blueprint","Jigga","Allure"];


// let words = ["Rose","Boss","Poop","Registration","Drizzy","HYFR","Humble","Love","DNA","Papa","Brooklyn","Blueprint","Jigga","Allure"];
//const rand = Math.floor(Math.random()*words.length); //Selects a random word from the word list
// const currentWord = words[rand];
const currentWord = words[0];
console.log(currentWord.wrdCh);
const wrdshw = document.createElement("P");                       // Create a <p> element
const t = document.createTextNode(words[0].wrddsply());       // Create a text node
wrdshw.appendChild(t);                                          // Append the text to <p>
//document.div.pic2c.appendChild(wrdshw);                              // Append <p> to <body>
document.getElementById("spot4a").appendChild(wrdshw);


function button(x){
    
    console.log(x)
    const n = currentWord.includes(x)
    console.log(n)

        if(n){

            
            console.log('button clicked')
            document.getElementById('pic2c').src = currentWord

        }
        else {

       
        }
}

//     for(var i=0, i<=currentWord.length, i++){
//         if(i==)
// }