const mongoose = require('mongoose')

postSchema = mongoose.Schema({
  school_name: {
    required: true,
    type: String,
    unique: true,
  },
  school_type: {
    required: true,
    type: String,
  },
  school_count: {
    required: true,
    type: Number,
  },
  grad_count: {
    required: true,
    type: Number,
  },
  verify_count: {
    required: true,
    type: Number,
  },
  database_type: {
    required: true,
    type: String,
  },
  institution_store: {
    required: true,
    type: String,
  },
  transcript_generate: {
    required: true,
    type: String,
  },
  servers: {
    required: true,
    type: String,
  },
  servers_spec: {
    required: true,
    type: String,
  },
  uptime_service: {
    required: true,
    type: String,
  },
  lan_segment: {
    required: true,
    type: String,
  },
  service_providers: {
    required: true,
    type: String,
  },
  firewalls: {
    required: true,
    type: String,
  },
  site_site: {
    required: true,
    type: String,
  },
  system_integration: {
    required: true,
    type: String,
  },
  legacy_apps: {
    type: String,
    required: true,
  },
  legacy_apps_distribution: {
    type: String,
    required: true,
  },
  disaster_recovery: {
    required: true,
    type: String,
  },
  disaster_recovery_strategy: {
    required: true,
    type: String,
  },
  web_emails: {
    required: true,
    type: String,
  },
  data_privacy: {
    required: true,
    type: String,
  },
  encryption_usage: {
    type: String,
    required: true,
  },
})

module.exports = Posts = mongoose.model('Posts', postSchema)
