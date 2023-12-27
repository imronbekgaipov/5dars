import React from "react";
import { useFetch } from "../hooks/useFetch";
import InvoiseList from "../components/InvoiceList";
import InvoiceTop from "../components/InvoiceTop";

function Home() {
  const {
    data: invoices,
    isPending,
    error,
  } = useFetch("http://localhost:3000/Invoise");

  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      <InvoiceTop />
      {invoices && <InvoiseList invoices={invoices} />}
    </div>
  );
}

export default Home;
