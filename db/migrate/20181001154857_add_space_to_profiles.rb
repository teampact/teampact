class AddSpaceToProfiles < ActiveRecord::Migration[5.2]
  def change
    add_reference :profiles, :space, foreign_key: true
  end
end
