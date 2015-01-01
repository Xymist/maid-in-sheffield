json.array!(@services) do |service|
  json.extract! service, :id, :name, :bronze, :silver, :gold, :number,
  json.url service_url(service, format: :json)
end
