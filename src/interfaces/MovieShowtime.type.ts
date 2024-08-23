export interface MovieShowtimeProps {
    movieTitle: string;
    cinemas: {
        name: string;
        address: string;
        showtimes: string[];
    }[];
}