import { ok } from "assert";


export async function getBooks(
  search = "",
  status = "All"
) {
  const response = await fetch(
    `http://localhost:3000/api/books?search=${search}&status=${status}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des livres");
  }

  return response.json();
}








export async function getBook(id:string) {
    console.log(id);
    
    const res=await fetch(`http://localhost:3000/api/books/${id}`,{
        cache:"no-store",

    })
    if(!res.ok){
        throw new Error("Livre introuvable")
    }
    return res.json()
    
}

export async function updateBook(id:string,data:any){

    const res=await fetch(`http://localhost:3000/api/books/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })

    if(!res.ok){
        throw new Error("Erreur lors de la modification du livre")
    }
     return res.json();
}




export async function deleteBook(id: string) {
  const res = await fetch(`http://localhost:3000/api/books/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la suppression");
  }

  return res.json();
}