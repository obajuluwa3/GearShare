class RentalController < ApplicationController
  get '/' do
    rentals = Rental.all
    rentals.to_json
  end

  get '/myrentals' do
    token = params[:token]
    user = User.find_by(token: token)
    rentals = user.rentals
    rental_info = []
    rentals.each do |rental|
      equipment = rental.equipment
      user = rental.user
      group = {rental: rental, equipment: equipment, user: user}
      if rental.active == true
        rental_info.push(group)
      end
    end
    rental_info.to_json
  end

  get '/:id' do
    id = params[:id]
    rental = Rental.find(id)
    rental.to_json
  end

  post '/myrentals' do
    token = params[:token]
    user = User.find_by(token: token)
    request_body = JSON.parse(request.body.read)
    rental = Rental.new
    rental.active = request_body["active"]
    rental.rental_date = request_body["rental_date"]
    rental.cost = request_body["cost"]
    rental.user_id = user.id
    rental.equipment_id = request_body["equipment_id"]
    rental.save
    rental.to_json
  end
# {"active":true, "rental_date":"01-01-2017", "cost":50.00, "user_id":1, "equipment_id":6}  
  post '/' do
    request_body = JSON.parse(request.body.read)
    rental = Rental.new(request_body)
    rental.save
    rental.to_json
  end

  patch '/:id' do
    id = params[:id]
    rental = Rental.find(id)
    rental.equipment.available = false
    request_body = JSON.parse(request.body.read)
    rental.update_attributes(request_body)
    rental.save
    token = params[:token]
    user = User.find_by(token: token)
    rentals = user.rentals
    rental_info = []
    rentals.each do |rental|
      equipment = rental.equipment
      user = rental.user
      group = {rental: rental, equipment: equipment, user: user}
      if rental.active == true
        rental_info.push(group)
      end
    end
    rental_info.to_json 
  end

  delete '/:id' do
    id = params[:id]
    rental = Rental.find(id)
    rental.destroy
    rentals = Rental.all
    rentals.to_json
  end
end
