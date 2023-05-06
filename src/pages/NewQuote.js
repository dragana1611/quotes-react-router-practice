import React from "react";
import { useHistory } from "react-router-dom"; //gives us a history object
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes"); // push(path) allowes the user to go back
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
