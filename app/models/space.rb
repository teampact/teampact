# == Schema Information
#
# Table name: spaces
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  slug       :string
#  uuid       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Space < ApplicationRecord
  include FriendlyId

  friendly_id :name, use: :slugged

  before_create :generate_uuid

  private

  def generate_uuid
    self.uuid = SecureRandom.uuid
  end
end
