module Types
  class ProfileType < Types::BaseObject

    field :name, String, null: false
    field :slug, String, null: false
    field :email, String, null: true
    field :tagline, String, null: true
  end
end
