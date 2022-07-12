class TripsController < ApplicationController
  before_action :authorize

  def index
    user = User.find(params[:user_id])
    trips = user.trips
    render json: trips, include: :items
  end

  def sorted_trips
    trips = Trip.order(:title)
    render json: trips
  end 


  def create
    user = User.find_by(id: session[:user_id])
    trip = user.trips.create(trip_params.slice(:trip))
    if trip.valid?
      render json: trip, status: :created
    else
      render json: { errors: [trip.errors] }, status: :unprocessable_entity
    end 
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def trip_params
    params.permit(:title, :trip_description, :year)
  end


end
