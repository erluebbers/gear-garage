# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Beginning seeding..."


Item.create(name: "Kelty Sleeping Bag", description: "blue/red 0 degree sleeping bag", condition: 3, user_id: 1)
Item.create(name: "MSR 1-P Tent", description: "gray/red single person tent with fly", condition: 5, user_id: 1)
Item.create(name: "Trekking Poles", description: "TrailBuddy Hiking Poles", condition: 2, user_id: 1)
Item.create(name: "Blue Diamond Head Lamp", description: "Black Headlamp with red light", condition: 5, user_id: 1)
Item.create(name: "Mammut Pack", description: "blue/red 0 degree sleeping bag", condition: 3, user_id: 1)

Trip.create(title: "BANFF", trip_description:"5 day car-camping at Johnson Campground", year: 2018, user_id: 1)
Trip.create(title: "Sawtooth Wilderness", trip_description:"5-day backpacking from Stanley", year: 2021, user_id: 1)
Trip.create(title: "Enchantments Wilderness", trip_description:"3 day backpacking to Stuart Lake", year: 2021, user_id: 1)
Trip.create(title: "Gros Morne National Park", trip_description:"Car Camping for 7 days", year: 2016, user_id: 1)

Packlist.create(user_id: 1, item_id: 1, trip_id: 1)
Packlist.create(user_id: 1, item_id: 2, trip_id: 1)
Packlist.create(user_id: 1, item_id: 3, trip_id: 2)
Packlist.create(user_id: 1, item_id: 4, trip_id: 2)
Packlist.create(user_id: 1, item_id: 5, trip_id: 3)
Packlist.create(user_id: 1, item_id: 1, trip_id: 3)
Packlist.create(user_id: 1, item_id: 2, trip_id: 4)
Packlist.create(user_id: 1, item_id: 3, trip_id: 4)

puts "Finished seeding..."
