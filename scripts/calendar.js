document.addEventListener('DOMContentLoaded', function () {
    const monthName = document.getElementById('month-name');
    const calendarGrid = document.getElementById('calendar-grid');

    const daysInMonth = 30; // November has 30 days
    const startDay = new Date('2024-11-01').getDay(); // Get the day of the week for 1st November 2024 (0 = Sunday)

    const operatingHours = '10:00 AM - 8:00 PM'; // Example operating hours for all days

    // Set the correct month name
    monthName.textContent = 'November 2024';

    // Fill the calendar grid with days and operating hours
    // Fill empty spaces before the first day of the month
    for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement('div');
        calendarGrid.appendChild(emptyCell); // Empty spaces for previous month
    }

    // Generate the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');

        // Create the day number
        const dayNumber = document.createElement('span');
        dayNumber.classList.add('date');
        dayNumber.textContent = i;

        // Create the container for time and clock icon
        const timeContainer = document.createElement('div');
        timeContainer.classList.add('time-container');

        // Create the clock icon
        const clockIcon = document.createElement('img');
        clockIcon.src = 'images/ClockIcon.jpg';
        clockIcon.alt = 'Clock Icon';
        clockIcon.classList.add('clock-icon'); // Add class for styling

        // Create the hours text
        const hoursText = document.createElement('p');
        hoursText.textContent = operatingHours;
        hoursText.classList.add('hours-text'); // Add class for styling

        // Append clock icon and hours text into the time container
        timeContainer.appendChild(clockIcon);
        timeContainer.appendChild(hoursText);

        // Append day number and time container to the day cell
        dayCell.appendChild(dayNumber);
        dayCell.appendChild(timeContainer);

        // Append the day cell to the grid
        calendarGrid.appendChild(dayCell);
    }
});
