require 'SecureRandom'

class UserController < ApplicationController
  
  get '/' do
    users = User.all
    users.to_json
  end

  get '/:id' do
    id = params[:id]
    user = User.find(id)
    equipments = user.equipments
    p equipments.to_json
    {user: user, equipments: equipments}.to_json
  end

# {"email":"payne@qj.com", "username":"payne", "password":"soccer123", "address":"150 N. Michigan Avenue", "city":"Chicago", "state":"IL"}
  post '/register' do
    request_body = JSON.parse(request.body.read)
    user = User.new
    user.email = request_body["email"]
    user.username = request_body["username"]
    user.password = request_body["password"]
    user.address = request_body["address"]
    user.city = request_body["city"]
    user.state = request_body["state"]
    user.token = SecureRandom.hex
    user.save
    user.to_json
  end

  patch '/:id' do
    id = params[:id]
    user = User.find(id)
    request_body = JSON.parse(request.body.read)
    user.update_attributes(request_body)
    user.save
    user.to_json
  end

  delete '/:id' do
    id = params[:id]
    user = User.find(id)
    user.destroy
    users = User.all
    users.to_json
  end

  post '/login' do
    user_details = JSON.parse(request.body.read)
    user = User.find_by({username: user_details["username"]})
    if user && user.authenticate(user_details["password"])
      user.to_json
    else
      "ACCESS DENIED"
    end
  end

end
