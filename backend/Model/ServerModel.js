const mongoose = require('mongoose');

const ServerSchema = new mongoose.Schema({
  server: {
    players: {
      current: { type: Number, required: true },
      max: { type: Number, required: true }
    },
    ping: { type: Number, required: true },
    tickrate: { type: Number, required: true }
  },
  settings: {
    region: { type: String, required: true },
    punkbuster: { type: Boolean, default: false },
    fairfight: { type: Boolean, default: false },
    password_protected: { type: Boolean, default: false },
    preset: { type: String, enum: ['Normal', 'Hardcore', 'Custom'], default: 'Normal' }
  },
  advanced: {
    minimap: { type: Boolean, default: true },
    only_squad_leader_spawn: { type: Boolean, default: false },
    vehicles: { type: Boolean, default: true },
    team_balance: { type: Boolean, default: true },
    minimap_spotting: { type: Boolean, default: true },
    hud: { type: Boolean, default: true },
    third_person_vehicle_cam: { type: Boolean, default: true },
    regenerative_health: { type: Boolean, default: true },
    kill_cam: { type: Boolean, default: true },
    friendly_fire: { type: Boolean, default: false },
    three_d_spotting: { type: Boolean, default: true },
    enemy_name_tags: { type: Boolean, default: true }
  },
  rules: {
    tickets: { type: Number, default: 400 },
    vehicle_spawn_delay: { type: Number, default: 25 },
    bullet_damage: { type: Number, default: 100 },
    kick_after_team_kills: { type: Number, default: 5 },
    player_health: { type: Number, default: 100 },
    player_respawn_time: { type: Number, default: 100 },
    kick_after_idle_seconds: { type: Number, default: 300 },
    ban_after_kicks: { type: Number, default: 3 }
  }
});

module.exports = mongoose.model('ServerSettings', ServerSchema);