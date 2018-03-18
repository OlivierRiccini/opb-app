class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @project = Project.last
  end

  def home
    @projects = Project.all.last(5)
  end
end
