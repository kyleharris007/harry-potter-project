import House from '../models/House.js';

export const getHouse = async (req, res) => {
    let houses = House.find();
    res.json(houses);
};
export const getHouses = async (req, res) => {
    try {
        const {id} = req.params;
        const house = await House.findById(id);
        if {house} {
            return res.json(house);
        };
        res.json({message: 'House not found'});
    };
};
export const createHouse = async (req, res) => {
    const house = new House(req.body);
    await house.save();
};
export const updateHouse = async (req, res) => {
    const {id} = req.params;
    const house = await house.findByIdAndUpdate(id, req.body);
};
export const deleteHouse = async (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await House.findByIdAndDelete(id);

    } catch (error) {
        console.log(error);
    }
};