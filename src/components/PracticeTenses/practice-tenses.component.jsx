import React, {useState} from 'react';
import TENSE_VERBS from '../data/verbs';
import FlashCard from '../FlashCard/flash-cards.component';
import '../FlashCard/flash-cards.styles.scss';
 
const PracticeTenses = () => {
   const [tense, setTense] = useState('Infinitive');
   const [count, setCount] = useState(10);//here
   const [lang,setLang] = useState('en');
 
   const Advance = (add) => {
       add === '+' ? setCount(count + 1) : setCount(count - 1)
       localStorage.setItem('counter', count);
   }
  
 
   const Translate = (tense, verb) => {
      console.log('count: ',count);
       debugger;
       if ( lang === "en" && count >= 0 ) {
           switch (tense) {
               case "Infinitive":
                   return "To " + verb.Infinitive.toLowerCase()   + " = " + verb.SignificadoPresente
               case 'Past':
                   return         verb.Past                       + " = " + verb.SignificadoPasado
               case "Future":
                   return "Will " + verb.Infinitive.toLowerCase() + " = " + verb.SignificadoFuturo
               default:
                   return "";
           }
       } else if ( lang === "es" && count >= 0 ) {
           switch (tense) {
               case "Infinitive":
                   return verb.SignificadoPresente   + " = " +"To " + verb.Infinitive.toLowerCase()
               case 'Past':
                   return  verb.SignificadoPasado                           + " = " +  verb.Past 
               case "Future":
                   return verb.SignificadoFuturo + " = " + "Will " + verb.Infinitive.toLowerCase()
               default:
                   return "";
           }
       }
   }
 
   return (
       <div className="flash-card">
           <h1>Verbs flash cards</h1>
           <div>
               <select name="tense"
                   onChange={
                       e => setTense(e.target.value)
               }>
                   <option value="Infinitive">Presente</option>
                   <option value="Past">Pasado</option>
                   <option value="Future">Futuro</option>
               </select>
               <span>                                       </span>
               <select name="language"
                   onChange={
                       e => (setLang(e.target.value))
               }>
                   <option value="en">Ingles / English</option>
                   <option value="es">Espanol / Ingles</option>
                
               </select>
               <div>
                   <p/>
                   <button onClick={
                       () => Advance('-')
                   }>PREVIOUS</button>
                   <span>                                       </span>
                   <button onClick={
                       () => Advance('+')
                   }>NEXT</button>
               </div>
               {
               <FlashCard translation =  {
                  
                   Translate(tense, TENSE_VERBS.data[
                       localStorage.getItem('counter') === null ? 1:localStorage.getItem('counter') ]
                       ) }
                   lang={lang}
                   count={count}
                   tense={tense}
                   verb={TENSE_VERBS.data[localStorage.getItem('counter')] }
               />
           } </div>
       </div>
   )
}
 
export default PracticeTenses
