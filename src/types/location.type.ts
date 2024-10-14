type LocationOfStation = {
  id: string; // UUID
  active: boolean | null;
  address_line: string | null; // VARCHAR(255)
  latitude: number | null;
  longitude: number | null;
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  description: string | null; // VARCHAR(255)
  published: string | null; // TIMESTAMP
  updated_at: string | null; // TIMESTAMP
  updated_by_admin: string | null; // VARCHAR(255)
};
