require 'dragonfly'

# Configure
Dragonfly.app.configure do
#  plugin :imagemagick

  secret "bd1995c0372f42ca12e4f7c6358ca45a1d752ac87dca06c15d020ce5f0b7cdcb"

  url_format "/media/:job/:name"

  datastore :file,
    root_path: Rails.root.join('public/system/dragonfly', Rails.env),
    server_root: Rails.root.join('public')
end

# Logger
Dragonfly.logger = Rails.logger

# Mount as middleware
Rails.application.middleware.use Dragonfly::Middleware

# Add model functionality
if defined?(ActiveRecord::Base)
  ActiveRecord::Base.extend Dragonfly::Model
  ActiveRecord::Base.extend Dragonfly::Model::Validations
end
