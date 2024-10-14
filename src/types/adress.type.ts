export type Address = {
  id: string; // UUID
  active: boolean | null;
  address_line: string | null; // VARCHAR(255)
  city: string | null; // VARCHAR(255)
  country: string | null; // VARCHAR(255)
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  postal_code: number | null;
  published: string | null; // TIMESTAMP
  updated_at: string | null; // TIMESTAMP
  updated_by_admin: string | null; // VARCHAR(255)
};
