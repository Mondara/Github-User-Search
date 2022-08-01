import { useState, useEffect } from 'react';
import { getDate } from './date';
import User from '../interfaces/interfaces';

const URL_BASE = "https://api.github.com/users/";

async function manageError(response: Response) {
    if (!response.ok) {
        const responseError = {
            statusText: response.statusText,
            status: response.status
        }

        throw (responseError);
    }

    return response.json();

}

export const getUser = (username: string) => {
    const [data, setData] = useState<User>();
    const [error, setError] = useState({
        status: false,
        statusText: ""
    });

    useEffect(() => {
        fetch(`${URL_BASE}${username}`)
            .then(response => manageError(response))
            .then((result: User) => {
                setError({
                    status: false,
                    statusText: ""
                });

                setData({
                    ...result,
                    created_at: getDate(result.created_at),
                })
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            })

    }, [username]);

    return { data, error };
}