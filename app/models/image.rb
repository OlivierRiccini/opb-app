class Image < ApplicationRecord
  belongs_to :project
  mount_uploader :url, ImageUploader
end
