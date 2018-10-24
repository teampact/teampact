describe Api::Spaces::ProfilesController do
  let(:space) { create :space }
  let(:profile) { create :profile, space: space }

  describe 'GET #index' do
    subject { get :index, params: { space_id: space.uuid }, format: :json }

    context 'when user is anonymous' do
      it_behaves_like 'prevents unauthorized access'
    end

    context 'when user does not belongs to the space' do
      it_behaves_like 'prevents unauthorized access' do
        before { login }
      end
    end

    context 'when user belongs to the space' do
      it_behaves_like 'allows access' do
        before { login(profile.user) }
      end
    end
  end

  describe 'GET #show' do
    subject { get :show, params: { space_id: space.uuid, id: profile.slug }, format: :json }
    context 'when user is anonymous' do
      it_behaves_like 'prevents unauthorized access'
    end

    context 'when user belongs to another space' do
      it_behaves_like 'prevents unauthorized access' do
        before { login }
      end
    end

    context 'when user belongs the the space of this profile' do
      let(:another_profile) { create :profile, space: space }
      before { login another_profile.user }
      before { subject }

      it_behaves_like 'allows access'

      render_views

      it { expect(JSON.parse(response.body)).to be_a Hash }

      it { expect(JSON.parse(response.body))
        .to include 'slug', 'name', 'email', 'phone', 'tagline' }
    end
  end
end
