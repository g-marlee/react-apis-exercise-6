import { useEffect, useState } from "react";
import { fetchAllQuotes } from "../services/quotes.services";
import { Quote } from "../types";

export function Quotes() {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
      getAllQuotes()
    }, []);
  
    function getAllQuotes() {
      fetchAllQuotes().then(response => setQuotes(response.data));
    }

    return (
        <>
            <h1>Quotes</h1>
            <ul>
                {quotes.map(quote => (
                    <li>{quote.text} - {quote.author}</li>
                ))}
            </ul>
        </>
    )
}