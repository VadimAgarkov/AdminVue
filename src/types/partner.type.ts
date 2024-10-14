type Partner = {
  id: string; // UUID
  account_details: string | null; // VARCHAR(255)
  active: boolean | null;
  contact_person: string | null; // VARCHAR(255)
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  deactivated_at: string | null; // TIMESTAMP
  email: string | null; // VARCHAR(255)
  name: string | null; // VARCHAR(255)
  phone: string | null; // VARCHAR(255)
  published: string | null; // TIMESTAMP
  status: string | null; // VARCHAR(255)
  updated_at: string | null; // TIMESTAMP
  updated_by_admin: string | null; // VARCHAR(255)
  address_id: string | null; // UUID
};
