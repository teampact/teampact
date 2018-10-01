FactoryBot.define do
  factory :space do
    name { Faker::StarWars.planet }
  end
end
