interface WorkingSpaceItem {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  region: string;
  // picture: string;
  __v: number;
}

interface WorkingSpaceJson {
  success: boolean;
  count: number;
  pagination: Object;
  data: WorkingSpaceItem[];
}

interface ReservationItem {
  id: string; // User ID
  name: string;
  email: string;
  workSpace: string;
  workSpaceId: string;
  bookDate: string;
}
