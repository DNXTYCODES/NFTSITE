import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    age: { type: Number, required: true },
    nationality: { type: String, required: true },
    // added
    jerseyNumber: {type: Number, required: true},
    topPick: { type: Boolean, default: false },
    height: { type: Number, required: true }, // in cm
    weight: { type: Number, required: true }, // in kg
    // position: { type: String, required: true }, // e.g., Forward, Midfielder, Defender, Goalkeeper
    // In your player model, update the position field:
position: { 
  type: String, 
  required: true,
  enum: [
    'Striker (ST)',
    'Center Forward (CF)',
    'Second Striker (SS)',
    'Left Wing (LW)',
    'Right Wing (RW)',
    'Central Midfielder (CM)',
    'Defensive Midfielder (CDM)',
    'Attacking Midfielder (CAM)',
    'Left Midfielder (LM)',
    'Right Midfielder (RM)',
    'Box-to-Box Midfielder',
    'Center Back (CB)',
    'Full Back (FB)',
    'Left Back (LB)',
    'Right Back (RB)',
    'Wing Back (WB)',
    'Sweeper (SW)',
    'Goalkeeper (GK)'
  ]
},
    strongerFoot: { type: String, enum: ["Left", "Right", "Both"], required: true },
    currentClub: { type: String, required: false }, // if the player is free, this can be null
    previousClubs: [{ type: String }], // Array of past clubs
    marketValue: { type: Number, required: false }, // in USD or preferred currency
    contractExpiry: { type: Date, required: false }, // contract end date
    agentName: { type: String, required: false }, // if applicable
    agentContact: { type: String, required: false },
    strengths: [{ type: String }], // e.g., Dribbling, Passing, Speed, Strength
    weaknesses: [{ type: String }], // e.g., Aerial Duels, Defensive Positioning /
    stats: {
        matchesPlayed: { type: Number, required: false },
        goals: { type: Number, required: false },
        assists: { type: Number, required: false },
        cleanSheets: { type: Number, required: false }, // for goalkeepers
        yellowCards: { type: Number, required: false },
        redCards: { type: Number, required: false }
    },
    scoutingReport: { type: String, required: false }, // A summary of scouting observations
    profileImage: { type: String, required: false }, // URL of player's image
    videos: [{ type: String }], // URLs of highlight videos
    youtubeEmbed: { type: String, required: false }, // Optional YouTube embed link
    dateAdded: { type: Date, default: Date.now },
    attributes: {
        technical: {
          finishing: { type: Number, min: 0, max: 100 },
          longShots: { type: Number, min: 0, max: 100 },
          crossing: { type: Number, min: 0, max: 100 },
          dribbling: { type: Number, min: 0, max: 100 },
          ballControl: { type: Number, min: 0, max: 100 },
          freeKick: { type: Number, min: 0, max: 100 },
          penalty: { type: Number, min: 0, max: 100 },
        },
        physical: {
          acceleration: { type: Number, min: 0, max: 100 },
          sprintSpeed: { type: Number, min: 0, max: 100 },
          stamina: { type: Number, min: 0, max: 100 },
          strength: { type: Number, min: 0, max: 100 },
          agility: { type: Number, min: 0, max: 100 },
          jumping: { type: Number, min: 0, max: 100 },
        },
        mental: {
          vision: { type: Number, min: 0, max: 100 },
          positioning: { type: Number, min: 0, max: 100 },
          composure: { type: Number, min: 0, max: 100 },
          aggression: { type: Number, min: 0, max: 100 },
          teamwork: { type: Number, min: 0, max: 100 },
          leadership: { type: Number, min: 0, max: 100 },
        },
        defensive: {
          tackling: { type: Number, min: 0, max: 100 },
          interceptions: { type: Number, min: 0, max: 100 },
          marking: { type: Number, min: 0, max: 100 },
          standingTackle: { type: Number, min: 0, max: 100 },
          slidingTackle: { type: Number, min: 0, max: 100 },
        }
      },
      preferredPositions: [{ type: String }],
      weakFootRating: { type: Number, min: 1, max: 5 },
      skillMoves: { type: Number, min: 1, max: 5 },
      internationalCaps: Number,
      socialMedia: {
        twitter: String,
        instagram: String
      },
      accolades: [{
        title: String,
        year: Number,
        competition: String
      }],
});

const playerModel = mongoose.models.player || mongoose.model("player", playerSchema);

export default playerModel;
