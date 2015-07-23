require 'sinatra'

get '/' do
  erb :index
end

get '/contact' do
  "please give me money"
end

get '/about' do
  erb :about
end

get '/hello/:name' do
  "hello there #{ params[:name] }"
end

# just like a function
get '/calc/multiply/:num1/:num2' do
  # I do
  "win: #{ params[:num1].to_i * params[:num2].to_i}"
end