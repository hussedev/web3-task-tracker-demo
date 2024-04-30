import { useContext } from "react";
import { TaskTrackerContext } from "./taskTrackerContext";

export const useTaskTracker = () => {
  const context = useContext(TaskTrackerContext);

  if (context === null) throw new Error("useTaskTracker should be used within TaskTrackerProvider");

  return context;
};
