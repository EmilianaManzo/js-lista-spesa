const listaSpesa =['farina', 'uova', 'zucchero', 'nutella', 'fazzoletti', 'crema', 'salame', 'pane'];
console.log(listaSpesa);
let counter = 0;

console.log(listaSpesa.length);

while(counter < listaSpesa.length){
  console.log(counter);
  

  const ul = document.querySelector('ul');
  const li = document.createElement ('li');
  li.innerHTML = listaSpesa[counter] ;
  ul.append(li);

  counter++;
}

