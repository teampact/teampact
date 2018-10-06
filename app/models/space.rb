# == Schema Information
#
# Table name: spaces
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  slug       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Space < ApplicationRecord
  include FriendlyId

  friendly_id :name, use: :slugged
end