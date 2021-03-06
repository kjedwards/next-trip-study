export interface StopObject {
    stop_id: string | number;
    latitude?: number;
    longitude?: number;
    description: string;
}

export interface AlertObject {
    stop_closed: boolean;
    alert_text: string;
}

export interface DepartureObject {
    actual?: boolean;
    trip_id?: string;
    stop_id?: number;
    departure_text: string;
    departure_time?: number;
    description?: string;
    gate?: string;
    route_id?: string;
    route_short_name: string;
    direction_id?: number;
    direction_text: string;
    terminal?: string;
    schedule_relationship?: string;
}

export interface StopType {
    stops: StopObject[];
    alerts: AlertObject[];
    departures: DepartureObject[];
}
