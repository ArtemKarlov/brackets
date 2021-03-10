module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    // console.log('odd number of brackets');
    return false
  };
  
  const stack = [];
  const openBra = bracketsConfig.map(el => el[0]);
  const closeBra = bracketsConfig.map(el => el[1]);
  
  if (!openBra.includes(str[0])) {
    // console.log('closing bracket at first pos');
    return false
  };

  for (const bracket of str) {    
       
    if (openBra.includes(bracket) && !stack.includes(bracket)) {
      const index = openBra.indexOf(bracket);
      stack.push(closeBra[index]);
    } else {
      const lastBracket = stack.pop();
      if (lastBracket !== bracket) return false;
    }
  }
  return (stack.length===0);
}