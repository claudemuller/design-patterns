import {
	VehicleFactory,
	CarFactory,
	BoatFactory,
	VehicleType,
	Vehicle,
	Car,
	Boat,
} from './Vehicle'

// Using a single factory/creator function to implement the Factory Method pattern.
vehicleFactory(VehicleType.Car, "Ford").drive()
vehicleFactory(VehicleType.Boat, "Bayliner").drive()

function vehicleFactory(type: VehicleType, brand: string): Vehicle {
	switch (type) {
	case VehicleType.Car:
		return new Car(brand)
	case VehicleType.Boat:
		return new Boat(brand)
	default:
		throw new Error("Undefined vehicle type :(")
	}
}

// Using a factory/creator for each product in order to implement the Factory Method pattern.
clientCode(new CarFactory(), 'VW')
clientCode(new BoatFactory(), 'Yamaha')

function clientCode(factory: VehicleFactory, brand: string) {
	const vehicle = factory.create(brand)
	vehicle.drive()
}

