import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Recepten from './components/recepten/Recepten';
import Home from './components/home/Home';
import About from './components/about/About';

// import app styles
import './App.css';
import Footer from './components/footer/Footer';

const recepten = [
  {
    image: 'images/spare-rip-plate.jpg',
    title: 'Smokey Spareribs',
    description:
      'De smaakbommetjes van het grillen. Deze sessie neemt +/- 6 uur in beslag, maar is het 100% waard je zult omver geblazen worden door de smaakexplosie. Dit gerecht is voor 4 personen en is naar eigen smaak aan te passen. Ik wens je heel veel plezier en succes met het bereiden van dit recept. Nu snel aan de slag!',
    id: 1,
  },
  {
    image: 'images/beer-can-chicken.jpg',
    title: 'Beer Can Chicken',
    description:
      'Een van de bekende BBQ gerecht de Beer Can Chicken een gerecht niet te moeilijk is om te bereiden, maar toch zo lekker en je kunt er vele variaties op maken. Door de kip op een half gevuld bliek bier te positioneren word de kip van uit de binnenkant gaar gestoomd. Dit heeft als voordeel dat de kip heerlijk mals en sappig blijft. Ik wens jullie veel succes bij het bereiden van dit fantastisch gerecht. ',
    id: 2,
  },
  {
    image: 'images/pulled-pork.jpg',
    title: 'Smokey Pulled Pork',
    description:
      'Pulled pork is een stuk vlees wat langzaam gegaard wordt. Over het algemeen gebruiken we hiervoor procureur en de gehele schouder. Pulled prok is afkomstig uit Amerika, waar men spreekt van ‘Boston Butt’. Deze klasieker doet het altijd goed zeker geschikt voor grotere groepen. De gouden combinatie met een klein turkse broodje en kool-sla. Bereidtijd is ongeveer +/- 6 uur.',
    id: 3,
  },
  {
    image: 'images/t-bone.jpg',
    title: 'Searing T-Bone Steak',
    description:
      'Pulled pork is een stuk vlees wat langzaam gegaard wordt. Over het algemeen gebruiken we hiervoor procureur en de gehele schouder. Pulled prok is afkomstig uit Amerika, waar men spreekt van ‘Boston Butt’. Deze klasieker doet het altijd goed zeker geschikt voor grotere groepen. De gouden combinatie met een klein turkse broodje en kool-sla. Bereidtijd is ongeveer +/- 6 uur.',
    id: 4
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recepten' element={<Recepten recepten={ recepten }/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
