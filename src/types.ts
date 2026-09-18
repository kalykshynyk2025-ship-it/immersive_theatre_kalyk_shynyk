export interface SlideData {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  shortName: string;
}

export interface MallZone {
  id: string;
  name: string;
  type: 'dead_zone' | 'anchor' | 'foodcourt' | 'entrance' | 'escalator';
  level: number;
  x: number;
  y: number;
  width: number;
  height: number;
  problem: string;
  solutionStage: string;
  gameTitle: string;
  region: string;
  tenantPromo: string;
  rulesHint?: string;
  deadZoneShortTitle?: string;
  deadZoneMetric?: string;
}

export interface ContactRequest {
  mallName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  preferredDate?: string;
  notes?: string;
}
