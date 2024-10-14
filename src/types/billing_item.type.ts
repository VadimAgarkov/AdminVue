type BillingItem = {
  id: string; // UUID
  active: boolean | null;
  amount: number | null;
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  discount: number | null; // FLOAT
  published: string | null; // TIMESTAMP
  referral_points: number | null;
  status: string | null; // VARCHAR(255)
  updated_at: string | null; // TIMESTAMP
  updated_by_admin: string | null; // VARCHAR(255)
  payment_method_id: string; // UUID
  rentail_id: string; // UUID
  user_id: string; // UUID
};
