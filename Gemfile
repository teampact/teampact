source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.3'

gem 'dotenv-rails', require: 'dotenv/rails-now'
gem 'rails', '~> 5.2.1'

# gem 'bcrypt', '~> 3.1.7' # Use ActiveModel has_secure_password
# gem 'mini_magick', '~> 4.8' # Use ActiveStorage variant
# gem 'redis', '~> 4.0'
gem 'aasm'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'coffee-rails', '~> 4.2'
gem 'devise'
gem 'friendly_id', '~> 5.2.0'
gem 'graphql', '~> 1.8.10'
gem 'jbuilder', '~> 2.5'
gem 'lograge'
gem 'omniauth-google-oauth2'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'pundit'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'factory_bot_rails'
  gem 'rspec-rails', '~> 3.8'
  gem 'faker'
  gem 'rspec-rails', '~> 3.7'
end

group :development do
  gem 'annotate'
  gem 'bullet'
  gem 'foreman', require: false
  gem 'graphiql-rails'
  gem 'guard', require: false
  gem 'guard-rspec', require: false
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'rubocop'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'chromedriver-helper'
  gem 'rspec_junit_formatter'
  gem 'selenium-webdriver'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
