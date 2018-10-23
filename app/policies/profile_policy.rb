class ProfilePolicy < ApplicationPolicy
  def show?
    user.present? && user.space.present? && user.space == record.space
  end
end
