
//Event listener for updating the calendar
document.addEventListener('DOMContentLoaded', function () {
    const monthName = document.getElementById('month-name');
    const calendarGrid = document.getElementById('calendar-grid');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date(); // Start with the current date

    // Function to update the calendar for a given month and year
    function updateCalendar(month, year) {
        // Set the correct month name
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        monthName.textContent = `${months[month]} ${year}`;

        // Calculate the number of days in the month and the start day

        // Get last day of the month
        const daysInMonth = new Date(year, month + 1, 0).getDate(); 

        // Get the first day of the month (0 = Sunday)
        const startDay = new Date(year, month, 1).getDay(); 

        // Clear the current calendar grid
        calendarGrid.innerHTML = '';

        // Fill the empty spaces before the first day of the month
        for (let i = 0; i < startDay; i++) {
            const emptyCell = document.createElement('div');

            // Empty spaces for previous month
            calendarGrid.appendChild(emptyCell); 
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

            // Add class for styling
            clockIcon.classList.add('clock-icon'); 

            // Create the hours text
            const hoursText = document.createElement('p');

            // Operating hours
            hoursText.textContent = '10:00 AM - 8:00 PM'; 
            // Add class for styling
            hoursText.classList.add('hours-text'); 

            // Append clock icon and hours text into the time container
            timeContainer.appendChild(clockIcon);
            timeContainer.appendChild(hoursText);

            // Append day number and time container to the day cell
            dayCell.appendChild(dayNumber);
            dayCell.appendChild(timeContainer);

            // Append the day cell to the grid
            calendarGrid.appendChild(dayCell);
        }
    }

    // Event listeners for navigating to the previous and next months
    prevMonthButton.addEventListener('click', function () {
        // Go to previous month
        currentDate.setMonth(currentDate.getMonth() - 1); 
        updateCalendar(currentDate.getMonth(), currentDate.getFullYear());
    });

    nextMonthButton.addEventListener('click', function () {
        // Go to next month
        currentDate.setMonth(currentDate.getMonth() + 1); 
        updateCalendar(currentDate.getMonth(), currentDate.getFullYear());
    });

    // Initialize the calendar with the current month
    updateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});
