class NotificationsMailer < ActionMailer::Base
  default :from => 'contact-form@maidinsheffield.co.uk'
  default :to => 'maidinsheffield@maidinsheffield.co.uk'

  def new_message(message)
    @message = message
    mail(:subject => "#{message.subject}", :body => "#{message.body}")
  end
end
