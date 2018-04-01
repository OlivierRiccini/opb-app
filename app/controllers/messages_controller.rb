class MessagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :new, :create ]
  before_action :find_message, only: [ :show, :destroy ]

  def show
    authorize @message
  end

  def create
    @message = Message.new(message_params)
    authorize @message
    if @message.save
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  def destroy
    @message = Message.find(params[:id])
    authorize @message
    @message.destroy

    redirect_to dashboard_path
  end

  private

  def find_message
    @message = Message.find(params[:id])
  end

  def message_params
    params.require(:message).permit(:from_email_address, :from_tel, :subject, :message)
  end

end
