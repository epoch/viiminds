require 'pry'
require 'sinatra'
require 'sinatra/reloader' # autoreload

get '/' do

  @total = 1 + 1

  erb :index
end

get '/search' do
  erb :search
end

get '/magic' do
  erb "oh you want #{ params[:search_string] }"
end
