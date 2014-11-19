# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
home_list = [
  [ "One Bedroom", 69, 99, 129],
  [ "Two Bedrooms", 79, 109, 139],
  [ "Three Bedrooms", 89, 119, 149],
  [ "Four Bedrooms", 99, 129, 159],
  [ "Five Bedrooms", 109, 139, 169]
]

home_list.each do |size, bronze_price, silver_price, gold_price|
  Home.create( size: size, bronze_price: bronze_price, silver_price: silver_price, gold_price: gold_price )
end
