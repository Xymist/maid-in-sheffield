class ContactController < ApplicationController
  def new
    @message = Message.new
  end

  def create
    @message = Message.new(contact_params)

    if @message.valid?
      NotificationsMailer.new_message(@message).deliver
      redirect_to(root_path, :notice => 'Your message was successfully sent.')
    else
      flash.now.alert = 'Please fill all fields.'
      render :new
    end
  end

  private
    def contact_params
      params.require(:message).permit(:name, :email, :subject, :body)
    end
end
