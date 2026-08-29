import React from 'react';

const Section = ({ id, index, title, children }: { id:string; index:string; title:string; children?:React.ReactNode }) => (
  <section id={id} className="relative w-full min-h-[70vh] bg-[#040608] text-stone-100 px-4 sm:px-8 lg:px-16 py-20 sm:py-28 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-xs tracking-[.3em] uppercase text-sky-300 mb-5">{index} / EXPEDITION</div>
      <h2 className="font-display text-5xl sm:text-7xl lg:text-9xl uppercase leading-[.9] text-white">{title}</h2>
      <div className="mt-8 max-w-3xl text-stone-300/80 leading-relaxed">{children || 'A field record from the SUMMIT expedition.'}</div>
    </div>
  </section>
);

export const AscentSection=()=> <Section id="ascent-section" index="02" title="THE ASCENT">Altitude changes everything. Every stage demands preparation, patience, and respect for the mountain.</Section>;
export const ExpeditionJournalSection=()=> <Section id="journal-section" index="03" title="THE JOURNAL">Notes from the route, recorded between weather windows and long days above the treeline.</Section>;
export const EssentialsSection=()=> <Section id="essentials-section" index="04" title="ESSENTIALS">Equipment is not decoration at altitude. The right system keeps an expedition moving when conditions turn.</Section>;
export const AltitudeSection=()=> <Section id="altitude-section" index="05" title="THE ALTITUDE">The higher you go, the quieter it gets. Air thins, distance changes, and the horizon opens.</Section>;
export const MountainStoriesSection=()=> <Section id="mountain-stories-section" index="06" title="STORIES">Four mountains. Four environments. Thousands of small decisions between base camp and the summit.</Section>;
export const ExpeditionMapSection=()=> <Section id="expedition-map-section" index="07" title="THE MAP">A route is more than a line on a map. It is terrain, weather, timing, and contingency.</Section>;
export const ChooseYourClimbSection=()=> <Section id="choose-your-climb-section" index="08" title="CHOOSE YOUR CLIMB">Choose a route that matches the conditions, your preparation, and the objective.</Section>;
export const ExpeditionCodeSection=()=> <Section id="expedition-code-section" index="09" title="EXPEDITION CODE">Leave no trace. Respect the terrain. Know when to turn back.</Section>;
export const WeatherSection=()=> <Section id="weather-section" index="10" title="THE WEATHER">Mountains make their own weather. Forecasts inform the plan; conditions decide it.</Section>;
export const RouteSection=()=> <Section id="route-section" index="11" title="THE ROUTE">The final route is built one safe decision at a time.</Section>;
