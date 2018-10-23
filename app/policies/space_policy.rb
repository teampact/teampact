class SpacePolicy < ApplicationPolicy
  def index_profiles?
    user.present? && user.space.present? && user.space == record
  end
end
