class NotificationsMailer < ActionMailer::Base
  default :from => "maidinsheffield@maidinsheffield.co.uk"
  default :to => "maidinsheffield@maidinsheffield.co.uk"

  def new_message(message)
    @message = message
    mail(:subject => "#{message.subject}")
  end
end
