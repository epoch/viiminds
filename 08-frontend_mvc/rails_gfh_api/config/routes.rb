Rails.application.routes.draw do
  
  resources :dishes, :only => [:index, :create]
end
