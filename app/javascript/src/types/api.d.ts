type postResponse = {
    created_at: string,
    text: string,
    user: {
        name: string | null,
        user_id: string,
        id: number,
    }
}

type profileResponse = {
    user_id: string,
    name: string | null,
    language: string,
    sentence: string | null,
 }
 type userResponse = {
    id: string,
    name: string,
    user_id: string,
    sentence: string | null,
    posts: {
        created_at: string,
        text: string
    }
 }

type updateProfileApi = {
   id: string | null;
   name: string | null;
   sentence: string | null;
}