type Image = {
  id: string; // UUID
  active: boolean | null;
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  published: string | null; // TIMESTAMP
  updated_at: string | null; // TIMESTAMP
  updated_by_admin: string | null; // VARCHAR(255)
  url: string | null; // VARCHAR(255)
  location_id: string | null; // UUID
};
