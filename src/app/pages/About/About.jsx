import React from 'react';

// * components

// * style
import './About.scss';
import './About_responsive.scss';

// * scripts

// * contexts

// * img
import usaFlag from '../../assets/img/flags/usa-flag.png';
import brazilFlag from '../../assets/img/flags/brazil-flag.png';

// * icons

const About = () => {
   return (
      <div className="About">
         <section className="container">
            <h1>About</h1>

            <div>
               <img className="flag" src={usaFlag} alt="flag for USA" />
               <p className="text">
                  Hello everyone, this site is a project made entirely by me,
                  non-profit, without tutorials or anything like that... The
                  objective is to practice and learn.
               </p>
               <p className="text">
                  I'm 15 years old and I want to be a programmer, if you liked
                  my work,{' '}
                  <a
                     href="https://github.com/guilhermedevmatos15"
                     target="_blank"
                     rel="noreferrer"
                  >
                     visit my gitHub profile
                  </a>
               </p>
            </div>

            <div>
               <img className="flag" src={brazilFlag} alt="flag for BRAZIL" />
               <p className="text">
                  Olá, pessoal, esse site é um projeto feito inteiramente por
                  mim, sem fins lucrativos, sem tutoriais ou algo do tipo... O
                  objetivo é praticar e aprender.
               </p>
               <p className="text">
                  Tenho 15 anos e tenho o desejo de ser programador, se gostou
                  do meu trabalho,{' '}
                  <a
                     href="https://github.com/guilhermedevmatos15"
                     target="_blank"
                     rel="noreferrer"
                  >
                     visite meu perfil do gitHub
                  </a>
               </p>
            </div>
         </section>
      </div>
   );
};

export default About;
