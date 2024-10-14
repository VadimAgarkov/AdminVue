type ReferralCode = {
  id: string; // UUID
  active: boolean;
  created_at: string | null; // TIMESTAMP
  created_by_admin: string | null; // VARCHAR(255)
  friend_referral_code: string | null; // VARCHAR(255)
  published: string | null; // TIMESTAMP
  referral_count: number | null;
  send_referal_code: boolean;
  updated_at: string | null; // TIMESTAMP
  updated_by_admin: string | null; // VARCHAR(255)
  user_referral_code: string; // VARCHAR(255)
  user_id: string | null; // UUID
};
