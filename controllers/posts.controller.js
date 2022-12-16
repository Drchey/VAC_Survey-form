const Posts = require('../models/posts.models')

const createPost = async (req, res) => {
  const {
    school_name,
    school_type,
    school_count,
    grad_count,
    verify_count,
    database_type,
    institution_store,
    transcript_generate,
    servers,
    servers_spec,
    uptime_service,
    lan_segment,
    service_providers,
    firewalls,
    site_site,
    system_integration,
    legacy_apps,
    legacy_apps_distribution,
    disaster_recovery,
    disaster_recovery_strategy,
    web_emails,
    data_privacy,
    encryption_usage,
  } = req.body

  if (
    !school_name ||
    !school_type ||
    !school_count ||
    !grad_count ||
    !verify_count ||
    !database_type ||
    !institution_store ||
    !transcript_generate ||
    !servers ||
    !servers_spec ||
    !uptime_service ||
    !lan_segment ||
    !service_providers ||
    !firewalls ||
    !site_site ||
    !system_integration ||
    !legacy_apps ||
    !legacy_apps_distribution ||
    !disaster_recovery ||
    !disaster_recovery_strategy ||
    !web_emails ||
    !data_privacy ||
    !encryption_usage
  ) {
    return res.status(400).json({
      message: 'Please Include All Fields',
    })
  }

  const posts = await new Posts({
    school_name,
    school_type,
    school_count,
    grad_count,
    verify_count,
    database_type,
    institution_store,
    transcript_generate,
    servers,
    servers_spec,
    uptime_service,
    lan_segment,
    service_providers,
    institution_store,
    firewalls,
    site_site,
    system_integration,
    legacy_apps,
    legacy_apps_distribution,
    disaster_recovery,
    disaster_recovery_strategy,
    web_emails,
    data_privacy,
    encryption_usage,
  })

  await posts.save()
  return res.status(200).json(posts)
}

const getPosts = async (req, res) => {
  const posts = await Posts.find()
  return res.status(200).json(posts)
}

const getPost = async (req, res) => {
  const post = await Posts.findById(req.params.id)
  return res.status(200).json(post)
}

const deletePost = async (req, res) => {
  const post = await Posts.findById(req.params.id)
  if (!post) {
    return res.status(400).send('Post Not FOund')
  }
  await post.remove()
  return res.status(200).json({
    id: req.params.id,
  })
}

module.exports = {
  createPost,
  getPosts,
  deletePost,
  getPost,
}
