import React, { createContext, useEffect, useState } from 'react';

// ? Utils
import getRandomNumber from '../utils/getRandomNumber';
import getRandomImage from '../utils/getRandomImage';

// ? Created Context
export const postsContext = createContext();

const PostContext = ({ children }) => {
   // Definindo a chave do localStorage
   const keyLocalStorage = 'posts';

   // Pegando posts já existentes, desde a última vinda do usuário, se for a 1° vez, temos um array vazio (indicando que não temos posts anteriores que precisem ser mostrados)
   const [posts, setPosts] = useState(
      JSON.parse(localStorage.getItem(keyLocalStorage)) || []
   );

   useEffect(() => {
      // Se nosso array estiver vazio, devemos procurar novos posts
      if (posts.length === 0) {
         (async () => {
            try {
               const apiKey = 'bf867996a58a4e7e9dbaa3885eea1ae4';
               const response = await fetch(
                  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
               );
               const data = await response.json();

               // Se tudo ok, setamos nosso state 'posts' com os resultados da API
               if (data?.status === 'ok') {
                  setPosts(
                     data?.articles.map((post, index) => {
                        const currentAuthor = String(post.author)
                           .split(' ');

                        return {
                           ...post,
                           // ID da postagem
                           _id: `${index}_${String(post.title).split(' ')[0]}_${post.source.id}`,

                           // Definindo autor, apenas 1° e 2° nome e retirando uma possível ,
                           author: `${currentAuthor[0] ? currentAuthor[0].replace(',', '') : 'not-identifie'}`,

                           // Gerando imagem aleatória para o usuário
                           imageUser: getRandomImage(),

                           // Se a postagem está curtida
                           liked: false,

                           // Contador de curtidas
                           likeCont: getRandomNumber(100, 9999),
                        };
                     })
                  );
               } else {
                  // Se recebermos resultado da API, porém seu resultado não é o esperado, geramos um erro
                  throw new Error('Error on API');
               }
            } catch (e) {
               console.log('Error, please reload page.');
            }
         })();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      // Qualquer modificação no state, salvar no localStorage
      localStorage.setItem(keyLocalStorage, JSON.stringify(posts));
   }, [posts]);

   return (
      <>
         <postsContext.Provider value={{ posts, setPosts }}>
            {children}
         </postsContext.Provider>
      </>
   );
};

export default PostContext;
