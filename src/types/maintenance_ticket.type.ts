type MaintenanceTicket = {
  id: string; // UUID
  active: boolean | null;
  additional_info: string | null; // VARCHAR(255)
  closed_at: string | null; // TIMESTAMP
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  description: string | null; // VARCHAR(255)
  published: string | null; // TIMESTAMP
  status: string | null; // VARCHAR(255)
  type: string | null; // VARCHAR(255)
  updated_at: string | null; // TIMESTAMP
  updated_by_admin: string | null; // VARCHAR(255)
  user_id: string; // UUID
  created_by_id: string; // UUID
};
