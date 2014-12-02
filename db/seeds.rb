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
  ["All Areas", "null", "null", "null"],
  ["Vacuuming", "true", "true", "true"],
  ["Dusting & Cobweb Removal", "true", "true", "true"],
  ["Blinds & Window Sills", "true", "true", "true"],
  ["Remove Rubbish & Empty Bins", "true", "true", "true"],
  ["Dust & Wipe Doors", "false", "true", "true"],
  ["Spot Clean Walls & Paintwork", "true", "true", "true"],
  ["Kitchen", "null", "null", "null"],
  ["Mop Hard Floors", "true", "true", "true"],
  ["Clean Countertops", "true", "true", "true"],
  ["Clean Stove & Fans", "true", "true", "true"],
  ["Scrub Sinks", "true", "true", "true"],
  ["Polish Stainless Steel", "true", "true", "true"],
  ["Clean Inside Microwave", "false", "true", "true"],
  ["Clean Cabinetry", "false", "true", "true"],
  ["Scrub Fridge", "false", "true", "true"],
  ["Clean Inside Cabinets", "false", "false", "true"],
  ["Bathrooms", "null", "null", "null"],
  ["Disinfect Hard Surfaces", "true", "true", "true"],
  ["Mop Floors", "true", "true", "true"],
  ["Clean Lavatories", "true", "true", "true"],
  ["Scrub Sinks", "true", "true", "true"],
  ["Polish Stainless Steel", "true", "true", "true"],
  ["Polish Mirrors", "true", "true", "true"],
  ["Scrub Baths & Showers", "false", "true", "true"],
  ["Clean Cabinetry", "false", "true", "true"],
  ["Clean & Tidy Inside Cabinets", "false", "false", "true"],
]

service_list.each do |name, bronze, silver, gold|
  Service.find_or_create_by(:name => name, :bronze => bronze, :silver => silver, :gold => gold)
end