require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  sql = 'SELECT * FROM dishes;'
  @dishes = run_sql(sql) # always going to be a collection

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
post '/dishes/:id' do
  sql = "UPDATE dishes SET name='#{ params[:name] }', image_url='#{ params[:image_url] }' WHERE id = #{ params[:id] };"
  run_sql(sql)
  redirect to "/dishes/#{ params[:id] }"
end

# show the actual single dish
get '/dishes/:id' do
  sql = "SELECT * FROM dishes WHERE id = #{ params[:id] }"
  @dish = run_sql(sql)[0]
  erb :show
end

def run_sql(sql)
  db = PG.connect(:dbname => 'goodfoodhunting')
  rows = db.exec(sql)
  db.close
  return rows
end





