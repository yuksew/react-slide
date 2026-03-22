import SlideDeck from './components/SlideDeck';
import Title from './slides/01_Title';
import WhatIs from './slides/02_WhatIs';
import WhyGreat from './slides/03_WhyGreat';
import Workflow from './slides/04_Workflow';
import Demo from './slides/05_Demo';
import DemoScreenshot from './slides/06_DemoScreenshot';
import Iteration from './slides/07_Iteration';
import NewFeature from './slides/08_Tips';
import Closing from './slides/09_Closing';

const slides = [Title, WhatIs, WhyGreat, Workflow, Demo, DemoScreenshot, Iteration, NewFeature, Closing];

export default function App() {
  return <SlideDeck slides={slides} />;
}
