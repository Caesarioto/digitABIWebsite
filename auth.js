<!-- auth.js -->
<script type="module">
  import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

  // TODO: eintragen
  export const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
  export const SUPABASE_ANON_KEY = "YOUR-ANON-KEY";

  export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // Session abrufen (Hilfsfunktion)
  export async function getSession() {
    const { data } = await supabase.auth.getSession();
    return data.session ?? null;
  }
</script>
