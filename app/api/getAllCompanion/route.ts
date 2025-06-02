import { createSupabaseClient } from "@/lib/supabase";

export const Post = async (req: Request) => {
  const supabase = await createSupabaseClient();
  try {
    const body = await req.json();
    const { page = 1, limit = 10, subject, topic } = body;
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    let query = supabase.from("companions").select();
    if (subject && topic) {
      query = query
        .ilike("subject", `%${subject}%`)
        .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
    } else if (subject) {
      query = query.ilike("subject", `%${subject}%`);
    } else if (topic) {
      query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
    }
    query = query.range((page - 1) * limit, page * limit - 1);

    const { data: companions, error } = await query;

    if (error) throw new Error(error.message);

    return companions;
  } catch (e) {
    console.log(e);
  }
};
