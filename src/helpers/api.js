const BASE = "https://henri-potier.techx.fr/books"

export let getAllBooks = async (method = "GET") => {
    let res = await fetch(BASE , {method})
    if(res.status === 200) return await res.json();
    throw Error(await res.json())
}

