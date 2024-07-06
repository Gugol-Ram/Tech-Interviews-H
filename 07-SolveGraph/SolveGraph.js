// const visited = []; ; //hago un arreglo para saber que ya visite

//SE SOLUCIONA CONDICIONANDO LA RECURSION
function SolveGraph(graph, start, target, visited = {}) {
  // Your code here:
  if (visited(start)) return false; //si al nodo ya lo visite, cortame aca
  visited[start] = true; // si no lo hice agregamelo al array

  for (const node of [start]) {
    console.log(node);
    if (node === target) return true;

    if (SolveGraph(graph, node, target, visited) === true) return true; //en vez de retornarla, la condiciono
  }
  return false;
}

module.exports = SolveGraph;

const graph = {
  a: ["c"], //a conoce a c
  b: ["c"],
  c: ["s", "r"], // c conoce a s y r
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};

console.log(SolveGraph(graph, "a", "s")); //daria true
