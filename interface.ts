interface WorkingSpaceItem {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  region: string;
  picture: string;
  __v: number;
}

interface WorkingSpaceJson {
  success: boolean;
  count: number;
  pagination: Object;
  data: WorkingSpaceItem[];
}

interface workingReserv {
  _id : string;
  name : string ;
  province : string ;
  tel : string;
  id : string;
}

interface ReservationJson {
  success: boolean;
  count: number;

  data: ReservationItem[];
}

interface ReservationItem {
  _id?: string;
  user?: string;
  userId: string; // User ID
  name: string;
  email: string;
  workingSpace? : workingReserv;
  workSpace: Object;
  workSpaceId: string;
  apptDate: string;
}
