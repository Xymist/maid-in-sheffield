class SiteController < ApplicationController
  def price_grid
    @prices = Home.all.order('id')
    @services = Service.all.order('id')
  end
end
