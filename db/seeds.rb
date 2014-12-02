# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
home_list = [
  [ "One-Bedroom", 69, 99, 129],
  [ "Two-Bedroom", 79, 109, 139],
  [ "Three-Bedroom", 89, 119, 149],
  [ "Four-Bedroom", 99, 129, 159],
  [ "Five-Bedroom", 109, 139, 169]
]

home_list.each do |size, bronze_price, silver_price, gold_price|
  Home.find_or_create_by(:size => size, :bronze_price => bronze_price, :silver_price => silver_price, :gold_price => gold_price)
end

service_list = [
  ["All Areas", "null", "null", "null", 1],
  ["Vacuuming", "true", "true", "true", 2],
  ["Dusting & Cobweb Removal", "true", "true", "true", 3],
  ["Blinds & Window Sills", "true", "true", "true", 4],
  ["Remove Rubbish & Empty Bins", "true", "true", "true", 5],
  ["Dust & Wipe Doors", "false", "true", "true", 6],
  ["Furniture", "false", "true", "true", 7],
  ["Light Switches & Doorknobs", "false", "true", "true", 8],
  ["Spot Clean Walls & Paintwork", "false", "false", "true", 9],
  ["Kitchen", "null", "null", "null", 10],
  ["Mop Hard Floors", "true", "true", "true", 11],
  ["Clean Countertops", "true", "true", "true", 12],
  ["Clean Stove & Fans", "true", "true", "true", 13],
  ["Scrub Sinks", "true", "true", "true", 14],
  ["Polish Stainless Steel", "true", "true", "true", 15],
  ["Clean Inside Microwave", "false", "true", "true", 16],
  ["Clean Cabinetry", "false", "true", "true", 17],
  ["Scrub Fridge", "false", "true", "true", 18],
  ["Clean Inside Cabinets", "false", "false", "true", 19],
  ["Bathrooms", "null", "null", "null", 20],
  ["Disinfect Hard Surfaces", "true", "true", "true", 21],
  ["Mop Floors", "true", "true", "true", 22],
  ["Clean Lavatories", "true", "true", "true", 23],
  ["Scrub Sinks", "true", "true", "true", 24],
  ["Polish Stainless Steel", "true", "true", "true", 25],
  ["Polish Mirrors", "true", "true", "true", 26],
  ["Scrub Baths & Showers", "false", "true", "true", 27],
  ["Clean Cabinetry", "false", "true", "true", 28],
  ["Clean & Tidy Inside Cabinets", "false", "false", "true", 29],
]

service_list.each do |name, bronze, silver, gold, number|
  Service.find_or_create_by(:name => name, :bronze => bronze, :silver => silver, :gold => gold :number => number)
end