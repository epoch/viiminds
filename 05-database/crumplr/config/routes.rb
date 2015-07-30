Rails.application.routes.draw do

        # controller : action
  get '/' => 'posts#index'
  get '/about' => 'pages#about'
  get '/contact' => 'pages#contact'

  get '/posts/new' => 'posts#new' # get this
  post '/posts' => 'posts#create' # and this to work

  get '/posts/:id/edit' => 'posts#edit' # show edit form
  put '/posts/:id' => 'posts#update'    # do the actual update

end
