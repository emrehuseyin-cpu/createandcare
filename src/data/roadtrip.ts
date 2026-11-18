export interface RoadTripStop {
  number: number;
  title: string;
  dateLabel: string;
  location: string;
  description: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  pastel: 'rose' | 'peach' | 'butter' | 'mint' | 'sky' | 'lilac';
}

export const ROAD_TRIP_STOPS: RoadTripStop[] = [
  {
    number: 1,
    title: 'Kick-off in Germany',
    dateLabel: '15–16 Sep 2026',
    location: 'Bonn, Germany',
    description:
      'Project coordinators from Integrational e.V. (Germany), Associação Ramifica (Portugal) and Modern Gelişim Derneği (Türkiye) align the 18-month roadmap, safeguarding rules, evaluation instruments and outreach schedule.',
    startDate: '2026-09-15',
    endDate: '2026-09-16',
    pastel: 'rose',
  },
  {
    number: 2,
    title: 'Training course in Madeira',
    dateLabel: '9–15 Nov 2026',
    location: 'Funchal, Madeira (Portugal)',
    description:
      '12 adult educators (4 per country) spend a week in Madeira practising and co-designing safe, non-clinical creative workshops using drawing, storytelling, drama and music.',
    startDate: '2026-11-09',
    endDate: '2026-11-15',
    pastel: 'peach',
  },
  {
    number: 3,
    title: 'Three local workshops',
    dateLabel: 'Bonn 18 Jan, Madeira 19 Jan, Eskişehir 20 Jan 2027',
    location: 'Bonn · Madeira · Eskişehir',
    description:
      'One-day creative adult education workshops for 60 adult learners aged 25+ (20 per city, at least half with fewer opportunities). Free to attend, no art skills required.',
    startDate: '2027-01-18',
    endDate: '2027-01-20',
    pastel: 'mint',
  },
  {
    number: 4,
    title: 'Multicultural online hub',
    dateLabel: '10 Feb 2027',
    location: 'Online (Germany · Portugal · Türkiye)',
    description:
      'Learners and facilitators from all three countries connect online to share artworks, stories and reflections across borders in a facilitated session.',
    startDate: '2027-02-10',
    endDate: '2027-02-10',
    pastel: 'sky',
  },
  {
    number: 5,
    title: 'Methods Manual (4 chapters)',
    dateLabel: '1 Mar – 22 Apr 2027',
    location: 'Open-access PDF in English',
    description:
      'Co-authoring and publishing our practical 4-chapter Methods Manual covering drawing, storytelling, drama and music activities for adult mental well-being and inclusion.',
    startDate: '2027-03-01',
    endDate: '2027-04-22',
    pastel: 'lilac',
  },
  {
    number: 6,
    title: 'Four awareness campaigns',
    dateLabel: 'May – Sep 2027',
    location: 'Local & online across 3 countries',
    description:
      'Four thematic awareness campaigns challenging mental-health stigma and isolation among adults, complete with downloadable social and poster packs.',
    startDate: '2027-05-01',
    endDate: '2027-09-30',
    pastel: 'rose',
  },
  {
    number: 7,
    title: 'Three exhibitions (3 weeks each) + VR gallery',
    dateLabel: 'Oct 2027 – Jan 2028',
    location: 'Bonn · Madeira · Eskişehir · Artsteps VR',
    description:
      'Three-week community exhibitions in each partner city showcasing consenting learners’ works alongside our permanent 3D virtual exhibition on Artsteps.',
    startDate: '2027-10-01',
    endDate: '2028-01-31',
    pastel: 'peach',
  },
  {
    number: 8,
    title: 'Final conferences in three countries + final meeting in Eskişehir',
    dateLabel: 'Feb 2028',
    location: 'Bonn · Madeira · Eskişehir',
    description:
      'Live method demonstrations, publication of pre/post evaluation findings, local multiplier conferences in all three countries and final project meeting in Eskişehir.',
    startDate: '2028-02-01',
    endDate: '2028-02-29',
    pastel: 'mint',
  },
];

export type StopStatus = 'done' | 'current' | 'future';

export interface ComputedRoadTripStop extends RoadTripStop {
  status: StopStatus;
}

/**
 * Computes past ("done"), current ("we are here"), and future stops from the build date.
 * If buildDate falls between two stops, the next upcoming stop (or the stop whose window
 * just started/is closest in the active timeline) is marked "current" so there is always
 * an active "we are here" stop during the project lifetime.
 */
export function getComputedRoadTrip(buildDate: Date = new Date()): ComputedRoadTripStop[] {
  const isoToday = buildDate.toISOString().slice(0, 10);

  // Determine the index of the current stop:
  // First stop whose endDate >= isoToday is the active/current milestone in the road trip,
  // unless we're already past all stops.
  let currentIndex = ROAD_TRIP_STOPS.findIndex((stop) => stop.endDate >= isoToday);

  return ROAD_TRIP_STOPS.map((stop, idx) => {
    let status: StopStatus;
    if (currentIndex === -1) {
      status = 'done';
    } else if (idx < currentIndex) {
      status = 'done';
    } else if (idx === currentIndex) {
      status = 'current';
    } else {
      status = 'future';
    }
    return {
      ...stop,
      status,
    };
  });
}
