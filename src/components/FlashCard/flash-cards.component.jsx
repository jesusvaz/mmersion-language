import React from 'react';
import './flash-cards.styles.scss';

 
const FlashCard = ({translation, lang, count ,tense, verb }) => {
 
   const Alertame = (tense, verb) => {
     
       let data = tense+" "+verb;
       debugger;
       alert(data);
 
 
   }
 
   const PlayPronunsation = (verb) => {
       if ('speechSynthesis' in window) {
          
 
       var msg = new SpeechSynthesisUtterance();
       if(lang === "es")
           msg.lang  = 'es-MX';   
       else
           msg.lang  = 'en-US';
 
       msg.text = verb;
       window.speechSynthesis.speak(msg);
       }else{
       alert("Sorry, your browser doesn't support the speech synthesis API !");
       }
}
 
const Pronunsation = (tense, verb) => {
  
   if ( lang === "en" && count >= 0 ) {
       switch (tense) {
           case "Infinitive":
               PlayPronunsation("To " + verb.Infinitive.toLowerCase()); 
               break; 
           case 'Past':
               PlayPronunsation(verb.Past);
               break;
           case "Future":
               PlayPronunsation("Will "+verb.Infinitive);
               break;
           default:
               return "";
       }
   } else if ( lang === "es" && count >= 0 ) {
       switch (tense) {
           case "Infinitive":
               PlayPronunsation(verb.SignificadoPresente);
               break;
           case 'Past':
               PlayPronunsation(verb.SignificadoPasado);
               break;
           case "Future":
               PlayPronunsation(verb.SignificadoFuturo);
               break;
           default:
               return "";
       }
   }
  
}
 
   return (
       <div className='flashcard'>
           <h1>
           {translation}   
        
           <span onClick={
               () => Pronunsation(tense,verb)
           }>
           {' '} <i class="fas fa-volume-up"></i> 
           </span>
           </h1>
       </div>
   )
}
 
export default FlashCard;