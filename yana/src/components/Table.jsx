import React, { useState, useEffect } from "react";

function Table() {
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          throw new Error("No access token found. Please log in.");
        }

        const response = await fetch("http://localhost:3000/admin/api/customers/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setCustomers(data.data);
        } else {
          console.error("Error fetching customer data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const results = customers
      .filter(customer => 
        customer.Name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(customer => 
        filter ? customer.Status.toLowerCase() === filter.toLowerCase() : true
      );

    setFilteredCustomers(results);
  }, [searchQuery, filter, customers]);

  const handleEditClick = (customerId) => {
    // Handle edit logic here (e.g., open a modal or redirect to an edit page)
    console.log("Edit customer with ID:", customerId);
  };

  return (
    <section className="mx-auto w-full max-w px-4 py-4 bg-white rounded-3xl">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-lg font-bold">All Customers</h2>
          <p className="mt-1 text-sm text-green-500 font-semibold">Active Customers</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="relative mb-4 md:mb-0">
            <input
              type="text"
              className="block w-full pl-4 pr-4 py-2 rounded-md border placeholder-gray-500 focus:outline-none"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <select
              className="rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-blue-50 focus:outline-none"
              aria-label="Filter table"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">Filter by...</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm text-gray-700 font-poppins font-thin">
                      <span>Customer Name</span>
                    </th>
                    <th scope="col" className="px-12 py-3.5 text-left text-sm text-gray-700 font-poppins font-thin">
                      MemberID
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm text-gray-700 font-poppins font-thin">
                      Phone Number
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm text-gray-700 font-poppins font-thin">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm text-gray-700 font-poppins font-thin">
                      Meals
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm  text-gray-700 font-poppins font-thin">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm text-gray-700 font-poppins font-thin">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredCustomers.length > 0 ? (
                    filteredCustomers.map((customer) => (
                      <tr key={customer.CustomerID}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm font-medium text-gray-800 font-poppins ">
                            {customer.Name}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm font-medium text-gray-800 font-poppins">
                            {customer.MedicaidID}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-800 font-poppins">
                          {customer.Phone}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-800 font-poppins">
                          {customer.Email ? customer.Email : "N/A"}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-800 font-poppins">
                          {customer.PreferredDeliveryTime ? customer.PreferredDeliveryTime : "N/A"}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <button
                            type="button"
                            className={`inline-flex items-center rounded-2xl px-2 py-1 text-xs font-semibold leading-5 ${
                              customer.Status === "Active"
                                ? "bg-green-200 text-green-800 hover:bg-green-200"
                                : "bg-red-200 text-red-800 hover:bg-red-200"
                            } focus:outline-none text-green-500 font-poppins`}
                          >
                            {customer.Status}
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <button
                            type="button"
                            className="bg-orange-400 inline-flex items-center rounded-2xl px-2 py-1 text-xs font-semibold leading-5 focus:outline-none font-poppins"
                          >
                            <svg
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              className="mr-2" // Adjust margin if needed
                            >
                              <rect x="0.752197" y="0.5" width="24" height="24" fill="url(#pattern0_1099_6032)" />
                              <defs>
                                <pattern id="pattern0_1099_6032" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use xlinkHref="#image0_1099_6032" transform="scale(0.0111111)" />
                                </pattern>
                                <image
                                  id="image0_1099_6032"
                                  width="90"
                                  height="90"
                                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAER0lEQVR4nO2dT4hVVRzHz5SmYtYmqCzQGF0Hk60qGkQLobAWFVhJWomgYDaEtgjaVa5koFaBK7dauRjRXZuiJsaZgYctNBeWTOPM6Mr3wOkTP95v4CHzxvfnnHN/597zgbd53HfuOV/OO/f8/pzfdS6TyWQymUwmk8lkMp0BPAg8D3wInAB+AKaAK8A80NDPvH43pdd8o7/ZJm10eLtqATwNfAKcA27TP7eAn4AjwFOuygDrgPeBi8Ai4bgLXADeA9a6qgA8rDPtb+LzL/Al8KgrK8Bq4DNgjuKRPoxIn1yZAF4CprHHZWCHSx1ZE4Fvgf+wi/RtFFjjUgTYDPxKOvwBbHEpIX9HT9u02Mi2cLtLAeBN4A7p0gDecZYBDgTeE8dCxvCxswjwhhoHZWEReNtZQtY1oE75aACvOAsAWxN98HXzgBwsWuQ1ui0qO+OF7rPVGKkKo0Wa1ZYtPt/IWF+OLfIqYJLqMR3VEaVeuKpyNKY/+SbV5aZoEEPoY0WP1AAjMdye/xQ9SgPckFBcSKH3Fj1CQ+wJKbQEUjNNxkKmBJTBM1fX58wT+jmmPo1uEQfakyGElryLMoi8a5mxHe+xvcMhhJbklpRpAK+3GdvjPbZ5JkSa1gIlFFkANvbY7oLX9DPNhSvVctEK8Hkf7T/nfKHJg2UVeVefQYt9PoWWrM5SLRcC8KqHQPJXzhfAj6RFI5LIfh+IiblE6xGWi1YmfAp9jTRoRJzJS1z1KbSFDFCLIguzPoXuxUStgshC3arQPwMHxXwFfk9wTQ4qtK+Iymlg4J7Y4/cJi+x96fjLU6c2L9P2Az2KbUFk7w9DH9u7ReChNu13K7YVkb1v7+Qcnw+2r3CPTsW2JLJ3g8WXCf4n8FgfYlsTWfjaqlOpJpGNFe41AHxnbAu3Eh9YdpNOdjmzLc7kJYasO/5rHc5sqzPZv+NfByNnqylgZj9rdCb7D2XpgORYMbHFNiyycMj5RuNqoc6o1FZaRowtF0vc7bbP3QxOqgRQtNgUL3K4BBodoJR9oEixsSFy8JSwtRHKP9TaiW1I5LBJjhGT0CclqeWe+75m6Ijdp0FF1gFviBRxmQG+EMsLOGUo728WWB9caBVbiopUlSNRRG5x2F+iekxHr1oDvJiPv0VCK7dUhZOxdG13RFmO75ad39pFh2KKPagH08vKAvCMswAwbMSQ8I24aHc6SwC7S1gY5S1nESmPY8iw6AeZMB85y2jJn5SXkbq5Ej/3Kf1zK9EH37BLCWAT8AvpMF54SZ8+99mjxi1I6dvJwvfJHs31SewhfXrBlQmajqij6mYsmlkNNq9yZQVYr4O8XoDAM1qo+xFXFWiGxd4Fzgc2dKTtMYnxVar0/HJIlQA9AXBW30bRL/Pa1qFgKQGpQzP9bAjYL5makg0kOcj6KpC5lteDzOl3E3qNXLtPf5tfD5LJZDKZTCaTyWQyrkP+Byfj0xVEmNiwAAAAAElFTkSuQmCC"
                                />
                              </defs>
                            </svg>
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-800" colSpan="7">
                        No customers found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Table;
