import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for database tables (extend as you build out Supabase)
export type BookingInquiry = {
  id?: string
  name: string
  email: string
  phone?: string
  destination: string
  travel_date?: string
  guests?: number
  message?: string
  created_at?: string
}

export type ContactMessage = {
  id?: string
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  created_at?: string
}
