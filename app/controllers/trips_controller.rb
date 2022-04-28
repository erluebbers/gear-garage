class TripsController < ApplicationController
  before_action :authorize

  def index
    trips = Trip.all
    render json: trips, include: :items
  end

  def show
    trip = Trip.find(params[:id])
    render json: trip, include: :items
  end 

  def create
    user = User.find_by(id: session[:user_id])
    trip = user.trips.create(trip_params)
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
