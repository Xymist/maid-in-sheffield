class SiteController < ApplicationController
  def price_grid
    @prices = Home.all.order('id')
    @services = Service.all.order('number')
    @firstservice = Service.first
    @lastservice = Service.last
  end
end
