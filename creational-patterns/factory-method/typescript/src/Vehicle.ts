// The creator abstract class declares the factory method that the concrete creators
// should override.
export abstract class Factory {
	public abstract create(name: string): Vehicle
}

// The concrete creator overrides the factory method to specify its own product type.
// In this case - Car.
export class CarFactory implements Factory {
	public create(brand: string): Vehicle {
		return new Car(brand)
	}
}

// The concrete creator overrides the factory method to specify its own product type.
// In this case - Boat.
export class BoatFactory implements Factory {
	public create(brand: string): Vehicle {
		return new Boat(brand)
	}
}

// A single concrete creator that returns a specific concrete product.
export class VehicleFactory {
	public build(type: VehicleType, brand: string): Vehicle {
		switch (type) {
		case VehicleType.Car:
			return new Car(brand)
		case VehicleType.Boat:
			return new Boat(brand)
		default:
			throw new Error("Undefined vehicle type :(")
		}
	}
}

export enum VehicleType {
	Car,
	Boat
}

// The product class declares all the operations that the concrete products should
// implement.
export interface Vehicle {
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
