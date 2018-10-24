require 'rails_helper'
require 'access_examples_spec'

context 'when user is authorized' do
  describe Api::CurrentUsersController do
    let(:user) { create :user }

    describe 'GET #show' do
      subject { get :show, format: :json }

      render_views

      it_behaves_like 'allows access'

      context 'when user is not logged in' do
        before { subject }
        it { expect(JSON.parse(response.body)['authorized']).to eq false }
        it { expect(JSON.parse(response.body).dig('current_user', 'name')).to be_blank }
      end

      context 'when user is logged in' do
        before { login(user) }
        before { subject }
        it { expect(JSON.parse(response.body)['authorized']).to eq true }
        it { expect(JSON.parse(response.body).dig('current_user', 'name')).to include user.first_name, user.last_name }
      end
    end
  end
end
