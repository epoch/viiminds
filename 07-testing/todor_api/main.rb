require 'sinatra'
require 'sinatra/reloader'

require_relative 'database_config'
require_relative 'task'

after do
  ActiveRecord::Base.connection.close
end

get '/todos.json' do
  content_type :json
  response.headers['Access-Control-Allow-Origin'] = '*'
  @tasks = Task.all
  @tasks.to_json
end





