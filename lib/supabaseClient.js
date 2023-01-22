import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://jdhpnhssgoyzarfamnhh.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkaHBuaHNzZ295emFyZmFtbmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzODY1NjYsImV4cCI6MTk4OTk2MjU2Nn0.76Y8-nr5JZk0__sdeYmrMSLPmMdURHaKJH0D8njc8vU'
)
