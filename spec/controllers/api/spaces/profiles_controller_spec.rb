require 'rails_helper'

describe Api::Spaces::ProfilesController do
  let(:space) { create :space }
  let(:profile) { create :profile, space: space }

  describe 'GET #index' do
    subject { get :index, params: { space_id: space.uuid }, format: :json }


    context 'when user is anonymous' do
      before { subject }
      it { expect(response).to have_http_status :unauthorized }
    end

    context 'when user does not belongs to the space' do
      before { login }
      before { subject }
      it { expect(response).to have_http_status :unauthorized }
    end

    context 'when user belongs to the space' do
      before { login(profile.user) }
      before { subject }

      it { expect(response).to have_http_status :ok }
    end
  end
end
