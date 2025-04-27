import React, { useEffect, useState } from "react";
import axios from "axios";

const AskUs = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    // Fetch queries from the backend
    axios
      .get("http://localhost:5000/api/askus/queries") // Make sure this is the correct endpoint
      .then((response) => {
        console.log("Fetched queries:", response.data); // Log the response
        setQueries(response.data.queries);
      })
      .catch((error) => {
        console.error("Error fetching queries:", error);
      });
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Ask Us Queries</h2>
      <ul>
        {queries.length === 0 ? (
          <li>No queries available</li>
        ) : (
          queries.map((query) => (
            <li key={query._id}>
              <strong>{query.name}</strong> ({query.email}): {query.message}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AskUs;
