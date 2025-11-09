import { Client, ID, Databases, Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client()
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID);

//Creating database instance wo wrok with collections
const database = new Databases(client);

//Function to track search activity and store to Appwrite
export const updateSearchCount = async (searchTerm, movie) => {
  try {

    //Step:1 Check if this search term already exisits in database
    const result = await database.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.equal("searchTerm", searchTerm)] // find document where searchTerm matches
    );

    //Step 2: If docuemnt exists, update count
    if (result.documents.length > 0) {
      const doc = result.documents[0];  //First matched document

      await database.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        doc.$id,     //Update this exact document
        {
          count: doc.count + 1, //Increase the count by 1
        }
      );
    } else {
        //Step 3: If document doest not exit, create new record
      await database.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(), //Generate unique document id
        {
          searchTerm, //Store searched text 
          count: 1, //Initialize with count 1
          movie_id: movie.id, //Movie TMDB ID
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }
      );
    }
  } catch (error) {
    console.error("Appwrite Error:", error);
  }
};

export const getTrendingMovies = async()=> {
    try{
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5), //Get only top 5 documents
            Query.orderDesc("count") //sort by the count feild in descending order

        ])
        return result.documents
    }catch(error){
        console.log(error)
    }
}