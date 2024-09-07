"use server"

import db from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function addTask(formData) {

    await db.task.create({
        data: {
            title: formData.get("title")
        }
    })

    revalidatePath('/')
}

export async function deleteTask(formData) {

    await db.task.delete({
        where: {
            id: parseInt(formData.get("id")),
        },
    })

    revalidatePath('/')
}
