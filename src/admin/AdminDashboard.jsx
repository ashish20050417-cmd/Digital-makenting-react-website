import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/contact");
      setContacts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  const deleteContact = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8000/api/contact/${id}`);

      alert("✅ Contact Deleted Successfully");

      fetchContacts(); // Table Refresh
    } catch (error) {
      console.log(error);
      alert("❌ Delete Failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

          {/* Dashboard Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="text-gray-500">Total Contacts</h3>
              <h1 className="text-4xl font-bold mt-3">{contacts.length}</h1>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="text-gray-500">Today's Enquiries</h3>
              <h1 className="text-4xl font-bold mt-3">0</h1>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="text-gray-500">Services</h3>
              <h1 className="text-4xl font-bold mt-3">7</h1>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="text-gray-500">Visitors</h3>
              <h1 className="text-4xl font-bold mt-3">120</h1>
            </div>
          </div>

          {/* Contact Table */}
          <div className="mt-10 bg-white shadow rounded-xl p-6 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-5">Contact Enquiries</h2>

            <div className="flex justify-between items-center mb-5">
              <input
                type="text"
                placeholder="🔍 Search by Name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <table className="w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Service</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {contacts
                  .filter((item) =>
                    item.name.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((item) => (
                    <tr key={item._id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{item.name}</td>

                      <td className="p-3">{item.email}</td>

                      <td className="p-3">{item.phone}</td>

                      <td className="p-3">{item.service}</td>

                      <td className="p-3">
                        {new Date(item.createdAt).toLocaleDateString("en-IN")}
                      </td>

                      <td className="p-3">
                        {new Date(item.createdAt).toLocaleTimeString("en-IN")}
                      </td>

                      <td className="p-3 text-center">
                        <button
                          onClick={() => {
                            setSelectedContact(item);
                            setShowModal(true);
                          }}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                        >
                          View
                        </button>

                        <button
                          onClick={() => deleteContact(item._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showModal && selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-[550px]">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
              Contact Details
            </h2>

            <div className="space-y-4">
              <p>
                <strong>👤 Name:</strong> {selectedContact.name}
              </p>

              <p>
                <strong>📧 Email:</strong> {selectedContact.email}
              </p>

              <p>
                <strong>📱 Phone:</strong> {selectedContact.phone}
              </p>

              <p>
                <strong>🛠 Service:</strong> {selectedContact.service}
              </p>

              <p>
                <strong>📝 Subject:</strong> {selectedContact.subject}
              </p>

              <div>
                <strong>💬 Message:</strong>

                <div className="mt-2 bg-gray-100 rounded-lg p-4">
                  {selectedContact.message}
                </div>
              </div>

              <p>
                <strong>📅 Date:</strong>{" "}
                {new Date(selectedContact.createdAt).toLocaleDateString(
                  "en-IN",
                )}
              </p>

              <p>
                <strong>⏰ Time:</strong>{" "}
                {new Date(selectedContact.createdAt).toLocaleTimeString(
                  "en-IN",
                )}
              </p>
            </div>

            <div className="mt-8 text-right">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
