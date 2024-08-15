// blogService.js
const blogModel = require('./blogModel');

const getAllblogs = () => {
    return blogModel.findAll();
};

const getblog = (id) => {
    return blogModel.findById(id);
};

const addblog = (blog) => {
    return blogModel.create(blog);
};

const updateblog = (id, blog) => {
    return blogModel.update(id, blog);
};

// Delete blog
const deleteblog = (id) => {
    return blogModel.remove(id);
};
module.exports = { getAllblogs, getblog, addblog, updateblog, deleteblog };