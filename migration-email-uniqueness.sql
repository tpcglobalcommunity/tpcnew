-- Email uniqueness constraint for profiles table
-- Prevents duplicate email registrations

ALTER TABLE profiles ADD CONSTRAINT profiles_email_unique UNIQUE (email);
