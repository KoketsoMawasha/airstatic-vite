import React from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://vxgjbmpylrvarxxmosxd.supabase.co'
const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4Z2pibXB5bHJ2YXJ4eG1vc3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzNzEyOTIsImV4cCI6MjAxOTk0NzI5Mn0.MTNFMskC6Gug335OOVSXzFKG5-ndIcjlKfZnJ0nhpDA'
const supabase = createClient(supabaseUrl, supabaseApiKey);


export default supabase