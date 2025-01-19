Rails.application.routes.draw do
  get 'home/index'
  get '/*path', to: 'home#index', constraints: lambda { |req| !req.xhr? }



  post '/api/user/create', to:'api/users#create'
  post 'api/session/create', to: 'api/sessions#create'
  post '/api/user/current_user', to: 'api/users#current_user'
  post '/api/user/update', to: 'api/users#update'
  post '/api/post/self_post', to: 'api/posts#self_post'
  get '/api/post/index', to: 'api/posts#index'
  post '/api/user/:id', to: 'api/users#show'
  post '/api/post/create', to: 'api/posts#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "home#index"
end
