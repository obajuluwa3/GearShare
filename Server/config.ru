require 'bundler'
Bundler.require

require './models/EquipmentModel'
require './models/UserModel'
require './models/RentalModel'

require './controllers/ApplicationController'
require './controllers/EquipmentController'
require './controllers/RentalController'
require './controllers/UserController'

run Sinatra::Application

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'equipment_rental'
)

map('/equipments'){run EquipmentController}
map('/users'){run UserController}
map('/rentals'){run RentalController}