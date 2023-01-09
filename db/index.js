
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ofimoueuhseroyyjnxlw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9maW1vdWV1aHNlcm95eWpueGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyODEzODEsImV4cCI6MTk4ODg1NzM4MX0.WZfY_zrgUa2uhkAolm6zEW9P3w-dCcSiMWkAxeyxcxU"
export const supabase = createClient(supabaseUrl, supabaseKey)