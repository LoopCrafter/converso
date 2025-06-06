"use server";
import { createSupabaseClient } from "../supabase";

export const getAllCompanions = async ({
  limit = 10,
  page = 1,
  subject,
  topic,
}: GetAllCompanions) => {
  const supabase = await createSupabaseClient();

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
};

export const getCompanionById = async (id: string) => {
  const supabase = await createSupabaseClient();
  const { data, error } = await supabase
    .from("companions")
    .select()
    .eq("id", id);
  if (error) {
    console.log(error);
  }

  return data?.[0];
};

export async function addToSessionHistory(userId: string, companionId: string) {
  const supabase = await createSupabaseClient();
  const { data, error } = await supabase
    .from("session_history")
    .insert({ companion_id: companionId, user_id: userId });

  if (error) throw new Error(error.message);
  return data;
}

export const getRecentSession = async (limit = 10) => {
  const supabase = await createSupabaseClient();
  const { data, error } = await supabase
    .from("session_history")
    .select("companions:companion_id (*)")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw new Error(error.message);
  return data.map(({ companions }) => companions);
};

export const getUserSessions = async (userId: string, limit = 10) => {
  const supabase = await createSupabaseClient();
  const { data, error } = await supabase
    .from("session_history")
    .select("companions:companion_id (*)")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw new Error(error.message);
  return data.map(({ companions }) => companions);
};
