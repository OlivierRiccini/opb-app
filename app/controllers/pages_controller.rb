class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @projects = Project.all
    @agency = Agency.first
    @message = Message.new
  end
end
