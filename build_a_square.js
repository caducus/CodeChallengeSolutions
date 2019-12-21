function generateShape(int){
  let square = "";
  for (let i = 0; i < int; i++) {
    for (let j = 0; j < int; j++) {
      square += "+";
    };
    if (i !== int - 1) {
      square += "\n";
    };
  };
  return square;
};

generateShape(3);
