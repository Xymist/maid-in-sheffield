require 'dragonfly'
require 'dragonfly/dropbox_data_store'

# Configure
Dragonfly.app.configure do
#  plugin :imagemagick

  secret "bd1995c0372f42ca12e4f7c6358ca45a1d752ac87dca06c15d020ce5f0b7cdcb"

  url_format "/media/:job/:name"
  if Rails.env.development? || Rails.env.test?

  datastore :file,
    root_path: Rails.root.join('public/system/dragonfly/uploads'),
    server_root: Rails.root.join('public')

  else

  datastore :dropbox,
            app_key:              ENV['DROPBOX_APP_KEY'],
            app_secret:           ENV['DROPBOX_APP_SECRET'],
            access_token:         ENV['DROPBOX_ACCESS_TOKEN'],
            access_token_secret:  ENV['DROPBOX_ACCESS_TOKEN_SECRET'],
            user_id:              ENV['DROPBOX_USER_ID'],
            root_path:            'uploads' # optional

  end
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
