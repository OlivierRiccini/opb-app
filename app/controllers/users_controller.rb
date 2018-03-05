class UsersController < ApplicationController
  skip_before_action :authenticate_user!

  def show
    @projects = Project.all
    authorize @projects
  end
end

