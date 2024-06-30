
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
    let length = prompt("Enter a password length between 8 and 128 characters.")
    if (length === null)
        return 
    length = parseInt(length)
    if (length < 8 || length > 128 || isNaN (length)){
        alert("Enter a password length between 8 and 128 characters.")
        return generatePassword()
    }
    const allowlowerCasedCharacters = confirm ("Allow lower case characters?")
    const allowspecialCharacters = confirm ("Allow special characters?")
    const allownumericCharacters = confirm ("Allow numeric characters?")
    const allowupperCasedCharacters = confirm ("Allow upper case characters?")

    let charactersArray = []
    if (allowlowerCasedCharacters) charactersArray = [...charactersArray, ...lowerCasedCharacters]
    if (allowspecialCharacters) charactersArray = [...charactersArray, ...specialCharacters]
    if (allownumericCharacters) charactersArray = [...charactersArray, ...numericCharacters]
    if (allowupperCasedCharacters) charactersArray = [...charactersArray, ...upperCasedCharacters]
     if (charactersArray.length === 0) {
      alert("Must use at least one character type.")
     return generatePassword()
     }
    let password = ""

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * charactersArray.length)
      
        password += charactersArray[randomIndex]

    }
 
    return password
}


generateBtn.addEventListener("click", writePassword);

var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
  

  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  

  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  

  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

