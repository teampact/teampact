class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  skip_before_action :verify_authenticity_token

  def google_oauth2
    @user = User.from_omniauth(auth_hash)
    sign_in_and_redirect @user
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end
