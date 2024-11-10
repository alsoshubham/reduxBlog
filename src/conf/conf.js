const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBuckteId: String(import.meta.env.VITE_BUCKET_ID),
}
export default conf


// conf humne isliya kiya taaki .env vaaali file ki values string format me aa jaaye aur humein
// baar baar dependencies me na jana pde aur optimised format me ek value as an output aaye