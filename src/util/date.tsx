const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function getDate(date: string) {
    const joinedDate = new Date(date);

    return `${joinedDate.getDate()} ${months[joinedDate.getMonth()]} ${joinedDate.getFullYear()}`;
}