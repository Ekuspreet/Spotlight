const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    creator: {type:String, required: true},
    members: [{type: String}],

},{ collection: 'Projects' });

const ProjectModel = mongoose.model('Projects', ProjectSchema);

module.exports = ProjectModel;