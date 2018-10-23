class ApplicationController < ActionController::Base
  include Pundit

  rescue_from Pundit::NotAuthorizedError, with: :not_authorized

  private

  def not_authorized
    head 401
  end
end
