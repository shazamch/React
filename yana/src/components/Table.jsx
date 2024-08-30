import React from "react";

function Table() {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"></div>
      <div className="mt-6 flex flex-col over">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 bg-white rounded-xl">
          <h1 className="px-4 text-lg">All Customers</h1>
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                    >
                      <span>Name</span>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-4 py-3.5">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {/* Existing Row */}
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            John Doe
                          </div>
                          <div className="text-sm text-gray-500">john@devui.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">Front-end Developer</div>
                      <div className="text-sm text-gray-500">Engineering</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      Developer
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-center">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        Edit
                      </a>
                    </td>
                  </tr>
                  
                  {/* New Row 1 */}
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Jane Doe
                          </div>
                          <div className="text-sm text-gray-500">jane@devui.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">Back-end Developer</div>
                      <div className="text-sm text-gray-500">Engineering</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      CTO
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        Edit
                      </a>
                    </td>
                  </tr>
                  
                  {/* New Row 2 */}
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Alice Smith
                          </div>
                          <div className="text-sm text-gray-500">alice@devui.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">UI/UX Designer</div>
                      <div className="text-sm text-gray-500">Design</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      Designer
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        Edit
                      </a>
                    </td>
                  </tr>

                  {/* New Row 3 */}
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Bob Johnson
                          </div>
                          <div className="text-sm text-gray-500">bob@devui.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">Product Manager</div>
                      <div className="text-sm text-gray-500">Product</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                        Inactive
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      Manager
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        Edit
                      </a>
                    </td>
                  </tr>
                {/* New Row*/}
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Alice Smith
                          </div>
                          <div className="text-sm text-gray-500">alice@devui.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">UI/UX Designer</div>
                      <div className="text-sm text-gray-500">Design</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      Designer
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        Edit
                      </a>
                    </td>
                  </tr>
                  {/* New Row*/}
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Alice Smith
                          </div>
                          <div className="text-sm text-gray-500">alice@devui.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">UI/UX Designer</div>
                      <div className="text-sm text-gray-500">Design</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      Designer
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        Edit
                      </a>
                    </td>
                  </tr>
                  {/* New Row*/}
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Alice Smith
                          </div>
                          <div className="text-sm text-gray-500">alice@devui.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">UI/UX Designer</div>
                      <div className="text-sm text-gray-500">Design</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      Designer
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        Edit
                      </a>
                    </td>
                  </tr>
                  {/* New Row*/}
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Alice Smith
                          </div>
                          <div className="text-sm text-gray-500">alice@devui.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">UI/UX Designer</div>
                      <div className="text-sm text-gray-500">Design</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      Designer
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        Edit
                      </a>
                    </td>
                  </tr>
                  {/* New Row*/}
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Alice Smith
                          </div>
                          <div className="text-sm text-gray-500">alice@devui.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">UI/UX Designer</div>
                      <div className="text-sm text-gray-500">Design</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      Designer
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        Edit
                      </a>
                    </td>
                  </tr>
                  {/* New Row*/}
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Alice Smith
                          </div>
                          <div className="text-sm text-gray-500">alice@devui.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">UI/UX Designer</div>
                      <div className="text-sm text-gray-500">Design</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      Designer
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        Edit
                      </a>
                    </td>
                  </tr>
                  {/* New Row*/}
                  <tr className="divide-x divide-gray-200">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Alice Smith
                          </div>
                          <div className="text-sm text-gray-500">alice@devui.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">UI/UX Designer</div>
                      <div className="text-sm text-gray-500">Design</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      Designer
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full border-gray-300">
        <div className="mt-2 flex items-center justify-end">
          <div className="space-x-2">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              ← Previous
            </button>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Table;



