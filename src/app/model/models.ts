export interface WorkingHours {
  start: string;
  end: string;
}

export interface Day {
  name: string;
  workingHours: WorkingHours[];
}

export interface OpeningHours {
  listOfDays: Day[];
}

export interface BusinessEntry {
  displayedWhat: number;
  displayedWhere: string;
  openingHours: OpeningHours;
}
