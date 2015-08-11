require 'active_record'

options = {
  adapter: 'postgresql',
  username: 'daniel',
  database: 'todor'
}


ActiveRecord::Base.establish_connection(options)