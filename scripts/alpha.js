
function continueGame(){
    const alphabet = getAAlphabet();
    console.log(alphabet)


    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet)
}



function play() {

const homeSection = document.getElementById('home')
homeSection.classList.add('hidden')


const playSection = document.getElementById('play')
playSection.classList.remove('hidden')

continueGame();

}

function setBackgroundColor  (elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}



function getAAlphabet(){
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
const alphabets = alphaString.split('')
console.log(alphabets)


const randomNumber = Math.random() * 25;
const index = Math.round(randomNumber);



const alphabet = alphabets[index]
console.log(index, alphabet);
return alphabet;

}
