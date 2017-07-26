class Rental < ActiveRecord::Base
	self.table_name = 'rentals'
	belongs_to :user
	belongs_to :equipment
end