source 'https://rubygems.org'


gem 'bundler', '>= 1.7.0'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.0.rc3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
# fixes jquery not loading on page load, but only on page REload
gem 'jquery-turbolinks'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
gem 'fb_graph'
# for that bigVideo niceness
source 'https://rails-assets.org' do
	gem 'rails-assets-BigVideo.js'
end

# New Relix Addon for Heroku (auto pinging so the app doesn't sleep)
gem 'newrelic_rpm'

group :development, :test do
	# Use sqlite3 as the database for Active Record
	gem 'sqlite3',					'1.3.9'
	gem 'byebug',					'3.4.0'
	gem 'web-console',				'2.0.0.beta3'
	gem 'spring',					'1.1.3'
end

group :test do
	gem 'minitest-reporters',		'1.0.5'
	gem 'mini_backtrace',			'0.1.3'
	gem 'guard-minitest',			'2.3.1'
end

group :production do
	gem 'pg',						'0.17.1'
	gem 'rails_12factor',			'0.0.2'
end

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

