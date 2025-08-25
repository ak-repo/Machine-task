function bridgeonSwitch(arr) {
  let isbridge = true;
  let newarr = [];
  for (let i of arr) {
    if (i !== "bridgeon") {
      newarr.push(isbridge);
    } else {
      isbridge && false;
    }
  }
  return newarr;
}

console.log(bridgeonSwitch(["ass","bridgeon","ss"]))
console.log(bridgeonSwitch(["bridgeon","aa",4,5,2,4,"bridgeon"]))
