export type Accommodation = {
  id: number;
  sort_order: number;
  name: string;
  type: {
    id: number;
    name: string;
  };
  description: string;
  address_1: string;
  address_2: string;
  address_3: string;
  postcode: string;
  country: {
    id: number;
    name: string;
  };
  resort: {
    id: number;
    name: string;
  };
  location: {
    id: number;
    location_long: number;
    location_lat: number;
    name: string;
  };
  images: {
    alt: string;
    title: string;
    filename: string;
  }[];
  rating: {
    id: number;
    label: string;
  };
  facilities: {
    id: number;
    label: string;
  }[];
  rooms: {
    id: number;
    sort_order: number;
    type_id: number;
    max_occupancy: number;
    min_occupancy: number;
    number_of_nights: number;
    type: string;
    name: string;
    facilities: RoomFacilities[];
    price: RoomPrice;
  }[];
};

type RoomFacilities = {
  id: number;
  label: string;
};

type RoomPrice = {
  value: number;
  currency_id: number;
  currency_iso_code: string;
  currency_exponent: number;
  price: string;
};

export type AccommodationCardProps = {
  accommodation: Accommodation;
};

export type AccommodationDetailsProps = {
  accommodation: Accommodation;
};

export type AccommodationAvailabilityProps = {
  roomId: number;
};

export type PayloadType = {
  accommodation: Accommodation[];
  error: string | null;
  loading: boolean;
  isSortedBy: string;
};
