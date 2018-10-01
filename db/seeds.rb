# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

include FactoryBot::Syntax::Methods

kolomeetz = User.find_or_create_by(email: 'kolomeetz@gmail.com') do |u|
  u.password = 'password'
end

space = create :space

create :profile, user: kolomeetz, space: space

10.times do
  u = create :user
  create :profile, user: u, space: space
end
