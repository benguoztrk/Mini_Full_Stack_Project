import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://yqtyqijpubxliiyoadmd.supabase.co/rest/v1/fact";

// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdHlxaWpwdWJ4bGlpeW9hZG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NzIxNzAsImV4cCI6MjAxNTU0ODE3MH0.iwAZqG3Ju0Oga8XRdE5qKa_Pkj3t40-fyHLf38ZfrHs";

// const supabase = createClient(supabaseUrl, supabaseKey);

const supabaseUrl = "https://yqtyqijpubxliiyoadmd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdHlxaWpwdWJ4bGlpeW9hZG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NzIxNzAsImV4cCI6MjAxNTU0ODE3MH0.iwAZqG3Ju0Oga8XRdE5qKa_Pkj3t40-fyHLf38ZfrHs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
