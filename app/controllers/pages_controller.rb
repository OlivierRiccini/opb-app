class PagesController < ApplicationController
  skip_before_action :authenticate_user!
  def index
  end

  def home
    @projects = Project.all
  end
end
