class Comment < ActiveRecord::Base
  validates :content, :length => {:minimum => 1}
end
