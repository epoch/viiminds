require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'active_record'

# connect to the database
ActiveRecord::Base.establish_connection({
  :adapter => 'postgresql',
  :username => 'daniel',
  :database => 'goodfoodhunting'
})

# for activerecord to map to table dishes
class Dish < ActiveRecord::Base
end

before do
  @dish_types = Dish.pluck(:dish_type).uniq
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
  dish.dish_type = params[:dish_type]
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
  @dish.dish_type = params[:dish_type]
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


