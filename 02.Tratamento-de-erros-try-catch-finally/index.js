function sum(a, b) {
  const firstNum = Number(a);
  const secondNum = Number(b);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    throw new Error("argument must be two number");
    // Se algum dos números não for um número, deve lançar um erro
  }

  return firstNum + secondNum;
}

try {
  console.log(sum(2, 9));
  console.log(sum(true, 14));
  //   console.log(sum(undefined, 22));
  console.log(sum(18, "0"));
  console.log(sum(39, null));
  //   console.log(sum(13, "zero"));
} catch (error) {
  console.log("An error ocurred!");
  console.log(error.message);
} finally {
  console.log("Calculations finished!");
}
