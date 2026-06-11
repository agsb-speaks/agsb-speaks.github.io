import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://mjebfcbmeeqnrztbeumy.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZWJmY2JtZWVxbnJ6dGJldW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNjk4MzMsImV4cCI6MjA5Njc0NTgzM30.PFGZus1464Oc8HhVNAbd_m6mO5OrCjXahzX7dracYUw'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)