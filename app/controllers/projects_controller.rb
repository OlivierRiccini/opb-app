class ProjectsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    Project.new
  end

  def create
    authorize @project
    @new_project = Project.new(project_params)

    @new_project.save
  end


  private

  def project_params
    params.require(:project).permit(:title, :type_1, :type_2, :description, :content, :state)
  end
end
