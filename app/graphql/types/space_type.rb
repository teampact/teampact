module Types
  class SpaceType < Types::BaseObject
    field :name, String, null: false
    field :slug, String, null: false
  end
end
