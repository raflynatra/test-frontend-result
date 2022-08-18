import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/glendmaatita/userjsondemo/db"
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, []);

  return (
    <div className="App w-10/12 mx-auto my-16">
      <h1 className="text-4xl mb-16 font-bold text-gray-300">
        LandX Frontend Test
      </h1>

      <form className="mb-7">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block p-4 pl-10 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search name, username, and email..."
            required=""
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </form>

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-400">
          <thead class="text-md bg-gray-700 text-gray-300">
            <tr>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Username
              </th>
              <th scope="col" class="py-3 px-6">
                Email
              </th>
              <th scope="col" class="py-3 px-6">
                Address
              </th>
              <th scope="col" class="py-3 px-6">
                Phone
              </th>
              <th scope="col" class="py-3 px-6">
                Website
              </th>
              <th scope="col" class="py-3 px-6">
                Company
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLowerCase()) ||
                  val.username.toLowerCase().includes(search.toLowerCase()) ||
                  val.email.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <tr class="border-b bg-gray-900 border-gray-700" key={val.id}>
                    <td class="py-4 px-6">{val.name}</td>
                    <td class="py-4 px-6">{val.username}</td>
                    <td class="py-4 px-6">{val.email}</td>
                    <td class="py-4 px-6">
                      {val.address.suite}, {val.address.street} {" St., "}
                      {val.address.city}
                    </td>
                    <td class="py-4 px-6">{val.phone}</td>
                    <td class="py-4 px-6">{val.website}</td>
                    <td class="py-4 px-6">{val.company.name}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
