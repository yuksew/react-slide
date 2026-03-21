import SlideDeck from './components/SlideDeck';
import Title from './slides/01_Title';
import WhatIs from './slides/02_WhatIs';
import WhyGreat from './slides/03_WhyGreat';
import Workflow from './slides/04_Workflow';
import Demo from './slides/05_Demo';
import Comparison from './slides/06_Comparison';
import Tips from './slides/07_Tips';
import Closing from './slides/08_Closing';

const slides = [Title, WhatIs, WhyGreat, Workflow, Demo, Comparison, Tips, Closing];

export default function App() {
  return <SlideDeck slides={slides} />;
}
