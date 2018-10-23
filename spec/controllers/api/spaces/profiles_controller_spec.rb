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

  describe 'GET #show' do
    subject { get :show, params: { space_id: space.uuid, id: profile.slug }, format: :json }

    context 'when user is anonymous' do
      before { subject }
      it { expect(response).to have_http_status :unauthorized }
    end

    context 'when user belongs to another space' do
      before { login }
      before { subject }
      it { expect(response).to have_http_status :unauthorized }
    end

    context 'when user belongs the the space of this profile' do
      let(:another_profile) { create :profile, space: space }
      before { login another_profile.user }
      before { subject }
      it { expect(response).to have_http_status :ok }

      render_views

      it { expect(JSON.parse(response.body)).to be_a Hash }
      it { expect(JSON.parse(response.body))
        .to include 'slug', 'name', 'email', 'phone', 'tagline' }
    end


  end
end
