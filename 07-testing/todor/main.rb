require 'sinatra'
require 'sinatra/reloader'

require_relative 'database_config'
require_relative 'task'

after do
  ActiveRecord::Base.connection.close
end

get '/' do
  @tasks = Task.all
  erb :index
end





