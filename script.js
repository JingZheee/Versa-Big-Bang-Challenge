const fs = require('fs');

const replaceText = (num) =>{
    if(num % 15 === 0){
        return 'BIGBANG';
    } else if (num % 3 === 0){
        return 'BIG';
    } else if(num % 5 === 0){
        return 'BANG';
    } else{
        return num.toString();
    }
}

const result = [];
for(let i = 1; i <= 100; i++){
    result.push(replaceText(i));
}

const data = JSON.stringify(result, null, 2);

fs.writeFile('output.json', data, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("Check output.json file for the result");
  }
});