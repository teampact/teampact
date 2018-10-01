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
#  space_id   :bigint(8)
#  user_id    :bigint(8)
#
# Indexes
#
#  index_profiles_on_space_id  (space_id)
#  index_profiles_on_user_id   (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (space_id => spaces.id)
#

require 'rails_helper'

describe Profile do
end
