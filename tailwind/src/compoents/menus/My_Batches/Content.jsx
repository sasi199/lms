import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { FaSave, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

function Content() {
  const { subjectName, sectionId, topicId } = useParams();

  const [editorContent, setEditorContent] = useState("");
  const [savedContent, setSavedContent] = useState([]);
  const [editingContent, setEditingContent] = useState(null);
  const [contentSaved, setContentSaved] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false); // New state variable for editor visibility

  useEffect(() => {
    async function fetchSavedContent() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/${subjectName}/sections/${sectionId}/topics/${topicId}/contents`
        );
        setSavedContent(response.data);
      } catch (error) {
        console.error("Error fetching saved content:", error);
      }
    }

    fetchSavedContent();

    // Set up an interval to fetch content every 60 seconds (adjust as needed)
    const intervalId = setInterval(fetchSavedContent, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [subjectName, sectionId, topicId]);

  const handleEdit = (content) => {
    setEditingContent(content);
    setEditorContent(content.body);
  };

  const handleCancelEdit = () => {
    setEditingContent(null);
    setEditorContent("");
  };

  const handleDelete = async (contentId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/${subjectName}/sections/${sectionId}/topics/${topicId}/contents/${contentId}`
      );

      setSavedContent((prevContent) =>
        prevContent.filter((content) => content._id !== contentId)
      );
    } catch (error) {
      console.error("Error deleting content:", error);
    }
  };

  const handleSaveEdit = async () => {
    try {
      const updatedContent = {
        body: editorContent,
      };

      await axios.put(
        `http://localhost:5000/api/${subjectName}/sections/${sectionId}/topics/${topicId}/contents/${editingContent._id}`,
        updatedContent
      );

      setSavedContent((prevContent) =>
        prevContent.map((content) =>
          content._id === editingContent._id
            ? { ...content, body: editorContent }
            : content
        )
      );

      setEditorContent("");
      setEditingContent(null);

      // Content has been saved, so set contentSaved to true
      setContentSaved(true);
    } catch (error) {
      console.error("Error saving edited content:", error);
    }
  };

  const handleSave = async () => {
    try {
      if (!subjectName) {
        console.error(
          "Subject is not defined or does not have subjectName property."
        );
        return;
      }

      const newContent = {
        body: editorContent,
      };

      await axios.post(
        `http://localhost:5000/api/${subjectName}/sections/${sectionId}/topics/${topicId}/contents`,
        newContent
      );

      const response = await axios.get(
        `http://localhost:5000/api/${subjectName}/sections/${sectionId}/topics/${topicId}/contents`
      );
      setSavedContent(response.data);

      setEditorContent("");
      setEditingContent(null);

      // Content has been saved, so set contentSaved to true
      setContentSaved(true);
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold mb-2">Content Editor</h1>
          <p className="text-gray-600">
            Edit and manage content for your topic.
          </p>
        </div>
        {!contentSaved && (
          <div className="editor-container">
            {/* Add Content button */}
            <button
              className="flex flex-row py-3 px-4 text-[15px] bg-primary text-white rounded-lg hover:bg-secondary  hover:text-green items-center gap-1"
              onClick={() => setIsEditorOpen(true)}
            >
              Add Content
            </button>
            {isEditorOpen && ( // Render the editor when isEditorOpen is true
              <div>
                <Editor
                  apiKey="9wn2cz7e8gmul75rnfsfg2u84ma256iw5wittbvgolla0ym6"
                  value={editorContent}
                  onEditorChange={(content) => setEditorContent(content)}
                  init={{
                    branding: false,
                    menubar: true,
                    plugins:
                      "preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount",
                    toolbar:
                      "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
                    image_advtab: true,
                  }}
                />
                <div className="mt-4 flex justify-end">
                  <button
                    className="flex flex-row py-3 px-4 text-[15px] bg-primary text-white rounded-lg hover:bg-secondary  hover:text-green items-center gap-1 "
                    onClick={handleSave}
                  >
                    <FaSave className="inline-block" />
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="mt-8">
          {savedContent.map((content) => (
            <div key={content._id} className="bg-gray-100 p-4 mb-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Content</h2>
                <div className="space-x-2">
                  <button
                    className="text-green-500 hover:text-green-600"
                    onClick={() => handleEdit(content)}
                  >
                    <FaEdit className="inline-block mr-1" />
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(content._id)}
                  >
                    <FaTrash className="inline-block mr-1" />
                    Delete
                  </button>
                </div>
              </div>
              {editingContent === content ? (
                <>
                  <Editor
                    apiKey="YOUR_API_KEY"
                    value={editorContent}
                    onEditorChange={(content) => setEditorContent(content)}
                    init={{
                      branding: false,
                      menubar: true,
                      plugins:
                        "preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount",
                      toolbar:
                        "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
                      image_advtab: true,
                    }}
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 ease-in-out mr-2"
                      onClick={handleSaveEdit}
                    >
                      <FaSave className="inline-block mr-2" />
                      Save
                    </button>
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: content.body }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
