class ApplicationController < ActionController::Base
  include Pundit
  protect_from_forgery
  protect_from_forgery with: :exception   # Prevent CSRF attacks by raising an exception.
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
      devise_parameter_sanitizer.for(:account_update) << :name
      devise_parameter_sanitizer.for(:account_update) << :bio

      devise_parameter_sanitizer.for(:sign_up) << :name
  end
end
