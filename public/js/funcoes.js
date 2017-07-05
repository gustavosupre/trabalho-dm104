//funções
function tiraAspas (v) {
   var v1 = v.replace('"', '');
   return v1.replace('"', '');
}

function stringIfy(v) {
  return tiraAspas(JSON.stringify(v))
}

