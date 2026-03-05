import { v2 as cloudinary } from "cloudinary";
import solarPackageModel from "../models/solarPackageModel.js";

// function for add solar package
const addSolarPackage = async (req, res) => {
    try {
        const { name, description, price, energyOutput, specifications, powerCapabilities, warranty } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                return result.secure_url;
            })
        );

        // Parse JSON arrays if they're strings
        const parsedSpecifications = typeof specifications === 'string' ? JSON.parse(specifications) : specifications;
        const parsedPowerCapabilities = typeof powerCapabilities === 'string' ? JSON.parse(powerCapabilities) : powerCapabilities;

        const packageData = {
            name,
            description,
            price: Number(price),
            energyOutput,
            specifications: parsedSpecifications,
            powerCapabilities: parsedPowerCapabilities,
            warranty,
            image: imagesUrl,
            date: Date.now(),
        };

        console.log(packageData);

        const solarPackage = new solarPackageModel(packageData);
        await solarPackage.save();

        res.json({ success: true, message: "Solar Package Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// function for list solar packages
const listSolarPackages = async (req, res) => {
    try {
        const packages = await solarPackageModel.find({});
        res.json({ success: true, packages });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// function for removing solar package
const removeSolarPackage = async (req, res) => {
    try {
        await solarPackageModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Solar Package Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// function for single solar package info
const singleSolarPackage = async (req, res) => {
    try {
        const { packageId } = req.body;
        const solarPackage = await solarPackageModel.findById(packageId);
        res.json({ success: true, solarPackage });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// function for update solar package
const updateSolarPackage = async (req, res) => {
    try {
        const { id, name, description, price, energyOutput, specifications, powerCapabilities, warranty } = req.body;

        let updateData = {
            name,
            description,
            price: Number(price),
            energyOutput,
            warranty,
        };

        // Parse JSON arrays if they're strings
        if (specifications) {
            updateData.specifications = typeof specifications === 'string' ? JSON.parse(specifications) : specifications;
        }
        if (powerCapabilities) {
            updateData.powerCapabilities = typeof powerCapabilities === 'string' ? JSON.parse(powerCapabilities) : powerCapabilities;
        }

        // Handle new images if provided
        if (req.files) {
            const image1 = req.files.image1 && req.files.image1[0];
            const image2 = req.files.image2 && req.files.image2[0];
            const image3 = req.files.image3 && req.files.image3[0];
            const image4 = req.files.image4 && req.files.image4[0];

            const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

            if (images.length > 0) {
                let imagesUrl = await Promise.all(
                    images.map(async (item) => {
                        let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                        return result.secure_url;
                    })
                );
                updateData.image = imagesUrl;
            }
        }

        const solarPackage = await solarPackageModel.findByIdAndUpdate(id, updateData, { new: true });
        res.json({ success: true, message: "Solar Package Updated", solarPackage });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { listSolarPackages, addSolarPackage, removeSolarPackage, singleSolarPackage, updateSolarPackage };
