const repeatStringNumTimes = (str,num) => {
  if(typeof num !== "number") {
    return "Number is invalid/empty"
  }

  if(str.trim() === ""){
    return "String is empty"
  }

  let string = str;

  if(num === 0 || num < 0){
    return ""
  }

  for(let i = 1; i < num; i++){
    string += str
  }

  return string
}

console.log(repeatStringNumTimes("abc", 1))
