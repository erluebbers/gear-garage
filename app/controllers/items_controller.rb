class ItemsController < ApplicationController
  before_action :authorize

  def index
    items = Item.all
    render json: items, include: :trips
  end

  def show
    item = Item.find(params[:id])
    render json: item, include: :trips
  end 

  def create
    user = User.find_by(id: session[:user_id])
    item = user.items.create(item_params)
    if item.valid?
      render json: item, status: :created
    else
      render json: { errors: [item.errors] }, status: :unprocessable_entity
    end 
  end

  def destroy
    item = Item.find(params[:id])
    if item
      item.destroy
      head :no_content
    else
      render json: {error: "item not found"}, status: :not_found
    end
  end 

  def update
    item = Item.find(params[:id])
    if item
      item.update(item_params)
      render json: item, status: :accepted
    else
      render json: { error: "Item not Found" }, status: :not_found
    end
  end

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def item_params
    params.permit(:name, :description, :condition)
  end


end
