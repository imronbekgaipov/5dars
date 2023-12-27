import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Invoice() {
  const { id } = useParams();
  const url = "http://localhost:3000/Invoise/" + id;
  const { data: invoice, isPending, error } = useFetch(url);
  console.log(invoice);
  return (
    <div className="bg-pearl-white pt-5">
      {invoice && (
        <>
          <a className="text-xl" href="/">
            Go back
          </a>
          <div className="flex items-center gap-[136px] w-[327px] h-[91px] p-6 bg-[#fff] rounded-lg shadow-[0_10px_10px_-10px_rgba(72, 84, 159, 0.10)] mt-4">
            <h2>Status</h2>
            <button className="flex items-center gap-2 rounded-md py-3 px-8 bg-everlasting-ice md:flex">
              <img src="./assets/paid-touch.svg" width={8} height={8} alt="" />
              <span className="text-base text-dark-shamrock font-bold">
                {invoice.status}
              </span>
            </button>
          </div>
          <div className="w-[327px] h-[695px] bg-[#fff] rounded-lg shadow-[0_10px_10px_-10px_rgba(72, 84, 159, 0.10)] p-6">
            <div>
              <div className="mb-8">
                <h1 className="text-base text-khmer-curry font-bold">
                  <span className="text-true-lavender">#</span>
                  {invoice.id}
                </h1>
                <h4 className="text-true-lavender text-base font-medium mt-1">
                  {invoice.description}
                </h4>
              </div>
              <div className="text-true-lavender text-base font-medium mb-8">
                <p>{invoice.senderAddress.street}</p>
                <p>{invoice.senderAddress.city}</p>
                <p>{invoice.senderAddress.postCode}</p>
                <p>{invoice.senderAddress.country}</p>
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-10">
              <div>
                <li className="mb-8">
                  <h3 className="text-true-lavender text-base font-medium">
                    Invoice Date
                  </h3>
                  <h4 className="font-bold text-khmer-curry text-xl">
                    21 Aug 2021
                  </h4>
                </li>
                <li>
                  <h4 className="text-true-lavender text-base font-medium">
                    Payment Due
                  </h4>
                  <h5 className="font-bold text-khmer-curry text-xl">
                    20 Sep 2021
                  </h5>
                </li>
              </div>
              <li>
                <h5 className="mb-3 text-true-lavender text-base font-medium">
                  Bill to
                </h5>
                <h2 className="font-bold text-khmer-curry text-xl mb-2">
                  {invoice.clientName}
                </h2>
                <p className="text-true-lavender text-base font-medium">
                  {invoice.clientAddress.street}
                </p>
                <p className="text-true-lavender text-base font-medium">
                  {invoice.clientAddress.sity}
                </p>
                <p className="text-true-lavender text-base font-medium">
                  {invoice.clientAddress.postCode}
                </p>
                <p className="text-true-lavender text-base font-medium">
                  {invoice.clientAddress.country}
                </p>
              </li>
              <li>
                <h4 className="text-true-lavender text-base font-medium mb-3">
                  Sent to
                </h4>
                <h2 className="font-bold text-khmer-curry text-xl mb-10">
                  {invoice.clientEmail}
                </h2>
              </li>
            </ul>
            <div className="w-[279px] h-[148px] bg-wash-me rounded-tl-lg rounded-tr-lg p-6 mb-[56px]">
              <div className="flex items-center mb-6 gap-[82px]">
                <div>
                  <h4 className="font-bold text-khmer-curry text-xl">
                    {invoice.items[0].name}
                  </h4>
                  <p className="text-true-lavender text-base font-bold">
                    {invoice.items[0].quantity}x€
                    <span>{invoice.items[0].price}.00</span>
                  </p>
                </div>
                <p className="font-bold text-khmer-curry text-xl text-right">
                  €{invoice.items[0].total}
                </p>
              </div>
              {invoice.items > 0 && (
                <div className="flex items-center gap-[82px]">
                  <div>
                    <h4 className="font-bold text-khmer-curry text-xl">
                      {invoice.items[1].name}
                    </h4>
                    <p className="text-true-lavender text-base font-bold">
                      {invoice.items[1].quantity}x€
                      <span>{invoice.items[1].price}.00</span>
                    </p>
                  </div>
                  <p className="font-bold text-khmer-curry text-xl text-right">
                    €{invoice.items[1].total}
                  </p>
                </div>
              )}
            </div>
            <div className="bg-carbon-blue p-6 w-[279px] h-[80] rounded-bl-lg rounded-br-lg text-white flex items-center justify-between">
              <h4 className="font-medium leading-[18px] text-left">
                Grand Total
              </h4>
              <h1 className="text-xl leading-8 font-bold">
                {invoice.total}.00
              </h1>
            </div>
            <div className="flex items-center overflow-hidden gap-2 w-[375px] h-[91px] bg-[#fff] shadow-[0_10px_10px_-10px_rgba(72, 84, 159, 0.10)]">
              <button className="btn btn-ghost text-true-lavender font-bold text-base">
                Edit
              </button>
              <button className="btn btn-error text-[#fff] font-bold text-base">
                Delete
              </button>
              <button className="btn btn-primary text-[#fff] font-bold text-base">
                Mark as Paid
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Invoice;
