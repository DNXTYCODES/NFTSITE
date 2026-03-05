import mongoose from "mongoose";

const solarPackageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    energyOutput: { type: String, default: '' },
    specifications: { type: Array, default: [] }, // Array of features like "12x 320W Solar Panels"
    powerCapabilities: { type: Array, default: [] }, // Array of things it can power like "Fridge (1)"
    warranty: { type: String, default: '' },
    date: { type: Number, required: true }
})

const solarPackageModel = mongoose.models.solarPackage || mongoose.model("solarPackage", solarPackageSchema);

export default solarPackageModel
