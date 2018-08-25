Rails.application.routes.draw do
  devise_for :users, controllers: {
    omniauth_callbacks: 'omniauth_callbacks',
    registrations: 'registrations'
  }

  # get '/auth/:provider', to: 'sessions#create'
  # get '/auth/:provider/callback', to: 'sessions#create'
  #

  resource :user, only: :show

  root to: 'spa#index'

  get '*path', to: 'spa#index', as: :spa_path, constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
end
