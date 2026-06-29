"use client";

import CardDay from "./CardDay";
import CardEmpty from "./CardEmpty";

export default function WeeklyGrid() {
  return (
    <div className="flex overflow-x-auto pb-6 -mx-page-mobile px-page-mobile md:mx-0 md:px-0 gap-6 snap-x snap-mandatory">
      <CardDay />
      <CardEmpty />
      <CardEmpty />
      <CardEmpty />
      <CardEmpty />
      <CardEmpty />
      <CardEmpty />
    </div>
  );
}
