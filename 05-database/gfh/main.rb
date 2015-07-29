require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

require_relative 'config'
require_relative 'dish'
require_relative 'dish_type'

before do
  @dish_types = DishType.all
end

after do # so we do not run out of database connection
  ActiveRecord::Base.connection.close
end

get '/dish_types/:dish_type_id' do
  @dishes = Dish.where(dish_type_id: params[:dish_type_id])
  erb :index
end

get '/' do
  @dishes = Dish.all
  erb :index
end

# new
get '/dishes/new' do
  erb :new
end

# create
post '/dishes' do
  dish = Dish.new
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.dish_type_id = params[:dish_type_id]
  dish.save # save to database
  # i am do no error checking watsoever
  redirect to '/'
end

# show
get '/dishes/:id' do
  @dish = Dish.find params[:id]
  erb :show
end

# edit
get '/dishes/:id/edit' do
  @dish = Dish.find params[:id]
  erb :edit
end

# update
put '/dishes/:id' do
  @dish = Dish.find params[:id]
  @dish.name = params[:name]
  @dish.image_url = params[:image_url]
  @dish.dish_type_id = params[:dish_type_id]
  @dish.save  
  redirect to "/dishes/#{ @dish.id }"
end

# delete
delete '/dishes/:id' do
  @dish = Dish.find params[:id]
  @dish.destroy # why destroy and not delete?? 
  # actually for now you can use either 
  redirect to '/'
end


