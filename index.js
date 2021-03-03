function findClosingParenthesis(expression,index){
  let p=[];
  for(let i=0;i<expression.length;i++){
    if(expression[i]=='('){
      p.push(i);
    }
    else if(expression[i]==')'){
      
      let poppedIndex=p.pop();
      if(poppedIndex==index){
        return i;
      }
    }
  }
  return -1;
}
console.log(findClosingParenthesis("(((1)))", 0));//6
console.log(findClosingParenthesis("(((1)))", 1));//5
console.log(findClosingParenthesis("(((1)))", 2));//4
console.log(findClosingParenthesis("((1)23(45))(aB)", 0));//10
console.log(findClosingParenthesis("((1)23(45))(aB)", 2));//-1
// Given a string with brackets and an index of an opening bracket - you have to return the index of the matching closing bracket. An opening brace will always have a closing brace. Return -1 if there is no answer

// Examples
// Input:
// "((1)23(45))(aB)", 0
// Output:
// 10 // the opening brace at index 0 matches the closing brace at index 10
// Input:
// "((1)23(45))(aB)", 2
// Output:
// -1 // there is no opening bracket at index 2, so return -1