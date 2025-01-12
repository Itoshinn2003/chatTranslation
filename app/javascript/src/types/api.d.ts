type postResponse = {
    created_at: string,
    text: string,
    user: {
        name: string | null,
        profile_id: string,
    }
}

type profileResponse = {
    user_id: string,
    name: string | null,
    language: string,
    sentence: string | null,
 }

type updateProfileApi = {
   id: string | null;
   name: string | null;
   sentence: string | null;
}