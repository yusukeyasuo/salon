class MenuContent < ApplicationRecord
  belongs_to :menu
  
  enum menu_id: { cut: 1, perm: 2, color: 3 }

end
