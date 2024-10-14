export type User = {
  id: string; // UUID
  active: boolean | null;
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  deactivated_at: string | null; // TIMESTAMP
  email: string | null; // VARCHAR(255)
  password: string | null; // VARCHAR(255)
  phone: string | null; // VARCHAR(255)
  published: string | null; // TIMESTAMP
  role_id: string; // UUID
  subscription_plan_id: string; // UUID
  username: string | null; // VARCHAR(255)
  wallet_amount: number | null;
  referral_code_id: string | null; // UUID
};
