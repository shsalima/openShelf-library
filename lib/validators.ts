
import z from "zod";



export const BookSchema=z.object({
    title:z
        .string()
        .min(3,"Le titre doit contenir au moins 3 caractères"),
    author:z
        .string()
        .min(3,"L'auteur est obligatoire"),
     isbn: z
        .string()
        .min(1, "L'ISBN est obligatoire"),

    category: z
        .string()
        .min(1, "La catégorie est obligatoire"),
    publicationYear:z.number({
        error:"L'année doit être nombre",
    }),
    description:z
        .string()
        .min(10,"La description doit contenir au moins 10 caractères"),

    available:z.boolean().optional()



})