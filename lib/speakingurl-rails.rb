require 'rails'

module Speakingurl
  module Rails
    class Railtie < ::Rails::Railtie
      initializer "speakingurl_rails.append_path", :group => :all do |app|
        speakingurl_path =  File.expand_path('../', __FILE__)
        sprockets_env = app.assets || app.config.assets # sprockets-rails 3.x attaches this at a different config
        sprockets_env.prepend_path(speakingurl_path.to_s)
      end
    end
  end
end
