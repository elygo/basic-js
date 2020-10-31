const CustomError = require("../extensions/custom-error");
 
class VigenereCipheringMachine {
  // if directMachine => true else reverseMachine
  constructor(mode = true) {
    this.mode = mode;
  }
   
  encrypt(string, key) {
    // if one of both is omitted throws an error
    if (!string || !key) {
      throw "Not implemented";
    }

    // directMachine => encrypt
    if (this.mode === true) {
      let keyText = key.split("");
      let cipherText = [];
      let i = 0;
      string.split("").forEach(letter => {
          if ( letter.toUpperCase().charCodeAt() >= 65 && letter.toUpperCase().charCodeAt() <= 90 ) {
            let char = letter.toUpperCase().charCodeAt() + keyText[i].toUpperCase().charCodeAt() - 65;
            if (char > 90) {
              char = char - 90 + 64;
            }
            cipherText.push(String.fromCharCode(char));
            i += 1;
            if (i === keyText.length) {
              i = 0;
            }
          } else {
            cipherText.push(letter);
          }
      });
    
      return cipherText.join("");
    } else {
      // reverseMachine => encrypt
      let keyText = key.split("");
      let cipherText = [];
      let i = 0;
      string.split("").forEach(letter => {
          if ( letter.toUpperCase().charCodeAt() >= 65 && letter.toUpperCase().charCodeAt() <= 90 ) {
            let char = letter.toUpperCase().charCodeAt() + keyText[i].toUpperCase().charCodeAt() - 65;
            if (char > 90) {
              char = char - 90 + 64;
            }
            cipherText.push(String.fromCharCode(char));
            i += 1;
            if (i === keyText.length) {
              i = 0;
            }
          } else {
            cipherText.push(letter);
          }
      });
      //key is here reverse everything else above is the same
      return cipherText.reverse().join('');
    }
  }    
  
  // directMachine => decrypt
  decrypt(string, key) {
        if (this.mode === true) {
          if (!string || !key) {
            throw "Not implemented";
          }
          let keyText = key.split("");
          let encryptedText = [];
          let i = 0;
          string.split("").forEach(letter => {
            if ( letter.toUpperCase().charCodeAt() >= 65 && letter.toUpperCase().charCodeAt() <= 90 ) {
              let char = letter.toUpperCase().charCodeAt() - (keyText[i].toUpperCase().charCodeAt() - 65);
              if (char < 65) {
                char = char + 90 - 64;
              }
              encryptedText.push(String.fromCharCode(char));
              i += 1;
              if (i === keyText.length) {
                i = 0;
              }
            } else {
              encryptedText.push(letter);
            }
          });
      return encryptedText.join("");
    } else {
    // reverseMachine => decrypt
      let keyText = key.split("");
      let encryptedText = [];
      let i = 0;
      string.split("").forEach(letter => {
        if ( letter.toUpperCase().charCodeAt() >= 65 && letter.toUpperCase().charCodeAt() <= 90 ) {
          let char = letter.toUpperCase().charCodeAt() - (keyText[i].toUpperCase().charCodeAt() - 65);
          if (char < 65) {
            char = char + 90 - 64;
          }
          encryptedText.push(String.fromCharCode(char));
          i += 1;
          if (i === keyText.length) {
            i = 0;
          }
        } else {
          encryptedText.push(letter);
        }
      });
      return encryptedText.reverse().join('');
    }  
  }
}

module.exports = VigenereCipheringMachine;
