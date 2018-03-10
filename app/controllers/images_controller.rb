class ImagesController < ApplicationController
  def create
    @image = Image.new(image_params)
    @image.restaurant = Project.find(params[:project_id])
    @image.save
  end

  private

  def image_params
    params.require(:image).permit(:url)
  end
end
