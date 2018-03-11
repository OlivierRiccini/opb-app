class ImagesController < ApplicationController
  before_action :find_image, only: [ :destroy ]

  def new
    @image = Image.new
    @project = Project.find(params[:project_id])
    authorize @image
  end

  def create
    @image = Image.new(image_params)
    authorize @image
    @image.project = Project.find(params[:project_id])
    if @image.save
      redirect_to project_path(@image.project)
    else
      render new_project_image_path
    end
  end

  def destroy
    @image.destroy
    authorize @image
    @project = @image.project

    redirect_to project_path(@project)
  end

  private

  def image_params
    params.require(:image).permit(:url)
  end

  def find_image
    @image = Image.find(params[:id])
  end
end
