class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :email
      t.string :name
      t.string :phone
      t.string :slug
      t.string :state
      t.string :tagline

      t.belongs_to :user

      t.timestamps
    end
  end
end
