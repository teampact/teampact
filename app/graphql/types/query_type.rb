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
      Profile.friendly.find(id)
    end

    field :profiles, [Types::ProfileType], null: false

    def profiles
      Profile.all
    end

    field :space, Types::SpaceType, null: false do
      argument :id, String, required: true
    end

    def space(id:)
      Space.friendly.find(id)
    end
  end
end
