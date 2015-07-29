require 'active_record'
require 'pry'

# show sql in the terminal
ActiveRecord::Base.logger = Logger.new(STDERR)

require_relative 'config'
require_relative 'dish'
require_relative 'dish_type'

binding.pry