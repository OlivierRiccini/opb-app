class MessagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :new, :create ]
  before_action :find_message, only: [ :show, :destroy ]

  def show
    authorize @message
    @message.update(state: true)
  end

  def new
    @new_message = Message.new
    authorize @new_message
  end

  def create
    @new_message = Message.new(message_params)
    authorize @new_message

    if @new_message.save
      # respond_to do |format|
      #   format.html { redirect_to root_path }
      #   format.js # <-- will render `app/views/new_messages/create.js.erb`
      # end
      flash[:success] = "Merci pour votre message,
                         nous vous contacterons dès
                         que possible!"

      redirect_to root_path
    else
      render new_message_path
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
