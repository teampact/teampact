Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"

  devise_for :users, controllers: {
    omniauth_callbacks: 'omniauth_callbacks',
    # registrations: 'registrations'
  }

  # TODO: remove it
  resource :user, only: :show

  root to: 'spa#index'

  get '*path', to: 'spa#index', as: :spa_path, constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
end
