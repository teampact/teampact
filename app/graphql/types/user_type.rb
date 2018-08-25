module Types
  class UserType < Types::BaseObject
    description 'Current logged in user'

    field :email, String, null: false
    field :first_name, String, null: false
    field :last_name, String, null: false
  end
end
