export interface BranchInterface {
  id: number;
  name: string;
  address: string;
  slug: string;
  // Utilize for Map
  coordinates: {
    latitude: number;
    longitude: number;
  }[];
  phone1: string;
  phone2: string;
  // Time picker
  open_hour: string;
  close_hour: string;
  // Days
  open_days: string[];
  // Urls
  pictures: string[];
  // Percentage Format
  discount: number;
  description: string;
  fix_delivery: number;
  delivery_per_km: number;
  preparation_time: string;
}

export interface ResponseBranchesInterface {
  data: BranchInterface[];
}

export interface ResponseBranchInterface {
  data: BranchInterface;
}
