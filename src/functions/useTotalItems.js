import axios from "axios"
import { useEffect, useState } from "react";

export const useTotalItems = () => {
    const [items, setItems] = useState({})

    useEffect(() => {
        axios.get("http://localhost:3000/total-items")
        .then(res => setItems(res.data.totalItems));
    }, [])

    return items;
}