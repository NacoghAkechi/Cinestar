import { Theater } from "../interfaces/Theater.type";

export const fetchOpenTheaters = async (): Promise<Theater[]> => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/theater?type=theater&status=open`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const filteredTheaters = data.filter((theater: any) => 
            theater.type === 'theater' && theater.status === 'open'
        ) as Theater[];

        return filteredTheaters;
    } catch (error) {
        console.error('Error fetching open theaters:', error);
        throw error;
    }
};
