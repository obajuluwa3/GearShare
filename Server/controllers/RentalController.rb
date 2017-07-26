class RentalController < Sinatra::Base
  get '/' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    rentals = Rental.all
    rentals.to_json
  end

  get '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    rental = Rental.find(id)
    rental.to_json
  end

# {"active":true, "rental_date":"01-01-2017", "cost":50.00, "user_id":1, "equipment_id":6}  
  post '/' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    request_body = JSON.parse(request.body.read)
    rental = Rental.new(request_body)
    rental.save
    rental.to_json
  end

  patch '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    rental = Rental.find(id)
    request_body = JSON.parse(request.body.read)
    rental.update_attributes(request_body)
    rental.save
    rental.to_json
  end

  delete '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    rental = Rental.find(id)
    rental.destroy
    rentals = Rental.all
    rentals.to_json
  end
end
