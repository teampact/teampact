class Api::CurrentUsersController < ApplicationController
  def show
    render json: {
      current_user: {
        name: current_user&.name,
        email: current_user&.email,
      },
      authorized: current_user.present?
    }
  end
end
