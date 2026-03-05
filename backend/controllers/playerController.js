import { v2 as cloudinary } from "cloudinary";
import playerModel from "../models/playerModel.js";

// Add Player
const addPlayer = async (req, res) => {
    try {
        const {
            name,
            dateOfBirth,
            age,
            nationality,
            jerseyNumber,
            height,
            weight,
            position,
            strongerFoot,
            currentClub,
            previousClubs,
            topPicks,
            marketValue,
            contractExpiry,
            agentName,
            agentContact,
            strengths,
            weaknesses,
            stats,
            scoutingReport,
            youtubeEmbed,
            attributes,
            preferredPositions,
            weakFootRating,
            skillMoves,
            internationalCaps,
            socialMedia,
            accolades,
            videos
        } = req.body;

        // Handle profile image upload
        const profileImage = req.files.profileImage && req.files.profileImage[0];
        let profileImageUrl = "";
        
        if (profileImage) {
            const result = await cloudinary.uploader.upload(profileImage.path, { 
                resource_type: "image" 
            });
            profileImageUrl = result.secure_url;
        }

        // Parse complex data types
        const playerData = {
            name,
            dateOfBirth: new Date(dateOfBirth),
            age: Number(age),
            nationality,
            jerseyNumber,
            topPicks: topPicks === "true" ? true : false,
            height: Number(height),
            weight: Number(weight),
            position,
            strongerFoot,
            currentClub,
            previousClubs: previousClubs ? previousClubs.split(',') : [],
            marketValue: Number(marketValue),
            contractExpiry: contractExpiry ? new Date(contractExpiry) : null,
            agentName,
            agentContact,
            strengths: strengths ? strengths.split(',') : [],
            weaknesses: weaknesses ? weaknesses.split(',') : [],
            stats: stats ? JSON.parse(stats) : {},
            attributes: JSON.parse(attributes),
            preferredPositions: preferredPositions ? preferredPositions.split(',') : [],
            weakFootRating: Number(weakFootRating),
            skillMoves: Number(skillMoves),
            internationalCaps: Number(internationalCaps),
            socialMedia: JSON.parse(socialMedia),
            accolades: JSON.parse(accolades),
            scoutingReport,
            youtubeEmbed,
            videos: videos ? videos.split(',') : [],
            profileImage: profileImageUrl,
            dateAdded: new Date()
        };

        // Validate required attributes
        if (!playerData.attributes?.technical || !playerData.attributes?.physical) {
            return res.status(400).json({
                success: false,
                message: "Missing required attributes"
            });
        }

        const player = new playerModel(playerData);
        await player.save();

        res.status(201).json({ 
            success: true, 
            message: "Player added successfully",
            playerId: player._id
        });

    } catch (error) {
        console.error("Error adding player:", error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

// List Players
const listPlayers = async (req, res) => {
    try {
        const players = await playerModel.find({})
            .sort({ dateAdded: -1 })
            .lean();

        // Convert dates to ISO strings
        const formattedPlayers = players.map(player => ({
            ...player,
            dateOfBirth: player.dateOfBirth.toISOString(),
            contractExpiry: player.contractExpiry?.toISOString(),
            dateAdded: player.dateAdded.toISOString()
        }));

        res.json({ 
            success: true, 
            count: formattedPlayers.length,
            players: formattedPlayers 
        });

    } catch (error) {
        console.error("Error listing players:", error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

// Remove Player
const removePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Player ID is required"
            });
        }

        const deletedPlayer = await playerModel.findByIdAndDelete(id);
        
        if (!deletedPlayer) {
            return res.status(404).json({
                success: false,
                message: "Player not found"
            });
        }

        res.json({ 
            success: true, 
            message: "Player removed successfully" 
        });

    } catch (error) {
        console.error("Error removing player:", error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

// Get Single Player
const singlePlayer = async (req, res) => {
    try {
        const { playerId } = req.params;

        const player = await playerModel.findById(playerId)
            .lean()
            .select('-__v');

        if (!player) {
            return res.status(404).json({ 
                success: false, 
                message: 'Player not found' 
            });
        }

        // Convert dates and nested objects
        const formattedPlayer = {
            ...player,
            dateOfBirth: player.dateOfBirth.toISOString(),
            contractExpiry: player.contractExpiry?.toISOString(),
            dateAdded: player.dateAdded.toISOString(),
            attributes: {
                ...player.attributes,
                technical: player.attributes.technical || {},
                physical: player.attributes.physical || {},
                mental: player.attributes.mental || {},
                defensive: player.attributes.defensive || {}
            }
        };

        res.json({ 
            success: true, 
            player: formattedPlayer 
        });

    } catch (error) {
        console.error("Error fetching player:", error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

export { listPlayers, addPlayer, removePlayer, singlePlayer };