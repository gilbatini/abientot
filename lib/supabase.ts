import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for database tables
export type BookingInquiry = {
  id?: string
  name: string
  email: string
  phone?: string
  destination: string
  travel_date?: string
  guests?: number
  message?: string
  status?: 'new' | 'contacted' | 'confirmed' | 'cancelled'
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

export type Package = {
  id?: string
  title: string
  destination: string
  duration: string
  group_size?: string
  price: string
  description?: string
  image_url?: string
  includes?: string[]
  tag?: string
  rating?: number
  published?: boolean
  created_at?: string
}
