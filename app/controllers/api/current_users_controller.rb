class Api::CurrentUsersController < ApplicationController
  def show
    render json: {
      current_user: {
        name: current_user&.name,
        email: current_user&.email,
      },

      space: {
        name: space&.name,
        slug: space&.slug,
      },

      authorized: current_user.present?
    }
  end

  private

  def space
    current_user&.space
  end
end
