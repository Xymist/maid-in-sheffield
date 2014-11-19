class SiteController < ApplicationController
  def price_grid
    @prices = Home.all
  end
end
