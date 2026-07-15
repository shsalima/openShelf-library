

export async function getBooks(){
    const response= await fetch("http://localhost:3000/api/books",{
        cache:"no-store",


    })
    if(!response.ok){
        throw new Error("Erreur lors du chargement des livres")
    }
    return response.json()
}