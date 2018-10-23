class Api::Spaces::ProfilesController < ApplicationController
  def index
    space = Space.find_by!(uuid: params[:space_id])
    authorize space, :index_profiles?

    @profiles = space.profiles
  end
end
