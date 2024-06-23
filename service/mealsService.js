
const sql = require("better-sqlite3")
const db = sql("meals.db")

export const getMeals = async () => {
    await new Promise(res =>
        setTimeout(()=>
            res(), 5000)
        )
    console.log("querying")
    return db.prepare("SELECT * FROM MEALS").all()
}


export const getMeal =  (slug) => {
    return db.prepare("SELECT * FROM MEALS where slug= ?").get(slug)
}