FactoryBot.define do
  factory :profile do
    user
    email { Faker::Internet.email }
    name { [user.last_name, user.first_name].join(' ') }
    tagline { Faker::BackToTheFuture.quote }
  end
end
