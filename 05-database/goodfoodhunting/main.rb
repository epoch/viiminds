require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

before do
  sql = 'SELECT DISTINCT dish_type FROM dishes;'
  @dish_types = run_sql(sql).map {|type| type['dish_type']}
end

get '/' do
  sql = 'SELECT * FROM dishes;'
  @dishes = run_sql(sql) # always going to be a collection
  erb :index
end

get '/dish_types/:dish_type' do
  sql = "select * from dishes where dish_type = '#{ params[:dish_type] }'"
  @dishes = run_sql(sql)
  erb :index
end

# to show the form
get '/dishes/new' do
  erb :new
end

# create the dish
post '/dishes' do
  sql = "INSERT INTO dishes (name,image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');"
  run_sql(sql)
  redirect to '/'
end

# to show the edit form
get '/dishes/:id/edit' do
  sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  @rows = run_sql(sql)
  @dish = @rows[0]
  erb :edit
end

# update the dish
put '/dishes/:id' do
  sql = "UPDATE dishes SET name='#{ params[:name] }', image_url='#{ params[:image_url] }', dish_type='#{ params[:dish_type] }' WHERE id = #{ params[:id] };"
  run_sql(sql)
  redirect to "/dishes/#{ params[:id] }"
end

# show the actual single dish
get '/dishes/:id' do
  sql = "SELECT * FROM dishes WHERE id = #{ params[:id] }"
  @dish = run_sql(sql)[0]
  erb :show
end

# delete the actual dish
delete '/dishes/:id/delete' do
  # generate sql to delete dish with the correct id
  sql = "DELETE FROM dishes WHERE id = #{ params[:id] };"
  run_sql(sql)
  # redirect to home page
  redirect to '/'
end

def run_sql(sql)
  db = PG.connect(:dbname => 'goodfoodhunting')
  rows = db.exec(sql)
  db.close
  return rows
end





