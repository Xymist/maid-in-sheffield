class Message
  
 attr_accessor :name, :email, :subject, :body
  
 extend ActiveModel::Naming
 include ActiveModel::Conversion
 include ActiveModel::Validations
 include ActionView::Helpers::TextHelper

  validates :name, :email, :subject, :body, :presence => true
  validates :email, :format => { :with => %r{.+@.+\..+} }, :allow_blank => true

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def persisted?
    false
  end

end