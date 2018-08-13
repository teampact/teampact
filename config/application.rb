require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module TeampactAltspace
  class Application < Rails::Application
    config.load_defaults 5.2

    config.generators.system_tests = nil
    config.generators.assets = false
    config.generators.helper = false
    config.generators.view_specs = false

    config.lograge.enabled = true

    logger = ActiveSupport::Logger.new(STDOUT)
    logger.formatter = config.log_formatter
    config.logger = ActiveSupport::TaggedLogging.new(logger)
  end
end
