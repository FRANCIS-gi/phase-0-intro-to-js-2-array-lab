// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Milo) {
    cats.push(Milo);
  }
  function destructivelyPrependCat(Otis) {
    cats.unshift(Otis);
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  function appendCat(Ali){
        return[...cats,Ali];
  }
  function prependCat(Kamau){
        return[Kamau,...cats];
  }

  function removeLastCat(){
    return cats.slice(0, -1);
  }

  function removeFirstCat(){
    return cats.slice(1);
  }

BeforeAll((done)=>{
    done();
},1000);