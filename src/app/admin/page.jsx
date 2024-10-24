"use client"

// app/admin/page.js
import { useEffect, useState } from 'react';

export default function AdminPanel() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // In a real-world application, you'd fetch the data from your database or API
    // Here we are assuming that the form submissions are stored locally
    async function fetchMessages() {
      const response = await fetch('/api/getMessages');
      const data = await response.json();
      setMessages(data);
      console.log(messages)
    }

    fetchMessages();
  }, []);

  return (
    <div className="h-screen bg-white p-10">

      <div className="font-sans overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 whitespace-nowrap">
            <tr>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">

            {
              messages.map((msg, i) => {
                const {name, email, phone, message} = msg;
                return (
                  <tr key={i}>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {name}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {email}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {phone}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {message}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-800">
                      <button className="text-blue-600 mr-4">Edit</button>
                      <button className="text-red-600">Delete</button>
                    </td>
                  </tr>
                )
              })
            }






          </tbody>
        </table>
      </div>
    </div>
  );
}
