class UserController < Sinatra::Base
  get '/' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    users = User.all
    users.to_json
  end

  get '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    user = User.find(id)
    equipments = user.equipments
    p equipments.to_json
    {user: user, equipments: equipments}.to_json
  end

# {"email":"payne@qj.com", "username":"payne", "password":"soccer123", "address":"150 N. Michigan Avenue", "city":"Chicago", "state":"IL"}
  post '/' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    request_body = JSON.parse(request.body.read)
    user = User.new(request_body)
    user.save
    user.to_json
  end

  patch '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    user = User.find(id)
    request_body = JSON.parse(request.body.read)
    user.update_attributes(request_body)
    user.save
    user.to_json
  end

  delete '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    user = User.find(id)
    user.destroy
    users = User.all
    users.to_json
  end
end
