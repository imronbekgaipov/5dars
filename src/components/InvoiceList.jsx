import React from "react";

function InvoiceList({ invoices }) {
  return (
    <div>
      <ul className="px-6 mt-8 md:mt-0 mb-[105px] md:px-0">
        {invoices &&
          invoices.map((invoice) => {
            const { id, status } = invoice;
            console.log(invoice);
            return (
              <li
                key={id}
                className="p-6 rounded-lg bg-white custom-shadow mb-4 last:mb-0"
              >
                <div className="flex justify-between  mb-6">
                  <h2 className="text-RUINED-SMORES text-xs font-bold">
                    <span className="text-TRUE-LAVENDER text-xs font-bold">
                      #
                    </span>
                    RT3080
                  </h2>
                  <h3 className="text-xs font-medium text-TRUE-LAVENDER">
                    Jensen Huang
                  </h3>
                </div>
                <div class="flex items-center justify-between">
                  <div class="">
                    <p class="mb-2 text-xs font-medium text-TRUE-LAVENDER">
                      Due 19 Aug 2021
                    </p>
                    <p class="text-RUINED-SMORES text-base font-bold">
                      $1,800.90
                    </p>
                  </div>
                  <div class="flex items-center">
                    <div class="">
                      <button
                        className={` rounded-md bg-opacity-5   ${
                          status === "paid"
                            ? "bg-[#33D69F]"
                            : status === "pending"
                            ? "bg-[#FF8F00]"
                            : status === "draft"
                            ? "bg-[#373B53]"
                            : ""
                        } `}
                      >
                        <div className="flex justify-center items-center w-[104px] py-3 px-[29px] gap-2">
                          <span
                            className={`paid_oval ${
                              status === "paid"
                                ? "bg-[#33d69f]"
                                : status === "pending"
                                ? "bg-[#FF8F00]"
                                : status === "draft"
                                ? "bg-[#373B53]"
                                : ""
                            }`}
                          ></span>
                          <span
                            className={`text-xs font-semibold ${
                              status === "paid"
                                ? "text-[#33d69f]"
                                : status === "pending"
                                ? "text-[#FF8F00]"
                                : status === "draft"
                                ? "text-[#373B53]"
                                : ""
                            }`}
                          >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </span>
                        </div>
                      </button>
                    </div>
                    <svg
                      className="hidden md:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L1 9"
                        stroke="#7C5DFA"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default InvoiceList;
