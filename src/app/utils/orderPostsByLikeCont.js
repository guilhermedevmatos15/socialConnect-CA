export default function orderPostsByLikeCont(posts) {
   let array = [...posts];

   const tamanho = array.length;

   for (let i = 0; i < tamanho - 1; i++) {
      let indiceMinimo = i;

      // Encontre o índice do objeto com a propriedade "propriedade" de menor valor
      for (let j = i + 1; j < tamanho; j++) {
         if (array[j]['likeCont'] < array[indiceMinimo]['likeCont']) {
            indiceMinimo = j;
         }
      }

      // Troque o objeto com a propriedade de menor valor com o primeiro objeto não ordenado
      if (indiceMinimo !== i) {
         const temp = array[i];
         array[i] = array[indiceMinimo];
         array[indiceMinimo] = temp;
      }
   }

   return array;
}
