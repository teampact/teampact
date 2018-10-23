class ProfilePolicy < ApplicationPolicy
  def show?
    user.present? &&
      user.space_id.present? &&
      user.space_id == record.space_id
  end
end
