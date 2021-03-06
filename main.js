const outerWheel = document.querySelector('.outer-wheel');
const innerWheel = document.querySelector('.inner-wheel');
const centerWheel = document.querySelector('.wheel-center');
const hideWheel = document.querySelector('.hide-wheel');
const container = document.querySelector('.container')
const box = document.querySelector('.box')
let key = document.querySelector('.key');
const body = document.querySelector('body')

let counter = 0

key.addEventListener('input', function(e){
  let key = e.target.value
  outerWheel.style.transform = `translate(-50%, -50%) rotate(0deg)`
  innerWheel.style.transform =  `translate(-50%, -50%) rotate(${key * 13.84615}deg)`
  centerWheel.style.transform = `translate(-50%, -50%) rotate(0deg) rotate(${key * -13.84615}deg)`
  counter = key
})

let shift = 0
let shift2 = 0
let str = ''
let str2 = ''

let strBox = document.querySelector('.encrypt-text')
let shiftBox = document.querySelector('.encrypt-key')
let strReveal = document.querySelector('.reveal-text')
let shiftReveal = document.querySelector('.reveal-key')

body.addEventListener('input', encrypt)
body.addEventListener('input', reveal)
shiftBox.addEventListener('input', function (e)  {
  shift = e.target.value
})
strBox.addEventListener('input', function(e){
  str = e.target.value 
})
shiftReveal.addEventListener('input', function (e)  {
  shift2 = e.target.value
})
strReveal.addEventListener('input', function(e){
  str2 = e.target.value 
})

function encrypt() {
  let codedStr = '';
  for (let i = 0; i < str.length; i++) {
  let char = str.charAt(i)
  let ascii = char.charCodeAt(0)
  let shiftedAscii = ascii + shift *2 /2
  switch(true) {
    case (ascii >= 65 && ascii <= 90):
      if (shiftedAscii < 65) {shiftedAscii += 26} 
      if (shiftedAscii > 90) {shiftedAscii -= 26} 
      break;
    case (ascii >= 97 && ascii <= 122):
      if (shiftedAscii < 97) {shiftedAscii += 26} 
      if (shiftedAscii > 122) {shiftedAscii -= 26} 
      break;
    default:
      console.log('nem betu')
      break;  
  } 
  let codedChar = String.fromCharCode(shiftedAscii)
  codedStr += codedChar;
}
codedStr= codedStr.substr(codedStr.length - str.length)
const encryptedText = document.querySelector('.encrypted-text')
encryptedText.innerHTML = codedStr
}

function reveal() {
  let codedStr = '';
  for (let i = 0; i < str2.length; i++) {
  let char = str2.charAt(i)
  let ascii = char.charCodeAt(0)
  let shiftedAscii = ascii - shift2 *2 /2
  switch(true) {
    case (ascii >= 65 && ascii <= 90):
      if (shiftedAscii < 65) {shiftedAscii += 26} 
      if (shiftedAscii > 90) {shiftedAscii -= 26} 
      break;
    case (ascii >= 97 && ascii <= 122):
      if (shiftedAscii < 97) {shiftedAscii += 26} 
      if (shiftedAscii > 122) {shiftedAscii -= 26} 
      break;
    default:
      console.log('nem betu')
      break;  
  } 
  let codedChar = String.fromCharCode(shiftedAscii)
  codedStr += codedChar;
}
codedStr= codedStr.substr(codedStr.length - str2.length)
const revealedText = document.querySelector('.revealed-text')
revealedText.innerHTML = codedStr
}

innerWheel.addEventListener('wheel', (e) => {
  let Y = e.deltaY 
  if(Y < 0 ) {
    counter = counter + 13.84615
  innerWheel.style.transform = `translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1.1)`
  innerWheel.addEventListener('mouseenter', function() {
    innerWheel.style.transform = `translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1.1)`
    hideWheel.style.transform = 'translate(-50%, -50%) scale(1.1)'
  })
  innerWheel.addEventListener('mouseleave', function() {
    hideWheel.style.transform = 'translate(-50%, -50%) scale(1)'
    innerWheel.style.transform = `translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1)`
  })
  }

  if(Y > 0 ) {
    counter = counter - 13.84615
  innerWheel.style.transform = `translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1.1)`
  innerWheel.addEventListener('mouseenter', function() {
    hideWheel.style.transform = 'translate(-50%, -50%) scale(1.1)'  
    innerWheel.style.transform = `translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1.1)`
  })
  innerWheel.addEventListener('mouseleave', function() {
    hideWheel.style.transform = 'translate(-50%, -50%) scale(1)'
    innerWheel.style.transform = `translate(-50%, -50%) rotate3d(0,0,1, ${counter}deg) scale(1)`
  })
  }
  let encryptKey = counter / 13.84615
  key.value = Math.round(encryptKey)
})
 innerWheel.addEventListener('mouseenter', function() {
  hideWheel.style.transform = 'translate(-50%, -50%) scale(1.1)'
  hideWheel.style.boxShadow = '0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)'
  innerWheel.style.transform = 'translate(-50%, -50%) scale(1.1)'
})
 innerWheel.addEventListener('mouseleave', function() {
  hideWheel.style.transform = 'translate(-50%, -50%) scale(1)'
  hideWheel.style.boxShadow = 'none'
  innerWheel.style.transform = 'translate(-50%, -50%) scale(1)'

})
