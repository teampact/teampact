class SpacePolicy < ApplicationPolicy
  def show?
    user.present? && user.space.present? && user.space == record
  end

  def index_profiles?
    show?
  end
end
