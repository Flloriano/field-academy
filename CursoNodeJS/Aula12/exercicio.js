let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

// console.log('VarA: ', varA, '    VarB: ', varB, '   VarC: ', varC);

// const vlA = varA

// varA = varB;
// varB = varC;
// varC = vlA;

// console.log('VarA/B: ', varA, '    VarB/C: ', varB, '    VarC: ', varC);

//'Outra maneira para resolver!

[varA, varB, varC] = [varB, varC, varA]; 

console.log(varA, varB, varC);