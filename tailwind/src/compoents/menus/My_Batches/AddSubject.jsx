import React, { useEffect, useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

function AddSubject() {
  const [sections, setSections] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [editingSectionIndex, setEditingSectionIndex] = useState(-1);
  const [collapsedSections, setCollapsedSections] = useState({});
  const [topics, setTopics] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false); // Track whether data is loaded
   const { subjectName, sectionId, topicId } = useParams();

  console.log(sections);

  const handleAddSection = () => {
    const newSection = { title: `Section ${sections.length + 1}`, topics: [] };
  
    // Send a POST request to create a new section
    fetch(`http://localhost:5000/api/${subjectName}/sections`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSection),
    })
      .then((response) => response.json())
      .then((data) => {
        // After creating the section, fetch the updated sections data
        fetchSectionsAndTopics();
      })
      .catch((error) => console.error("Error adding section:", error));
  };
  
  const handleAddTopic = (sectionIndex) => {
    if (newTopic) {
      const updatedSections = [...sections];
      const sectionId = updatedSections[sectionIndex]._id;
  
      const newTopicData = {
        title: newTopic,
      };
  
      // Send a POST request to create a new topic within a section
      fetch(
        `http://localhost:5000/api/${subjectName}/sections/${sectionId}/topics`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTopicData),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // After successfully adding a new topic, fetch the updated sections and topics data
          fetchSectionsAndTopics();
          
          // Reset the newTopic input field and editingSectionIndex
          setNewTopic("");
          setEditingSectionIndex(-1);
        })
        .catch((error) => console.error("Error adding topic:", error));
    }
  };
  
  

  const handleEditSection = (sectionIndex) => {
    const updatedSections = [...sections];
    const newTitle = prompt(
      "Edit section title:",
      sections[sectionIndex].title
    );
    if (newTitle !== null) {
      updatedSections[sectionIndex].title = newTitle;
      // Send a PATCH request to update the section title
      fetch(
        `http://localhost:5000/api/${subjectName}/sections/${sections[sectionIndex]._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newTitle }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          updatedSections[sectionIndex] = data;
          setSections(updatedSections);
        })
        .catch((error) => console.error("Error editing section:", error));
    }
  };

  const handleDeleteSection = (sectionIndex) => {
    if (window.confirm("Are you sure you want to delete this section?")) {
      // Send a DELETE request to delete the section
      fetch(
        `http://localhost:5000/api/${subjectName}/sections/${sections[sectionIndex]._id}`,
        {
          method: "DELETE",
        }
      )
        .then(() => {
          const updatedSections = [...sections];
          updatedSections.splice(sectionIndex, 1);
          setSections(updatedSections);
        })
        .catch((error) => console.error("Error deleting section:", error));
    }
  };

  const handleEditTopic = (sectionIndex, topicIndex) => {
    const updatedSections = [...sections];
    const sectionId = updatedSections[sectionIndex]._id;
    const topicId = updatedSections[sectionIndex].topics[topicIndex]._id;

    const newTopicText = prompt(
      "Edit topic text:", // This prompt should open for editing the topic title
      sections[sectionIndex].topics[topicIndex].title
    );

    if (newTopicText !== null) {
      // Update the topic title in the frontend first
      updatedSections[sectionIndex].topics[topicIndex].title = newTopicText;
      setSections(updatedSections);

      // Send a PATCH request to update the topic title in the database
      fetch(
        `http://localhost:5000/api/${subjectName}/sections/${sectionId}/topics/${topicId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newTopicText }), // Send the updated title
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // You might want to update the topic data with the response from the server if needed
        })
        .catch((error) => console.error("Error editing topic:", error));
    }
  };

  const handleDeleteTopic = (sectionIndex, topicIndex) => {
    if (window.confirm("Are you sure you want to delete this topic?")) {
      // Send a DELETE request to delete the topic
      fetch(
        `http://localhost:5000/api/${subjectName}/sections/${sections[sectionIndex]._id}/topics/${sections[sectionIndex].topics[topicIndex]._id}`,
        {
          method: "DELETE",
        }
      )
        .then(() => {
          const updatedSections = [...sections];
          updatedSections[sectionIndex].topics.splice(topicIndex, 1);
          setSections(updatedSections);
        })
        .catch((error) => console.error("Error deleting topic:", error));
    }
  };

  const toggleSectionCollapse = (sectionIndex) => {
    const updatedCollapsedSections = { ...collapsedSections };
    updatedCollapsedSections[sectionIndex] = !collapsedSections[sectionIndex];
    setCollapsedSections(updatedCollapsedSections);
  };

  const onDragStart = (e, sectionIndex) => {
    e.dataTransfer.setData("sectionIndex", sectionIndex);
  };

  const onDragOver = (e, sectionIndex) => {
    e.preventDefault();
    const draggedSectionIndex = parseInt(
      e.dataTransfer.getData("sectionIndex")
    );
    if (draggedSectionIndex !== sectionIndex) {
      const updatedSections = [...sections];
      const [draggedSection] = updatedSections.splice(draggedSectionIndex, 1);
      updatedSections.splice(sectionIndex, 0, draggedSection);
      setSections(updatedSections);
    }
  };

  
  useEffect(() => {
    // Fetch sections and topics from the server when the component mounts
    fetchSectionsAndTopics();
  }, [subjectName]);

  const fetchSectionsAndTopics = () => {
    // Fetch sections
    fetch(`http://localhost:5000/api/${subjectName}/sections`)
      .then((response) => response.json())
      .then((sectionsData) => {
        setSections(sectionsData);

        // Assuming 'sectionIndex' is defined somewhere
        const sectionIndex = 0; // Initialize 'sectionIndex' with a value
        // Fetch topics using 'sectionIndex'
        fetch(
          `http://localhost:5000/api/${subjectName}/sections/${sectionsData[sectionIndex]._id}/topics`
        )
          .then((response) => response.json())
          .then((topicsData) => {
            // Initialize topics state with fetched data
            setTopics(topicsData);
          })
          .catch((error) => console.error("Error fetching topics:", error));
      })
      .catch((error) => console.error("Error fetching sections:", error));
  };



  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary p-4 text-white text-center">
        <h1 className="text-3xl font-semibold">Section & Topic Adding</h1>
      </header>
      <main className="p-4">
        <button
          onClick={handleAddSection}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 focus:outline-none"
        >
          <FaPlus />
        </button>
        {sections &&
          sections.map((section, sectionIndex) => (
            <div
              key={section._id}
              className="bg-white rounded-lg shadow-lg mt-4"
              onDragOver={(e) => onDragOver(e, sectionIndex)}
              draggable
              onDragStart={(e) => onDragStart(e, sectionIndex)}
            >
              <div className="bg-primary text-white p-3 flex justify-between items-center rounded-t-lg">
                <div className="flex items-center">
                  <button
                    onClick={() => toggleSectionCollapse(sectionIndex)}
                    className="text-white hover:text-gray-300 p-1 focus:outline-none"
                  >
                    {collapsedSections[sectionIndex] ? (
                      <FaAngleDown />
                    ) : (
                      <FaAngleUp />
                    )}
                  </button>
                  <h2 className="text-lg font-semibold ml-2">
                    {section.title}
                  </h2>
                </div>
                <div className="flex">
                  <button
                    onClick={() => handleEditSection(sectionIndex)}
                    className="text-blue-400 hover:text-blue-300 p-1"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteSection(sectionIndex)}
                    className="text-red-500 hover:text-red-400 p-1 ml-2"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              {!collapsedSections[sectionIndex] && (
                <ul className="mt-2">
                  {section.topics.map((topic, topicIndex) => (
                    <li
                      key={topic._id}
                      className="flex justify-between items-center"
                    >
                      <Link
                        to={`/homepage/My Batches/${subjectName}/${section._id}/${topic._id}/content`}
                        className="flex items-center bg-blue-100 px-2 py-1 rounded-lg cursor-pointer ml-2 my-2 text-lg"
                      >
                        {topic.title}{" "}
                        <span className="ml-4 bg-green-500 hover:bg-green-600 text-white rounded-lg p-1 focus:outline-none">
                          <FaPlus />
                        </span>
                      </Link>

                      <div className="flex mx-3">
                        <button
                          onClick={() =>
                            handleEditTopic(sectionIndex, topicIndex)
                          }
                          className="text-blue-500 hover:text-blue-400 p-1"
                        >
                          <FaEdit />
                        </button>

                        <button
                          onClick={() =>
                            handleDeleteTopic(sectionIndex, topicIndex)
                          }
                          className="text-red-500 hover:text-red-400 p-1 ml-2"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </li>
                  ))}
                  {editingSectionIndex === sectionIndex ? (
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Add a topic here ...."
                        value={newTopic}
                        onChange={(e) => setNewTopic(e.target.value)}
                        className="w-[800px] p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 mx-2"
                      />
                      <button
                        onClick={() => handleAddTopic(sectionIndex)}
                        className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-2 mt-2 ml-2 focus:outline-none"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-row justify-end mx-3">
                      <button
                        onClick={() => setEditingSectionIndex(sectionIndex)}
                        className="flex flex-row py-3 px-4 my-4 text-[14px] bg-primary text-white rounded-lg hover:bg-secondary  hover:text-green items-center gap-1"
                      >
                        <FaPlus />
                        Add Topic
                      </button>
                    </div>
                  )}
                </ul>
              )}
            </div>
          ))}
      </main>
    </div>
  );
}

export default AddSubject;
