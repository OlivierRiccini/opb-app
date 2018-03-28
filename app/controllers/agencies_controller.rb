class AgenciesController < ApplicationController
  before_action :find_agency, only: [ :edit, :update ]

  def edit
    authorize @agency
  end

  def update
    authorize @agency
    @agency.update(agency_params)
    redirect_to dashboard_path
  end

  private

  def agency_params
    params.require(:agency).permit(:text, :address, :email, :phone)
  end

   def find_agency
    @agency = Agency.first
  end
end
