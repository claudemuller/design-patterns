// The creator abstract class declares the factory method that the concrete creators
// should override.
export abstract class VehicleFactory {
	public abstract create(name: string): Vehicle
}

// The concrete creator overrides the factory method to specify its own product type.
// In this case - Car.
export class CarFactory implements VehicleFactory {
	public create(brand: string): Vehicle {
		return new Car(brand)
	}
}

// The concrete creator overrides the factory method to specify its own product type.
// In this case - Boat.
export class BoatFactory implements VehicleFactory {
	public create(brand: string): Vehicle {
		return new Boat(brand)
	}
}

enum VehicleType {
	Car,
	Boat
}

// The product class declares all the operations that the concrete products should
// implement.
interface Vehicle {
 	brand: string
 	type?: VehicleType

	drive(): void
}

// The concrete product class provide specific implementations for their type.
class Car implements Vehicle {
	brand: string
 	type: VehicleType = VehicleType.Car

	public constructor(brand: string) {
		this.brand = brand
	}

	public drive(): void {
		console.log(`The ${this.brand} car says vroom vroom!`)
	}
}

// The concrete product class provide specific implementations for their type.
class Boat implements Vehicle {
	brand: string
	type: VehicleType = VehicleType.Boat

	public constructor(brand: string) {
		this.brand = brand
	}

	public drive(): void {
		console.log(`The ${this.brand} boat says blurble blurble!`)
	}
}
