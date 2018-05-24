let words = [{
    wrdCh: "rose",
    wrdSpcs: 4,
    wrdltr1: "R",
    Wrdltr2: "o",
    Wrdltr3: "s",
    wrdltr4: "e",
    wrddsply: ["_", "_", "_","_"]
    },]

    //let strgdsply = ["_", "_", "_","_"]

//let words = "cool"
    // , "Boss","Poop","Registration","Drizzy","HYFR","Humble","Love","DNA","Papa","Brooklyn","Blueprint","Jigga","Allure"];
    // let words = ["Rose","Boss","Poop","Registration","Drizzy","HYFR","Humble","Love","DNA","Papa","Brooklyn","Blueprint","Jigga","Allure"];
    //const rand = Math.floor(Math.random()*words.length); //Selects a random word from the word list
    //const currentWord = words[rand];
    
    
    const currentWord = words[0];
    console.log(currentWord.wrdCh);
    const wrdshw = document.createElement("P");                       // Create a <p> element
    const t = document.createTextNode(words[0].wrddsply);       // Create a text node
    wrdshw.appendChild(t);                                          // Append the text to <p>
    //document.div.pic2c.appendChild(wrdshw);                              // Append <p> to <body>
    document.getElementById("spot4a").appendChild(wrdshw);
    
    

function button(x){
    console.log(currentWord);
    //This function makes the button console  
      console.log(x)
      const n = currentWord.wrdCh.includes(x);
      console.log(n)
            // if n = true
          if(n){
                // push x (replace) to the correct position (i = 0) in strgdsply
            // words.replace(/"_"/g, x)
              console.log('button clicked')
            console.log(words.wrddsply[0])
              //document.getElementById('pic2c').src = currentWord


              
  
          }
          else {
                //word does not include letter
                //call function to deduct value from attempts
                //fade used letter from keyboard

                wrdchk(x);
         
          }
  }
  
  //     for(var i=0, i<=currentWord.length, i++){
  //         if(i==)
  // }

//   function match(currentWord,x) {

//     // make a function for this loop to happen, call it like functionName (letter)
//     for (let i = 0; i < currentWord.length; i++) {

//         if (x === currentWord[i]) {
//             words[i] = x
//             // replace "_" with words[i] in strgdsply
//             //add to
//         }

//         //else {
//             //chances++
//             //console.log('chances')
//         //}
//         //console.log("chances"+chances)
//     }
// }
    
    
    

let attmpt= 6;
document.getElementById("spotAtmpt").innerHTML = "Remaining Attempts: " + attmpt;
function attmptcalc(){
    //loop through word
    //if letter matches word[i]
    //reveal letter in strgdsply
    //if letter is not in word
    //attmpt--
    //disable letter used: $(event.target).off() 
    for (var i = 0; i < currentWord.length; i++)
    {   
        //This Function loops through the current word and calls for the wordchk function
        var c = currentWord.charAt(i);
        console.log(c);
        wrdchk();
    }
}
        


//let words needs to be set match random word that is selected

//function needs to be connected to other functions
function wrdchk(x) {
        //This Function deducts a point from six atempts given at the beginning of the game.
        var str = x;
        var n = str.indexOf(currentWord);
        //document.getElementById("spotAtmpt").innerHTML = n;

        if(n === -1){
          attmpt = attmpt - 1;
        }
        
        console.log(attmpt);
        document.getElementById("spotAtmpt").innerHTML = "Remaining Attempts: " + attmpt;
        console.log(n);
        //Make selected key fade out
        //if(attmpt=0){
        //document.getElementById("spotAtmpt").innerHTML = "You Wack...GAME OVER FOOL";   
        //}
}
//wrdchk(words[0].wrdch);




