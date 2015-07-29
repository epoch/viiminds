require 'active_record'

# connect to the database
ActiveRecord::Base.establish_connection({
  :adapter => 'postgresql',
  :username => 'daniel',
  :database => 'goodfoodhunting'
})