# == Schema Information
#
# Table name: profiles
#
#  id         :bigint(8)        not null, primary key
#  email      :string
#  name       :string
#  phone      :string
#  slug       :string
#  state      :string
#  tagline    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint(8)
#
# Indexes
#
#  index_profiles_on_user_id  (user_id)
#

class Profile < ApplicationRecord
  belongs_to :user
end
