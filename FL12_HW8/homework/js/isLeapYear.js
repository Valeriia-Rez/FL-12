function isLeapYear(date) {
    const formatDate = new Date(date);
    const parsedDate = Date.parse(formatDate);
    if (parsedDate) {
        const year = formatDate.getFullYear();
        if (new Date(year, 1, 29).getDate() === 29) {
            return `${year} is a leap year`;
        } else {
            return `${year} is not a leap year`;
        }

    } else {
        return "Invalid Date";
    }
}

isLeapYear("2020-01-01 00:00:00");
isLeapYear("2020-01-01 00:00:00777");
isLeapYear(")");
isLeapYear("2200-01-15 13:00:00");
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);