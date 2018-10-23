class Api::Spaces::ProfilesController < ApplicationController
  before_action :find_space

  def index
    authorize @space, :index_profiles?
    @profiles = @space.profiles
  end

  def show
    @profile = Profile.friendly.find(params[:id])
    authorize @profile, :show?
  end

  private

  def find_space
    @space = Space.find_by!(uuid: params[:space_id])
  end
end
