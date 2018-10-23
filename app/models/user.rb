# == Schema Information
#
# Table name: users
#
#  id                     :bigint(8)        not null, primary key
#  admin                  :boolean          default(FALSE)
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :inet
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  first_name             :string
#  last_name              :string
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :inet
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer          default(0), not null
#  state                  :string
#  superadmin             :boolean          default(FALSE)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#

class User < ApplicationRecord
  include AASM

  has_one :profile

  delegate :space, :space_id, to: :profile, allow_nil: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  devise :omniauthable, omniauth_providers: [:google_oauth2]

  aasm column: 'state' do
    state :active, initial: true
    state :suspended

    event :activate do
      transitions from: :suspended, to: :active
    end

    event :suspend do
      transitions from: :active, to: :suspended
    end
  end

  def self.from_omniauth(auth_hash)
    find_or_create_by(email: auth_hash.info.email) do |u|
      u.first_name = auth_hash.info.first_name
      u.last_name = auth_hash.info.last_name
      u.password = SecureRandom.uuid
    end
  end

  def name
    [first_name, last_name].join(' ')
  end
end
