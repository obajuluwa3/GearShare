class User < ActiveRecord::Base
  self.table_name = 'users';
  has_many :equipments, class_name: 'Equipment'
  has_many :rentals, class_name: 'Rental'
  has_secure_password
end