import {
	Factory,
	VehicleFactory,
	CarFactory,
	BoatFactory,
	VehicleType,
	Vehicle,
} from './Vehicle'

// Using a single factory/creator to implement the Factory Method pattern.
const vehicleFactory = new VehicleFactory()
vehicleFactory.build(VehicleType.Car, "Ford").drive()
vehicleFactory.build(VehicleType.Boat, "Bayliner").drive()

// Using a factory/creator for each product along with some client code
// in order to implement the Factory Method pattern.
clientCode(new CarFactory(), 'VW').drive()
clientCode(new BoatFactory(), 'Yamaha').drive()

function clientCode(factory: Factory, brand: string): Vehicle {
	return factory.create(brand)
}

