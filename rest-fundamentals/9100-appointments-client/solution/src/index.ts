interface IAppointment {
    id: number;
    start: (string | Date);
    end: (string | Date);
    loc: string;
    desc: string;
}

$(async () => {
    const baseUrl = `http://52.236.149.254/api/calendar`;

    $('#query').on('click', async () => {
        const year = $('#year-filter').val();
        const month = $('#month-filter').val();


        let filter = '';
        if (year) {
            filter += `year=${year}`;
        }

        if (month) {
            filter += `${filter ? '&' : ''}month=${month}`;
        }

        let calendar: IAppointment[] = await $.get(baseUrl + (filter ? '?' + filter : ''));
        calendar.forEach(c => {
            c.start = new Date(Date.parse(<string>c.start));
            c.end = new Date(Date.parse(<string>c.end));
        });

        calendar = calendar.sort((a, b) => b.start > a.start ? -1 : 1);

        let currentYear: number;
        let currentMonth: number;
        let openTable = false;

        let content = '';
        for(const a of calendar) {
            const year = (<Date>a.start).getFullYear();
            if (year !== currentYear) {
                if (openTable) {
                    content += '</table>';
                    openTable = false;
                }

                content += `<h1>${year}</h1>`;
                currentYear = year;
            }

            const month = (<Date>a.start).getMonth() + 1;
            if (month !== currentMonth) {
                if (openTable) {
                    content += '</table>';
                    openTable = false;
                }

                content += `<h2>${month}</h2>
                <table><tr><th>Start</th><th>End</th><th>Location</th><th>Description</th></tr>`;
                currentMonth = month;
                openTable = true;
            }

            content += `
            <tr>
                <td>${(<Date>a.start).toLocaleString()}</td>
                <td>${(<Date>a.end).toLocaleString()}</td>
                <td>${a.loc}</td>
                <td>${a.desc}</td>
            </tr>`;
        }

        $('#content').html(content);
    });

    const years: string[] = await $.get(baseUrl + '/years');
    $('#year-filter').append(years.map(y => `<option value="${y}">${y}</option>`).join('\n'));
});