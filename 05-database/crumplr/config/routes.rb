Rails.application.routes.draw do


  # custom routes
        # controller : action
  get '/about' => 'pages#about'
  get '/contact' => 'pages#contact'


  # get '/' => 'posts#index'
  # get '/posts/:id' => 'posts#show'

  # get '/posts/new' => 'posts#new' # get this
  # post '/posts' => 'posts#create' # and this to work

  # get '/posts/:id/edit' => 'posts#edit' # show edit form
  # put '/posts/:id' => 'posts#update'    # do the actual update

  # delete '/posts/:id' => 'posts#destroy'


  # standard crud routes
  resources :posts # crud app resources 

end
