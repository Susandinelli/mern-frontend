import { SundayPlanner } from "./SundayPlanner";
import { MondayPlanner } from "./MondayPlanner";
import { TuesdayPlanner } from "./TuesdayPlanner";
import { WednesdayPlanner } from "./WednesdayPlanner";
import { ThursdayPlanner } from "./ThursdayPlanner";
import { FridayPlanner } from "./FridayPlanner";
import { SaturdayPlanner } from "./SaturdayPlanner";

export default function Planner() {
  return (
    <>
      <SundayPlanner />
      <MondayPlanner />
      <TuesdayPlanner />
      <WednesdayPlanner />
      <ThursdayPlanner />
      <FridayPlanner />
      <SaturdayPlanner />
    </>
  );
}
