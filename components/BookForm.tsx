"use client";

import { useRouter } from "next/navigation";
import { title } from "process";
import React, { useState } from "react";

export default function BookForm() {
    const router=useRouter()

    const [formData,setFormData]=useState({
         title: "",
        author: "",
        isbn: "",
        category: "",
        publicationYear: "",
        description: "",
        available: true,

    })

    const handleChange=(
        e:React.ChangeEvent<
           HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    )=>{
        const {name,value}= e.target

        setFormData({
            ...formData,
        [name]:
            name === "available"
               ? value ==="true"
               : value,

        })
    }


    const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
            const response=await fetch("/api/books",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    ...formData,
                    publicationYear:Number(formData.publicationYear)

                }),

            })
            if(!response.ok){
                throw new Error("Erreur lors de l'ajout du livre")
            }
            router.push("/")
            router.refresh()
        }catch (error) {
    console.log(error);
    alert("Erreur lors de l'ajout du livre");
  }
    }


  return (
    <div className="lg:col-span-2">
      <div className="bg-[#081522] border border-[#2F4157] rounded-lg p-10">

       

        <h2 className="text-4xl font-serif font-semibold text-white">
          Informations du Livre
        </h2>

        <p className="text-slate-400 mt-2 mb-10">
          Veuillez remplir les détails précis pour assurer le bon référencement.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Titre du livre <span className="text-orange-300">*</span>
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="ex: L'Art de la Guerre"
              className="w-full h-12 px-4 rounded-md bg-[#1A283A] border border-[#34465B] text-white placeholder:text-slate-500 focus:outline-none focus:border-[#F7C48B]"
            />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>

              <label className="block text-sm font-medium text-white mb-2">
                Auteur <span className="text-orange-300">*</span>
              </label>

              <input
                type="text"
                 name="author"
                value={formData.author}
                onChange={handleChange}

                placeholder="ex: Sun Tzu"
                className="w-full h-12 px-4 rounded-md bg-[#1A283A] border border-[#34465B] text-white placeholder:text-slate-500 focus:outline-none focus:border-[#F7C48B]"
              />

            </div>

            <div>

              <label className="block text-sm font-medium text-white mb-2">
                ISBN
              </label>

              <input
                type="text"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                placeholder="ex: 978-3-16-148410-0"
                className="w-full h-12 px-4 rounded-md bg-[#1A283A] border border-[#34465B] text-white placeholder:text-slate-500 focus:outline-none focus:border-[#F7C48B]"
              />

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>

              <label className="block text-sm font-medium text-white mb-2">
                Catégorie <span className="text-orange-300">*</span>
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-md bg-[#1A283A] border border-[#34465B] text-slate-400 focus:outline-none focus:border-[#F7C48B]"
              >
                <option>Sélectionner une catégorie</option>
                <option>Roman</option>
                <option>Science</option>
                <option>Informatique</option>
                <option>Histoire</option>
                <option>Business</option>
              </select>

            </div>

            <div>

              <label className="block text-sm font-medium text-white mb-2">
                Année de publication
              </label>

              <input
                type="number"
                name="publicationYear"
                value={formData.publicationYear}
                onChange={handleChange}
                placeholder="ex: 2024"
                className="w-full h-12 px-4 rounded-md bg-[#1A283A] border border-[#34465B] text-white placeholder:text-slate-500 focus:outline-none focus:border-[#F7C48B]"
              />

            </div>

          </div>

          <div>

            <label className="block text-sm font-medium text-white mb-2">
              Description
            </label>

            <textarea
              rows={6}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Résumé bref de l'ouvrage..."
              className="w-full p-4 rounded-md bg-[#1A283A] border border-[#34465B] text-white placeholder:text-slate-500 resize-none focus:outline-none focus:border-[#F7C48B]"
            ></textarea>

          </div>


          <div>

            <label className="block text-sm font-medium text-white mb-2">
              Disponibilité
            </label>

            <select
                name="available"
                value={String(formData.available)}
                onChange={handleChange}
              className="w-full h-12 px-4 rounded-md bg-[#1A283A] border border-[#34465B] text-white focus:outline-none focus:border-[#F7C48B]"
            >
              <option value="true">Disponible</option>
              <option value="false">Emprunté</option>
            </select>

          </div>


          <div className="border-t border-[#2F4157] pt-8">

            <div className="flex justify-end gap-4">

              <button
                type="button"
                className="px-6 py-3 rounded-lg border border-[#34465B] text-slate-300 hover:bg-[#1A283A] transition"
              >
                Annuler
              </button>

              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-[#F7C48B] text-slate-900 font-semibold hover:bg-[#f5b976] transition"
              >
                Ajouter le livre
              </button>

            </div>

          </div>
          
        </form>

      </div>
    </div>
  );
}