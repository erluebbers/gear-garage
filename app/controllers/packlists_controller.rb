class PacklistsController < ApplicationController
  before_action :authorize

  def create
    user = User.find_by(id: session[:user_id])
    packlist = user.packlists.create(packlist_params)
    if packlist.valid?
      render json: packlist, status: :created
    else
      render json: { errors: [packlist.errors] }, status: :unprocessable_entity
    end 
  end

  def index
    packlists = Packlist.all
    render json: packlists
  end 

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def packlist_params
    params.permit(:trip_id, :item_id)
  end

end
