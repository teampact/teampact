module Types
  class QueryType < Types::BaseObject

    field :current_user, Types::UserType, null: true

    def current_user
      context[:current_user]
    end

    field :profile, Types::ProfileType, null: true do
      argument :id, String, required: true
    end

    def profile(id:)
      Profile.find_by(slug: id)
    end

    field :profiles, [Types::ProfileType], null: false

    def profiles
      Profile.all
    end
  end
end
