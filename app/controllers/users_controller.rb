class UsersController < ApplicationController
  def show
    render json: { user: {
      email: current_user.email,
    } }
  end
end
