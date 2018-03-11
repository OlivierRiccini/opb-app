class UsersController < ApplicationController

  def show
    @user = User.where(admin: true)
    authorize @user
    @projects = policy_scope(Project).order(created_at: :desc)
  end
end

