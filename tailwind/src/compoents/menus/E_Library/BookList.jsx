import React, { Component } from "react";

class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      libraryItems: [], // Store the list of library items here
    };
  }

  componentDidMount() {
    // Fetch all library items from your Express server
    this.fetchLibraryItems();
  }

  fetchLibraryItems() {
    fetch("http://localhost:5000/api/library-items")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ libraryItems: data });
      })
      .catch((error) => console.error("Error fetching library items:", error));
  }

  handleEditClick = (itemId) => {
    // Implement the edit functionality here
    // You can open a modal or navigate to an edit page
    console.log("Edit clicked for item ID:", itemId);
  };

  handleDeleteClick = (itemId) => {
    // Confirm with the user if they want to delete the item
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      // Send a DELETE request to your backend API
      fetch(`http://localhost:5000/api/library-items/${itemId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            // Item deleted successfully, refresh the list
            this.fetchLibraryItems();
          } else {
            console.error("Error deleting item:", response.statusText);
          }
        })
        .catch((error) => console.error("Error deleting item:", error));
    }
  };

  render() {
    const { libraryItems } = this.state;

    return (
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-10">Library Items</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {libraryItems.map((item) => (
              <div
                key={item._id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out book-card"
              >
                <div
                  className="w-full h-64 relative"
                  style={{
                    backgroundImage: `url(http://localhost:5000/api/uploads/${item.uploadThumbnail})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click when the edit button is clicked
                        this.handleEditClick(item._id);
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click when the delete button is clicked
                        this.handleDeleteClick(item._id);
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-white">{item.title}</h2>
                  <p className="text-gray-600 mb-2">Author: {item.authorName}</p>
                  <p className="text-gray-600 mb-2">Description: {item.description}</p>
                  <p className="text-gray-600 mb-2">External Links: {item.externalLinks}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }y}

export default ImageDisplay;