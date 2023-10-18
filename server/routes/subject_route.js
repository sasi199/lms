// subjectRoutes.js
const express = require("express");
const router = express.Router();
const Subject = require("../models/subject"); // Import your Subject model

// Create a new subject
router.post("/subjects", async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json(subject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Retrieve all subjects
router.get("/subjects", async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a subject by ID
router.patch("/subjects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSubject = await Subject.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.status(200).json(updatedSubject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a subject by ID
router.delete("/subjects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSubject = await Subject.findByIdAndRemove(id);
    if (!deletedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.status(204).json(); // Respond with a 204 status code for successful deletion
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new section within a subject
router.post("/:subjectName/sections", async (req, res) => {
  try {
    const { subjectName } = req.params;
    const subject = await Subject.findOne({ subjectName });
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    const newSection = req.body;
    subject.sections.push(newSection);
    await subject.save();

    res.status(201).json(newSection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Retrieve all sections of a subject
router.get("/:subjectName/sections", async (req, res) => {
  try {
    const { subjectName } = req.params;
    const subject = await Subject.findOne({ subjectName });
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    res.status(200).json(subject.sections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a section within a subject by ID
router.patch("/:subjectName/sections/:sectionId", async (req, res) => {
  try {
    const { subjectName, sectionId } = req.params;
    const subject = await Subject.findOne({ subjectName });
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    const section = subject.sections.find(
      (section) => section._id == sectionId
    );
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    Object.assign(section, req.body);
    await subject.save();

    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a section within a subject by ID
router.delete("/:subjectName/sections/:sectionId", async (req, res) => {
  try {
    const { subjectName, sectionId } = req.params;
    const subject = await Subject.findOne({ subjectName });
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    const sectionIndex = subject.sections.findIndex(
      (section) => section._id == sectionId
    );
    if (sectionIndex === -1) {
      return res.status(404).json({ message: "Section not found" });
    }

    subject.sections.splice(sectionIndex, 1);
    await subject.save();

    res.status(204).json(); // Respond with a 204 status code for successful deletion
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Create a new topic within a section of a subject
router.post("/:subjectName/sections/:sectionId/topics", async (req, res) => {
  try {
    const { subjectName, sectionId } = req.params;
    const subject = await Subject.findOne({ subjectName });
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    const section = subject.sections.find(
      (section) => section._id == sectionId
    );
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    const newTopic = req.body;
    section.topics.push(newTopic);
    await subject.save();

    res.status(201).json(newTopic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update the route to get topics within a section of a subject
router.get("/:subjectName/sections/:sectionId/topics", async (req, res) => {
  try {
    const { subjectName, sectionId } = req.params;
    
    // Assuming you have a Subject model and it has a structure similar to this
    const subject = await Subject.findOne({ subjectName });

    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    // Find the section within the subject by its ID
    const section = subject.sections.find(section => section._id == sectionId);

    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    // Retrieve the topics from the section
    const topics = section.topics;

    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Update a topic within a section of a subject by ID
router.patch(
  "/:subjectName/sections/:sectionId/topics/:topicId",
  async (req, res) => {
    try {
      const { subjectName, sectionId, topicId } = req.params;
      const subject = await Subject.findOne({ subjectName });
      if (!subject) {
        return res.status(404).json({ message: "Subject not found" });
      }

      const section = subject.sections.find(
        (section) => section._id == sectionId
      );
      if (!section) {
        return res.status(404).json({ message: "Section not found" });
      }

      const topic = section.topics.find((topic) => topic._id == topicId);
      if (!topic) {
        return res.status(404).json({ message: "Topic not found" });
      }

      Object.assign(topic, req.body);
      await subject.save();

      res.status(200).json(topic);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// Delete a topic within a section of a subject by ID
router.delete(
  "/:subjectName/sections/:sectionId/topics/:topicId",
  async (req, res) => {
    try {
      const { subjectName, sectionId, topicId } = req.params;
      const subject = await Subject.findOne({ subjectName });
      if (!subject) {
        return res.status(404).json({ message: "Subject not found" });
      }

      const section = subject.sections.find(
        (section) => section._id == sectionId
      );
      if (!section) {
        return res.status(404).json({ message: "Section not found" });
      }

      const topicIndex = section.topics.findIndex(
        (topic) => topic._id == topicId
      );
      if (topicIndex === -1) {
        return res.status(404).json({ message: "Topic not found" });
      }

      section.topics.splice(topicIndex, 1);
      await subject.save();

      res.status(204).json(); // Respond with a 204 status code for successful deletion
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// Create content within a specific topic of a section of a subject
router.post("/:subjectName/sections/:sectionId/topics/:topicId/contents", async (req, res) => {
  try {
    const { subjectName, sectionId, topicId } = req.params;
    const subject = await Subject.findOne({ subjectName });
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    const section = subject.sections.find(
      (section) => section._id == sectionId
    );
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    const topic = section.topics.find((topic) => topic._id == topicId);
    if (!topic) {
      return res.status(404).json({ message: "Topic not found" });
    }

    const newContent = req.body;
    topic.contents.push(newContent);
    await subject.save();

    res.status(201).json(newContent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Retrieve all content within a specific topic of a section of a subject
router.get("/:subjectName/sections/:sectionId/topics/:topicId/contents", async (req, res) => {
  try {
    const { subjectName, sectionId, topicId } = req.params;
    const subject = await Subject.findOne({ subjectName });
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    const section = subject.sections.find(
      (section) => section._id == sectionId
    );
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    const topic = section.topics.find((topic) => topic._id == topicId);
    if (!topic) {
      return res.status(404).json({ message: "Topic not found" });
    }

    const contents = topic.contents;

    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Update content within a specific topic of a section of a subject by ID
router.put(
  "/:subjectName/sections/:sectionId/topics/:topicId/contents/:contentId",
  async (req, res) => {
    try {
      const { subjectName, sectionId, topicId, contentId } = req.params;
      const subject = await Subject.findOne({ subjectName });
      if (!subject) {
        return res.status(404).json({ message: "Subject not found" });
      }

      const section = subject.sections.find(
        (section) => section._id == sectionId
      );
      if (!section) {
        return res.status(404).json({ message: "Section not found" });
      }

      const topic = section.topics.find((topic) => topic._id == topicId);
      if (!topic) {
        return res.status(404).json({ message: "Topic not found" });
      }

      const content = topic.contents.find((content) => content._id == contentId);
      if (!content) {
        return res.status(404).json({ message: "Content not found" });
      }

      // Update the content with the new body
      content.body = req.body.body; // Replace 'body' with the field you want to update
      await subject.save();

      res.status(200).json(content);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);




// Delete content within a specific topic of a section of a subject by ID
router.delete(
  "/:subjectName/sections/:sectionId/topics/:topicId/contents/:contentId",
  async (req, res) => {
    try {
      const { subjectName, sectionId, topicId, contentId } = req.params;
      const subject = await Subject.findOne({ subjectName });
      if (!subject) {
        return res.status(404).json({ message: "Subject not found" });
      }

      const section = subject.sections.find(
        (section) => section._id == sectionId
      );
      if (!section) {
        return res.status(404).json({ message: "Section not found" });
      }

      const topic = section.topics.find((topic) => topic._id == topicId);
      if (!topic) {
        return res.status(404).json({ message: "Topic not found" });
      }

      const contentIndex = topic.contents.findIndex(
        (content) => content._id == contentId
      );
      if (contentIndex === -1) {
        return res.status(404).json({ message: "Content not found" });
      }

      topic.contents.splice(contentIndex, 1);
      await subject.save();

      res.status(204).json(); // Respond with a 204 status code for successful deletion
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);



module.exports = router;