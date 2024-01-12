import React from "react";
import { useFetch } from "../hooks/useFetch";

import InvoiceList from "../components/InvoiceList";
import Header from "../components/Header";

function Home() {
  const { isPending, error, data } = useFetch("http://localhost:3000/data");
  return (
    <div className="w-full mx-auto">
      <Header />
      <InvoiceList invoices={data} />
    </div>
  );
}

export default Home;
