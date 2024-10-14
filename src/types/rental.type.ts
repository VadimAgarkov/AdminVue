type Rental = {
  id: string; // UUID
  active: boolean | null;
  slosed_at: string | null; // TIMESTAMP
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  open_at: string | null; // TIMESTAMP
  published: string | null; // TIMESTAMP
  status: string | null; // VARCHAR(255)
  updated_at: string | null; // TIMESTAMP
  updated_by_id: string | null; // VARCHAR(255)
  billing_item_id: string | null; // UUID
  vending_station_end_id: string | null; // UUID
  instrument_id: string; // UUID
  vending_station_start_id: string | null; // UUID
  user_id: string; // UUID
  user_subscription_id: string; // UUID
};
