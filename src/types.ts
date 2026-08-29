export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ExpeditionMeta {
  code: string;
  region: string;
  elevation: string;
  coordinates?: string;
  temp?: string;
}

export interface PeakDetail {
  name: string;
  height: string;
  range: string;
  firstAscent: string;
  route: string;
}
