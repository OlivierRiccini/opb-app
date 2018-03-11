class ImagePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
  end

  def new?
    user.admin?
  end

  def create?
    user.admin?
  end

   def edit?
    user.admin?
  end

  def update?
    user.admin?
  end

  def destroy?
    user.admin?
  end

  def admin_list?
    user.admin?
  end
end
