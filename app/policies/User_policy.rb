class UserPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
  end
  def admin_list?
    user.admin?
  end

  def show?
    # user[:admin]
    true
  end
end
