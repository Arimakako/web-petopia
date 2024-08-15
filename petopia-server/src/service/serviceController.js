const serviceService = require('./serviceService');
const getservices = async (req, res) => {
    try {
        const services = await serviceService.getAllservices();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getservice = async (req, res) => {
    try {
        const service = await serviceService.getservice(req.params.id);
        res.json(service);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createservice = async (req, res) => {
    try {
        const service = await serviceService.addservice(req.body);
        res.json(service);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update service
const updateservice = async (req, res) => {
    const serviceId = req.params.id;  // Use the ID from the route
    const updateData = req.body;

    try {
        const updateResult = await serviceService.updateservice(serviceId, updateData);
        if (!updateResult.modifiedCount) {
            return res.status(404).json({ message: "No service found or no change made with the given ID" });
        }

        const updatedservice = await serviceService.getservice(serviceId);
        res.json(updatedservice);
    } catch (error) {
        res.status(500).json({ message: "Error updating service", error: error.message });
    }
};

// Delete service
const deleteservice = async (req, res) => {
    const serviceId = req.params.id;  // Use the ID from the route

    try {
        const serviceToDelete = await serviceService.getservice(serviceId);
        if (!serviceToDelete) {
            return res.status(404).json({ message: "No service found with the given ID" });
        }

        await serviceService.deleteservice(serviceId);
        res.json({ message: "service successfully deleted", service: serviceToDelete });
    } catch (error) {
        res.status(500).json({ message: "Error deleting service", error: error.message });
    }
};
module.exports = { getservices, getservice, createservice, updateservice, deleteservice };