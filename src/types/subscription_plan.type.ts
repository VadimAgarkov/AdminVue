type SubscriptionPlan = {
  id: string; // UUID
  active: boolean | null;
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  deactivated_at: string | null; // TIMESTAMP
  monthly_price: number | null;
  plan_id: string | null; // VARCHAR(255)
  published: string | null; // TIMESTAMP
  status: string | null; // VARCHAR(255)
  subscription_title: string | null; // VARCHAR(255)
  updated_at: string | null; // TIMESTAMP
  updated_by_admin: string | null; // VARCHAR(255)
  vending_station_id: string | null; // UUID
};
