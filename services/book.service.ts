

export async function getBooks(){
    const response= await fetch("http://localhost:3000/api/books",{
        cache:"no-store",


    })
    if(!response.ok){
        throw new Error("Erreur lors du chargement des livres")
    }
    return response.json()
}







export async function getBook(id:string) {
    const res=await fetch(`http://localhost:3000/api/books/${id}`,{
        cache:"no-store",

    })
    if(!res.ok){
        throw new Error("Livre introuvable")
    }
    return res.json()
    
}