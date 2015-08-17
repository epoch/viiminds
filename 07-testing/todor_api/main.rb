require 'sinatra'
require 'sinatra/reloader'
require 'pry'

require_relative 'database_config'
require_relative 'task'

after do
  ActiveRecord::Base.connection.close
end

before do
  content_type :json
  response.headers['Access-Control-Allow-Origin'] = '*'
  response.headers['Access-Control-Allow-Methods'] = 'PUT,DELETE'
  response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"
  response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
end

get '/todos.json' do
  @tasks = Task.all
  @tasks.to_json
end

post '/todos' do
  task = Task.new
  task.body = params[:body]
  task.save
  task.to_json
end

get '/random_task' do
  @task = Task.all.sample
  @task.to_json  
end

delete '/todos/:id' do
  task = Task.find params[:id]
  task.destroy
  task.to_json
end

options "*" do
  200
end

put '/todos/:id' do
  @task = Task.find params[:id]
  @task.completed = !@task.completed
  @task.save
  @task.to_json
end





