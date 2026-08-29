import React from 'react';
import { HeroSection } from './components/HeroSection';
import { PeaksSection } from './components/PeaksSection';
import { AscentSection } from './components/AscentSection';
import { ExpeditionJournalSection } from './components/ExpeditionJournalSection';
import { EssentialsSection } from './components/EssentialsSection';
import { AltitudeSection } from './components/AltitudeSection';
import { MountainStoriesSection } from './components/MountainStoriesSection';
import { ExpeditionMapSection } from './components/ExpeditionMapSection';
import { ChooseYourClimbSection } from './components/ChooseYourClimbSection';
import { ExpeditionCodeSection } from './components/ExpeditionCodeSection';
import { WeatherSection } from './components/WeatherSection';
import { RouteSection } from './components/RouteSection';
import { ExpeditionProgressTracker } from './components/ExpeditionProgressTracker';
import { ExpeditionAudio } from './components/ExpeditionAudio';

export default function App() {
  return (
    <main id="summit-landing" className="relative w-full bg-[#040608] min-h-screen text-stone-100 overflow-x-clip">
      <ExpeditionProgressTracker />
      <ExpeditionAudio />
      <HeroSection />
      <PeaksSection />
      <AscentSection />
      <ExpeditionJournalSection />
      <EssentialsSection />
      <AltitudeSection />
      <MountainStoriesSection />
      <ExpeditionMapSection />
      <ChooseYourClimbSection />
      <ExpeditionCodeSection />
      <WeatherSection />
      <RouteSection />
    </main>
  );
}
