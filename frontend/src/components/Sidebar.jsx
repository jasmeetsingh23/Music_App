import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaPlus,
  FaBars,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaUserMinus,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      type: "artist",
      name: "Artist 1",
      photo: "https://via.placeholder.com/40",
      to: "/artist/1",
    },
    {
      id: 2,
      type: "artist",
      name: "Artist 2",
      photo: "https://via.placeholder.com/40",
      to: "/artist/2",
    },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  // Add new item to sidebar
  const addItem = (type) => {
    const newItem = {
      id: Date.now(),
      type,
      name: type === "playlist" ? "New Playlist" : "Playlist Folder",
      to: `/${type}-${Date.now()}`,
    };
    setItems([...items, newItem]);
    setShowOptions(false);
  };

  // Handle rename action
  const startEditing = (id, currentName) => {
    setEditingId(id);
    setNewName(currentName);
  };

  const confirmRename = (id) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
    setEditingId(null);
    setNewName("");
  };

  const cancelRename = () => {
    setEditingId(null);
    setNewName("");
  };

  // Handle unfollow action for artists
  const unfollowArtist = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Handle delete action
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Determine margin based on whether options are shown
  const marginBottom = showOptions ? "100px" : "10px";

  return (
    <aside
      className={`text-white h-screen fixed transition-all duration-300 p-6 ${
        isOpen ? "w-80" : "w-20"
      }`}
      style={{ background: "#1f1f1f" }}
    >
      <div
        className="flex items-center justify-between mb-4"
        style={{ marginBottom: marginBottom }}
      >
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl"
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>
          {isOpen && <h2 className="text-xl font-bold">Your Library</h2>}
        </div>

        {isOpen && (
          <div className="relative">
            <button
              onClick={toggleOptions}
              aria-label="Add New Item"
              className="text-xl"
            >
              <FaPlus />
            </button>
            {showOptions && (
              <div
                className="absolute right-0 mt-2 w-48 text-white rounded shadow-lg z-10"
                style={{ background: "hsla(0, 0%, 100%, .1)" }}
              >
                <button
                  onClick={() => addItem("playlist")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                  Create a New Playlist
                </button>
                <button
                  onClick={() => addItem("folder")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                  Create Playlist Folder
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen && <div className="mb-6"></div>}
      <nav className="mt-4">
        <ul className="space-y-4">
          {items.map(({ id, type, name, photo, to }) => (
            <li key={id} className="flex items-center space-x-3 group mb-2">
              <NavLink
                to={to}
                className="flex items-center space-x-3 hover:text-gray-300"
                aria-label={name}
              >
                {type === "artist" && (
                  <img
                    src={photo}
                    alt={name}
                    className="rounded-full w-10 h-10"
                  />
                )}
                {type === "playlist" && <span className="font-bold">🎵</span>}
                {type === "folder" && <span className="font-bold">📁</span>}
                {isOpen && (
                  <span className="flex-grow truncate">
                    {editingId === id ? (
                      <input
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="bg-gray-700 p-1 rounded text-white max-w-full"
                        style={{ width: "70%", maxWidth: "200px" }} // Limit input width
                        autoFocus
                      />
                    ) : (
                      name
                    )}
                  </span>
                )}
              </NavLink>
              {isOpen && editingId === id ? (
                <>
                  <button
                    onClick={() => confirmRename(id)}
                    aria-label="Confirm Rename"
                  >
                    <FaCheck className="text-green-400" />
                  </button>
                  <button onClick={cancelRename} aria-label="Cancel Rename">
                    <FaTimes className="text-red-400" />
                  </button>
                </>
              ) : (
                isOpen && (
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100">
                    {type === "artist" ? (
                      <button
                        onClick={() => unfollowArtist(id)}
                        aria-label="Unfollow Artist"
                      >
                        <FaUserMinus className="text-red-400" />
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => startEditing(id, name)}
                          aria-label="Rename Item"
                        >
                          <FaEdit className="text-yellow-400" />
                        </button>
                        <button
                          onClick={() => deleteItem(id)}
                          aria-label="Delete Item"
                        >
                          <FaTrash className="text-red-400" />
                        </button>
                      </>
                    )}
                  </div>
                )
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
