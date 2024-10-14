type PaymentMethod = {
  id: string; // UUID
  active: boolean | null;
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  published: string | null; // TIMESTAMP
  status: string | null; // VARCHAR(255)
  stripe_data: string | null; // VARCHAR(255)
  type: string | null; // VARCHAR(255)
  updated_at: string | null; // TIMESTAMP
  updated_by_admin: string | null; // VARCHAR(255)
  user_id: string; // UUID
};
