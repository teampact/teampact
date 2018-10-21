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

require 'rails_helper'

describe Space do

  let(:space) { create :space }

  describe '#generate_uuid' do
    it { expect(space.uuid).not_to be_empty }
  end
end
