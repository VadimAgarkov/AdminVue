type Instrument = {
  id: string; // UUID
  active: boolean | null;
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  deactivated_at: string | null; // TIMESTAMP
  health_details: string | null; // VARCHAR(255)
  manufacturer: string | null; // VARCHAR(255)
  model: string | null; // VARCHAR(255)
  published: string | null; // TIMESTAMP
  serial_number: string | null; // VARCHAR(255)
  status: string | null; // VARCHAR(255)
  updated_at: string | null; // TIMESTAMP
  updated_by_admin: string | null; // VARCHAR(255)
  current_slot_id: string | null; // UUID
  last_slot_id: string; // UUID
};
