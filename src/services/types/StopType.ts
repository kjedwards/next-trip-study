interface StopObject {
    stop_id: number;
    latitude: number;
    longitude: number;
    description: string
}

interface AlertObject {
    stop_closed: boolean;
    alert_text: string;
}

interface DepartureObject {
    actual: boolean;
    trip_id: string;
    stop_id: number;
    departure_text: string;
    departure_time: number;
    description: string;
    gate: string;
    route_id: string;
    route_short_name: string;
    direction_id: number;
    direction_test: string;
    terminal: string;
    schedule_relationship: string;
}

export interface StopType {
    stops: Array<StopObject>;
    alerts: Array<AlertObject>;
    departures: Array<DepartureObject>;
}