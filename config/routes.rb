Rails.application.routes.draw do
  devise_for :users, controllers: {
    omniauth_callbacks: 'omniauth_callbacks',
  }

  namespace :api, defaults: { format: :json } do
    resource :current_user, only: [:show]
    resources :spaces, only: [] do
      scope module: :spaces do
        resources :profiles, only: [:index]
      end
    end
  end

  root to: 'spa#index'

  get '*path', to: 'spa#index', as: :spa_path, constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
end
