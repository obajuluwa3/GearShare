class EquipmentController < ApplicationController
  get '/' do
    equipments = Equipment.all
    # equipments.to_json
    all_equipments = []
    equipments.each do |equipment|
      rentals = equipment.rentals
      user = equipment.user
      equips_and_rentals = {equipment: equipment, user: user, rentals: rentals}
      all_equipments.push(equips_and_rentals)
    end
    all_equipments.to_json
  end

  get '/userlist' do
    equipments = Equipment.find(user_id)
    equipments.to_json

  end

  get '/:id' do
    id = params[:id]
    equipment = Equipment.find(id)
    equipment.to_json
  end

# {"equip_type":"Acoustic Guitar", "model":"Fender", "brand":"FA-100 Dreadnought", "category":"Guitar", "condition":"Excellent", "available":true, "equip_img":"https://cdn.shopify.com/s/files/1/1210/3886/products/fender-fa-100-acoustic-pack-dreadnought_1600x.jpg?v=1468336757", "hourly_rental_price":5.00, "daily_rental_price":50.00, "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", "id_user":1}
  post '/new' do
    request_body = JSON.parse(request.body.read)
    equipment = Equipment.new(request_body)
    equipment.save
    equipment.to_json
  end

  patch '/:id' do
    id = params[:id]
    equipment = Equipment.find(id)
    request_body = JSON.parse(request.body.read)
    equipment.update_attributes(request_body)
    equipment.save
    equipment.to_json
  end

  delete '/:id' do
    id = params[:id]
    equipment = Equipment.find(id)
    equipment.destroy
    equipments = Equipment.all
    equipments.to_json
  end
end
