class ProjectsController < ApplicationController
  # skip_before_action :authenticate_user!
  before_action :find_project, only: [ :show, :edit, :update, :destroy ]

  def show
    authorize @project
  end

  def new
    @project = Project.new
    @project.images.build
    authorize @project
  end

  def create
    @new_project = Project.new(project_params)
    authorize @new_project
    if @new_project.save
      redirect_to project_path(@new_project)
    else
      render new_project_path
    end
  end

  def edit
    authorize @project
    @image = Image.where(project_id: params[:id])
  end

  def update
    authorize @project
    @project.update(project_params)

    redirect_to dashboard_path
  end

  def destroy
    authorize @project
    @project.destroy

    redirect_to dashboard_path
  end

  private

  def project_params
    params.require(:project).permit(:title, :type_1, :type_2, :description, :content, :state)
  end

  def find_project
    @project = Project.find(params[:id])
  end
end
