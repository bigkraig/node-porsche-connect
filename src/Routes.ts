import type { Environment } from '.';
import type { Vehicle } from './Vehicle';

export class Routes {
  private environment: Environment;

  public constructor(environment: Environment) {
    this.environment = environment;
  }

  public get loginAuthUrl(): string {
    return `https://login.porsche.com/auth/api/v1/${this.environment}/public/login`;
  }

  public get apiAuthURL(): string {
    return 'https://login.porsche.com/as/authorization.oauth2';
  }

  public get piTokenURL(): string {
    return 'https://login.porsche.com/as/token.oauth2';
  }

  public get vehiclesURL(): string {
    return `https://api.porsche.com/core/api/v3/${this.environment}/vehicles`;
  }

  public vehicleSummaryURL(vehicle: Vehicle): string {
    return `https://api.porsche.com/service-vehicle/vehicle-summary/${vehicle.vin}`;
  }

  public vehiclePositionURL(vehicle: Vehicle): string {
    return `https://api.porsche.com/service-vehicle/car-finder/${vehicle.vin}/position`;
  }

  public vehicleCapabilitiesURL(vehicle: Vehicle): string {
    return `https://api.porsche.com/service-vehicle/vcs/capabilities/${vehicle.vin}`;
  }

  public vehicleEmobilityURL(vehicle: Vehicle): string {
    return `https://api.porsche.com/service-vehicle/${this.environment}/e-mobility/${vehicle.capabilities.carModel}/${vehicle.vin}?timezone=Europe/Dublin`;
  }
}
