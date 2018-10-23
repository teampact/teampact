# frozen_string_literal: true

module Api
  class CurrentUsersController < ApplicationController
    def show
      render json: {
        current_user: {
          name: current_user&.name,
          email: current_user&.email
        },

        space: {
          name: space&.name,
          slug: space&.slug,
          uuid: space&.uuid
        },

        authorized: current_user.present?
      }
    end

    private

    def space
      current_user&.space
    end
  end
end
