Rails.application.routes.draw do
  
  resources :dishes, :only => [:index, :create]
  resources :stars, :only => [:create]
end
