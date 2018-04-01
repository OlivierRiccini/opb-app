class UsersController < ApplicationController

  def show
    @user = User.where(admin: true)
    authorize @user
    @messages = Message.all.order(created_at: :desc)
    @projects = policy_scope(Project).order(created_at: :desc)
    @agency = Agency.first
  end
end

