class AddUuidToSpaces < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :uuid, :string
  end
end
