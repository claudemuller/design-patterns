import {
	VehicleFactory,
	CarFactory,
	BoatFactory,
} from './Vehicle'

function clientCode(factory: VehicleFactory, brand: string) {
	const vehicle = factory.create(brand)
	vehicle.drive()
}

clientCode(new CarFactory(), 'VW')
clientCode(new BoatFactory(), 'Yamaha')
