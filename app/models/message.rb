class Message < ApplicationRecord
  validates :from_email_address, presence: true
  validates_format_of :from_email_address, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  validates :from_tel, presence: true, format: { with: /[\+\d]{9,}/, message: "should only contain digits and '+'" }
  validates :subject, length: { minimum: 5, maximum: 50 }
  validates :message, length: { minimum: 20, maximum: 500 }
end
