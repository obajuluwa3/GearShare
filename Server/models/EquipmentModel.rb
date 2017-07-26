class Equipment < ActiveRecord::Base
	self.table_name = 'equipments'
	belongs_to :user
	has_many :users, through: :rentals
	has_many :rentals, class_name: 'Rental'
end