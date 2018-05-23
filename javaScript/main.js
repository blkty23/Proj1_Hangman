let words = [{
wrdCh: "Rose",
wrdSpcs: 4,
wrdltr1: R,
Wrdltr2: o,
Wrdltr3: s,
wrdltr4: e
wrddsply: function() {
    console.log("_ _ _ _");
  }
},

, "Boss","Poop","Registration","Drizzy","HYFR","Humble","Love","DNA","Papa","Brooklyn","Blueprint","Jigga","Allure"];


// let words = ["Rose","Boss","Poop","Registration","Drizzy","HYFR","Humble","Love","DNA","Papa","Brooklyn","Blueprint","Jigga","Allure"];
const rand = Math.floor(Math.random()*words.length);
const currentWord = words[rand];

console.log(currentWord);



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

    for(var i=0, i<=currentWord.length, i++){
        if(i==)
}