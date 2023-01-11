
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ofimoueuhseroyyjnxlw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9maW1vdWV1aHNlcm95eWpueGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyODEzODEsImV4cCI6MTk4ODg1NzM4MX0.WZfY_zrgUa2uhkAolm6zEW9P3w-dCcSiMWkAxeyxcxU"
export const supabase = createClient(supabaseUrl, supabaseKey)



export async function fetchData(val) {
  if(val === 0){
    console.warn("ranNum created")
    const ranNum = Math.floor(Math.random()*4) + 1 ;
    val = ranNum;
    fetchData()
  }
  if(val === 1){
    let { data, error } = await supabase
    .from('randoo')
    .select('nature')
    return data;
  }
  if(val === 2){
    let { data, error } = await supabase
    .from('randoo')
    .select('art')
    return data;
  }
  if(val === 3){
    let { data, error } = await supabase
    .from('randoo')
    .select('tech')
    return data;
  }
  if(val === 4){
    let { data, error } = await supabase
    .from('randoo')
    .select('society')
    return data;
  }
  


}