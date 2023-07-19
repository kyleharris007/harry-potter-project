import mongoose from 'mongoose';
const schema = mongoose.Schema;

let House = new schema({
    "_id": {type: String},
    "name": {type: String},
    "mascot": {type: String},
    "headOfHouse": {type: String},
    "houseGhost": {type: String},
    "founder": {type: String},
    "school": {type: String},
    "members": [{type: Schema.Types.ObjectId, ref: 'characters'}],
    "values": [{type:String}],
    "colors": [{type: Array}]
});

export default mongoose.model("houses", House);

