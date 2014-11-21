json.array!(@homes) do |home|
  json.extract! home, :id, :size, :bronze_price, :silver_price, :gold_price
  json.url home_url(home, format: :json)
end
