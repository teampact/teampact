module ControllersHelper
  def login(user = FactoryBot.create(:user))
    @request.env['devise.mapping'] = Devise.mappings[:user]
    sign_in user
  end
end
