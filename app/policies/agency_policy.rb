class AgencyPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
  end

  def edit?
    user.admin?
  end

  def update?
    user.admin?
  end
end
