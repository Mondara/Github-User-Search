import { useState, useEffect } from 'react';
import User from '../interfaces/interfaces';

const URL_BASE = "https://api.github.com/users/";

export const getUser = (username: string) => {
    const [data, setData] = useState<User>();

    useEffect(() => {
        fetch(`${URL_BASE}${username}`)
            .then(response => response.json())
            .then((result: User) => setData(result))

    }, [username]);

    return data;
}