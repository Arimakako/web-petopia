const blogService = require('./blogService');

const getblogs = async (req, res) => {
    try {
        const blogs = await blogService.getAllblogs();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getblog = async (req, res) => {
    try {
        const blog = await blogService.getblog(req.params.id);
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createblog = async (req, res) => {
    try {
        const blog = await blogService.addblog(req.body);
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update blog
const updateblog = async (req, res) => {
    const blogId = req.params.id;  // Use the ID from the route
    const updateData = req.body;

    try {
        const updateResult = await blogService.updateblog(blogId, updateData);
        if (!updateResult.modifiedCount) {
            return res.status(404).json({ message: "No blog found or no change made with the given ID" });
        }

        const updatedblog = await blogService.getblog(blogId);
        res.json(updatedblog);
    } catch (error) {
        res.status(500).json({ message: "Error updating blog", error: error.message });
    }
};

// Delete blog
const deleteblog = async (req, res) => {
    const blogId = req.params.id;  // Use the ID from the route

    try {
        const blogToDelete = await blogService.getblog(blogId);
        if (!blogToDelete) {
            return res.status(404).json({ message: "No blog found with the given ID" });
        }

        await blogService.deleteblog(blogId);
        res.json({ message: "blog successfully deleted", blog: blogToDelete });
    } catch (error) {
        res.status(500).json({ message: "Error deleting blog", error: error.message });
    }
};
module.exports = { getblogs, getblog, createblog, updateblog, deleteblog };