type BonusHistory = {
  id: string; // UUID
  active: boolean;
  bonus_count: number;
  bonus_date: string; // date
  type: string | null; // VARCHAR(255)
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  published: string | null; // TIMESTAMP
  updated_at: string | null; // TIMESTAMP
  updated_by_admin: string | null; // VARCHAR(255)
  user_id: string; // UUID
};
